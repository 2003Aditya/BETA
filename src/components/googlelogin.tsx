

import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';

const googlelogin = () => {
  const login = useGoogleLogin({
    onSuccess: tokenResponse => console.log(tokenResponse),
    onError: () => console.log('Login Failed'),
  });

  return (
    <h2
      style={{
        fontSize: "15px",
        cursor: "pointer",
        color: "blue",
        textDecoration: "underline"
      }}
      onClick={() => login()}
    >
      login
    </h2>
  );
};

export default googlelogin;
