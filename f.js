function F() {
var Q = "";
        try {
            var O = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
            if (O && typeof O.type != "undefined") {
                switch (O.type) {
                case O.CELL_2G:
                    Q = "2g";
                    break;
                case O.CELL_3G:
                    Q = "3g";
                    break;
                case O.CELL_4G:
                    Q = "4g";
                    break;
                case O.WIFI:
                    Q = "wifi";
                    break;
                case O.ETHERNET:
                    Q = "eth";
                    break;
                case O.UNKNOWN:
                    Q = "unknown";
                    break;
                case O.NONE:
                    Q = "none";
                    break;
                default:
                    Q = "";
}