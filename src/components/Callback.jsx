// src/components/Callback.jsx
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getTokenFromUrl } from '../utils/spotifyAuth';

const Callback = () => {
  const history = useHistory();

  useEffect(() => {
    const token = getTokenFromUrl();
    if (token) {
      localStorage.setItem('spotifyToken', token);
      history.push('/about');
    } else {
      history.push('/');
    }
  }, [history]);

  return <div>Loading...</div>;
};

export default Callback;