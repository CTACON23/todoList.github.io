(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],[,function(e,t,a){e.exports={item:"ListItem_item__19n3F",important:"ListItem_important__3KrhQ",done:"ListItem_done__4FEMt",layout:"ListItem_layout__2ovTc",layoutHide:"ListItem_layoutHide__lECi3",buttonForDone:"ListItem_buttonForDone__1Dq3D",buttonForRemove:"ListItem_buttonForRemove__3Gfox",buttonForRemoveHide:"ListItem_buttonForRemoveHide__Gh6NJ"}},function(e,t,a){e.exports={header:"Header_header__8OcE9",buttons:"Header_buttons__3wthh",activeFilter:"Header_activeFilter__3Z4Kd"}},function(e,t,a){e.exports={content:"AddItem_content__21QN_",show:"AddItem_show__xEXVT",hide:"AddItem_hide__2LAIc",desc:"AddItem_desc__SAZib"}},,,function(e,t,a){},function(e,t,a){e.exports=a(14)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(5),s=a.n(i),r=(a(12),a(13),a(2)),c=a.n(r),l=function(e){return o.a.createElement("div",{className:c.a.header},o.a.createElement("h1",null,"TODO List"),o.a.createElement("div",null,o.a.createElement("span",null,"\u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c: ",o.a.createElement("b",null,e.state.todoList.item.length)),o.a.createElement("div",{className:c.a.buttons},o.a.createElement("button",{onClick:function(){e.changeFilter("all")},className:"all"===e.state.filter?c.a.activeFilter:""},"\u0412\u0441\u0435"),o.a.createElement("button",{onClick:function(){e.changeFilter("active")},className:"active"===e.state.filter?c.a.activeFilter:""},"\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0435"),o.a.createElement("button",{onClick:function(){e.changeFilter("done")},className:"done"===e.state.filter?c.a.activeFilter:""},"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u044b\u0435"))))},m=a(6),u=a.n(m),d=a(1),h=a.n(d),p=function(e){return o.a.createElement("div",{className:"".concat(h.a.item," ").concat(e.isImportant?h.a.important:" ")},o.a.createElement("h3",null,e.name),o.a.createElement("p",null,e.value),o.a.createElement("button",{className:h.a.important,onClick:function(){e.makeImportant(e.id)}},"IMPORTANT"),o.a.createElement("button",{className:"".concat(h.a.done," ").concat(e.isDone?h.a.buttonForDone:" "),onClick:function(){e.makeDone(e.id)}},"DONE"),o.a.createElement("button",{className:"".concat(e.isDone?h.a.buttonForRemove:h.a.buttonForRemoveHide),onClick:function(){e.removeBusiness(e.id)}},"REMOVE"),o.a.createElement("div",{className:"".concat(e.isDone?h.a.layout:h.a.layoutHide)},o.a.createElement("h3",null,"DONE")))},f=function(e){var t;return t="done"===e.state.filter?e.state.todoList.item.map((function(t){return!0===t.isDone&&o.a.createElement(p,{key:t.id,value:t.description,name:t.name,isImportant:t.isImportant,isDone:t.isDone,id:t.id,makeImportant:e.makeImportant,makeDone:e.makeDone,removeBusiness:e.removeBusiness})})):"all"===e.state.filter?e.state.todoList.item.map((function(t){return o.a.createElement(p,{key:t.id,value:t.description,name:t.name,isImportant:t.isImportant,id:t.id,isDone:t.isDone,makeImportant:e.makeImportant,makeDone:e.makeDone,removeBusiness:e.removeBusiness})})):e.state.todoList.item.map((function(t){return!1===t.isDone&&o.a.createElement(p,{key:t.id,value:t.description,name:t.name,isImportant:t.isImportant,isDone:t.isDone,id:t.id,makeImportant:e.makeImportant,makeDone:e.makeDone,removeBusiness:e.removeBusiness})})),o.a.createElement("div",{className:u.a.main},t)},v=a(3),_=a.n(v),b=function(e){var t=function(){e.showModule()},a=function(){return s.current.value="on"===s.current.value?"off":"on","on"===s.current.value},n=o.a.createRef(),i=o.a.createRef(),s=o.a.createRef();return o.a.createElement("div",{className:_.a.content},o.a.createElement("button",{onClick:t},"Add the business"),o.a.createElement("div",{className:e.state.addButton?_.a.show:_.a.hide},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("span",null,"Name:"),o.a.createElement("textarea",{ref:i,rows:"1"})),o.a.createElement("li",null,o.a.createElement("span",{className:_.a.desc},"Description:"),o.a.createElement("textarea",{rows:"5",ref:n})),o.a.createElement("li",null,o.a.createElement("span",null,"Important: ")," ",o.a.createElement("input",{type:"checkbox",ref:s,onClick:a})),o.a.createElement("li",null,o.a.createElement("button",{onClick:function(){e.addBusiness(i.current.value,n.current.value,a()),t()}},"Add")))))},E=function(e){return o.a.createElement("div",{className:e.state.addButton?"grey App":"notgrey App"},o.a.createElement(l,{state:e.state,changeFilter:e.changeFilter}),o.a.createElement(f,{state:e.state,makeImportant:e.makeImportant,makeDone:e.makeDone,removeBusiness:e.removeBusiness}),o.a.createElement(b,{state:e.state,showModule:e.showModule,addBusiness:e.addBusiness}))},k={state:{addButton:!1,filter:"active",todoList:{item:[{id:0,name:"React",description:"Learn react a little bit.",isImportant:!1,isDone:!1},{id:1,name:"Coffee",description:"Make some coffee.",isImportant:!1,isDone:!1}]}},getState:function(){return this.state},_callSubscriber:function(){console.log("State changed")},removeBusiness:function(e){this.state.todoList.item.splice(e,1),this._updateId(),this._callSubscriber(this.state)},changeFilter:function(e){this.state.filter=e,this._callSubscriber(this.state)},showModule:function(){!1===this.state.addButton?this.state.addButton=!0:this.state.addButton=!1,this._callSubscriber(this.state)},makeImportant:function(e){this.state.todoList.item[e].isImportant=!this.state.todoList.item[e].isImportant,this._callSubscriber(this.state)},_updateId:function(){for(var e=0;e<this.state.todoList.item.length;e++)this.state.todoList.item[e].id=e},makeDone:function(e){this.state.todoList.item[e].isDone=!this.state.todoList.item[e].isDone,this._callSubscriber(this.state)},addBusiness:function(e,t,a){console.log(a);var n={id:this.state.todoList.item.length,name:e,description:t,isImportant:a,isDone:!1};this.state.todoList.item.push(n),this._callSubscriber(this.state)},subscribe:function(e){this._callSubscriber=e}};window.state=k.state;var I=k;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=function(e){s.a.render(o.a.createElement(E,{state:e,showModule:I.showModule.bind(I),addBusiness:I.addBusiness.bind(I),makeImportant:I.makeImportant.bind(I),makeDone:I.makeDone.bind(I),removeBusiness:I.removeBusiness.bind(I),changeFilter:I.changeFilter.bind(I)}),document.getElementById("root"))};D(I.getState()),I.subscribe(D),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.d00f5930.chunk.js.map