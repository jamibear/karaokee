import { SPOTIFY_TRACKS_ENDPOINT } from "../util/constants.ts";
export const getTrackList = async (token: string) => {
  const response = await fetch(SPOTIFY_TRACKS_ENDPOINT, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    return null;
  }

  const data = await response.json();
  return data;
};
