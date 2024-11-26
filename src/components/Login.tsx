
// Login.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <h2
      onClick={handleLoginClick}
      style={{
        display: 'flex',
        textAlign: 'end',
        fontSize: '15px',
        cursor: 'pointer'
      }}
    >
      login
    </h2>
  );
};

export default Login;
