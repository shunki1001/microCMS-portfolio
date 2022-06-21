import { createClient } from "microcms-js-sdk";

const apiKeyfromEnv: string = String(process.env.API_KEY);

export const client = createClient({
  serviceDomain: "tajimura",
  apiKey: apiKeyfromEnv,
});
