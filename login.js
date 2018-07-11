/**
 * Summary: ログイン用BookMarklet
 * Author: rozettastone1886@gmail.com
 * Version: 2018-07-06
 **/

// basic
javascript:
(() => {
    if (location.host != 'host.jp') { return; }
    if (location.pathname != '/login') { return; }
    document.getElementById('UserId').value = 'user-id';
    document.getElementById('Password').value = 'password';
    document.getElementById('Form').submit();
})()

// allow
javascript: (() => { if (location.host != 'host.jp') { return; } if (location.pathname != '/login') { return; } document.getElementById('UserId').value = 'user-id'; document.getElementById('Password').value = 'password'; document.getElementById('Form').submit(); })()

// min
javascript:(()=>{if(location.href!='https://host.jp/login')return;var f=i=>document.getElementById(i);f('UserId').value='user-id';f('Password').value='password';f('Form').submit();})()

