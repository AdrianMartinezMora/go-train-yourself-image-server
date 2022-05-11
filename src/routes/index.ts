import { Router } from "express";
const router = Router()
import multer from "../libs/multer";

import { createPhoto } from "../controller/photo.controller";

router.route('/photos')
    .post(multer.single('image'),createPhoto)


export default router;