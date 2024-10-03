import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

const MainCursor = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
  transition: all 0.1s ease;
  opacity: ${props => props.isVisible ? 1 : 0};
  &::after {
    content: '';
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 2px solid white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.5;
    transition: all 0.2s ease;
  }
`;

const ProjectsCursor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  opacity: 0;
  mix-blend-mode: difference;
  transition: opacity 0.3s ease;
  &::after {
    content: 'View Projects';
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 12px;
    font-weight: bold;
    color: #1A1A1A;
    background-color: rgba(255, 255, 255, 0.8);
    transition: all 0.3s ease;
    text-align: center;
  }
`;

// Add this new styled component for the About cursor
const AboutCursor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  opacity: 0;
  mix-blend-mode: difference;
  transition: opacity 0.3s ease;
  &::after {
    content: 'More About Me';
    text-align: center;
    padding: 10px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 12px;
    font-weight: bold;
    color: #1A1A1A;
    background-color: rgba(255, 255, 255, 0.8);
    transition: all 0.3s ease;
    text-align: center;
  }
`;

const Cursor = () => {
  const mainCursorRef = useRef(null);
  const projectsCursorRef = useRef(null);
  const aboutCursorRef = useRef(null);
  const [isMainCursorVisible, setIsMainCursorVisible] = useState(true);
  const [isProjectsCursorVisible, setIsProjectsCursorVisible] = useState(false);
  const [isAboutCursorVisible, setIsAboutCursorVisible] = useState(false);

  useEffect(() => {
    const mainCursor = mainCursorRef.current;
    const mainCursorAfter = mainCursor.querySelector('::after');
    const projectsCursor = projectsCursorRef.current;
    const projectsCursorAfter = projectsCursor.querySelector('::after');
    const aboutCursor = aboutCursorRef.current;
    const aboutCursorAfter = aboutCursor.querySelector('::after');

    let mouseX = 0;
    let mouseY = 0;
    let projectsCursorX = 0;
    let projectsCursorY = 0;
    let aboutCursorX = 0;
    let aboutCursorY = 0;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      gsap.to(mainCursor, {
        x: mouseX,
        y: mouseY,
        duration: 0.1,
        ease: 'power2.out',
      });

      gsap.to(mainCursorAfter, {
        x: mouseX,
        y: mouseY,
        duration: 0.3,
        ease: 'power2.out',
      });

      // Update positions for projectsCursor and aboutCursor
      gsap.to(projectsCursor, {
        x: mouseX,
        y: mouseY,
        duration: 0.3,
        ease: 'power2.out',
      });

      gsap.to(aboutCursor, {
        x: mouseX,
        y: mouseY,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const onMouseDown = () => {
      gsap.to(mainCursor, { scale: 0.8, duration: 0.2 });
      gsap.to(mainCursorAfter, { scale: 1.2, opacity: 0.7, duration: 0.2 });
      gsap.to(projectsCursor, { scale: 0.8, duration: 0.2 });
      gsap.to(projectsCursorAfter, { scale: 1.2, opacity: 0.7, duration: 0.2 });
      gsap.to(aboutCursor, { scale: 0.8, duration: 0.2 });
      gsap.to(aboutCursorAfter, { scale: 1.2, opacity: 0.7, duration: 0.2 });
    };

    const onMouseUp = () => {
      gsap.to(mainCursor, { scale: 1, duration: 0.2 });
      gsap.to(mainCursorAfter, { scale: 1, opacity: 0.5, duration: 0.2 });
      gsap.to(projectsCursor, { scale: 1, duration: 0.2 });
      gsap.to(projectsCursorAfter, { scale: 1, opacity: 0.8, duration: 0.2 });
      gsap.to(aboutCursor, { scale: 1, duration: 0.2 });
      gsap.to(aboutCursorAfter, { scale: 1, opacity: 0.8, duration: 0.2 });
    };

    const followMainCursor = () => {
      const updateCursor = (cursorX, cursorY, cursor, cursorAfter) => {
        const dx = mouseX - cursorX;
        const dy = mouseY - cursorY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 50;
        const minDistance = 50;

        if (distance > minDistance) {
          const angle = Math.atan2(dy, dx);
          const targetX = mouseX - Math.cos(angle) * maxDistance;
          const targetY = mouseY - Math.sin(angle) * maxDistance;

          const easingFactor = 0.2;

          cursorX += (targetX - cursorX) * easingFactor;
          cursorY += (targetY - cursorY) * easingFactor;
        }

        gsap.set(cursor, { x: cursorX, y: cursorY });
        gsap.set(cursorAfter, { x: cursorX, y: cursorY });

        return [cursorX, cursorY];
      };

      [projectsCursorX, projectsCursorY] = updateCursor(projectsCursorX, projectsCursorY, projectsCursor, projectsCursorAfter);
      [aboutCursorX, aboutCursorY] = updateCursor(aboutCursorX, aboutCursorY, aboutCursor, aboutCursorAfter);

      requestAnimationFrame(followMainCursor);
    };

    followMainCursor();

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  const handleProjectsMouseEnter = () => {
    setIsMainCursorVisible(false);
    setIsProjectsCursorVisible(true);
    gsap.to(projectsCursorRef.current, { 
      opacity: 1,
      duration: 0.3,
      ease: 'power2.inOut'
    });
    gsap.to(projectsCursorRef.current.querySelector('::after'), {
      opacity: 0.8,
      scale: 1,
      duration: 0.3,
      ease: 'power2.inOut'
    });
  };

  const handleProjectsMouseLeave = () => {
    setIsMainCursorVisible(true);
    setIsProjectsCursorVisible(false);
    gsap.to(projectsCursorRef.current, { 
      opacity: 0,
      duration: 0.3,
      ease: 'power2.inOut'
    });
    gsap.to(projectsCursorRef.current.querySelector('::after'), {
      opacity: 0,
      scale: 0.8,
      duration: 0.3,
      ease: 'power2.inOut'
    });
  };

  const handleAboutMouseEnter = () => {
    setIsMainCursorVisible(false);
    setIsAboutCursorVisible(true);
    gsap.to(aboutCursorRef.current, { 
      opacity: 1,
      duration: 0.3,
      ease: 'power2.inOut'
    });
    gsap.to(aboutCursorRef.current.querySelector('::after'), {
      opacity: 0.8,
      scale: 1,
      duration: 0.3,
      ease: 'power2.inOut'
    });
  };

  const handleAboutMouseLeave = () => {
    setIsMainCursorVisible(true);
    setIsAboutCursorVisible(false);
    gsap.to(aboutCursorRef.current, { 
      opacity: 0,
      duration: 0.3,
      ease: 'power2.inOut'
    });
    gsap.to(aboutCursorRef.current.querySelector('::after'), {
      opacity: 0,
      scale: 0.8,
      duration: 0.3,
      ease: 'power2.inOut'
    });
  };

  // Add these new functions
  const handleInputFocus = () => {
    gsap.to(mainCursor, { scale: 0.5, opacity: 0.5, duration: 0.3 });
    gsap.to(mainCursorAfter, { scale: 0.5, opacity: 0.3, duration: 0.3 });
  };

  const handleInputBlur = () => {
    gsap.to(mainCursor, { scale: 1, opacity: 1, duration: 0.3 });
    gsap.to(mainCursorAfter, { scale: 1, opacity: 0.5, duration: 0.3 });
  };

  return {
    cursorJSX: (
      <>
        <MainCursor ref={mainCursorRef} isVisible={isMainCursorVisible} />
        <ProjectsCursor ref={projectsCursorRef} isVisible={isProjectsCursorVisible} />
        <AboutCursor ref={aboutCursorRef} isVisible={isAboutCursorVisible} />
      </>
    ),
    handleProjectsMouseEnter,
    handleProjectsMouseLeave,
    handleAboutMouseEnter,
    handleAboutMouseLeave,
    handleInputFocus,
    handleInputBlur
  };
};

export default Cursor;