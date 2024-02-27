function typeClass() {
var t = this;
        var a = [];
        var superFunc = function(m, superClass, func) {
            if (m != "constructor" && func.toString().indexOf("$super") > -1) {
                var funcArg = func.toString().replace(/function\s*\(([^\)]*)[\w\W]*/g, "$1").split(",");
                var funcStr = func.toString().replace(/function[^{]*{/, "").replace(/(\w|\.?)(this\.\$super|this)/g, function(m, m2, m3) {
                    if (!m2) {
                        return m3 + ".$super";
}