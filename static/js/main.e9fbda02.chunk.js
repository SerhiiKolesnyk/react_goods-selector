(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(3),s=n.n(c),l=n(6),r=n(4),i=n(5),d=n(8),u=n(7),m=n(1),h=n.n(m),p=(n(14),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),b=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={selectedGoods:["Jam"]},e.goodsSelector=function(e){return 0===e.length?"No goods selected":1===e.length?"".concat(e[0]," is selected"):"".concat(e.slice(0,e.length-1).join(", "))+" and ".concat(e[e.length-1]," are selected")},e.removeGood=function(t){e.setState((function(e){return{selectedGoods:e.selectedGoods.filter((function(e){return e!==t}))}}))},e.addGood=function(t){e.setState((function(e){return{selectedGoods:[].concat(Object(l.a)(e.selectedGoods),[t])}}))},e.clearGoods=function(){e.setState({selectedGoods:[]})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.state.selectedGoods;return a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"Title"},a.a.createElement("h1",{className:"Title-text"},this.goodsSelector(t)),t.length>0&&a.a.createElement("button",{type:"button",className:"Title-button",onClick:this.clearGoods},"X")),a.a.createElement("ul",{className:"List"},p.map((function(n){return a.a.createElement("li",{key:n,className:"List-item"},a.a.createElement("span",null,n),a.a.createElement("button",{type:"button",className:h()("List-button","List-button--add",{hidden:t.includes(n)}),onClick:function(){return e.addGood(n)}},"Add"),a.a.createElement("button",{type:"button",className:h()("List-button","List-button--remove",{hidden:!t.includes(n)}),onClick:function(){return e.removeGood(n)}},"Remove"))}))))}}]),n}(a.a.Component);s.a.render(a.a.createElement(b,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.e9fbda02.chunk.js.map