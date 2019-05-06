(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,a,t){e.exports=t(47)},45:function(e,a,t){},47:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(24),c=t.n(r),s=t(12),o=t(7),m=t(8),i=t(11),u=t(9),d=t(10),E=t(4),h=function(e){function a(e){var t;Object(o.a)(this,a);return(t=Object(i.a)(this,Object(u.a)(a).call(this,e))).state={transacao:{tipo:"",nome:"",valor:0}},t.setData=t.setData.bind(Object(E.a)(Object(E.a)(t))),t.add=t.add.bind(Object(E.a)(Object(E.a)(t))),t.resetTransacao=t.resetTransacao.bind(Object(E.a)(Object(E.a)(t))),t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"resetTransacao",value:function(){this.setState({transacao:{tipo:"",nome:"",valor:0}})}},{key:"setData",value:function(e){if(e.target.name){var a=this.state.transacao;a[e.target.name]=e.target.value,this.setState({transacao:a})}}},{key:"add",value:function(){var e=this.state.transacao,a=e.tipo,t=e.nome,n=e.valor;if(!a.length||!t.length||!n)return alert("Preencha todos os campos!");this.props.addTransacao(this.state.transacao),this.resetTransacao()}},{key:"render",value:function(){var e=this,a=this.state.transacao,t=a.tipo,n=a.nome,r=a.valor;return l.a.createElement("div",{className:"transacao"},l.a.createElement("h1",{className:"titulo-transacao"}," Nova transa\xe7\xe3o "),l.a.createElement("form",{onChange:function(a){return e.setData(a)}},l.a.createElement("div",null,l.a.createElement("div",{className:"tipo field"},l.a.createElement("label",{htmlFor:"tipoTransacao"}," Tipo de transa\xe7\xe3o "),l.a.createElement("select",{id:"tipoTransacao",name:"tipo",className:"input-form",value:t},l.a.createElement("option",{value:""}," Escolha "),l.a.createElement("option",{value:"-"}," Compra "),l.a.createElement("option",{value:"+"}," Venda "))),l.a.createElement("div",{className:"nome field"},l.a.createElement("label",{htmlFor:"nomeTransacao"}," Nome da mercadoria "),l.a.createElement("input",{type:"text",className:"input-form",id:"nomeTransacao",placeholder:"Input",name:"nome",value:n})),l.a.createElement("div",{className:"valor field"},l.a.createElement("label",{htmlFor:"valorTransacao"}," Valor "),l.a.createElement("input",{type:"number",className:"input-form",id:"valorTransacao",placeholder:"R$ 0,00",name:"valor",value:r}))),l.a.createElement("div",{className:"div-add-transacao"},l.a.createElement("button",{type:"button",className:"add-transacao",onClick:this.add}," Adicionar transa\xe7\xe3o "))))}}]),a}(n.Component);var v=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0).toLocaleString("pt-BR",{style:"currency",currency:"BRL"})},p=0,N=function(e){function a(e){var t;Object(o.a)(this,a);return(t=Object(i.a)(this,Object(u.a)(a).call(this,e))).state={transacao:{saldo:0,tipoSaldo:""}},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"componentWillUpdate",value:function(){p=0}},{key:"render",value:function(){return l.a.createElement("div",{className:"extrato"},l.a.createElement("h1",{className:"titulo-extrato"}," Extrato de transa\xe7\xf5es "),l.a.createElement("div",null,l.a.createElement("table",{className:"table-extrato"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null),l.a.createElement("th",{className:"th-second-extrato"}," Mercadoria "),l.a.createElement("th",{className:"th-third-extrato"}," Valor "),l.a.createElement("th",null," "))),l.a.createElement("tbody",null,this.showItens()),l.a.createElement("tfoot",null,l.a.createElement("tr",null,l.a.createElement("td",null),l.a.createElement("td",null," Total "),l.a.createElement("td",{className:"saldoFinal"},v(p)," ",l.a.createElement("br",null)," ",l.a.createElement("span",{className:"balanco-final"},"(",this.tipoSaldo(),")")),l.a.createElement("td",null))))))}},{key:"showItens",value:function(){var e=this;return this.props.listagem.map(function(a,t){return"+"==a.tipo?p+=+a.valor:p-=+a.valor,l.a.createElement("tr",{key:t},l.a.createElement("td",{className:"first-col-extrato"}," ",a.tipo," "),l.a.createElement("td",{className:"second-col-extrato"}," ",a.nome," "),l.a.createElement("td",{className:"third-col-extrato"},v(Number(a.valor))),l.a.createElement("td",{className:"last-col-extrato"},l.a.createElement("a",{href:"#",onClick:function(a){return e.props.deleteTransacao(t)}},l.a.createElement("i",{className:"fa fa-trash"}))))})}},{key:"tipoSaldo",value:function(){var e="";return e=p>0?"LUCRO":p<0?"PREJU\xcdZO":" - ",e}}]),a}(n.Component),f=function(e){function a(e){var t;Object(o.a)(this,a),t=Object(i.a)(this,Object(u.a)(a).call(this,e));var n=JSON.parse(window.localStorage.getItem("transacoes")||"[]");return t.state={listagem:n},t.deleteTransacao=t.deleteTransacao.bind(Object(E.a)(Object(E.a)(t))),t.addTransacao=t.addTransacao.bind(Object(E.a)(Object(E.a)(t))),t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"addTransacao",value:function(e){var a=this.state.listagem;a.push(e),this.setState({listagem:a}),this.persistData(this.state.listagem)}},{key:"deleteTransacao",value:function(e){window.confirm("Voc\xea tem certeza que deseja excluir essa transa\xe7\xe3o?")&&this.deleteTransacaoYes(e)}},{key:"deleteTransacaoYes",value:function(e){var a=this.state.listagem;a.splice(e,1),this.setState({listagem:a}),this.persistData(this.state.listagem)}},{key:"persistData",value:function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"transacoes";localStorage.setItem(a,JSON.stringify(e))}},{key:"render",value:function(){return l.a.createElement("div",{className:"corpo"},l.a.createElement(h,{addTransacao:this.addTransacao}),l.a.createElement(N,{listagem:this.state.listagem,deleteTransacao:this.deleteTransacao}))}}]),a}(n.Component),b=function(e){return l.a.createElement("div",{className:"configuracoes"},l.a.createElement("h1",null," CONFIGURA\xc7\xd5ES "),l.a.createElement("p",null," P\xc1GINA EM CONSTRU\xc7\xc3O "))},O=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(i.a)(this,Object(u.a)(a).call(this,e))).state={compra:0,venda:0,saldo:""},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=JSON.parse(window.localStorage.getItem("transacoes")||"[]");this.calcResumo(e)}},{key:"render",value:function(){var e=this.state,a=e.venda,t=e.compra;return l.a.createElement("div",{className:"tela-resumo"},l.a.createElement("h1",{className:"titulo-resumo"}," Resumo das transa\xe7\xf5es "),l.a.createElement("div",{className:"div-resumo"},l.a.createElement("table",{className:"table-resumo"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{className:"tipos-resumo"}," Tipo de Transa\xe7\xe3o "),l.a.createElement("th",{className:"titulo-vl-resumo"}," Valor "))),l.a.createElement("tbody",{className:"tipos-resumo"},l.a.createElement("tr",null,l.a.createElement("td",null," Venda "),l.a.createElement("td",{className:"valores-resumo"},v(Number(a)))),l.a.createElement("tr",null,l.a.createElement("td",null," Compra "),l.a.createElement("td",{className:"valores-resumo"},v(Number(t))))),l.a.createElement("tfoot",null,l.a.createElement("tr",null,l.a.createElement("td",null," Total "),l.a.createElement("td",{className:"valores-resumo"},v(t+a))))),l.a.createElement("div",{className:"tipo-saldo-res"},"(",this.state.saldo,")")))}},{key:"calcResumo",value:function(e){var a,t=0,n=0;return e.map(function(e){var a=e.tipo,l=e.valor;"-"===a?t-=+l:n+=+l}),a=-t>n?"Negativo":"Positivo",this.setState({compra:t,venda:n,saldo:a}),a}}]),a}(n.Component),g=function(e){return l.a.createElement(s.c,{history:s.d},l.a.createElement(s.b,{path:"/dashboard",component:f}),l.a.createElement(s.b,{path:"/configuracoes",component:b}),l.a.createElement(s.b,{path:"/resumo",component:O}),l.a.createElement(s.a,{from:"*",to:"/dashboard"}))},j=(t(45),t(46),function(e,a){var t=document.getElementById(e),n=t.className.split(" "),l=n.indexOf(a);-1===l&&n.push(a),l>-1&&n.splice(l,1),t.className=n.join(" ")}),T=function(e){return l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"header-content"},l.a.createElement("div",{className:"cabecalho"},l.a.createElement("a",{href:"#",className:"logo"}),l.a.createElement("h1",{className:"titulo-geral"}," Controle Financeiro "),l.a.createElement("a",{className:"show-menu",onClick:function(){return j("menuNav","hidden")}}," ",l.a.createElement("i",{className:"fa fa-bars"}))),l.a.createElement("div",{id:"menuNav",className:"tela-menu hidden"},l.a.createElement("a",{className:"button-close",onClick:function(){return j("menuNav","hidden")}}," X "),l.a.createElement("ul",{className:"lista-menu"},l.a.createElement("li",{className:"itens-menu"},l.a.createElement("a",{href:"#",className:"menu-item",onClick:function(){return j("menuNav","hidden")}}," DashBoard ")),l.a.createElement("li",{className:"itens-menu"},l.a.createElement("a",{href:"#/resumo",className:"menu-item",onClick:function(){return j("menuNav","hidden")}}," Resumo ")),l.a.createElement("li",{className:"itens-menu"},l.a.createElement("a",{href:"#/configuracoes",className:"menu-item",onClick:function(){return j("menuNav","hidden")}}," Configura\xe7\xf5es "))))))};c.a.render(l.a.createElement(function(e){return l.a.createElement("div",{className:"screen"},l.a.createElement(T,null),l.a.createElement("div",{className:"totalidade"},l.a.createElement(g,null)))},null),document.getElementById("root")||document.createElement("div"))}},[[29,1,2]]]);
//# sourceMappingURL=main.15f8e6b2.chunk.js.map