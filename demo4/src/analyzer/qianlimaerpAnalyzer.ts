
import superagent from 'superagent';
import cheerio from 'cheerio';

interface jsonContent {
    index: number,
    img: string|undefined,
    title: string,
    desc: string,
    score: string
}

export default class qianlimaerpAnalyzer {
    private url:string = `https://www.qianlimaerp.com/`;
    constructor() {
    }
    async excuteAnalyzer() {
        const rawHtml = await this.getRawHtml(this.url);
        const fileContent = this.generateJsonContent(rawHtml);
        return JSON.stringify(fileContent);
    }
    private async getRawHtml(url: string) { // 获取html字符串
        const result = await superagent.get(url);
        return result.text;
    }
    private generateJsonContent(htmlContent: string) { // 使用cheerio提取html字符串为json
        const $ = cheerio.load(htmlContent);
        const jsonContent:jsonContent[] = [];
        $('#conch-content .hl-row-box .row .hl-list-item').each((index, element) => {
            jsonContent.push({
                index: index+1,
                img: $(element).find('.hl-item-thumb').attr('data-original'),
                title: $(element).find('.hl-item-title').text(),
                desc: $(element).find('.hl-item-sub').clone().children().remove().end().text(),
                score: $(element).find('.hl-item-sub').children().eq(0).text()
            })
        })
        return jsonContent;
    }
}