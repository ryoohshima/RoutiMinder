import React, { useEffect, useState } from 'react';
import checkLogin from '@/lib/checkLogin';
import { useRouter } from 'next/router';

const withAuth = (Component) => {
  return function WrappedComponent(props) {
    const router = useRouter();
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
      async function check() {
        const loggedIn = await checkLogin();
        setIsLogin(loggedIn);
        if (!loggedIn) {
          router.push('/login');
        }
      }
      check();
    }, []);

    if (isLogin === null) {
      return null; // またはローディングスピナーや他のローディングインジケーターを表示
    }

    return <Component {...props} />;
  }
}

export default withAuth;
