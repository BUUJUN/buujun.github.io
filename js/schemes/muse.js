document.addEventListener("DOMContentLoaded",()=>{const e="right"===CONFIG.sidebar.position,i={mouse:{},init:function(){window.addEventListener("mousedown",this.mousedownHandler.bind(this)),window.addEventListener("mouseup",this.mouseupHandler.bind(this)),document.querySelector(".sidebar-dimmer").addEventListener("click",this.clickHandler.bind(this)),document.querySelector(".sidebar-toggle").addEventListener("click",this.clickHandler.bind(this)),window.addEventListener("sidebar:show",this.showSidebar),window.addEventListener("sidebar:hide",this.hideSidebar)},mousedownHandler:function(e){this.mouse.X=e.pageX,this.mouse.Y=e.pageY},mouseupHandler:function(e){var i=e.pageX-this.mouse.X,t=e.pageY-this.mouse.Y;(Math.hypot(i,t)<20&&e.target.matches(".main")||e.target.matches("img.medium-zoom-image"))&&this.hideSidebar()},clickHandler:function(){document.body.classList.contains("sidebar-active")?this.hideSidebar():this.showSidebar()},showSidebar:function(){document.body.classList.add("sidebar-active");const t=e?"fadeInRight":"fadeInLeft";document.querySelectorAll(".sidebar .animated").forEach((e,i)=>{e.style.animationDelay=100*i+"ms",e.classList.remove(t),setTimeout(()=>{e.classList.add(t)})})},hideSidebar:function(){document.body.classList.remove("sidebar-active")}};function t(){const e=document.querySelector(".footer");var i=document.querySelector("header.header").offsetHeight+document.querySelector(".main").offsetHeight+e.offsetHeight;e.classList.toggle("footer-fixed",i<=window.innerHeight)}"remove"!==CONFIG.sidebar.display&&i.init(),t(),window.addEventListener("resize",t),window.addEventListener("scroll",t,{passive:!0})});