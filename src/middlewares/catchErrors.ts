import { Request, Response, NextFunction } from "express";

function cathErrors(err: Error,req:Request, res: Response, next:NextFunction){
    if(err instanceof Error){
        return res.status(401).json({
            erro: err.message  
        })
    }
    return res.status(500).json({
        status: "error",
        message: "Internal server error"
    })
}

export { cathErrors }