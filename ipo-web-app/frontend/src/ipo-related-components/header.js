import React from 'react';
import Logo from './HeaderComponents/Logo';
import NavLinks from './HeaderComponents/NavLinks';
import SignInSignUp from './HeaderComponents/SignInSignUp';


const Header = () => {
  return (
    <header style={styles.container}>
      <div style={styles.leftSection}>
        <Logo />
        <span style={styles.brandText}>BLUESTOCK</span>
      </div>
      <nav style={styles.navSection}>
        <NavLinks />
      </nav>
      <div style={styles.rightSection}>
        <SignInSignUp />
      </div>
    </header>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px 24px',
    backgroundColor: '#fff',
    borderBottom: '1px solid #ddd',
    position: 'relative',
    zIndex: 1000,
    flexWrap: 'wrap'
  },
  leftSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  brandText: {
    fontWeight: 'bold',
    fontSize: '20px',
    color: '#000',
  },
  navSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    flexGrow: 1,
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  rightSection: {
    display: 'flex',
    gap: '10px',
  },
};

export default Header;
