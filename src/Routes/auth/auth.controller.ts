import { Request, Response, NextFunction } from 'express';
import User from '../../Database/User';

export const signIn = async (request: Request, response: Response, next: NextFunction) => {
  console.log('signIn');
};

export const createUser = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const { email } = request.body;
    const user = new User({
      email
    });
    const createdUser = await user.save();
    response.status(200).send({ user: createdUser });
  } catch (error) {
    response.status(400).send({ error });
  }
};
