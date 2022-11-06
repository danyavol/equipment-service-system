import { db } from "@models/index";
import { Router } from "express";
import { handleError } from "src/services/error-handle.service";

const work = Router();
export default work;

work.get('', async (req, res) => {
    try {
        const work = await db.Work.findAll();
        res.send(work);
    } catch(e) {
        handleError(res, e);
    }
});

work.post('', async (req, res) => {
    try {
        const { title, cost } = req.body;

        await db.Work.create({
            title,
            cost
        }, {});

        res.sendStatus(204);
    } catch(e) {
        handleError(res, e);
    }
})
