// src/utils/spotifyAuth.js
const CLIENT_ID = '31c71199ee0a48488d155e17b71280ab';
const REDIRECT_URI = 'http://localhost:3000/callback'; // Change this to your redirect URI

export const getAuthUrl = () => {
  const scopes = [
    'user-read-private',
    'user-read-email',
    'user-top-read',
    'user-read-currently-playing',
    'user-read-playback-state',
  ];
  return `https://accounts.spotify.com/authorize?response_type=token&client_id=${CLIENT_ID}&scope=${scopes.join('%20')}&redirect_uri=${REDIRECT_URI}`;
};

export const getTokenFromUrl = () => {
  const hash = window.location.hash.substring(1);
  const params = new URLSearchParams(hash);
  return params.get('access_token');
};