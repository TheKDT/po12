function J() {
var L = "";
        try {
            navigator.userLanguage ? (L = navigator.userLanguage) : navigator.language ? (L = navigator.language) : "";
}