(this["webpackJsonpcode-editor"]=this["webpackJsonpcode-editor"]||[]).push([[125],{259:function(e,a){var t;(t=Prism).languages.etlua={delimiter:{pattern:/^<%[-=]?|-?%>$/,alias:"punctuation"},"language-lua":{pattern:/[\s\S]+/,inside:t.languages.lua}},t.hooks.add("before-tokenize",(function(e){t.languages["markup-templating"].buildPlaceholders(e,"etlua",/<%[\s\S]+?%>/g)})),t.hooks.add("after-tokenize",(function(e){t.languages["markup-templating"].tokenizePlaceholders(e,"etlua")}))}}]);
//# sourceMappingURL=125.d6c9c080.chunk.js.map