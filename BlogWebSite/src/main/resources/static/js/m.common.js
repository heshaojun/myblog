/*导航栏面板地址*/
const NAVIGATOR_PANEL_URL = "../html/navigator.html";
/*文章列表面板地址*/
const ARTICLE_LIST_PANEL_URL = "../html/article_list_panel.html";
const ARTICLE_LIST_DATA_URL = "/rest/articleList";
/*网站统计信息面板地址*/
const SITE_INFO_PANEL_URL = "../html/site_info_panel.html";
const SITE_INFO_DATA_URL = "/rest/siteInfo";
/*最新文章 列表面板地址*/
const NEWEST_ARTICLE_PANEL_URL = "../html/newest_article_panel.html";
const NEWEST_ARTICLE_DATA_URL = "/rest/newestArticles";
/*最热文章信息面板地址*/
const HOTTEST_ARTICLE_PANEL_URL = "../html/hottest_article_panel.html";
const HOTTEST_ARTICLE_DATA_URL = "/rest/hottestArticles";
/*文章分类标签面板地址*/
const CLASSIFY_LABELS_PANEL_URL = "../html/classify_labels_panel.html";
const CLASSIFY_LABELS_DATA_URL = '/rest/classifyLabels';
/*文章标签面板地址*/
const ARTICLE_LABELS_PANEL_URL = "../html/article_labels_panel.html";
const ARTICLE_LABELS_DATA_URL = "/rest/articleLabels";
/*底部备案信息面板页*/
const BOTTOM_PANEL_URL = '../html/bottom.html';
/*文章详情面板路径*/
const ARTICLE_DETAIL_PANEL_URL = "../html/article_detail_panel.html";
const ARTICLE_DETAIL_DATA_URL = "/rest/articleDetail";
const ARTICLE_COMMENTS_DATA_URL = "/rest/comments";
/*留言板面板路径*/
const MSG_BOARD_PANEL_URL = '../html/msg_board_panel.html';
/*关于我面板路径*/
const ABOUT_ME_PANEL_URL = '../html/aboutme_panel.html';
/**/
const MODAL_PANELS_URL = '../html/modal_panels.html';

let pageParams = {};

$(function () {
    let params = window.location.search.substring(1).split("&");
    for (let index in params) {
        let param = params[index];
        if (param.includes("=")) {
            let kv = param.split("=", 2);
            pageParams[kv[0]] = kv[1];
        }
    }
});