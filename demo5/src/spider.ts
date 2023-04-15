import fs from "fs";
import path from "path";
import _549tvAnalyzer from "./analyzer/549tvAnalyzer";

interface Analyzer {
    excuteAnalyzer(): Promise<string>;
}
export default class Spider {
    private filePath: string = path.resolve(__dirname, "../data/data.json");
    constructor(private analyzer: Analyzer) {

    }
    async initSpiderProcess() {
        const fileContent = await this.analyzer.excuteAnalyzer();
        fs.writeFileSync(this.filePath, fileContent, {flag: "a+"})
    }
}

const _549 = _549tvAnalyzer.getInstance();
let spider1 = new Spider(_549);
spider1.initSpiderProcess();