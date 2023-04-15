"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const express_1 = require("express");
// import bodyParser from "body-parser";
const _549tvAnalyzer_1 = __importDefault(require("./analyzer/549tvAnalyzer"));
const spider_1 = __importDefault(require("./spider"));
const apiFormater_1 = require("./api/apiFormater");
const checkLogin = (req, res, next) => {
    const isLogin = req.session ? req.session.login : undefined;
    if (isLogin) {
        next();
    }
    else {
        res.json((0, apiFormater_1.getResponse)('请先登录！'));
    }
};
const router = (0, express_1.Router)();
// router.use(bodyParser.urlencoded({
//     extended: false
//   }))
router.get('/', (req, res) => {
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
    `);
    }
    else {
        res.send(`
    <html>
        <body>
            <form method="post" action="/login">
                <input type="password" name="password" />
                <button type="submit">提交</button>
            </form>
        </body>
    </html>
    `);
    }
});
let i = 0;
router.get('/getData', checkLogin, (req, res) => {
    new spider_1.default(_549tvAnalyzer_1.default.getInstance()).initSpiderProcess();
});
router.get('/showData', checkLogin, (req, res) => {
    try {
        const filePath = path_1.default.resolve(__dirname, "../data/data.json");
        const result = fs_1.default.readFileSync(filePath, 'utf-8');
        res.send((0, apiFormater_1.getResponse)(result));
    }
    catch (_a) {
        res.json((0, apiFormater_1.getResponse)('暂无数据'));
    }
});
router.post('/login', (req, res) => {
    const { password } = req.body;
    const isLogin = req.session ? req.session.login : undefined;
    if (isLogin) {
        res.json((0, apiFormater_1.getResponse)('登录成功！'));
    }
    else {
        if (password === '123') {
            if (req.session) {
                req.session.login = true;
            }
            res.json((0, apiFormater_1.getResponse)('登录成功！'));
        }
        else {
            res.json((0, apiFormater_1.getResponse)(req.systemTips + "密码错误"));
        }
    }
});
router.get('/logout', (req, res) => {
    if (req.session) {
        req.session.login = undefined;
    }
    res.redirect('/');
});
exports.default = router;
