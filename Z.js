function Z(af, ai) {
var ah = (af & 65535) + (ai & 65535);
            var ag = (af >> 16) + (ai >> 16) + (ah >> 16);
            return (ag << 16) | (ah & 65535);
}