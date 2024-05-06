import React, { useState, useEffect } from 'react';
import Front from './Front';
import Info from './Info';

function Dashboard() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <Front />
      <br />
      {isMobile && <Info />}
    </div>
  );
}

export default Dashboard;
