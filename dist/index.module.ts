function n(){return new Promise(function(n){document.addEventListener("visibilitychange",function e(){document.removeEventListener("visibilitychange",e);var i=!document.hidden;n(i)})})}function e(){return new Promise(function(n){document.addEventListener("visibilitychange",function(){document.hidden||n(!0)})})}function i(){return new Promise(function(n){document.addEventListener("visibilitychange",function(){document.hidden&&n(!0)})})}export{i as hidden,n as visibilityChange,e as visible};
//# sourceMappingURL=index.module.ts.map
