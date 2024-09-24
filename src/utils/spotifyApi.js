// src/utils/spotifyApi.js
const API_BASE_URL = 'https://api.spotify.com/v1';

export const fetchSpotifyData = async (endpoint, token) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
};