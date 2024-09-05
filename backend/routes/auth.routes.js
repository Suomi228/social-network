import express from 'express';
import {signUp} from '../controllers/auth.controller.js';
import {login} from '../controllers/auth.controller.js';
import {logout} from '../controllers/auth.controller.js';
const router = express.Router();
router.get('/signup', signUp);

router.get('/login', login);

router.get('/logout', logout);

export default router;