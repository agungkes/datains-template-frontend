import { useEffect } from 'react';
import Router from 'next/router';
import useSWR from 'swr';

interface UseUserProps {
  redirectTo?: boolean | string;
  redirectIfFound?: boolean;
}

interface User {
  isLoggedIn: boolean;
  id: number;
  email: string;
  name: string;
  token: string;
}
export default function useUser({
  redirectTo = false,
  redirectIfFound = false,
}: UseUserProps = {}) {
  const { data: user, mutate: mutateUser } = useSWR<User>('/api/user', {
    refreshInterval: 1,
  });

  useEffect(() => {
    if (!redirectTo || !user) return;

    if (
      // If redirectTo is set, redirect if the user was not found.
      (redirectTo && !redirectIfFound && !user?.isLoggedIn) ||
      // If redirectIfFound is also set, redirect if the user was found
      (redirectIfFound && user?.isLoggedIn)
    ) {
      if (typeof redirectTo === 'string') {
        Router.push(redirectTo);
      }
    }
  }, [user, redirectIfFound, redirectTo]);

  return { user, mutateUser };
}
