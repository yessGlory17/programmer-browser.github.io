$(function () {
    // init feather icons
    feather.replace();
});


//detect os

window.onload = () => {

    const downloadLink = document.getElementById('download-link')

    if (navigator.appVersion.indexOf("Win") != -1) downloadLink.setAttribute('href','https://github.com/yessGlory17/programmer-browser/releases/download/v0.1.8/ProgrammerBrowser-Setup-0.1.8.exe');
    //if (navigator.appVersion.indexOf("Linux") != -1) downloadLink.setAttribute('href','');

}
