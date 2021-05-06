import { Request, Response, NextFunction } from 'express';
import admin from 'firebase-admin';
// import serviceAccount from "./firebase-sdk-service.json";

admin.initializeApp({
  credential: admin.credential.cert('../../serviceAccount.json')
});

const verifyToken = async (request: Request, response: Response, next: NextFunction) => {
  const token = request.headers['Authorization'] as string;

  if (!token) {
    return response.status(401).send('Access denied. No JWT provided.');
  }
  try {
    const user = await admin.auth().verifyIdToken(token);
    request['user'] = user;
    next();
  } catch (ex) {
    response.status(400).send('Invalid JWT.');
  }
};

export default verifyToken;
