function GEBID(oBase, sId, oDoc) {
if (oBase.nodeType === 9 || oBase.parentNode && oBase.parentNode.tagName) {
            return jindo._getElementById(oDoc, sId);
}