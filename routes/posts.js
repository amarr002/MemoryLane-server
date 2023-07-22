import express from "express";
import { getPosts, CreatePost ,updatePost,deletePost,likePost,dislikePost} from "../controllers/posts.js";

const router = express.Router();

//localhost:5000/posts
router.get("/", getPosts);

router.post("/", CreatePost);
router.patch('/:id',updatePost);
router.delete('/:id',deletePost);
router.patch('/:id/likePost',likePost);
router.patch('/:id/dislikePost',dislikePost);

export default router;
