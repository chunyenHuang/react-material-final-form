(window["webpackJsonpreact-material-final-form"]=window["webpackJsonpreact-material-final-form"]||[]).push([[0],{70:function(e,t,a){e.exports=a(83)},80:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),o=a.n(l),i=a(42),c=a.n(i),u=a(17),m=a(34),s=a(22),d=a(54),p=a(55),b=a(63),f=a(12),y=a(56),v=a(57),h=a(86),g=a(119),E=a(120),k=a(121),O=a(58),F=a(19),x=a(49),T=a(85),j=a(87),w=a(117),N=a(118),P=a(123);a(62);function S(){var e,t,a,l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0,i=l.key,c=l.label,u=l.formType,m=void 0===u?"":u,s=l.formOptions,d=l.formObjects,p=l.formInputArrayObject,b=l.formFormatFunction,y=l.formParseFunction,v=l.isRequired,g=l.isDisabled,E=l.type,k=o?"".concat(o,"[").concat(i,"]"):i;switch(m.toLocaleLowerCase()){case"object":return r.a.createElement(n.Fragment,null,r.a.createElement(h.a,{variant:"body1"},c),d.map((function(e,t){return r.a.createElement("div",{key:t,className:"nested-form-input-field"},S(e,k))})));case"inputarray":return r.a.createElement(n.Fragment,null,r.a.createElement(h.a,{variant:"body1"},c),r.a.createElement(O.a,{name:k},(function(e){return e.fields.map((function(e,t){return r.a.createElement(n.Fragment,{key:t},p.map((function(e,a){return r.a.createElement("div",{key:a,className:"nested-form-input-field"},D("".concat(k,"[").concat(t,"][").concat(e.key,"]"),e.label))})))}))})));case"select":return e=k,t=c,a=s,r.a.createElement(f.a,{fullWidth:!0,name:e,component:F.Select,label:t,required:!0,formControlProps:{fullWidth:!0}},a.map((function(e,t){return r.a.createElement(P.a,{key:t,value:e.value},e.label)})));case"checkbox":return function(e,t,a){return r.a.createElement(x.a,{component:"fieldset",className:"form-radio-container"},r.a.createElement(T.a,{component:"legend"},t),r.a.createElement(j.a,{row:!0},a.map((function(t,a){return r.a.createElement(w.a,{key:a,label:t.label,control:r.a.createElement(f.a,{name:e,component:F.Checkbox,type:"checkbox",value:t.value})})}))))}(k,c,s);case"radio":return function(e,t){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=arguments.length>3?arguments[3]:void 0,l=arguments.length>4&&void 0!==arguments[4]&&arguments[4];return r.a.createElement(x.a,{component:"fieldset",className:"form-radio-container"},r.a.createElement(T.a,{component:"legend"},t),r.a.createElement(N.a,{row:!0},n.map((function(t,n){var o;switch(typeof t.value){case"number":o=Number;break;case"string":default:o=String}return r.a.createElement(w.a,{key:n,label:t.label,control:r.a.createElement(f.a,{name:e,disabled:l,required:a,component:F.Radio,type:"radio",value:t.value,parse:o})})}))))}(k,c,v,s);case"textarea":return function(e,t){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return r.a.createElement(f.a,{fullWidth:!0,name:e,component:F.TextField,multiline:!0,required:a,label:t})}(k,c,v);case"date":return function(e,t){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=arguments.length>3?arguments[3]:void 0,l=arguments.length>4?arguments[4]:void 0;return r.a.createElement(f.a,{className:"date-field",name:e,component:F.TextField,fullWidth:!0,required:a,type:"date",margin:"normal",label:t,InputLabelProps:{shrink:!0},format:n||function(e){return e},parse:l||function(e){return e}})}(k,c,v,b,y);case"datetime":return function(e,t){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=arguments.length>3?arguments[3]:void 0,l=arguments.length>4?arguments[4]:void 0;return r.a.createElement(f.a,{className:"date-field",name:e,component:F.TextField,fullWidth:!0,required:a,type:"datetime-local",margin:"normal",label:t,InputLabelProps:{shrink:!0},format:n||function(e){return e},parse:l||function(e){return e}})}(k,c,v,b,y);case"phone":return function(e,t){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return r.a.createElement(f.a,{fullWidth:!0,required:a,name:e,component:F.TextField,parse:function(e){return e.replace(/\D+/g,"")},format:C,disabled:n,type:"text",label:t})}(k,c,v);default:return D(k,c,v,g,E)}}function D(e,t){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"text";return r.a.createElement(f.a,{fullWidth:!0,required:a,name:e,component:F.TextField,disabled:n,type:l,label:t,parse:function(e){return e&&"number"===l.toLocaleLowerCase()&&!isNaN(e)?parseFloat(e):e}})}var C=function(e){if(!e)return e;var t="".concat(e).replace(/[^\d]/g,"");return t.length<=3?t:t.length<=7?"(".concat(t.slice(0,3),") ").concat(t.slice(3,7)):"(".concat(t.slice(0,3),") ").concat(t.slice(3,6),"-").concat(t.slice(6,10))};a(80);function q(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function R(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?q(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):q(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var M=function(e){function t(){var e,a;Object(m.a)(this,t);for(var l=arguments.length,o=new Array(l),i=0;i<l;i++)o[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={},a.componentDidMount=function(){},a.renderNestedForm=function(e){var t=a.props,l=t.metadata,o=t.debug,i=t.submitButtonText,c=void 0===i?"Save":i,u=a.props.title||a.props.metadata.title||"Form",m=e.pristine,s=e.submitting,d=e.invalid,p=e.values;return r.a.createElement(n.Fragment,null,r.a.createElement(h.a,{variant:"h5"},u),r.a.createElement("hr",null),l.fields.map((function(e,t){return r.a.createElement(g.a,{item:!0,xs:12,key:t,className:"form-field-container"},S(e))})),r.a.createElement(g.a,{container:!0,alignItems:"flex-start",spacing:8,style:{marginTop:"20px"}},r.a.createElement(g.a,{item:!0,xs:6,align:"left"}),r.a.createElement(g.a,{item:!0,xs:6,align:"right"},r.a.createElement(E.a,{variant:"contained",color:"primary",type:"submit",disabled:s||d||m},c))),o&&r.a.createElement("pre",null,JSON.stringify(p||{},0,2)))},a}return Object(b.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.nested,n=t.loading,l=t.onSubmit,o=t.data,i=t.metadata,c=t.renderProps,u=this.props.title||this.props.metadata.title||"Form";return r.a.createElement("div",{className:"react-material-final-form"},n&&r.a.createElement(g.a,{item:!0,xs:12,align:"center"},r.a.createElement(k.a,null)),i&&a&&c&&this.renderNestedForm(c),i&&!a&&u&&r.a.createElement(f.b,{onSubmit:l,mutators:R({setFieldData:v.a},y.a),initialValues:o,render:function(t){return r.a.createElement("form",{onSubmit:t.handleSubmit},e.renderNestedForm(t))}}))}}]),t}(n.Component),A={title:"My form",fields:[{key:"text",type:"string",label:"Text"},{key:"textarea",type:"string",label:"Text Area",formType:"textarea"},{key:"phone",type:"string",label:"Phone",formType:"phone"},{key:"number",type:"number",label:"Number"},{key:"date",type:"string",label:"Date",formType:"date"},{key:"dateWithParseFunction",type:"string",label:"Date with parse function",formType:"date",formFormatFunction:function(e){return c()(e).format("YYYY-MM-DD")},formParseFunction:function(e){return c()(e).toISOString()}},{key:"dateTime",type:"string",label:"Date Time",formType:"datetime"},{key:"disabledField",type:"string",label:"Disabled Field",isDisabled:!0},{key:"notRequired",type:"string",label:"Not Required field",isRequired:!1},{key:"radio",type:"number",label:"Radio",formType:"Radio",formOptions:[{label:"1",value:1},{label:"2",value:2},{label:"3",value:3}]},{key:"radio2",type:"number",label:"Radio",formType:"Radio",formOptions:[{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"}]},{key:"profile.address",type:"Array",label:"Address",formType:"InputArray",formInputArrayObject:[{key:"street",label:"Street"},{key:"city",label:"City"},{key:"state",label:"State"},{key:"zipCode",label:"Zip Code"}]},{key:"selectObject",type:"Object",label:"Select Object",formType:"Object",formObjects:[{key:"prop1",type:"Number",label:"Prop 1",formType:"Select",formOptions:[{label:"1",value:1},{label:"2",value:2},{label:"3",value:3}]},{key:"prop2",type:"Number",label:"Prop 2",formType:"Radio",formOptions:[{label:"a",value:"a"},{label:"b",value:"b"},{label:"c",value:"c"}]}]},{key:"checkbox",type:"Array",label:"Checkbox",formType:"Checkbox",formOptions:[{label:"English",value:"English"},{label:"Mandarin",value:"Mandarin"},{label:"Spanish",value:"Spanish"},{label:"Cantonese",value:"Cantonese"},{label:"Vietnamese",value:"Vietnamese"},{label:"Tagalog",value:"Tagalog"},{label:"Malay",value:"Malay"},{label:"Korean",value:"Korean"},{label:"Japanese",value:"Japanese"},{label:"French",value:"French"},{label:"German",value:"German"}]}]},I={text:"Value",textarea:"abc\n123\nabc",phone:"1231231231",number:1024,date:"2019-02-01",dateWithParseFunction:"2019-01-21T08:00:00.000Z",dateTime:"2019-01-21T12:59:01",disabledField:"Disabled",radio:1,radio2:"c",profile:{address:[{street:"my st",city:"Irvine",state:"CA",zipCode:"92603"}]},selectObject:{prop1:1,prop2:"b"},checkbox:["Mandarin","French"]};o.a.render(r.a.createElement((function(){return r.a.createElement(n.Fragment,null,r.a.createElement("h1",null,"React Material Final Form"),r.a.createElement(M,{title:A.title,metadata:A,data:I,debug:!0,onSubmit:console.log}))}),null),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.a1dff674.chunk.js.map