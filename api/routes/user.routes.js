import express from 'express';
import { test } from '../controllers/user.controller.js';

const routes = express.Router(); // Corrected

routes.get("/test",test);

export default routes;
