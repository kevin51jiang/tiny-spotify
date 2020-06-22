export const authEndpoint = 'https://accounts.spotify.com/authorize';

export const clientId = "YOUR_SPOTIFY_CLIENT_ID_HERE";
export const redirectUri = "http://localhost:3000/redirect";
// export const redirectUri = "http://kevinjiang.ca/Spotify-Web-Player"
export const scopes = [
    "user-top-read",
    "user-read-currently-playing",
    "user-modify-playback-state",
    'playlist-read-private',
];


export const barUpdateincrement = 500; // time between progressbar updates (ms)
export const infoUpdateIncrement = 5000; // time between every poll to Spotify server (ms)