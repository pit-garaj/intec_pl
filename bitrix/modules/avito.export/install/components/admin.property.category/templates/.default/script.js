this.BX=this.BX||{},this.BX.AvitoExport=this.BX.AvitoExport||{},this.BX.AvitoExport.Admin=this.BX.AvitoExport.Admin||{},function(t){"use strict";var e;const s=null!=(e=window.AvitoJQuery)?e:window.$;class o{constructor(t,e={}){this.$el=s(t),this.el=this.$el[0],this.options=Object.assign({},this.constructor.defaults,this.$el.data(),e)}destroy(){this.el=null}getElement(t,e,s){const o=this.getElementSelector(t);return this.getNode(o,e,s||"find")}getElementSelector(t){const e=t+"Element";return this.options[e]}getTemplate(t){const e=t+"Template",s=this.options[e],o=s.substring(0,1);let r;return r="."===o||"#"===o?this.getNode(s).html():s,r}getNode(t,e,o="find"){return"#"===t.substring(0,1)?e=s(document):e||(e=this.$el),e[o](t)}getLang(t,e){let s,o;return null!=this.options.lang&&t in this.options.lang?o=this.options.lang[t]:(s=this.options.langPrefix+t,o=BX.message(s)||""),o&&e&&(o=function(t,e){let s=t;for(const t in e){if(!e.hasOwnProperty(t))continue;const o="#"+t+"#",r=e[t];do{s=s.replace(o,r)}while(-1!==s.indexOf(o))}return s}(o,e)),o}}o.defaults={lang:{},langPrefix:null};class r{constructor(t){this.component=t,this._middleware=[]}middleware(t){this._middleware.push(t)}fetch(t,e={}){return new Promise(((s,o)=>{BX.ajax.runComponentAction(this.component,t,{mode:"ajax",data:this.prepare(t,e)}).then((t=>{const e=t.data;"ok"===e.status?s(e.data):"error"===e.status?o(new Error(e.message)):o(new Error("unknown response format"))})).catch((t=>{o(this.queryError(t))}))}))}prepare(t,e){for(const s of this._middleware)e=s(t,e);return e}queryError(t){if("error"!==t.status)return new Error("unknown response");if(!Array.isArray(t.errors)||0===t.errors.length)return new Error("error response does not contain errors");const e=t.errors[t.errors.length-1];return new Error(e.message)}}var n;const i=null!=(n=window.AvitoJQuery)?n:window.$;class a extends o{constructor(t,e={}){super(t,e),this.ajaxTransport=(t,e,s)=>{this.transport.fetch("suggest",{query:t.data.q}).then((t=>this.convertOptions(t))).then((t=>{e(t)})).catch((t=>{s(t.message)}))},this.templateSelection=t=>t.id||t.text,this.options=Object.assign({},this.constructor.defaults,e),this.transport=new r(this.options.component),this.bootSelect(),this.patchFocus()}bootSelect(){this.$el.select2({language:this.options.language,minimumInputLength:2,placeholder:this.getLang("VALUE_PLACEHOLDER"),allowClear:this.options.allowClear,selectOnClose:!0,ajax:{cache:!0,delay:250,transport:this.ajaxTransport},templateSelection:this.templateSelection})}patchFocus(){this.$el.on("select2:open",(()=>{setTimeout((()=>{const t=i(".select2-container--open .select2-search__field").last().get(0);null==t||t.focus()}),100)}))}convertOptions(t){const e=[];for(const s of t)e.push({id:s.ID,text:s.VALUE,disabled:s.DISABLED});return{results:e}}}a.defaults={component:null,language:"ru",allowClear:!0},t.Category=a}(this.BX.AvitoExport.Admin.Property=this.BX.AvitoExport.Admin.Property||{});
//# sourceMappingURL=script.js.map