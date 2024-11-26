
import React from 'react';

const LoginPage = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f0f0f0'
    }}>
      <h2 style={{
        marginBottom: '20px',
        fontSize: '24px',
        color: '#333'
      }}>Login</h2>
      <form style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '300px',
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{
          width: '100%',
          marginBottom: '15px'
        }}>
          <label htmlFor="username" style={{
            marginBottom: '5px',
            fontSize: '14px',
            color: '#333',
            display: 'block'
          }}>Username</label>
          <input type="text" id="username" name="username" style={{
            width: '100%',
            padding: '10px',
            fontSize: '14px',
            borderRadius: '4px',
            border: '1px solid #ccc'
          }} />
        </div>
        <div style={{
          width: '100%',
          marginBottom: '15px'
        }}>
          <label htmlFor="password" style={{
            marginBottom: '5px',
            fontSize: '14px',
            color: '#333',
            display: 'block'
          }}>Password</label>
          <input type="password" id="password" name="password" style={{
            width: '100%',
            padding: '10px',
            fontSize: '14px',
            borderRadius: '4px',
            border: '1px solid #ccc'
          }} />
        </div>
        <button type="submit" style={{
          width: '100%',
          padding: '10px',
          fontSize: '14px',
          color: '#fff',
          backgroundColor: '#007bff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>Login</button>
        <button type="button" style={{
          width: '100%',
          padding: '10px',
          fontSize: '14px',
          color: '#fff',
          backgroundColor: '#db4437',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginTop: '10px'
        }}>Login with Google</button>
      </form>
    </div>
  );
};

export default LoginPage;
