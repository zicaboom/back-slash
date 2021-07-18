import { Request, Response, NextFunction } from "express";

function cathErrors(err: Error, _req: Request, res: Response, _: NextFunction) {
    if (err instanceof Error) {
        return res.status(401).json({
            error: err.message
        });
    }
    return res.status(500).json({
        status: "error",
        message: "Internal server error"
    });
}

export { cathErrors };