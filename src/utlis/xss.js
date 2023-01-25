//
// const xss = require('xss')
//
// const options = {
//     css: false,
//     onTag(tag, html, options) {
//         if (tag === 'iframe') {
//             return html.replace(/javascript:?/, '')
//         }
//     },
//     // 避免把页面样式过滤掉
//     onIgnoreTagAttr(tag, name, value, isWhiteAttr) {
//         // 过滤掉标签上的事件
//         if (/^[^on]/.test(name)) {
//             return name + '="' + xss.escapeAttrValue(value) + '"'
//         }
//     },
// }
// const filter = new xss.FilterXSS(options)
//
// export default filter

const xss = require('xss')// 导入xss包
const options = {
    css: false,
    onTag(tag, html, options) {
        if (tag === 'iframe') {
            return html.replace(/javascript:?/, '')
        }
    },
    // 避免把页面样式过滤掉
    onIgnoreTagAttr(tag, name, value, isWhiteAttr) {
        // 过滤掉标签上的事件
        if (/^[^on]/.test(name)) {
            return name + '="' + xss.escapeAttrValue(value) + '"'
        }
    },
    // 白名单
    whiteList:{
        a: ['style', 'href', 'title', 'target'],
        p:['style'],
        section: ['style'],
        strong: ['style'],
        abbr: ["title",'style'],
        address: ['style'],
        area: ['style',"shape", "coords", "href", "alt"],
        article: ['style'],
        aside: ['style'],
        audio: ['style',"autoplay", "controls", "loop", "preload", "src"],
        b: ['style'],
        bdi: ['style', "dir"],
        bdo: ['style',"dir"],
        big: ['style'],
        blockquote: ['style',"cite"],
        br: ['style'],
        caption: ['style'],
        center: ['style'],
        cite: ['style'],
        code: ['style'],
        col: ['style',"align", "valign", "span", "width"],
        colgroup: ['style',"align", "valign", "span", "width"],
        dd: ['style'],
        del: ['style',"datetime"],
        details: ['style',"open"],
        div: ['style','style'],
        dl: ['style'],
        dt: ['style'],
        em: ['style'],
        font: ['style',"color", "size", "face"],
        footer: ['style'],
        h1: ['style'],
        h2: ['style'],
        h3: ['style'],
        h4: ['style'],
        h5: ['style'],
        h6: ['style'],
        header: ['style'],
        hr: ['style'],
        i: ['style'],
        img: ['style',"src", "alt", "title", "width", "height"],
        ins: ['style',"datetime"],
        li: ['style'],
        mark: ['style'],
        nav: ['style'],
        ol: ['style'],
        pre: ['style'],
        s: ['style'],
        small: ['style'],
        span: ['style'],
        sub: ['style'],
        sup: ['style'],
        table: ["width", "border", "align", "valign","style"],
        tbody: ['style',"align", "valign"],
        td: ["width", "rowspan", "colspan", "align", "valign","style"],
        tfoot: ['style',"align", "valign"],
        th: ['style',"width", "rowspan", "colspan", "align", "valign"],
        thead: ['style',"align", "valign"],
        tr: ['style',"rowspan", "align", "valign"],
        tt: ['style'],
        u: ['style'],
        ul: ['style'],
        video: ['style',"autoplay", "controls", "loop", "preload", "src", "height", "width"],
        style:['style']   //新添
    },
    // 去掉不在白名单上的标签
    stripIgnoreTag: true,
    // 去掉HTML备注
    allowCommentTag: false,
    // 彻底去除script标签
    stripIgnoreTagBody: ["script","noscript"],
};
const myXss = new xss.FilterXSS(options)
export default myXss;
