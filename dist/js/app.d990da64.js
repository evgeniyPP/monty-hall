(function(e){function t(t){for(var n,s,i=t[0],a=t[1],u=t[2],l=0,d=[];l<i.length;l++)s=i[l],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);p&&p(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,i=1;i<r.length;i++){var a=r[i];0!==o[a]&&(n=!1)}n&&(c.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},o={app:0},c=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var p=a;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"11ab":function(e,t,r){e.exports=r.p+"img/menu.fa27f31a.png"},"13b9":function(e,t,r){},"18ff":function(e,t,r){"use strict";var n=r("ea6e"),o=r.n(n);o.a},"1eac":function(e,t,r){e.exports=r.p+"img/auto.a6b1646b.png"},2395:function(e,t,r){},"3da2":function(e,t,r){"use strict";var n=r("96c5"),o=r.n(n);o.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=(r("a4d3"),r("4de4"),r("d81d"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("ade3")),c=r("b1f8"),s=r("2909"),i=r("2f62");function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){Object(o["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}n["a"].use(i["a"]);var p=function(e){return Math.floor(Math.random()*e)},l=new i["a"].Store({state:{doors:[{opened:!1,win:!1},{opened:!1,win:!1},{opened:!1,win:!1}],isPercents:!1,round:0,result:null,pickedDoor:null,doorSwaped:null,showSidebar:!0,isRestarted:!1},getters:{doors:function(e){return e.doors},isPercents:function(e){return e.isPercents},round:function(e){return e.round},result:function(e){return e.result},doorSwaped:function(e){return e.doorSwaped},showSidebar:function(e){return e.showSidebar},isRestarted:function(e){return e.isRestarted}},mutations:{changeRangeValue:function(e,t){e.result=null;for(var r=[],n=0;n<t;n++)r.push({opened:!1,win:!1});e.doors=r},startGame:function(e){var t=p(e.doors.length),r=Object(s["a"])(e.doors);r[t].win=!0,e.doors=r,e.round=1,e.showSidebar=!1},round1:function(e){if(e.doors[e.pickedDoor].win){var t=p(e.doors.length),r=function r(n){n===e.pickedDoor&&(Object(c["a"])("random"),t=p(e.doors.length),r(t))};r(t),e.doors=e.doors.map((function(r,n){return n===e.pickedDoor||n===t?r:u({},r,{opened:!0})}))}else e.doors=e.doors.map((function(t,r){return r===e.pickedDoor||t.win?t:u({},t,{opened:!0})}));e.showSidebar=!1},round2:function(e){e.doors=e.doors.map((function(e){return u({},e,{opened:!0})})),e.showSidebar=!1,e.doors[e.pickedDoor].win?e.result="win":e.result="lose"}},actions:{game:function(e,t){if(e.state.isRestarted)switch(e.state.round){case 1:e.state.pickedDoor=t,e.commit("round1"),e.state.round=2;break;case 2:e.state.round=3,e.state.doorSwaped=e.state.pickedDoor!==t,e.state.pickedDoor=t,e.commit("round2");break;default:}else switch(e.state.round){case 1:e.state.round=2,e.state.pickedDoor=t,e.state.showSidebar=!0;break;case 2:e.state.round=3,e.state.doorSwaped=e.state.pickedDoor!==t,e.state.pickedDoor=t,e.state.showSidebar=!0;break;default:}},restartGame:function(e,t){e.commit("changeRangeValue",t),e.commit("startGame"),e.state.isRestarted=!0}}}),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:{win:e.win,lose:e.lose},attrs:{id:"app"}},[r("Settings"),r("Game"),r("transition",{attrs:{name:"fade"}},[e.showSidebar?r("Sidebar",{staticClass:"sidebar"}):e._e()],1)],1)},f=[],b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrap"},[e.menuShow?n("img",{staticClass:"menu",attrs:{src:r("11ab"),alt:"menu icon"},on:{click:e.menuToggle}}):e._e(),n("transition",{attrs:{name:"fade"}},[e.isMenu?n("div",{staticClass:"settings"},[n("div",{staticClass:"item rangeWrap"},[n("label",{attrs:{for:"range"}},[e._v("Выберите количество дверей:")]),n("input",{attrs:{id:"range",type:"range",min:"3",max:"12",disabled:3!==e.round},domProps:{value:e.doors.length},on:{change:e.changeHandler}}),n("label",{staticClass:"range__num",attrs:{for:"range"}},[e._v(e._s(e.doors.length))])]),n("div",{staticClass:"item checkboxWrap"},[n("label",{staticStyle:{color:"#ccc"},attrs:{for:"checkbox"}},[e._v("Показывать вероятности?")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.isPercents,expression:"isPercents"}],attrs:{type:"checkbox",id:"checkbox",disabled:""},domProps:{checked:Array.isArray(e.isPercents)?e._i(e.isPercents,null)>-1:e.isPercents},on:{change:function(t){var r=e.isPercents,n=t.target,o=!!n.checked;if(Array.isArray(r)){var c=null,s=e._i(r,c);n.checked?s<0&&(e.isPercents=r.concat([c])):s>-1&&(e.isPercents=r.slice(0,s).concat(r.slice(s+1)))}else e.isPercents=o}}})]),3===e.round?n("div",{on:{click:e.restart}},[n("Button",{staticStyle:{background:"#fff"}},[e._v("Перезапустить")])],1):e._e()]):e._e()])],1)},O=[],v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("button",[e._t("default")],2)},m=[],g={},j=g,h=(r("bec4"),r("2877")),y=Object(h["a"])(j,v,m,!1,null,null,null),w=y.exports;function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){Object(o["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var D={name:"settings",components:{Button:w},data:function(){return{isMenu:!1,rangeValue:3}},computed:P({},Object(i["c"])(["round","doors","isPercents","isRestarted"]),{menuShow:function(){return 3===this.round||this.isRestarted}}),methods:P({},Object(i["d"])(["changeRangeValue"]),{},Object(i["b"])(["restartGame"]),{changeHandler:function(e){this.rangeValue=e.target.value,this.changeRangeValue(this.rangeValue)},menuToggle:function(){this.isMenu=!this.isMenu},restart:function(){this.restartGame(this.rangeValue),this.menuToggle()}})},k=D,S=(r("18ff"),Object(h["a"])(k,b,O,!1,null,"c15c1c8a",null)),E=S.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"grid"},e._l(e.doors,(function(t,o){return n("div",{key:o,on:{click:function(t){return e.doorPicked(o)}}},[t.opened?n("div",{staticClass:"openedWrap"},[n("img",{staticClass:"door doorOpened",attrs:{src:r("d80b"),alt:"door opened"}}),t.win?n("img",{staticClass:"price price1",attrs:{src:r("1eac"),alt:""}}):n("img",{staticClass:"price price2",attrs:{src:r("9a9f"),alt:""}})]):[n("img",{staticClass:"door doorClosed",attrs:{src:r("99f0"),alt:"door closed"}})]],2)})),0)},B=[];function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function $(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){Object(o["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var T={name:"game",computed:$({},Object(i["c"])(["doors","round"])),methods:$({},Object(i["d"])(["round1","round2"]),{},Object(i["b"])(["game"]),{doorPicked:function(e){this.game(e)}})},G=T,R=(r("efc8"),Object(h["a"])(G,x,B,!1,null,null,null)),M=R.exports,V=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wrapper"},[0===e.round?r("Text1"):2===e.round?r("Text2"):r("Text3")],1)},A=[],W=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("Парадокс Монти Холла")]),r("p",[e._v("Давайте сыграем в одну игру.")]),r("p",[e._v(" Перед Вами три двери. За одной из них новенький автомобиль. За двумя другими – козы. ")]),r("p",[e._v(" Выберите ту, за которой автомобиль, выиграете автомобиль, выберите дверь, за которой коза – выиграете... козу. ")]),r("p",[e._v(" Удачи! ")]),e._m(0),e._m(1),r("div",{on:{click:e.startGame}},[r("Button",[e._v("Начать")])],1),r("div",{on:{click:e.skip}},[r("Button",{staticClass:"skipBtn"},[e._v("Пропустить объяснение")])],1)])},H=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[r("em",[e._v("Я лично знаю, за какой дверью авто, но Вам не скажу.")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" Чтобы запустить игру, нажмите "),r("b",[e._v('"Начать"')]),e._v("."),r("br"),e._v(" Если Вы уже всё знаете про этот парадокс и пришли поиграться, нажмите "),r("b",[e._v('"Пропустить объяснение"')]),e._v(". ")])}];function J(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function F(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?J(Object(r),!0).forEach((function(t){Object(o["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):J(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var N={components:{Button:w},methods:F({},Object(i["d"])(["startGame"]),{},Object(i["b"])(["restartGame"]),{skip:function(){this.restartGame(3)}})},q=N,z=(r("e8cc"),Object(h["a"])(q,W,H,!1,null,null,null)),I=z.exports,K=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("Парадокс Монти Холла")]),r("p",[e._v("Хорошо, Вы выбрали одну из дверей.")]),r("p",[e._v(" Я не буду открывать её сразу. Вместо этого я открою другую дверь, за которой, я знаю, нет автомобиля. ")]),r("p",[e._v(" Теперь я предлагаю Вам поменять дверь. Согласны? Вам решать. ")]),r("div",{on:{click:e.round1}},[r("Button",[e._v("Продолжить")])],1)])},L=[];function Q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function U(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(r),!0).forEach((function(t){Object(o["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var X={components:{Button:w},computed:U({},Object(i["c"])(["doors"])),methods:U({},Object(i["d"])(["round1"]))},Y=X,Z=Object(h["a"])(Y,K,L,!1,null,null,null),ee=Z.exports,te=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("Парадокс Монти Холла")]),e.doorSwaped?r("p",[e._v("Вы сделали правильно, что поменяли дверь.")]):r("div",[r("p",[e._v("Вы решили не менять дверь и совершили математическую ошибку.")]),e._m(0)]),e._m(1),r("p",[e._v(' Если Вы в первый раз выбрали дверь с авто (Вам повезло и сыграли Ваши 33%), то мне без разницы, какую дверь Вам открывать, за обоими козы. Но если Вы промазали при первой попытке, я Вам, естественно, открою ту дверь, за которой нет автомобиля. Значит, та дверь, которую Вы выбрали в первый раз, как имела шанс 33%, так и осталась. А 33% двери, которую я открыл, "перетекли" двери, которую я оставил. ')]),e._m(2),e._m(3),r("p",[e._v(" Можете нажать продолжить и посмотреть свой результат, выиграли Вы в этот раз или нет. ")]),e.doorSwaped?r("p",[e._v(" Вы правы с математической точки зрения, но все еще есть шанс 33%, что Вы были правы изначально, и проиграли, поменяв дверь. ")]):r("p",[e._v(" Может, несмотря на то, что Вы ошиблись математически, все-таки сыграли Ваши 33% и Вы выиграли. ")]),r("p",[e._v(" Это не имеет значения. По крайней мере, в долгосрочной перспективе. ")]),r("div",{on:{click:e.round2}},[r("Button",[e._v("Посмотреть результат")])],1)])},re=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" Вы, наверное, думаете, почему, какая разница поменяю я дверь или нет, всё равно шансы 50 на 50. И вот тут и кроется главная ошибка! "),r("b",[e._v("Шансы не 50 на 50")]),e._v("! ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" Вы не знаете, за какой дверью спрятано авто, но, важный момент, "),r("b",[e._v("я знаю")]),e._v("! И если при первом выборе шансы у каждой двери были 33%, то во второй раз, вы выбирали не 50 на 50, а ваша дверь, как и раньше, 33%, а моя 66%. ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" Понятно? Если всё еще нет, попробуйте поиграть еще пару раз, увеличьте количество дверей для наглядности или почитайте про этот парадокс в "),r("a",{attrs:{href:"https://ru.wikipedia.org/wiki/%D0%9F%D0%B0%D1%80%D0%B0%D0%B4%D0%BE%D0%BA%D1%81_%D0%9C%D0%BE%D0%BD%D1%82%D0%B8_%D0%A5%D0%BE%D0%BB%D0%BB%D0%B0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Википедии")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" ("),r("em",[e._v("Менять количество дверей и перезапускать игру можно в настройках в верхнем левом углу")]),e._v(") ")])}];function ne(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function oe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(r),!0).forEach((function(t){Object(o["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ne(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ce={components:{Button:w},computed:oe({},Object(i["c"])(["doorSwaped"])),methods:oe({},Object(i["d"])(["round2"]))},se=ce,ie=Object(h["a"])(se,te,re,!1,null,null,null),ae=ie.exports;function ue(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function pe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ue(Object(r),!0).forEach((function(t){Object(o["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ue(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var le={components:{Text1:I,Text2:ee,Text3:ae},computed:pe({},Object(i["c"])(["round"]))},de=le,fe=(r("3da2"),Object(h["a"])(de,V,A,!1,null,"85ccfe50",null)),be=fe.exports;function Oe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ve(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Oe(Object(r),!0).forEach((function(t){Object(o["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Oe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var me={name:"app",components:{Settings:E,Game:M,Sidebar:be},computed:ve({},Object(i["c"])(["round","result","showSidebar"]),{win:function(){return 3===this.round&&"win"===this.result},lose:function(){return 3===this.round&&"lose"===this.result}})},ge=me,je=(r("7c55"),Object(h["a"])(ge,d,f,!1,null,null,null)),he=je.exports;n["a"].config.productionTip=!1,new n["a"]({store:l,render:function(e){return e(he)}}).$mount("#app")},"7c55":function(e,t,r){"use strict";var n=r("2395"),o=r.n(n);o.a},"7e4d":function(e,t,r){},"96c5":function(e,t,r){},"99f0":function(e,t,r){e.exports=r.p+"img/door-closed.c232b3c0.png"},"9a9f":function(e,t,r){e.exports=r.p+"img/goat.e9b00002.png"},bec4:function(e,t,r){"use strict";var n=r("cbdc"),o=r.n(n);o.a},cbdc:function(e,t,r){},d80b:function(e,t,r){e.exports=r.p+"img/door-opened.55acf4a2.png"},e8cc:function(e,t,r){"use strict";var n=r("13b9"),o=r.n(n);o.a},ea6e:function(e,t,r){},efc8:function(e,t,r){"use strict";var n=r("7e4d"),o=r.n(n);o.a}});
//# sourceMappingURL=app.d990da64.js.map