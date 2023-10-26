import express from 'express';
import {Application} from 'express';

class App {
    public app: Application;
    public port: number;
    constructor(appInit: {
        port: number;
        middleWares: any;
        controllers: any;
    }) {
        this.app = express();
        this.port = appInit.port;
        this.routes(appInit.controllers)
        this.middlewares(appInit.middleWares)
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App started on port ${this.port}`)
        })
    }
    private middlewares(middlewares:any){
        middlewares.forEach(middleware=>{
            this.app.use(middleware)
        })
    }
    private routes(controllers:any) {
        controllers.forEach(controller => {
            this.app.use(controller.path, controller.router)
        })
    }
}

export default App;