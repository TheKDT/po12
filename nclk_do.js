function nclk_do() {
if (nclk_evt == 1 || nclk_evt == 2 || nclk_evt == 3 || nclk_evt == 4) {
        nclk.addEvent(document, "click", nclk.generateCC);
}