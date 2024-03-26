import ky from 'ky';
import { clientId, clientSecret } from './secrets.js'

const tidalAuthURL = "https://auth.tidal.com/v1/oauth2/token"

const encoded = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
const formData = new URLSearchParams();
formData.set("grant_type", "client_credentials");
const json = await ky.post(tidalAuthURL, {
  body: formData,
  headers: {Authorization: `Basic ${encoded}`}
}).json();

console.log(json);
console.log(json['access_token']);
