(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{15:function(e,t,a){e.exports=a(37)},37:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(13),c=a.n(l),m=(a(4),a(2));var o=function(e){return r.a.createElement("div",{className:"wrapper"},e.children)};var s=function(e){var t=e.firstName,a=e.lastName,n=e.image,l=e.dept,c=e.email;return e.phone,r.a.createElement("div",null,r.a.createElement("div",{className:"employeeContainer"},r.a.createElement("img",{className:"photo",src:n,alt:"Employee Photo"}),r.a.createElement("br",null),r.a.createElement("span",{className:"name"},t," ",a),r.a.createElement("br",null),r.a.createElement("span",{className:"email"}," ",c),r.a.createElement("br",null),r.a.createElement("span",{className:"dept"},l)),r.a.createElement("hr",{className:"hr"}))};var i=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,"Random Employee Info was provided by",r.a.createElement("a",{href:"https://randomuser.me/"}," randomuser.me")),r.a.createElement("p",null,"Find me on ",r.a.createElement("a",{href:"https://github.com/EDowning2000"},"Github")," "),r.a.createElement("a",{href:"https://github.com/EDowning2000/employee-tracker"},"This projects source Code."))};var u=function(){return r.a.createElement("div",{className:""},r.a.createElement("header",{className:"headerContainer"},r.a.createElement("h2",{className:"headerText"}," Employee Tracker "),r.a.createElement("h5",{className:"description"},"An application to Browse the Profiles of your Employees!")))};var p=function(e){var t=e.onSearch,a=(e.searchTerm,e.handleSortByName),n=e.handleSortByDept;return r.a.createElement("div",{className:"serachContainer"},r.a.createElement("div",{className:"buttonContainer"},r.a.createElement("button",{onClick:a,className:"sortByNameBtn"},"Name"),r.a.createElement("button",{onClick:n,className:"sortByNameBtn"},"Phone")),r.a.createElement("div",{className:"employeeSearchContainer"},r.a.createElement("form",null,r.a.createElement("input",{className:"search",onChange:t,type:"text",placeholder:"Search Employee!"}))))},f=a(14),E=a.n(f),h=function(){return E.a.get("https://randomuser.me/api/?results=50")};var d=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)([]),f=Object(m.a)(c,2),E=f[0],d=f[1],N=Object(n.useState)([]),v=Object(m.a)(N,2),b=v[0],y=v[1];return Object(n.useEffect)((function(){h().then((function(e){console.log(e.data.results),d(e.data.results),y(e.data.results)})).catch((function(e){return console.log(e)}))}),[]),r.a.createElement(o,null,r.a.createElement(u,null),r.a.createElement(p,{handleSortByName:function(e){e.preventDefault(),a?(d(E.sort((function(e,t){return e.name.first>t.name.first?-1:1}))),l(!1)):(d(E.sort((function(e,t){return e.name.first>t.name.first?1:-1}))),l(!0))},handleSortByDept:function(e){e.preventDefault(),a?(d(E.sort((function(e,t){return e.department>t.department?-1:1}))),l(!1)):(d(E.sort((function(e,t){return e.department>t.department?1:-1}))),l(!0))},onSearch:function(e){e.preventDefault();var t=e.target.value;if(t){var a=b.filter((function(e){return e.name.first.toLowerCase().startsWith(t.toLowerCase())}));d(a)}else d(b)}}),r.a.createElement("ul",null,E.map((function(e){return r.a.createElement(s,{firstName:e.name.first,lastName:e.name.last,email:e.email,image:e.picture.medium,dept:e.phone})}))),r.a.createElement(i,null))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root"))},4:function(e,t,a){}},[[15,1,2]]]);
//# sourceMappingURL=main.3e6d41ac.chunk.js.map