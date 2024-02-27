function setAgeOverLayer() {
$Element(document.body).appendHTML('<span class="ly_ageover" id="layer19Product" style="display:none">해당 상품은 청소년 유해매체물로 정보통신망 이용촉진 및<br>정보보호등에 관한 법률 및 청소년 보호법의 규정에 의하여<br><em>19세 미만의 청소년이 이용할 수 없습니다.</em></span>');
    $Element(document.body).appendHTML('<span class="ly_ageover" id="layer18Product" style="display:none">해당 상품은 청소년 유해매체물로 정보통신망 이용촉진 및<br>정보보호등에 관한 법률 및 청소년 보호법의 규정에 의하여<br><em>18세 미만의 청소년이 이용할 수 없습니다.</em></span>');
    var b = new jindo.LayerPosition(null,jindo.$("layer19Product"),{
        sPosition: "outside-bottom",
        sAlign: "left",
        nTop: 2,
        nLeft: 0
}