!function(t){function e(e){for(var a,i,c=e[0],l=e[1],s=e[2],f=0,p=[];f<c.length;f++)i=c[f],r[i]&&p.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);for(u&&u(e);p.length;)p.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,c=1;c<n.length;c++){var l=n[c];0!==r[l]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={6:0},o=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise(function(e,a){n=r[t]=[e,a]});e.push(n[2]=a);var o,c=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=function(t){return i.p+""+({}[t]||t)+"-de17d0a7f5277a06efcc.js"}(t),o=function(e){l.onerror=l.onload=null,clearTimeout(s);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+a+": "+o+")");i.type=a,i.request=o,n[1](i)}r[t]=void 0}};var s=setTimeout(function(){o({type:"timeout",target:l})},12e4);l.onerror=l.onload=o,c.appendChild(l)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/build/",i.oe=function(t){throw console.error(t),t};var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var u=l;o.push([65,5]),n()}({20:function(t,e,n){"use strict";var a=n(1),r=n.n(a).a.createContext();e.a=r},34:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),o=n(23),i=n(6),c=n(11),l=n.n(c),s=n(29),u=n.n(s),f=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=.1;e&&e();var a=setInterval(function(){n>=1?clearInterval(a):(t.style.opacity=n,n+=.1)},50)},p=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=1,a=setInterval(function(){if(n<=.1)return clearInterval(a),void(e&&e());t.style.opacity=n,n-=.1},50)},d=n(20);function v(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var m,h=function(t){function e(){var n,a;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var o=arguments.length,i=Array(o),c=0;c<o;c++)i[c]=arguments[c];return n=a=v(this,t.call.apply(t,[this].concat(i))),a.state={interval:40,colors:[],canvasWidth:a.getWidth(),canvasHeight:a.getHeight()},a.resizeCanvas=function(){clearTimeout(a.resizeInterval),a.resizeInterval=setTimeout(function(){a.resetCanvas()},100)},a.resetCanvas=function(){var t=a.getHeight(),e=a.getWidth();t===a.state.canvasHeight&&e===a.state.canvasWidth||a.setState({canvasWidth:document.body.offsetWidth||window.innerWidth,canvasHeight:t},function(){a.animateCanvas()})},a.newInterval=function(){var t=Number(a.state.interval)||40;a.interval=setInterval(function(){a.animateCanvas()},1e3*t)},a.changeInterval=function(t){var e=t.target.value;a.setState({interval:e},function(){clearInterval(a.interval),a.newInterval()})},a.generatePattern=function(){return u()({width:a.state.canvasWidth,height:a.state.canvasHeight,cell_size:150})},a.canvasRef=r.a.createRef(),a.animateCanvas=function(){p(a.canvasRef.current,f.bind(null,a.canvasRef.current,a.renderCanvas))},a.renderCanvas=function(){a.pattern=a.generatePattern(),a.setState({colors:a.pattern.opts.y_colors});var t=document.querySelector('meta[name="theme-color"]');t&&t.setAttribute("content",a.pattern.opts.y_colors[3]),a.pattern.canvas(a.canvasRef.current)},v(a,n)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.componentDidMount=function(){this.renderCanvas(),this.newInterval(),window.addEventListener("resize",this.resizeCanvas)},e.prototype.componentWillUnmount=function(){clearInterval(this.interval),window.removeEventListener("resize",this.resizeCanvas)},e.prototype.getWidth=function(){return document.body.offsetWidth||window.innerWidth},e.prototype.getHeight=function(){return document.body.offsetHeight||window.innerHeight},e.prototype.render=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("canvas",{ref:this.canvasRef,style:{position:"absolute",zIndex:-1,transition:"opacity 0.8s ease",top:0,bottom:0,right:0,left:0}}),r.a.createElement(d.a.Provider,{value:{colors:this.state.colors,interval:this.state.interval,updateCanvas:this.animateCanvas,changeInterval:this.changeInterval,resetCanvas:this.resetCanvas}},this.props.children))},e}(a.Component),y=n(7),g=y.default.div.withConfig({displayName:"Loader__Wrapper"})(["background:#1e1f21;width:100%;height:100vh;z-index:111;position:relative;"]),b=y.default.div.withConfig({displayName:"Loader"})(["display:flex;justify-content:center;align-items:center;flex-direction:column;color:#fff;position:absolute;bottom:0;top:-20%;right:0;left:0;p{display:block;margin-top:50px;font-size:24px;letter-spacing:2px;font-weight:700;text-transform:uppercase;}a{color:#fff;text-decoration:none;font-size:17px;&:hover{text-decoration:underline;}}"]),w=Object(y.keyframes)(["to{transform:rotate(360deg);}"]),E=y.default.div.withConfig({displayName:"Loader__Spinner"})(["border:10px solid #1e1f21;border-left-color:#2ecc71;border-radius:50%;width:40px;height:40px;animation:"," 0.5s linear infinite;"],w),x=function(t){return t.content?r.a.createElement(g,null,r.a.createElement(b,null,r.a.createElement("p",null,t.content),r.a.createElement(i.b,{to:"/"},"Let's"," Go Back Home"))):r.a.createElement(g,null,r.a.createElement(b,null,r.a.createElement(E,null),r.a.createElement("p",null,"Loading")))},C=function(){return r.a.createElement(x,{content:"404 Page Not Found!"})},j=n(26),O=n.n(j),_=((m=["\n        @import url('https://fonts.googleapis.com/css?family=Lato:400,700');\n\n        ","\n\n        body{\n            font-family: 'Lato',sans-serif;\n            -webkit-font-smoothing: antialiased;\n            -moz-font-smoothing: antialiased;\n            font-smoothing: antialiased;\n            text-rendering: optimizeLegibility;\n            font-smooth: always;\n            overflow-x: hidden;\n        }\n\n        /*  animation */\n        .trans-enter {\n            opacity: 0.01;\n            transition: opacity 800ms ease-in;\n            transform: rotateX(0deg);\n\n            &.trans-enter-active {\n                opacity: 1;\n            }\n        }\n\n        .trans-leave {\n            opacity: 1;\n            transition: all 800ms cubic-bezier(.23,1,.32,1);\n            transform: rotateX(180deg);\n\n            &.trans-leave-active {\n                opacity: 0;\n            }\n\n        }\n\n        .transtop-enter {\n            opacity: 0.1;\n            transition: opacity 100ms linear;\n\n            &.transtop-enter-active {\n                opacity: 1;\n            }\n        }\n\n        .transtop-leave {\n            opacity: 1;\n            transition: opacity 100ms linear;\n\n            &.trans-leave-active {\n                opacity: 0;\n            }\n\n        }\n"]).raw=["\n        @import url('https://fonts.googleapis.com/css?family=Lato:400,700');\n\n        ","\n\n        body{\n            font-family: 'Lato',sans-serif;\n            -webkit-font-smoothing: antialiased;\n            -moz-font-smoothing: antialiased;\n            font-smoothing: antialiased;\n            text-rendering: optimizeLegibility;\n            font-smooth: always;\n            overflow-x: hidden;\n        }\n\n        /*  animation */\n        .trans-enter {\n            opacity: 0.01;\n            transition: opacity 800ms ease-in;\n            transform: rotateX(0deg);\n\n            &.trans-enter-active {\n                opacity: 1;\n            }\n        }\n\n        .trans-leave {\n            opacity: 1;\n            transition: all 800ms cubic-bezier(.23,1,.32,1);\n            transform: rotateX(180deg);\n\n            &.trans-leave-active {\n                opacity: 0;\n            }\n\n        }\n\n        .transtop-enter {\n            opacity: 0.1;\n            transition: opacity 100ms linear;\n\n            &.transtop-enter-active {\n                opacity: 1;\n            }\n        }\n\n        .transtop-leave {\n            opacity: 1;\n            transition: opacity 100ms linear;\n\n            &.trans-leave-active {\n                opacity: 0;\n            }\n\n        }\n"],m);var P=function(t){var e=t.children;return Object(y.injectGlobal)(_,O.a),a.Children.only(e)};var z=l()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(4)]).then(n.bind(null,146))},loading:x}),I=l()({loader:function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,145))},loading:x}),L=l()({loader:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,147))},loading:x}),W=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.render=function(){return r.a.createElement(P,null,r.a.createElement(h,null,r.a.createElement(i.a,null,r.a.createElement(i.d,null,r.a.createElement(i.c,{exact:!0,path:"/",component:z}),r.a.createElement(i.c,{exact:!0,path:"/skills",component:I}),r.a.createElement(i.c,{exact:!0,path:"/work",component:L}),r.a.createElement(i.c,{component:C})))))},e}(a.Component);Object(o.render)(r.a.createElement(W,null),document.getElementById("root"))},38:function(t,e){},39:function(t,e){},44:function(t,e){},65:function(t,e,n){n(34)}});