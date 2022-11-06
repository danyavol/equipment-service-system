import { db } from "@models/index";

export async function insertUsers() {
    await db.User.bulkCreate([
        {
            username: "admin",
            password: "$2a$10$fydFj..vgcjniCdbnRJut.VAlvGLE3jyi.8X4bZBRN3Yz9419COYa" // admin
        },
    ]);
}
