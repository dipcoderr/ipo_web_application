import React from 'react';

const SignInSignUp = () => {
  return (
    <>
      <button style={styles.signin}>Sign In</button>
      <button style={styles.signup}>Sign Up Now</button>
    </>
  );
};

const styles = {
  signin: {
    padding: '6px 12px',
    border: '1px solid #ccc',
    backgroundColor: 'white',
    cursor: 'pointer',
    borderRadius: '4px'
  },
  signup: {
    padding: '6px 12px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default SignInSignUp;
