"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[249],{2249:function(t,e,n){n.r(e),n.d(e,{default:function(){return O}});var r=n(2791),a=n(9434),o=n(1686),c=n(8792),i="NOT_FOUND";var u=function(t,e){return t===e};function s(t,e){var n="object"===typeof e?e:{equalityCheck:e},r=n.equalityCheck,a=void 0===r?u:r,o=n.maxSize,c=void 0===o?1:o,s=n.resultEqualityCheck,l=function(t){return function(e,n){if(null===e||null===n||e.length!==n.length)return!1;for(var r=e.length,a=0;a<r;a++)if(!t(e[a],n[a]))return!1;return!0}}(a),f=1===c?function(t){var e;return{get:function(n){return e&&t(e.key,n)?e.value:i},put:function(t,n){e={key:t,value:n}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(l):function(t,e){var n=[];function r(t){var r=n.findIndex((function(n){return e(t,n.key)}));if(r>-1){var a=n[r];return r>0&&(n.splice(r,1),n.unshift(a)),a.value}return i}return{get:r,put:function(e,a){r(e)===i&&(n.unshift({key:e,value:a}),n.length>t&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(c,l);function m(){var e=f.get(arguments);if(e===i){if(e=t.apply(null,arguments),s){var n=f.getEntries(),r=n.find((function(t){return s(t.value,e)}));r&&(e=r.value)}f.put(arguments,e)}return e}return m.clearCache=function(){return f.clear()},m}function l(t){var e=Array.isArray(t[0])?t[0]:t;if(!e.every((function(t){return"function"===typeof t}))){var n=e.map((function(t){return"function"===typeof t?"function "+(t.name||"unnamed")+"()":typeof t})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return e}function f(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var a=function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];var o,c=0,i={memoizeOptions:void 0},u=r.pop();if("object"===typeof u&&(i=u,u=r.pop()),"function"!==typeof u)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof u+"]");var s=i,f=s.memoizeOptions,m=void 0===f?n:f,p=Array.isArray(m)?m:[m],d=l(r),h=t.apply(void 0,[function(){return c++,u.apply(null,arguments)}].concat(p)),v=t((function(){for(var t=[],e=d.length,n=0;n<e;n++)t.push(d[n].apply(null,arguments));return o=h.apply(null,t)}));return Object.assign(v,{resultFunc:u,memoizedResultFunc:h,dependencies:d,lastResult:function(){return o},recomputations:function(){return c},resetRecomputations:function(){return c=0}}),v};return a}var m=f(s),p=function(t){return t.contactsStore.contacts},d=function(t){return t.contactsStore.isLoading},h=function(t){return t.contactsStore.error},v=m([p,function(t){return t.filterStore.filter}],(function(t,e){if(!e)return t;var n=t.filter((function(t){return t.name.toLowerCase().trim().includes(e.toLowerCase().trim())}));return console.log("filteredContacts in selectors: ",n),n})),y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(t)).reduce((function(t,e){return t+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")},_={form:"ContactForm_form__dhl+T"},b=n(3329),g=function(){var t=(0,a.v9)(p),e=(0,a.I0)();return(0,b.jsxs)("form",{onSubmit:function(n){n.preventDefault();var r=n.target,a=r.elements,i=a.name,u=a.number,s={name:i.value,number:u.value,id:y()};t.some((function(t){return t.name.toLowerCase().trim()===s.name.toLowerCase().trim()}))?o.Notify.warning("Contact with name '".concat(i,"' has already been added!"),{timeout:6e3}):(e((0,c.uK)(s)),r.reset())},className:_.form,children:[(0,b.jsxs)("label",{className:_.formLabel,children:["Name",(0,b.jsx)("input",{className:_.formInput,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u0429\u042c\u042e\u042f\u0490\u0404\u0406\u0407\u0430-\u0449\u044c\u044e\u044f\u0491\u0454\u0456\u0457]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u0429\u042c\u042e\u042f\u0490\u0404\u0406\u0407\u0430-\u0449\u044c\u044e\u044f\u0491\u0454\u0456\u0457 ])?[a-zA-Z\u0430-\u044f\u0410-\u0429\u042c\u042e\u042f\u0490\u0404\u0406\u0407\u0430-\u0449\u044c\u044e\u044f\u0491\u0454\u0456\u0457]*)*$",title:"Only Cyrillic/Latin letters, also name may contain hyphen, apostrophe or space character",required:!0})]}),(0,b.jsxs)("label",{className:_.formLabel,children:["Number",(0,b.jsx)("input",{className:_.formInput,type:"tel",name:"number",pattern:"[+380]{4}-[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}",title:"Only digits, format +380-XX-XXX-XX-XX",required:!0})]}),(0,b.jsx)("button",{className:_.button,type:"submit",children:"Add contact"})]})},x=n(3432),j="Filter_filterLabel__+pnW-",C="Filter_filterInput__1Cysk",N=function(){var t=(0,a.I0)(),e=(0,a.v9)((function(t){return t.filterStore.filter}));return(0,b.jsxs)("label",{className:j,children:["Find contacts by name",(0,b.jsx)("input",{className:C,type:"text",name:"filter",placeholder:"Search contacts",value:e,onChange:function(e){t((0,x.T)(e.target.value))}})]})},w={contactListItem:"ContactListItem_contactListItem__A4sXv",contactInfo:"ContactListItem_contactInfo__NkIrP",deleteContactBtn:"ContactListItem_deleteContactBtn__qX3fD"},k=function(t){var e=t.name,n=t.number,r=t.id,o=(0,a.I0)();return(0,b.jsxs)("li",{className:w.contactListItem,children:[(0,b.jsxs)("div",{className:w.contactInfo,children:[(0,b.jsxs)("p",{className:w.contactName,children:[e,":"]}),(0,b.jsx)("p",{className:w.contactPhone,children:n})]}),(0,b.jsx)("button",{className:w.deleteContactBtn,type:"button",onClick:function(){return o((0,c.GK)(r))},children:"Delete"})]},r)},I="ContactList_contactList__UFVCg",L=function(){var t=(0,a.v9)(v);return(0,b.jsx)("ul",{className:I,children:0!==t.length?t.map((function(t){return(0,b.jsx)(k,{name:t.name,number:t.number,id:t.id},t.id)})):(0,b.jsx)("li",{style:{width:450,textAlign:"center"},children:'"You haven\'t added any contact yet..."'})})},A=n(3883),S="Contacts_glass__8BeeP",X="Contacts_phonebookWrp__l1MQz",F="Contacts_blockWrp__DMJvj",z="Contacts_blockTitle__bLZF5",O=function(){var t=(0,a.I0)(),e=(0,a.v9)(d),n=(0,a.v9)(h);return(0,r.useEffect)((function(){t((0,c.yF)())}),[t]),(0,b.jsxs)("div",{className:S,children:[e&&!n&&(0,b.jsx)(A.a,{}),(0,b.jsxs)("div",{className:X,children:[(0,b.jsxs)("div",{className:F,children:[(0,b.jsx)("h1",{className:z,children:"Add new contact:"}),(0,b.jsx)(g,{}),(0,b.jsx)(N,{})]}),(0,b.jsxs)("div",{className:F,children:[(0,b.jsx)("h2",{className:z,children:"Contacts"}),n&&o.Notify.failure("Oops, some error occured... Please try reloading the page",{timeout:6e3}),(0,b.jsx)(L,{})]})]})]})}}}]);
//# sourceMappingURL=249.18aa0742.chunk.js.map