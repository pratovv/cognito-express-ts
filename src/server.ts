import App from './app';
import HomeController from './controllers/home.controller';
import bodyParser from "body-parser";
const app = new App({
    port: 3000,
    controllers: [new HomeController()],
    middleWares: [bodyParser.json(), bodyParser.urlencoded({ extended: true })],
})
app.listen();