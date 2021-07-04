import { Request, Response } from "express";

function cathErrors(err: Error, req: Request, res: Response){
    if(err instanceof Error){
        return res.status(400).json({
            erro: err.message  
        })
    }
    return res.status(500).json({
        status: "error",
        message: "Internal server error"
    })
}

export { cathErrors }