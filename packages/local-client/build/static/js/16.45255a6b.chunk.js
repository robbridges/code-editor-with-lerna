(this["webpackJsonp@flintstrike-editor/local-client"]=this["webpackJsonp@flintstrike-editor/local-client"]||[]).push([[16],{150:function(e,t){!function(e){var t=/\b(?:abstract|activate|and|any|array|as|asc|autonomous|begin|bigdecimal|blob|boolean|break|bulk|by|byte|case|cast|catch|char|class|collect|commit|const|continue|currency|date|datetime|decimal|default|delete|desc|do|double|else|end|enum|exception|exit|export|extends|final|finally|float|for|from|global|goto|group|having|hint|if|implements|import|in|inner|insert|instanceof|int|integer|interface|into|join|like|limit|list|long|loop|map|merge|new|not|null|nulls|number|object|of|on|or|outer|override|package|parallel|pragma|private|protected|public|retrieve|return|rollback|select|set|short|sObject|sort|static|string|super|switch|synchronized|system|testmethod|then|this|throw|time|transaction|transient|trigger|try|undelete|update|upsert|using|virtual|void|webservice|when|where|while|get(?=\s*[{};])|(?:after|before)(?=\s+[a-z])|(?:inherited|with|without)\s+sharing)\b/i,n=/\b(?:(?=[a-z_]\w*\s*[<\[])|(?!<keyword>))[A-Z_]\w*(?:\s*\.\s*[A-Z_]\w*)*\b(?:\s*(?:\[\s*\]|<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>))*/.source.replace(/<keyword>/g,(function(){return t.source}));function i(e){return RegExp(e.replace(/<CLASS-NAME>/g,(function(){return n})),"i")}var a={keyword:t,punctuation:/[()\[\]{};,:.<>]/};e.languages.apex={comment:e.languages.clike.comment,string:e.languages.clike.string,sql:{pattern:/((?:[=,({:]|\breturn)\s*)\[[^\[\]]*\]/i,lookbehind:!0,greedy:!0,alias:"language-sql",inside:e.languages.sql},annotation:{pattern:/@\w+\b/,alias:"punctuation"},"class-name":[{pattern:i(/(\b(?:class|enum|extends|implements|instanceof|interface|new|trigger\s+\w+\s+on)\s+)<CLASS-NAME>/.source),lookbehind:!0,inside:a},{pattern:i(/(\(\s*)<CLASS-NAME>(?=\s*\)\s*[\w(])/.source),lookbehind:!0,inside:a},{pattern:i(/<CLASS-NAME>(?=\s*\w+\s*[;=,(){:])/.source),inside:a}],trigger:{pattern:/(\btrigger\s+)\w+\b/i,lookbehind:!0,alias:"class-name"},keyword:t,function:/\b[a-z_]\w*(?=\s*\()/i,boolean:/\b(?:false|true)\b/i,number:/(?:\B\.\d+|\b\d+(?:\.\d+|L)?)\b/i,operator:/[!=](?:==?)?|\?\.?|&&|\|\||--|\+\+|[-+*/^&|]=?|:|<<?=?|>{1,3}=?/,punctuation:/[()\[\]{};,.]/}}(Prism)}}]);
//# sourceMappingURL=16.45255a6b.chunk.js.map