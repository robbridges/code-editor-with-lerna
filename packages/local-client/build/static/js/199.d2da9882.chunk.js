(this["webpackJsonp@flint-editor/local-client"]=this["webpackJsonp@flint-editor/local-client"]||[]).push([[199],{333:function(n,e){!function(n){var e=n.languages.javadoclike={parameter:{pattern:/(^\s*(?:\/{3}|\*|\/\*\*)\s*@(?:param|arg|arguments)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^\s*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/};Object.defineProperty(e,"addSupport",{value:function(e,a){"string"==typeof e&&(e=[e]),e.forEach((function(e){!function(e,a){var t="doc-comment",i=n.languages[e];if(i){var o=i[t];if(!o){o=(i=n.languages.insertBefore(e,"comment",{"doc-comment":{pattern:/(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,lookbehind:!0,alias:"comment"}}))[t]}if(o instanceof RegExp&&(o=i[t]={pattern:o}),Array.isArray(o))for(var r=0,s=o.length;r<s;r++)o[r]instanceof RegExp&&(o[r]={pattern:o[r]}),a(o[r]);else a(o)}}(e,(function(n){n.inside||(n.inside={}),n.inside.rest=a}))}))}}),e.addSupport(["java","javascript","php"],e)}(Prism)}}]);
//# sourceMappingURL=199.d2da9882.chunk.js.map