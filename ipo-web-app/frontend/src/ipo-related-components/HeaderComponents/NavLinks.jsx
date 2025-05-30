import React from 'react';
import LiveNewsBadge from './LiveNewsBadge';

const NavLinks = () => {
  return (
    <div style={styles.navWrapper}>
      <a href="#" style={styles.link}>IPO</a>
      <a href="#" style={styles.link}>Community</a>
      <a href="#" style={styles.link}>
        Products <span style={styles.arrow}>▼</span>
      </a>
      <a href="#" style={styles.link}>
        Brokers <span style={styles.arrow}>▼</span>
      </a>
      <a href="#" style={styles.link}>
        Live News <LiveNewsBadge />
      </a>
    </div>
  );
};

const styles = {
  navWrapper: {
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
  },
  link: {
    fontSize: '14px',
    textDecoration: 'none',
    color: '#000',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
  arrow: {
    fontSize: '10px',
    position: 'relative',
    top: '2px', // pushes the arrow slightly downward
  },
};

export default NavLinks;
