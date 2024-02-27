function _isNonStandardQueryButNotException(sQuery) {
return /\[\s*(?:checked|selected|disabled)/.test(sQuery);
}