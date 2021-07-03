import { Request, Response } from "express";

function cathErrors(err: Error, req: Request, res: Response){
    if(err instanceof Error){
        return res.status(401).json({
            err: err.message
        })
    }

    return res.status(500).end()
}

export { cathErrors }