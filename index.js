const _ = require("lodash");
var content = null;

const erroMessage = "Content not found";

const setContent = function(contentFile) {
  content = require(`./${contentFile}`);
};

const findContent = function(lang, pageKey, contentKey) {
    return _.get(content, `${lang}.${pageKey}.${contentKey}`, erroMessage)
};

module.exports = {
    setContent,
    findContent
};


/*

USAGE


console.log(findContent("en", "homepage", "homepageTitle"));
setContent("dummy-content.js");
console.log(findContent("en", "homepage", "homepageTitle"));

 */
