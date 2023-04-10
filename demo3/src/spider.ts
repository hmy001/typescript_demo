// ts爬虫1
import fs from 'fs';
import path from 'path';
import superagent from 'superagent';
import cheerio from 'cheerio';

interface Course {
    title: string;
    count: number;
}
interface courseResult {
    time: number;
    data: Course[]
}
interface Content {
    [propName: number]: Course[];
}
class Spider {
    private secret:string = 'cnm';
    private url:string = `http://www.dell-lee.com/typescript/demo.html?secret=${this.secret}`;
    private filePath:string = path.resolve(__dirname, '../data/course.json');
    getCourseInfo(html:string) {
        const $ = cheerio.load(html);
        const courseItem = $('.course-item');
        const courseInfos:Course[] = [];
        courseItem.map((index, element) => {
            const desc = $(element).find('.course-desc');
            const title = desc.eq(0).text();
            const count = parseInt(desc.eq(1).text().split('：')[1],10);
            courseInfos.push({
                title,
                count
            })
        })
        const result = {
            time: new Date().getTime(),
            data: courseInfos
        }
        return result;
    }
    async getRawHtml() {
        const result = await superagent.get(this.url);
        return result.text;
    }
    generateJsonContent(CourseInfo:courseResult) {
        const filePath = path.resolve(__dirname, '../data/course.json');
        let fileContent:Content = {};
        if(fs.existsSync(filePath)) { // 文件是否存在
            fileContent = (JSON.parse(fs.readFileSync(filePath, 'utf-8'))) as Content;
        }
        fileContent[CourseInfo.time] = CourseInfo.data;
        return fileContent;
        
    }
    writeFile(fileContent: string) {
        fs.writeFileSync(this.filePath,fileContent);
    }
    async initSpiderProcess() {
        const html = await this.getRawHtml();
        const courseInfo = this.getCourseInfo(html);
        const fileContent = this.generateJsonContent(courseInfo);
        this.writeFile(JSON.stringify(fileContent));
    }
    constructor() {
        this.initSpiderProcess();
    }
}

const spider:Spider = new Spider();