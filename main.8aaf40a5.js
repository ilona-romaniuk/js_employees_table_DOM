parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=r(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o,i=!0,c=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==a.return||a.return()}finally{if(c)throw o}}}}function t(e){return o(e)||a(e)||r(e)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function a(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function o(e){if(Array.isArray(e))return i(e)}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var c,l=document.querySelector("thead").rows[0],u=document.querySelector("tbody"),d=u.rows,s=-1;function f(e){var t=Number(e.replace(/[$,]/g,""));return"".concat(t)}l.addEventListener("click",function(e){var n=e.target.closest("th").cellIndex;c=s!==n?1:-1,s=n,-1===c&&(s=-1),t(d).sort(function(e,t){var r=e.cells[n].textContent,a=t.cells[n].textContent;if(/\d/.test(r)){var o=f(r),i=f(a);return(Number(o)-Number(i))*c}return r.localeCompare(a)*c}).forEach(function(e){return u.appendChild(e)})}),t(d).forEach(function(e){e.tabIndex=0,e.addEventListener("focus",function(t){e.classList.add("active")}),e.addEventListener("blur",function(t){e.classList.remove("active")})});var m=document.querySelector("body"),v=document.createElement("form");v.className="new-employee-form",m.append(v),v.innerHTML='\n  <label>\n    Name:\n    <input\n      name="name"\n      type="text"\n      data-qa="name"\n      required\n    >\n  </label>\n\n  <label>\n    Position:\n    <input\n      name="position"\n      type="text"\n      data-qa="position"\n      required\n    >\n  </label>\n\n  <label>\n    Office:\n    <select\n      name="office"\n      data-qa="office"\n      required\n    ></select>\n  </label>\n\n  <label>\n    Age:\n    <input\n      name="age"\n      type="number"\n      data-qa="age"\n      required\n    >\n  </label>\n\n  <label>\n    Salary:\n    <input\n      name="salary"\n      type="number"\n      data-qa="salary"\n      required\n    >\n  </label>\n\n  <button>Save to Table</button>\n';for(var p=document.querySelector("select"),y=["Tokyo","Singapore","London","New York","Edinburgh","San Francisco"],h=0,b=y;h<b.length;h++){var C=b[h],w=new Option("".concat(C));w.value=C.toLowerCase(),p.append(w)}var x=document.querySelector('[name="name"]'),E=document.querySelector('[name="age"]'),g=document.querySelector('[name="position"]'),L=4,S=18,q=90,A=document.querySelector("form");function I(){var e=A.querySelectorAll("label"),n=[];t(e).forEach(function(e){n.push(e.children[0])});var r=document.createElement("tr");return[].concat(n).forEach(function(e){var t=document.createElement("td");"salary"===e.name?t.textContent="$".concat(ne(e)):t.textContent=re(e),r.appendChild(t)}),r.tabIndex=0,r.addEventListener("focus",function(e){r.classList.add("active")}),r.addEventListener("blur",function(e){r.classList.remove("active")}),u.appendChild(r)}var N=function(e){return/^[a-zA-Z]+( [a-zA-Z]+){0,}$/.test(e)},T=function(e){var t=!1,n=e.value.trim();return ae(n)&&N(n)?(Y.hidden=!0,t=!0):Y.hidden=!1,t},k=function(e){var t=!1,n=e.value.trim();return n.length<L||!N(n)?Z.hidden=!1:(Z.hidden=!0,t=!0),t},O=function(e){var t=!1;return e.value<S||e.value>q?M.hidden=!1:(t=!0,M.hidden=!0),t};v.addEventListener("submit",function(e){e.preventDefault();var t=k(x),n=O(E),r=T(g);t&&n&&r&&(I(),J(x),v.reset())});var $=v.getBoundingClientRect(),j=document.createElement("div");v.append(j),j.style.position="absolute",j.style.top="".concat($.height,"px"),j.style.left=0,j.style.width="max-content";var F="Employees younger than 18 y.o and older than 90 y.o. are not allowed",z="Error",M=G("error",F,z),U="Field `Name` allows to enter only letters and not less than 4",Z=G("error",U,z),B="Warning",D="No new data were entered",H=G("warning",D,B),P="Only digits are allowed to enter in this cell",R=G("warning",P,B),W="Fill the field please with letters only",Y=G("warning",W,B);function G(e,t,n){var r=document.createElement("div");r.className="notification",r.dataset.qa="notification",r.classList.add("".concat(e)),r.style.position="static",r.style.color="white";var a=document.createElement("p"),o=document.createElement("p");return a.className="title",a.textContent="".concat(n),o.textContent="".concat(t),r.appendChild(a),r.appendChild(o),r.hidden=!0,j.appendChild(r),r}function J(e){var t=e.value,n=document.createElement("div");n.className="notification",n.dataset.qa="notification",n.classList.add("success"),n.style.position="static",n.style.color="white";var r=document.createElement("p"),a=document.createElement("p");return r.className="title",r.textContent="Accepted",a.textContent="New employe ".concat(t," is successfully added"),n.appendChild(r),n.appendChild(a),j.appendChild(n),setTimeout(function(){n.remove()},5e3),n}function K(e,t,n){t.value?e.textContent=u.rows[0].cells[e.cellIndex].cellIndex===te(X)?"$".concat(ne(t)):re(t):e.textContent=n,t.remove()}u.addEventListener("dblclick",function(e){var t=e.target.closest("td"),n=t.textContent;if(t){var r=u.rows[0].cells[t.cellIndex].cellIndex,a=document.createElement("input");a.classList.add("cell-input"),t.textContent="",t.appendChild(a),a.focus(),a.addEventListener("blur",function(){ie(t,r,n,a)}),a.addEventListener("keydown",function(e){"Enter"===e.code&&ie(t,r,n,a)})}});var Q="age",V="name",X="salary",_="position",ee="office";function te(t){var n,r=e(l.cells);try{for(r.s();!(n=r.n()).done;){var a=n.value;if(a.textContent.toLowerCase()===t.toLocaleLowerCase())return a.cellIndex}}catch(o){r.e(o)}finally{r.f()}}function ne(e){return new Intl.NumberFormat("en-IN").format(e.value)}function re(e){var t=e.value.trim();return t.charAt(0).toUpperCase()+t.slice(1)}var ae=function(e){return""!==e},oe=function(e){return/^[0-9]+$/.test(e)};function ie(e,t,n,r){var a=r.value.trim();switch(!0){case!ae(a):e.textContent=n,H.hidden=!1,setTimeout(function(){H.hidden=!0},2e3);break;case t===te(X)&&!oe(a):case t===te(Q)&&!oe(a):e.textContent=n,R.hidden=!1,setTimeout(function(){R.hidden=!0},4e3);break;case t===te(Q)&&!O(r):e.textContent=n,setTimeout(function(){M.hidden=!0},5e3);break;case t===te(V)&&!k(r):e.textContent=n,setTimeout(function(){Z.hidden=!0},5e3);break;case t===te(_)&&!N(a):case t===te(ee)&&!N(a):e.textContent=n,Y.hidden=!1,setTimeout(function(){Y.hidden=!0},3e3);break;default:K(e,r,n)}}
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.8aaf40a5.js.map