import type { NextApiRequest, NextApiResponse } from "next";

import Cors from 'cors';

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'HEAD'],
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req: any, res: any, fn: (arg0: any, arg1: any, arg2: (result: any) => void) => void) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: unknown) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await runMiddleware(req, res, cors)
  const url = `https://api.unsplash.com/photos/random?client_id=${process.env.unsplashAPIKEY}&count=20&collections=327760`;
  const response = await fetch(url);
  const result = await response.json();
  return res.status(200).json({ result });
}