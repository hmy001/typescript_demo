"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_session_1 = __importDefault(require("cookie-session"));
const router_1 = __importDefault(require("./router"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use((req, res, next) => {
    req.systemTips = '系统提示：';
    next();
});
app.use((0, cookie_session_1.default)({
    name: 'session',
    keys: [
        // secret keys
        'hmy666'
    ],
    maxAge: 24 * 60 * 60 * 1000
}));
app.use(router_1.default);
app.listen(8080, () => {
    console.log("服务器启动！！");
});

