import { getTrackList } from "../api/spotify.ts";
import type { APIContext, APIRoute } from "astro";

export const get: APIRoute = async ({ params }: APIContext) => {
  const token = params.token;
  const tracks = await getTrackList(token);

  if (!tracks) {
    return new Response(null, {
      status: 404,
      statusText: "Not found",
    });
  }

  return new Response(JSON.stringify(tracks), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
