(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{31:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n.n(c),s=n(18),o=n.n(s),i=n(9),l=n.n(i),u=n(4),h=n(12),d=n(19),j=n(20),b=n(24),f=n(22),v="https://reactnd-books-api.udacity.com",O=localStorage.token;O||(O=localStorage.token=Math.random().toString(36).substr(-8));var p={Accept:"application/json",Authorization:O},k=function(){return fetch("".concat(v,"/books"),{headers:p}).then((function(e){return e.json()})).then((function(e){return e.books}))},x=function(e,t){return fetch("".concat(v,"/books/").concat(e),{method:"PUT",headers:Object(u.a)(Object(u.a)({},p),{},{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then((function(e){return e.json()}))},m=function(e){return fetch("".concat(v,"/search"),{method:"POST",headers:Object(u.a)(Object(u.a)({},p),{},{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then((function(e){return e.json()})).then((function(e){return e.books}))},g=(n(31),n(10)),S=n(2);var N=function(e){var t=e.items,n=e.handleSelect,c=e.shelf,r=c?t.filter((function(e){return e.shelf===c})):t;return Object(a.jsx)(a.Fragment,{children:r.map((function(e){var t=e.id,c=e.title,r=e.authors,s=e.imageLinks,o=e.shelf;return Object(a.jsx)("li",{children:Object(a.jsxs)("div",{className:"book",children:[Object(a.jsxs)("div",{className:"book-top",children:[Object(a.jsx)("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:"url(".concat(s?s.thumbnail:"https://via.placeholder.com/128x193.gif/000/fff?text=Sorry+No+Image+For+This+Book",")")}}),Object(a.jsx)("div",{className:"book-shelf-changer",children:Object(a.jsxs)("select",{onChange:function(e){return n(e,t)},value:o,children:[Object(a.jsx)("option",{value:"move",disabled:!0,children:"Move to..."}),Object(a.jsx)("option",{value:"currentlyReading",children:"Currently Reading"}),Object(a.jsx)("option",{value:"wantToRead",children:"Want to Read"}),Object(a.jsx)("option",{value:"read",children:"Read"}),Object(a.jsx)("option",{value:"none",children:"None"})]})})]}),Object(a.jsx)("div",{className:"book-title",children:c}),Object(a.jsx)("div",{className:"book-authors",children:r?r.join(" / "):"UnKnown Author"})]})},t)}))})};var y=function(e){var t=e.onShelfChange,n=e.value,c=e.searchedBooks,r=e.handleSelect;return Object(a.jsxs)("div",{className:"search-books",children:[Object(a.jsxs)("div",{className:"search-books-bar",children:[Object(a.jsx)(g.b,{to:"/",className:"close-search",children:"Close"}),Object(a.jsx)("div",{className:"search-books-input-wrapper",children:Object(a.jsx)("input",{type:"text",placeholder:"Search by title or author",onChange:t,value:n,autoFocus:!0})})]}),Object(a.jsx)("div",{className:"search-books-results",children:Object(a.jsx)("ol",{className:"books-grid",children:Object(a.jsx)(N,{items:c,handleSelect:r})})})]})},B=n(23);var w=function(e){var t=e.title;return Object(a.jsx)("div",{className:"list-books-title",children:Object(a.jsx)("h1",{children:t})})};var C=function(e){var t=e.shelfTitle,n=e.currentBooks,c=e.handleSelect,r=e.shelf;return Object(a.jsxs)("div",{className:"bookshelf",children:[Object(a.jsx)("h2",{className:"bookshelf-title",children:t}),Object(a.jsx)("div",{className:"bookshelf-books",children:Object(a.jsx)("ol",{className:"books-grid",children:Object(a.jsx)(N,{items:n,handleSelect:c,shelf:r})})})]})};var R=function(e){var t=e.currentBooks,n=e.handleSelect;return Object(a.jsxs)("div",{className:"list-books",children:[Object(a.jsx)(w,{title:"MyReads"}),Object(a.jsx)("div",{className:"list-books-content",children:[["Currently Reading","currentlyReading"],["Want to Read","wantToRead"],["Read","read"]].map((function(e){var c=Object(B.a)(e,2),r=c[0],s=c[1];return Object(a.jsx)(C,{shelfTitle:r,currentBooks:t,handleSelect:n,shelf:s},s)}))}),Object(a.jsx)("div",{className:"open-search",children:Object(a.jsx)(g.b,{to:"/search",className:"button",children:"Add a book"})})]})},T=function(e){Object(b.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={value:"",timeout:null,searchedBooks:[],currentBooks:[]},e.debounce=function(t,n){return function(a){a.persist(),e.setState({value:a.target.value}),clearTimeout(e.state.timeout);var c=setTimeout((function(){return t(a)}),n);e.setState({timeout:c})}},e.handleChange=function(){var t=Object(h.a)(l.a.mark((function t(n){var a,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.state.currentBooks,!n.target.value){t.next=7;break}return t.next=4,m(e.state.value);case 4:t.t0=t.sent,t.next=8;break;case 7:t.t0=[];case 8:c=(c=(c=t.t0).error?[]:c).map((function(e){return a.find((function(t){var n=t.id,a=t.shelf;return n===e.id&&Object(u.a)(Object(u.a)({},e),{},{shelf:a})}))||Object(u.a)(Object(u.a)({},e),{},{shelf:"none"})})),e.setState({searchedBooks:c});case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleSelect=function(){var t=Object(h.a)(l.a.mark((function t(n,a){var c,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x(a,n.target.value);case 2:return t.next=4,k();case 4:c=t.sent,r=e.state.searchedBooks.map((function(e){return c.find((function(t){var n=t.id,a=t.shelf;return n===e.id&&Object(u.a)(Object(u.a)({},e),{},{shelf:a})}))||Object(u.a)(Object(u.a)({},e),{},{shelf:"none"})})),e.setState({searchedBooks:r,currentBooks:c});case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=Object(h.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:t=e.sent,this.setState({currentBooks:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,n=t.value,c=t.searchedBooks,r=t.currentBooks,s=this.debounce(this.handleChange,200);return Object(a.jsx)(g.a,{children:Object(a.jsxs)("div",{className:"app",children:[Object(a.jsx)(S.a,{path:"/search",render:function(t){return Object(a.jsx)(y,Object(u.a)(Object(u.a)({},t),{},{onShelfChange:s,value:n,searchedBooks:c,handleSelect:e.handleSelect}))}}),Object(a.jsx)(S.a,{exact:!0,path:"/",render:function(t){return Object(a.jsx)(R,Object(u.a)(Object(u.a)({},t),{},{currentBooks:r,handleSelect:e.handleSelect}))}})]})})}}]),n}(r.a.Component);n(37);o.a.render(Object(a.jsx)(T,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.2eadce83.chunk.js.map