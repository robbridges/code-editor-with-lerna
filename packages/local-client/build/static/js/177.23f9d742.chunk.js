(this["webpackJsonp@flint-editor/local-client"]=this["webpackJsonp@flint-editor/local-client"]||[]).push([[177],{311:function(t,e){!function(t){t.languages.http={"request-line":{pattern:/^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\s(?:https?:\/\/|\/)\S+\sHTTP\/[0-9.]+/m,inside:{property:/^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b/,"attr-name":/:\w+/}},"response-status":{pattern:/^HTTP\/1.[01] \d.*/m,inside:{property:{pattern:/(^HTTP\/1.[01] )\d.*/i,lookbehind:!0}}},"header-name":{pattern:/^[\w-]+:(?=.)/m,alias:"keyword"}};var e,a,n,i=t.languages,p={"application/javascript":i.javascript,"application/json":i.json||i.javascript,"application/xml":i.xml,"text/xml":i.xml,"text/html":i.html,"text/css":i.css},s={"application/json":!0,"application/xml":!0};for(var r in p)if(p[r]){e=e||{};var l=s[r]?(n=(a=r).replace(/^[a-z]+\//,""),"(?:"+a+"|\\w+/(?:[\\w.-]+\\+)+"+n+"(?![+\\w.-]))"):r;e[r.replace(/\//g,"-")]={pattern:RegExp("(content-type:\\s*"+l+".*)(?:\\r?\\n|\\r){2}[\\s\\S]*","i"),lookbehind:!0,inside:p[r]}}e&&t.languages.insertBefore("http","header-name",e)}(Prism)}}]);
//# sourceMappingURL=177.23f9d742.chunk.js.map