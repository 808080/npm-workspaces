import { Router } from 'express';

export const testFactory = () =>
  Router()
    .get('/test', (req, res, next) => {
      try {
        return res.status(200).json({ success: true, message: 'Server response' });
      } catch (error) {
        if (error instanceof Error) error = error.message;
        return res.status(404).json({ success: false, error });
      }
    });