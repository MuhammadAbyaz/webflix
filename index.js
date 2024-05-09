import app from "./app.js"
import dotenv from "dotenv"
dotenv.config()
const main= ()=>{
    const port = process.env.PORT;
    app.start(port);
}

main()