import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { config } from 'src/config';

export type Token = string;

const expTime = 1000 * 60 * 60 * 24;
const tokenField = 'token';


function createJWT(payload: jwt.JwtPayload, jwtOptions: jwt.SignOptions = { expiresIn: expTime / 1000 }): Token {
    return jwt.sign(payload, config.PRIVATE_KEY, jwtOptions);
}

function decodeJWT(token: Token): jwt.JwtPayload | null {
    let payload = null;
    jwt.verify(token, config.PRIVATE_KEY, (err, decoded) => {
        if (!err) payload = decoded;
    });
    return payload;
}



export function authOnly(req: Request, res: Response, next: NextFunction): void {
    const tokenPayload = decodeJWT(req.cookies[tokenField]);

    console.log(tokenPayload);

    if (tokenPayload) {
        // User authorized
        next();
    } else {
        // Invalid token
        res.sendStatus(401);
    }
}

export function addTokenToResponse(res: Response, payload: jwt.JwtPayload = {}): void {
    const expirationTime = expTime;
    const token = createJWT(payload, { expiresIn: expirationTime / 1000 });

    res.cookie(tokenField, token, {
        expires: new Date(Date.now() + expirationTime),
        httpOnly: true,
        secure: true,
        sameSite: 'none'
    });
}

export function removeTokenFromCookie(res: Response): void {
    res.cookie(tokenField, null, { maxAge: 0 });
}