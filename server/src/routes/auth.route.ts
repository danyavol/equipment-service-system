import { db } from "@models/index";
import { Router } from "express";
import { addTokenToResponse, removeTokenFromCookie } from "src/services/auth.service";
import { Crypto } from "src/services/ctypro.service";
import { handleError } from "src/services/error-handle.service";

const auth = Router();
export default auth;


auth.post('/get-token', async (req, res) => {
    try {
        const { password, username } = req.body;
        const user = await db.User.findOne({
            where: {
                username
            }
        });

        if (!user || !Crypto.compare(password, user.password)) {
            res.sendStatus(400);
        } else {
            addTokenToResponse(res);
            res.sendStatus(204);
        }
    } catch (e) {
        handleError(res, e);
    }
});

auth.get('/logout', (req, res) => {
    removeTokenFromCookie(res);
    res.sendStatus(204);
});

// auth.post('/encrypt-pass', (req, res) => {
//     const { password } = req.body;
//     res.send(Crypto.encrypt(password));
// });