import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

const MainCursor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
  transition: all 0.1s ease;
  opacity: ${props => props.isVisible ? 1 : 0};
  &::after {
    content: '';
    width: 40px;
    height: 40px;
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

const Cursor = () => {
  const mainCursorRef = useRef(null);
  const projectsCursorRef = useRef(null);
  const [isMainCursorVisible, setIsMainCursorVisible] = useState(true);
  const [isProjectsCursorVisible, setIsProjectsCursorVisible] = useState(false);

  useEffect(() => {
    const mainCursor = mainCursorRef.current;
    const mainCursorAfter = mainCursor.querySelector('::after');
    const projectsCursor = projectsCursorRef.current;
    const projectsCursorAfter = projectsCursor.querySelector('::after');

    const onMouseMove = (e) => {
      gsap.to(mainCursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out',
      });

      gsap.to(mainCursorAfter, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: 'power2.out',
      });

      gsap.to(projectsCursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out'
      });

      gsap.to(projectsCursorAfter, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    const onMouseDown = () => {
      gsap.to(mainCursor, { scale: 0.8, duration: 0.2 });
      gsap.to(mainCursorAfter, { scale: 1.2, opacity: 0.7, duration: 0.2 });
      gsap.to(projectsCursor, { scale: 0.8, duration: 0.2 });
      gsap.to(projectsCursorAfter, { scale: 1.2, opacity: 0.7, duration: 0.2 });
    };

    const onMouseUp = () => {
      gsap.to(mainCursor, { scale: 1, duration: 0.2 });
      gsap.to(mainCursorAfter, { scale: 1, opacity: 0.5, duration: 0.2 });
      gsap.to(projectsCursor, { scale: 1, duration: 0.2 });
      gsap.to(projectsCursorAfter, { scale: 1, opacity: 0.8, duration: 0.2 });
    };

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

  return {
    cursorJSX: (
      <>
        <MainCursor ref={mainCursorRef} isVisible={isMainCursorVisible} />
        <ProjectsCursor ref={projectsCursorRef} isVisible={isProjectsCursorVisible} />
      </>
    ),
    handleProjectsMouseEnter,
    handleProjectsMouseLeave
  };
};

export default Cursor;