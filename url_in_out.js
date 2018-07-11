/**
 * Summary: URLから特定の文字をIn/Out
 * Author: rozettastone1886@gmail.com
 * Comment: パソコンとスマホ用のページをURLにて分けているWebサービスにて
 * Version: 2018-07-10
 **/

// basic
javascript:
(() => {
    var p = location.pathname;
    location.pathname = (p.match(/sp/).index == 1) ? p.substr(3) : '/sp' + p;
})()

// allow
javascript: (() => { var p = location.pathname; location.pathname = (p.match(/sp/).index == 1) ? p.substr(3) : '/sp' + p; })()

// min
javascript:(p=>{location.pathname=(p.match(/sp/).index==1)?p.substr(3):'/sp'+p;})(location.pathname)

