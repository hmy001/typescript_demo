import superagent from "superagent";
import * as cheerio from "cheerio";

interface jsonType {
    index: number;
    title: string;
    img: string | undefined;
    desc: string;
    tag: string;
}
export default class _549tvAnalyzer {
    private static _instance: _549tvAnalyzer;
    private url: string = "http://www.549.tv/";
    private constructor() {
       
    }
    static getInstance() {
        if(!this._instance) {
            this._instance = new _549tvAnalyzer()
        }
        return this._instance;

    }
    async excuteAnalyzer() {
        const rawHtml = await this.getRawHtml(this.url);
        const jsonContent = this.generateJsonContent(rawHtml);
        console.log(jsonContent)
        return JSON.stringify(jsonContent);
    }
    private async getRawHtml(url: string) {
        const result = await superagent.get(url);
        return result.text;
    }
    private  generateJsonContent(htmlContent: string) {
        const $ = cheerio.load(htmlContent);
        const jsonContent: jsonType[] = [];
        $("#content .url-card").each((i, ele) => {
            jsonContent.push({
                index: i+1,
                title: $(ele).find(".url-info").children("h5").text(),
                img: $(ele).find(".url-img").children("img").attr("data-src"),
                tag: $(ele).find(".my-2").children("span").eq(0).text() + ' ' + $(ele).find(".my-2").children("span").eq(1).text() + ' ' + $(ele).find(".my-2").children("span").eq(2).text(),
                desc: $(ele).find(".text-secondary").text(),
            })
        })
        return jsonContent;
    }
}