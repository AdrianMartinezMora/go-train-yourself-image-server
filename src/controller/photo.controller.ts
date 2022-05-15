import {Request, Response} from 'express'

export function createProdPhoto (req:Request, res:Response):Response{
    return res.json({
        message: 'Photo successfully saved'
    })
}

export function createUserPhoto (req:Request, res:Response):Response{
    return res.json({
        message: 'Photo successfully saved'
    })
}

export function createCatPhoto (req:Request, res:Response):Response{
    return res.json({
        message: 'Photo successfully saved'
    })
}