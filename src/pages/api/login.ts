import fetcher from '@utils/fetcher';
import withSession from '@utils/session';
import { NextApiRequest, NextApiResponse } from 'next';

export interface LoginResponse {
  success: {
    id: number;
    name: string;
    email: string;
    token: string;
  };
}
const login = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = await req.body;
  const url = `${process.env.NEXT_PUBLIC_API_USER_URL}/login`;

  try {
    const { success } = await fetcher<LoginResponse>(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const user = { isLoggedIn: true, ...success };
    req.session.set('user', user);
    await req.session.save();
    res.json(user);
  } catch (error) {
    const { response: fetchResponse } = error;
    res.status(fetchResponse?.status || 500).json(error.data);
  }
};

export default withSession(login);
