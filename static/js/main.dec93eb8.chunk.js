(this.webpackJsonpreact_test=this.webpackJsonpreact_test||[]).push([[0],{11:function(e,t,a){e.exports=a(16)},16:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(9),s=a.n(c),l=a(10),i=a(3),r=a(4),d=a(6),m=a(5),u=a(1),h=a(7),p=a(2),f=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(d.a)(this,Object(m.a)(t).call(this))).state={text:"",complete:!1},e.handleChange=e.handleChange.bind(Object(u.a)(e)),e}return Object(h.a)(t,e),Object(r.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(p.a)({},a,n))}},{key:"setdata",value:function(){if(""===this.state.text)alert("Please enter in the text box.");else{var e={status_task:this.state.text,complete:this.state.complete};fetch("https://database-todo-list-app.herokuapp.com/todos",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}),this.setState({text:""})}}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"form-inline ml-5"},o.a.createElement("input",{className:"form-control",name:"text",value:this.state.text,onChange:this.handleChange,placeholder:"your todo List"}),o.a.createElement("button",{className:"btn btn-success ml-2",onClick:function(){e.setdata()}},"Add"))}}]),t}(o.a.Component);var b=function(e){return o.a.createElement("button",{className:"btn btn-sm btn-outline-danger",onClick:function(){return e.delete(e.id)}},"remove")};var v=function(e){return o.a.createElement("div",{className:"row mb-1"},o.a.createElement("div",{className:"col-9"},o.a.createElement("label",{className:"text-left align-self-center",style:e.item.complete?{color:"#cdcdcd"}:null},e.item.status_task)),o.a.createElement("div",{className:"col-1 form-check text-center align-self-center"},o.a.createElement("input",{className:"",type:"checkbox",checked:e.item.complete,onChange:function(){return e.handleChange(e.item.id)}})),o.a.createElement("div",{className:"col-2 align-self-center"},e.item.complete?o.a.createElement(b,{id:e.item.id,delete:e.delete}):null))},g=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(d.a)(this,Object(m.a)(t).call(this))).state={isLoading:!0,todos:null},e.handleChange=e.handleChange.bind(Object(u.a)(e)),e}return Object(h.a)(t,e),Object(r.a)(t,[{key:"handleChange",value:function(e){this.setState((function(t){return{todos:t.todos.map((function(t){return t.id===e?(fetch("https://database-todo-list-app.herokuapp.com/todos/".concat(e,"/"),{method:"PATCH",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({complete:!t.complete})}),Object(l.a)({},t,{complete:!t.complete})):t}))}}))}},{key:"setData",value:function(){var e=this;fetch("https://database-todo-list-app.herokuapp.com/todos").then((function(e){return e.json()})).then((function(t){e.setState({isLoading:!1,todos:t})}))}},{key:"deleteItem",value:function(e){console.log("remove id "+e),fetch("https://database-todo-list-app.herokuapp.com/todos/".concat(e,"/"),{method:"Delete",headers:{Accept:"application/json","Content-Type":"application/json"}})}},{key:"componentDidMount",value:function(){this.setData()}},{key:"shouldComponentUpdate",value:function(e,t,a){return t.todos!==this.state.todos&&(t!==this.state?(this.setState({isLoading:!0}),!0):void 0)}},{key:"componentDidUpdate",value:function(e,t,a){this.setData()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"card ml-auto mr-auto mt-5",style:{maxWidth:"50rem"}},o.a.createElement("div",{className:"card-header"},o.a.createElement("div",{className:"form-row"},o.a.createElement("div",{className:"col"},o.a.createElement("h1",null,"ToDo List")),o.a.createElement("div",{className:"col align-self-center"},o.a.createElement(f,null)))),o.a.createElement("div",{className:"card-body"},this.state.isLoading?"Dataloading...":this.state.todos.map((function(t){return o.a.createElement(v,{key:t.id,item:t,handleChange:e.handleChange,delete:e.deleteItem})}))))}}]),t}(o.a.Component);s.a.render(o.a.createElement(g,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.dec93eb8.chunk.js.map