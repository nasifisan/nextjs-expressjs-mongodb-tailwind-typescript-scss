import express, { Request, Response } from 'express';
import { details, register } from '../utility/handleRegistration';

const userRouter = express.Router();

userRouter.post(
  '/registration',
  async (req: Request, res: Response, next) => {
    try {
      const response = await register(req.body);

      return res.status(200).send({
        success: true,
        message: response,
      });
    } catch (e) {
      return res.status(500).send({
        success: false,
        error: 'Internal server error',
      });
    }
  }
);

userRouter.post(
  '/details',
  async (req: Request, res: Response, next) => {
    try {
      const response = await details(req.body);

      return res.status(200).send({
        success: true,
        message: response,
      });
    } catch (e) {
      return res.status(500).send({
        success: false,
        error: 'Internal server error',
      });
    }
  }
);

export default userRouter;
