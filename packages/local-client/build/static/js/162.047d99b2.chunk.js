(this["webpackJsonp@flintstrike-editor/local-client"]=this["webpackJsonp@flintstrike-editor/local-client"]||[]).push([[162],{296:function(e,a){!function(e){e.languages.handlebars={comment:/\{\{![\s\S]*?\}\}/,delimiter:{pattern:/^\{\{\{?|\}\}\}?$/i,alias:"punctuation"},string:/(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,boolean:/\b(?:true|false)\b/,block:{pattern:/^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/i,lookbehind:!0,alias:"keyword"},brackets:{pattern:/\[[^\]]+\]/,inside:{punctuation:/\[|\]/,variable:/[\s\S]+/}},punctuation:/[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,variable:/[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/},e.hooks.add("before-tokenize",(function(a){e.languages["markup-templating"].buildPlaceholders(a,"handlebars",/\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g)})),e.hooks.add("after-tokenize",(function(a){e.languages["markup-templating"].tokenizePlaceholders(a,"handlebars")}))}(Prism)}}]);
//# sourceMappingURL=162.047d99b2.chunk.js.map