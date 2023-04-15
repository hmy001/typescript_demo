"use strict";
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
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const _549tvAnalyzer_1 = __importDefault(require("./analyzer/549tvAnalyzer"));
class Spider {
    constructor(analyzer) {
        this.analyzer = analyzer;
        this.filePath = path_1.default.resolve(__dirname, "../data/data.json");
    }
    initSpiderProcess() {
        return __awaiter(this, void 0, void 0, function* () {
            const fileContent = yield this.analyzer.excuteAnalyzer();
            fs_1.default.writeFileSync(this.filePath, fileContent, { flag: "a+" });
        });
    }
}
exports.default = Spider;
const _549 = _549tvAnalyzer_1.default.getInstance();
let spider1 = new Spider(_549);
spider1.initSpiderProcess();
