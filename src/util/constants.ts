export const SPOTIFY_TRACKS_ENDPOINT =
    "https://api.spotify.com/v1/me/top/tracks?limit=50";
export const SPOTIFY_CLIENT_ID = import.meta.env.SPOTIFY_CLIENT_ID ?? "";
export const SPOTIFY_CLIENT_SECRET =
    import.meta.env.SPOTIFY_CLIENT_SECRET ?? "";

export const REDIRECT_URI = "https://karaokee.netlify.app/callback";
export const KARAOKEE_URL = "https://karaokee.netlify.app/";
