import express, {Request, Response} from "express";
import bodyParser from "body-parser";
class HomeController {
    public path = '/'
    public router = express.Router();

    constructor() {
        this.initRoutes();
    }

    private initRoutes() {
        this.router.get('/', this.home)
    }

    home(req: Request, res: Response) {
        res.send("Success")
    }

}

export default HomeController;