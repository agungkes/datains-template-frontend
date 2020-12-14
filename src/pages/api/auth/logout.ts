import fetcher from '@utils/fetcher';
import withSession from '@utils/session';
import { NextApiRequest, NextApiResponse } from 'next';

const logout = async (req: NextApiRequest, res: NextApiResponse) => {
  const url = `${process.env.NEXT_PUBLIC_API_USER_URL}/logout`;

  try {
    const { token } = await req.session.get('user');
    await fetcher(url, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
    });
    req.session.destroy();
    res.json({ isLoggedIn: false });
  } catch (error) {
    const { response: fetchResponse } = error;
    res.status(fetchResponse?.status || 500).json(error.data);
  }
};

export default withSession(logout);
