// eslint-disable-next-line no-unused-vars
import React from 'react';
import isMobile from './Utils/isMobile';
import MobileApp from './MobileApp.jsx';
import DesktopMessage from './DesktopMessage.jsx';

const App = () => {
  return (
    <div className="App">
      {isMobile() ? <MobileApp /> : <DesktopMessage />}
    </div>
  );
};

export default App;
