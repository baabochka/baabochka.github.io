(this.webpackJsonpcat_mouse_game=this.webpackJsonpcat_mouse_game||[]).push([[0],{14:function(e,t,r){},9:function(e,t,r){"use strict";r.r(t);var a=r(8),c=r(3),s=r(4),n=r(6),o=r(5),i=r(1),l=r.n(i),d=r(7),u=r.n(d),h=(r(14),r(0));function v(e){return Object(h.jsx)("div",{children:Object(h.jsxs)("button",{id:e.value+"-btn",className:"token-btn",children:[Object(h.jsx)("div",{id:e.value+"_overlay",className:"overlay",children:Object(h.jsx)("img",{id:e.value+"_overlay",src:e.correctAnswer===e.value?"/images/good.png":"/images/bad.png",alt:"result"})}),Object(h.jsx)("img",{id:e.value,src:"/images/tokens/"+e.value+"_btn.png",alt:e.value,onClick:e.answerSelected?function(){}:e.onClick})]})},e.value+"-token")}function j(e){return Object(h.jsx)("div",{className:"card",children:Object(h.jsx)("img",{id:e.value+"-card",src:e.value,alt:"current_card",onClick:e.onClick})},e.value+"-card")}var b=function(e){Object(n.a)(r,e);var t=Object(o.a)(r);function r(e){var s;return Object(c.a)(this,r),(s=t.call(this,e)).handleClick=function(e){var t=e.target.id;console.log("I clicked "+t);var r=s.props.deck[s.state.cardNumber];document.getElementById(t+"_overlay").classList.add("active-overlay"),s.setState({answerSelected:!0});var a=r.substring(r.lastIndexOf("_")+1,r.lastIndexOf("."));s.setState({correctAnswer:a}),setTimeout((function(){s.setState({showAnswer:!0})}),500),setTimeout((function(){s.handleCardClick()}),3e3),t===a?(console.log("I got it right!"),s.props.updateScore()):console.log("I got it wrong!")},s.handleCardClick=function(){console.log("CHANGING CARD");var e=s.state.cardNumber+1;s.setState({showAnswer:!1,cardNumber:e,answerSelected:!1});var t=document.getElementsByClassName("active-overlay");Object(a.a)(t).forEach((function(e){return e.classList.remove("active-overlay")}))},s.state={cardNumber:0,answerSelected:!1,correctAnswer:"",showAnswer:!1},s}return Object(s.a)(r,[{key:"renderToken",value:function(e){var t=this;return Object(h.jsx)(v,{value:e,onClick:function(e){return t.handleClick(e)},answerSelected:this.state.answerSelected,correctAnswer:this.state.correctAnswer})}},{key:"render",value:function(){var e=this,t=["mouse","cat","cheese","ball","pillow"].map((function(t){return e.renderToken(t)}));return Object(h.jsxs)("div",{className:"board-row",children:[Object(h.jsx)("div",{className:"game-field",children:Object(h.jsx)(j,{value:"/images/front/"+this.props.deck[this.state.cardNumber],onClick:this.handleCardClick})}),Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"game-info",children:[Object(h.jsxs)("div",{id:"score",children:["Score: ",this.props.score]}),Object(h.jsx)("div",{id:"answer",children:"Correct answer:"}),Object(h.jsx)("div",{className:"answer",children:this.state.showAnswer?Object(h.jsx)(j,{value:"/images/back/"+this.state.correctAnswer+".png",onClick:this.handleCardClick}):""})]})}),Object(h.jsx)("div",{children:t})]})}}]),r}(l.a.Component),m=function(e){for(var t=e.slice(),r=t.length-1;r>0;r--){var a=Math.floor(Math.random()*(r+1)),c=[t[a],t[r]];t[r]=c[0],t[a]=c[1]}return t};function g(e,t){for(var r=[],a=0;a<e;a++)r.push("catmouse"+(a+1)+"_"+t+".png");return r=m(r)}function f(){for(var e=[],t=[10,13,11,11,11],r=["mouse","cat","cheese","ball","pillow"],a=[],c=0;c<5;c++)a.push(g(t[c],r[c]));for(var s="",n=Math.floor(5*Math.random()),o=[0,0,0,0,0],i=0;i<56;i++){for(;r[n]===s;)n=Math.floor(5*Math.random());e.push(a[n][o[n]]),o[n]===a[n].length-1&&(a[n]=m(a[n])),o[n]=(o[n]+1)%a[n].length,s=r[n]}return e}var O=function(e){Object(n.a)(r,e);var t=Object(o.a)(r);function r(e){var a;return Object(c.a)(this,r),(a=t.call(this,e)).state={deck:f(),score:0,bigMode:!1},a}return Object(s.a)(r,[{key:"updateScore",value:function(){console.log("Updating score");var e=this.state.score+1;this.setState({score:e})}},{key:"render",value:function(){var e=this;return Object(h.jsx)("div",{className:"game",children:Object(h.jsx)("div",{className:"game-board",children:Object(h.jsx)(b,{deck:this.state.deck,updateScore:function(){return e.updateScore()},score:this.state.score})})})}}]),r}(l.a.Component);u.a.render(Object(h.jsx)(O,{}),document.getElementById("root"))}},[[9,1,2]]]);
//# sourceMappingURL=main.6497e8f6.chunk.js.map