import React, { useEffect } from 'react';

function Spinner() {
  useEffect(() => {
    // Add keyframes for the spin animation to your CSS
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `, styleSheet.cssRules.length);
  }, []);

  const spinnerStyle = {
    border: '16px solid #f3f3f3', // Light grey background
    borderTop: '16px solid #29f0fc', // Blue color
    borderRadius: '50%',
    width: '120px',
    height: '120px',
    animation: 'spin 2s linear infinite'
  };

  return <div style={spinnerStyle}></div>;
}

export default Spinner;
