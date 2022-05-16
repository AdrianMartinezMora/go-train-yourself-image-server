import { Router } from "express";
const router = Router()
import prodMulter from "../libs/prodMulter";
import catMulter from "../libs/catMulter";
import usrMulter from "../libs/usrMulter";

import { createProdPhoto, createCatPhoto, createUserPhoto  } from "../controller/photo.controller";

router.route('/prod')
    .post(prodMulter.single('image'), createProdPhoto)

router.route('/cat')
    .post(catMulter.single('image'), createCatPhoto)

router.route('/usr')
    .post(usrMulter.single('image'), createUserPhoto)


export default router;