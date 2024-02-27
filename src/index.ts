import express, { Request, Response } from "express"
import { sendEmail } from "./email";
import { readFileSync } from "fs";

const app = express()
const port = 3000

// const template = readFileSync("./email.html", "utf8");
const link: string = "https://www.facebook.com?token=fakskfsldkfjlskjflksdjflkjdsljfl"
const email: string = "SENDER EMAIL"
const name: string = "NAME"

async function main() {
    try {
        await sendEmail(email, "Reset Password link", `
        <div>
            <h4> Password Reset Link </h4>
            <p>Hi, ${name}</p>
            <p>Your password reset link: ${link}</p>
            <p>Thank you</p>
            <p>Company Name</p>
        </div>
        `);

        console.log("Email Send")
    }
    catch (err) {
        console.log(err)
    }
}

app.get('/', (req: Request, res: Response) => {
    main();
    res.send('Running!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})