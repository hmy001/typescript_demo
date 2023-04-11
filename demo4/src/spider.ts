// 爬虫2：代码组合设计模式优化https://gitee.com/hmy001/typescript_demo.git
import fs from 'fs';
import path from 'path';
import qianlimaerpAnalyzer from './analyzer/qianlimaerpAnalyzer';

interface Analyzer {
    excuteAnalyzer(): Promise<string>; 
}
// spider 负责将数据写到文件 analyzer负责分析爬取的网页，生成需要的数据
class Spider {
    constructor(private analyzer: Analyzer, private filepath: string) {
        this.initSpiderProcess();
    }
    private writeFile(fileContent: string) {
        fs.writeFileSync(this.filepath, fileContent, {flag: 'w'});
    }
    private async initSpiderProcess() { // 初始化爬虫进程
        const fileContent = await this.analyzer.excuteAnalyzer();
        this.writeFile(fileContent);
    }
    
}

let qlmAnalyzer = new qianlimaerpAnalyzer();
let filepath:string = path.resolve(__dirname, '../data/course.json');
new Spider(qlmAnalyzer, filepath);