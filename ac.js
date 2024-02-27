function ac(ai) {
var ah = "0123456789abcdef";
            var ag = "";
            var af;
            var aj;
            for (aj = 0; aj < ai.length; aj += 1) {
                af = ai.charCodeAt(aj);
                ag += ah.charAt((af >>> 4) & 15) + ah.charAt(af & 15);
}