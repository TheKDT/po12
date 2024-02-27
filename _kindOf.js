function _kindOf(b, a) {
if (b != a) {
        if (b._$superClass) {
            return _kindOf(b._$superClass.prototype, a);
}