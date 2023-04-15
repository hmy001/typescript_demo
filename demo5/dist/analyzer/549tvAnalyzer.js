"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const superagent_1 = __importDefault(require("superagent"));
const cheerio = __importStar(require("cheerio"));
class _549tvAnalyzer {
    constructor() {
        this.url = "http://www.549.tv/";
    }
    static getInstance() {
        if (!this._instance) {
            this._instance = new _549tvAnalyzer();
        }
        return this._instance;
    }
    excuteAnalyzer() {
        return __awaiter(this, void 0, void 0, function* () {
            const rawHtml = yield this.getRawHtml(this.url);
            const jsonContent = this.generateJsonContent(rawHtml);
            console.log(jsonContent);
            return JSON.stringify(jsonContent);
        });
    }
    getRawHtml(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield superagent_1.default.get(url);
            return result.text;
        });
    }
    generateJsonContent(htmlContent) {
        const $ = cheerio.load(htmlContent);
        const jsonContent = [];
        $("#content .url-card").each((i, ele) => {
            jsonContent.push({
                index: i + 1,
                title: $(ele).find(".url-info").children("h5").text(),
                img: $(ele).find(".url-img").children("img").attr("data-src"),
                tag: $(ele).find(".my-2").children("span").eq(0).text() + ' ' + $(ele).find(".my-2").children("span").eq(1).text() + ' ' + $(ele).find(".my-2").children("span").eq(2).text(),
                desc: $(ele).find(".text-secondary").text(),
            });
        });
        return jsonContent;
    }
}
exports.default = _549tvAnalyzer;
