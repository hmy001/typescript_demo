import fs from 'fs';
import path from 'path';
import { Router, Request, Response, NextFunction} from "express";
import request from "superagent";
// import bodyParser from "body-parser";
import _549tvAnalyzer from "./analyzer/549tvAnalyzer";
import Spider from './spider';
import { getResponse } from './api/apiFormater';

interface requestBody extends Request {
    body: {
        [key: string]: string | undefined
    }
}
const checkLogin = (req: requestBody, res: Response, next: NextFunction) => { // 登录校验中间件
    const isLogin = req.session ? req.session.login : undefined;
    if (isLogin) {
        next();
    } else {
        res.json(getResponse('请先登录！'));
    }
}
const router = Router();
// router.use(bodyParser.urlencoded({
//     extended: false
//   }))
router.get('/', (req: Request, res: Response) => {
    const isLogin = req.session ? req.session.login : undefined;
    if (isLogin) {
        res.send(`
        <html>
            <body>
                <a href='/getData'>爬取数据</a>
                <a href='/showData'>显示数据</a>
                <a href='/logout'>退出</a>
            </body>
        </html>
    `)
    } else {
        res.send(`
    <html>
        <body>
            <form method="post" action="/login">
                <input type="password" name="password" />
                <button type="submit">提交</button>
            </form>
        </body>
    </html>
    `)
    }
})
let i = 0
router.get('/getData', checkLogin, (req: requestBody, res: Response) => {
    new Spider(_549tvAnalyzer.getInstance()).initSpiderProcess();
})
router.get('/showData', checkLogin, (req: requestBody, res: Response) => {
    try {
        const filePath = path.resolve(__dirname, "../data/data.json")
        const result = fs.readFileSync(filePath, 'utf-8');
        res.send(getResponse(result));
    } catch {
        res.json(getResponse('暂无数据'));
    }
})
router.post('/login', (req: requestBody, res: Response) => {
    const { password } = req.body;
    const isLogin = req.session ? req.session.login : undefined;
    if (isLogin) {
        res.json(getResponse('登录成功！'));
    } else {
        if(password === '123') {
            if (req.session) {
                req.session.login = true;
            } 
            res.json(getResponse('登录成功！'));
        } else {
            res.json(getResponse(req.systemTips+"密码错误"))
        }
    } 
})
router.get('/logout', (req: requestBody, res: Response) => {
    if(req.session) {
        req.session.login = undefined;
    }
    res.redirect('/');
})
export default router;
