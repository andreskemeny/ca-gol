(this["webpackJsonpca-gol"]=this["webpackJsonpca-gol"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),l=n.n(r),c=(n(13),n(1)),i=n(2),s=n(3),u=n(4),m=(n(6),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).runGame=function(){e.setState({isRunning:!0}),e.runIteration()},e.stopGame=function(){e.setState({isRunning:!1}),e.timeoutHandler&&(window.clearTimeout(e.timeoutHandler),e.timeoutHandler=null)},e.runIteration=function(){for(var t=e.makeEmptyBoard(),n=0;n<e.rows;n++)for(var a=0;a<e.cols;a++){var o=e.calculateNeighbors(e.board,a,n);e.board[n][a]?t[n][a]=2===o||3===o:e.board[n][a]||3!==o||(t[n][a]=!0)}e.board=t,e.setState({cells:e.makeCells()}),e.timeoutHandler=window.setTimeout((function(){e.runIteration()}),e.state.interval)},e.handleRandom=function(){for(var t=0;t<e.rows;t++)for(var n=0;n<e.cols;n++)e.board[t][n]=Math.random()>=.5;e.setState({cells:e.makeCells()})},e.handleClear=function(){e.board=e.makeEmptyBoard(),e.setState({cells:e.makeCells()})},e.handleIntervalChange=function(t){e.setState({interval:t.target.value})},e.makeEmptyBoard=function(){for(var t=[],n=0;n<e.rows;n++){t[n]=[];for(var a=0;a<e.cols;a++)t[n][a]=!1}return t},e.makeCells=function(){for(var t=[],n=0;n<e.rows;n++)for(var a=0;a<e.cols;a++)e.board[n][a]&&t.push({x:a,y:n});return t},e.getElementOffset=function(){var t=e.boardRef.getBoundingClientRect(),n=document.documentElement;return{x:t.left+window.pageXOffset-n.clientLeft,y:t.top+window.pageYOffset-n.clientTop}},e.handleClick=function(t){var n=e.getElementOffset(),a=t.clientX-n.x,o=t.clientY-n.y,r=Math.floor(a/20),l=Math.floor(o/20);r>=0&&r<=e.cols&&l>=0&&l<=e.rows&&(e.board[l][r]=!e.board[l][r]),e.setState({cells:e.makeCells()})},e.state={cells:[],interval:100,isRunning:!1},e.rows=35,e.cols=60,e.board=e.makeEmptyBoard(),e}return Object(i.a)(n,[{key:"calculateNeighbors",value:function(e,t,n){for(var a=0,o=[[-1,-1],[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1]],r=0;r<o.length;r++){var l=o[r],c=n+l[0],i=t+l[1];i>=0&&i<this.cols&&c>=0&&c<this.rows&&e[c][i]&&a++}return a}},{key:"render",value:function(){var e=this,t=this.state.cells;return o.a.createElement("div",{className:"container"},o.a.createElement("h1",{className:"title"},"Conway's Game of Life"),o.a.createElement("div",{className:"Board",style:{width:1200,height:700,backgroundSize:"".concat(20,"px ").concat(20,"px")},onClick:this.handleClick,ref:function(t){e.boardRef=t}},t.map((function(e){return o.a.createElement(d,{x:e.x,y:e.y,key:"".concat(e.x,",").concat(e.y)})}))),o.a.createElement("div",{className:"controls"},"Update every ",o.a.createElement("input",{value:this.state.interval,onChange:this.handleIntervalChange})," ms",this.state.isRunning?o.a.createElement("button",{className:"button",onClick:this.stopGame},"Stop"):o.a.createElement("button",{className:"button",onClick:this.runGame},"Run"),o.a.createElement("button",{className:"button",onClick:this.handleRandom},"Random"),o.a.createElement("button",{className:"button",onClick:this.handleClear},"Clear")))}}]),n}(o.a.Component)),d=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.x,n=e.y;return o.a.createElement("div",{className:"Cell",style:{left:"".concat(20*t+1,"px"),top:"".concat(20*n+1,"px"),width:"".concat(19,"px"),height:"".concat(19,"px")}})}}]),n}(o.a.Component),f=m;var h=function(){return o.a.createElement(f,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,n){},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.e642da69.chunk.js.map