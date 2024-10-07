import React from 'react';
import Cursor from './Cursor';

function Layout({ isVisible, children, ...props }) { // Added isVisible and props
  const { cursorJSX, handleProjectsMouseEnter, handleProjectsMouseLeave } = Cursor();

  return (
    <div className="App" {...props}> {/* Spread props to filter out unknown props */}
      {cursorJSX}
      {React.Children.map(children, child =>
        React.cloneElement(child, { handleProjectsMouseEnter, handleProjectsMouseLeave })
      )}
    </div>
  );
}

export default Layout;