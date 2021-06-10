import express from 'express';
const router = express.Router();
import * as p from '../controllers/post.js';

router.get('/', p.getPosts)
router.post('/', p.createPost)

export default router;
