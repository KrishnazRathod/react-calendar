import React from 'react';
import './MobileMenu.css';

const MobileMenu = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && <div className="mobile-menu-overlay" onClick={onClose} />}
      <div className={`mobile-menu ${isOpen ? 'mobile-menu-open' : ''}`}>
        {children}
      </div>
    </>
  );
};

export default MobileMenu;

