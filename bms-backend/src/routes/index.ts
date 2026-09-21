import express from 'express';
import userRouter from "../modules/user/user.route"
import movieRouter from "../modules/movie/movie.route";
import theaterRouter from '../modules/theater/theater.routes';
import showRouter from '../modules/show/show.routes';
import authRouter from '../modules/auth/auth.route'
const router = express.Router();
router.use("/movies",movieRouter)
router.use("/theaters",theaterRouter);
router.use("/shows",showRouter)
router.use("/users",userRouter)
router.use("/auth",authRouter);

export default router;