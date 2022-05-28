$(function () {
    // init feather icons
    feather.replace();
});


//detect os

window.onload = () => {

    const downloadLink = document.getElementById('download-link')

    if (navigator.appVersion.indexOf("Win") != -1) downloadLink.setAttribute('href','https://github.com/yessGlory17/programmer-browser/releases/download/pre-release-0.1.2/ProgrammerBrowser.Setup.4.6.0.exe');
    //if (navigator.appVersion.indexOf("Linux") != -1) downloadLink.setAttribute('href','');

}