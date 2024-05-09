import http from "node:http";
import express from "express"
import morgan from "morgan";

class Application {
    #app;
    constructor() {
        this.#app = express();
        this.server = http.createServer(this.#app);
        this.#initializeMiddleWares(this.#app);
        this.#initializeRoutes(this.#app);
    }

    start(port) {
        this.server.listen(port, () => {
            console.log(`Server is listening on: http://localhost:${port}`);
        })
    }

    #initializeMiddleWares(app) {
        app.use(morgan("dev"));
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));
    }

    #initializeRoutes(app) {
        app.get("/hello", (_, response) => {
            return response.status(200).send("hello world");
        })
    }
}
export default new Application()
