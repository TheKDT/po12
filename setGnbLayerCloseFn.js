function setGnbLayerCloseFn() {
$Fn(function(a) {
        if ($$.getSingle(".gnb_lyr_opened") != null && !$Element(a.element).isChildOf("gnb_lst")) {
            gnbAllLayerClose();
}