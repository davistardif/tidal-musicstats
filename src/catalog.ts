import ky from 'ky';
import * as auth from './auth.js';

const baseURL = "https://openapi.tidal.com"

export async function getTrack(trackId: string): Promise<Object> {
  return await ky.get(`${baseURL}/tracks/${trackId}`, {
    headers: {
      Authorization: `Bearer ${await auth.getToken()}`,
      "Content-Type": "application/vnd.tidal.v1+json"
    },
    searchParams: {
      countryCode: "US"
    }
  }).json();
}
