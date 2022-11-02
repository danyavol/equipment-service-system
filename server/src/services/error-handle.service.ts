import { Response } from "express";
import { ValidationError } from "sequelize";

export function handleError(res: Response, error: unknown): void {
    if (error instanceof ValidationError) {
        res.status(400).send(error);
    } else {
        console.error('Unknown error', error);
        res.status(500).send(error);
    }
}