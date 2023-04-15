import express, {Request, Response, NextFunction} from "express";
import bodyParser from "body-parser";
import cookieSession from 'cookie-session';
import router from './router'

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use((req: Request, res: Response, next: NextFunction) => {
    req.systemTips = '系统提示：';
    next();
})
app.use(cookieSession({
    name: 'session',
    keys: [
        // secret keys
        'hmy666'
    ],
    maxAge: 24*60*60*1000
}))
app.use(router);

app.listen(8080, () => {
    console.log("服务器启动！！")
})