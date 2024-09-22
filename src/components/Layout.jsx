import React from 'react';
import Cursor from './Cursor';

function Layout({ children }) {
  const { cursorJSX, handleProjectsMouseEnter, handleProjectsMouseLeave } = Cursor();

  return (
    <div className="App">
      {cursorJSX}
      {React.Children.map(children, child =>
        React.cloneElement(child, { handleProjectsMouseEnter, handleProjectsMouseLeave })
      )}
    </div>
  );
}

export default Layout;