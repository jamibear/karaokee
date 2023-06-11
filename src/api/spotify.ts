import { SPOTIFY_TRACKS_ENDPOINT } from "../util/constants.ts";

export const getTrackList = async (token: string) => {
  try {
    const response = await fetch(SPOTIFY_TRACKS_ENDPOINT, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    return data;
  } catch (err) {
    console.log(token);
    console.log(err);
  }

  /*  if (!response.ok) {
                    return res;
                  }
                  */
};
