/**
 * Summary: hostを順繰りに変更する
 * Author: rozettastone1886@gmail.com
 * Comment: 公開用とテスト用などで別のhostを用意しているWebサービスにて
 * Version: 2018-07-10
 **/

// basic
javascript:
(() => {
    var a = 'released.jp', b = 'develop.jp', c = 'localhost';
    var f = {
        a: () => { location.host = b },
        b: () => { location.host = c },
        c: () => { location.host = a }
    };
    f[location.host]();
})()

// allow
javascript: (() => { var a = 'released.jp', b = 'develop.jp', c = 'localhost', f = { a: () => { location.host = b; }, b: () => { location.host = c; }, c: () => { location.host = a; } }; f[location.host](); })()

// min
javascript:(l=>{var a='released.jp',b='develop.jp',c='localhost',f={a:()=>{l.host=b;},b:()=>{l.host=c;},c:()=>{l.host=a;}};f[l.host]();})(location)

