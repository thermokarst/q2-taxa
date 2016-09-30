webpackJsonp([0],[function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function a(t,e,n){var r=t;return n.forEach(function(e,a){if(0!==a){var o=t[n[a]],l=+o;r[n[a]]=isNaN(l)||""===o?o:l}}),r}var o=n(1),l=n(2),i=r(l),s=!0,c=!1,u=void 0;try{for(var p,f=d[Symbol.iterator]();!(s=(p=f.next()).done);s=!0){var v=p.value;v.data=(0,o.tsvParse)(v.rawdata,a)}}catch(m){c=!0,u=m}finally{try{!s&&f["return"]&&f["return"]()}finally{if(c)throw u}}(0,i["default"])(0)},,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function a(t){var e=d[t].data,n=(0,o.select)("body .container-fluid"),r=n.append("div").attr("class","viz row"),a=r.append("div").attr("class","col-lg-12"),l=a.append("div").attr("class","controls row"),u=l.append("div").attr("class","col-lg-12"),p=a.append("div").attr("class","plot row"),f=p.append("div").attr("class","col-md-12"),v=f.append("svg"),m=v.append("g");m.append("g").attr("class","x axis"),m.append("g").attr("class","y axis"),m.append("text").attr("id","y-label").attr("text-anchor","middle").style("font","12px sans-serif").text("Relative Frequency"),m.append("text").attr("id","x-label").attr("text-anchor","middle").style("font","12px sans-serif").text("Sample");var x=s.availableColorSchemes[0].scheme,h=(0,c.setupData)(d[t],v),y=h.sortedKeys,g=h.levels,b=(0,c.sort)(e,[y[0]],["Ascending"],[!1],h);(0,i["default"])(v,x,b,h);var k=u.append("div").attr("class","row");(0,s.addDownloadLinks)(k,v),(0,s.addTaxaPicker)(k,g,d[t].name),(0,s.addColorPicker)(k,v,e,h),(0,s.addSortByPicker)(k,v,e,h)}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=a;var o=n(1),l=n(3),i=r(l),s=n(10),c=n(11)},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e["default"]=t,e}function o(t,e,n,r){var a=n.sortMap,o=n.sortedSampleIDs,i=10*o.length,d=600,p={top:20,left:50,right:50,bottom:50},v=200,m=r.keys,x=t.select("g");t.property("colorScheme",e);var h=(0,l.scaleBand)().padding(.1).domain(o).range([0,i]),y=(0,l.scaleLinear)().domain([0,1]).range([d,0]).nice(),g=(0,l.scaleSequential)(s[e]).domain([0,m.length-1]),b=(0,l.axisBottom)(),k=(0,l.axisLeft)();b.scale(h).tickFormat(function(t){return a[t]}),k.scale(y),x.attr("transform","translate("+p.left+","+p.top+")");var A=(0,c.setupXAxis)(t,x,i,d,b);(0,c.setupYAxis)(t,x,d,k),(0,u["default"])(x,h,y,g,r,a);var _=(0,f["default"])(t,x,m,i,g),R=d+p.top+p.bottom+A,O=i+p.left+p.right+_,P=20*(m.length-1);t.attr("width",O<i+v?i+v:O).attr("height",R<P?P:R);var w=(0,l.select)("#tooltip");w.node().parentNode.appendChild(w.node())}Object.defineProperty(e,"__esModule",{value:!0}),e.transitionDur=void 0,e["default"]=o;var l=n(1),i=n(4),s=a(i),c=n(7),d=n(8),u=r(d),p=n(9),f=r(p);e.transitionDur=500},,,,function(t,e){"use strict";function n(t,e,n,r,o){var l=0;return t.select(".x.axis").attr("transform","translate(0,"+r+")").call(o).selectAll("text").style("text-anchor","end").attr("dx","-.8em").attr("dy","-0.5em").attr("transform",function(){var t=this.getComputedTextLength();return t>l&&(l=t),"rotate(-90)"}),e.select("#x-label").attr("transform","translate("+n/2+","+(r+l+a)+")"),l}function r(t,e,n,r){t.select(".y.axis").call(r),e.select("#y-label").attr("transform","translate(-"+a+","+n/2+")rotate(-90)")}Object.defineProperty(e,"__esModule",{value:!0}),e.setupXAxis=n,e.setupYAxis=r;var a=e.labelOffset=30},function(t,e,n){"use strict";function r(t,e){t.transition().duration(l.transitionDur).style("fill",function(t){return e(t.index)})}function a(t,e,n,a,l,i){t.selectAll("#tooltip").remove();var s=t.append("g").style("display","none").attr("id","tooltip");s.append("rect").attr("height",45).attr("fill","white");var c=s.append("text").style("text-anchor","middle").attr("font-size","12px").attr("font-weight","bold");c.append("tspan").attr("id","ttxlabel").attr("dy","1.2em"),c.append("tspan").attr("id","taxalabel").attr("dy","1.2em"),c.append("tspan").attr("id","abunlabel").attr("dy","1.2em");var d=t.selectAll(".layer").data(l.layers);d.exit().remove();var u=d.enter().append("g").attr("class","layer"),p=d.merge(u).call(r,a).property("taxa",function(t){return t.key}),f=p.selectAll("rect").data(function(t){return t});f.exit().remove();var v=f.enter().append("rect");f.merge(v).attr("x",function(t){return e(t.data[l.first])}).attr("y",function(t){return n(t[1])}).attr("height",function(t){return n(t[0])-n(t[1])}).attr("width",e.bandwidth()).on("mouseover",function(){s.style("display",null)}).on("mouseout",function(){s.style("display","none")}).on("mousemove",function(t){var e=s.select("text"),n=(0,o.select)(this.parentNode).property("taxa"),r=e.select("#ttxlabel"),a=e.select("#taxalabel"),l=e.select("#abunlabel");r.text(function(){return i[t.data.SampleID]}),a.text(function(){return n}),l.text(function(){return""+(t[1]-t[0])});var c=e.node().getBBox().width,d=c/2+5;r.attr("x",d),a.attr("x",d),l.attr("x",d),s.select("rect").attr("width",c+10);var u=(0,o.mouse)(this)[0],p=(0,o.mouse)(this)[1]-25;s.attr("transform","translate("+u+","+p+")")})}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=a;var o=n(1),l=n(2)},function(t,e,n){"use strict";function r(t,e,n){t.transition().duration(l.transitionDur).style("fill",function(t){return e(n.indexOf(t))})}function a(t,e,n,a,l){var i=t.property("stackOrder");e.selectAll(".legend").remove();var s=e.selectAll(".legend").data(i),c=s.enter().append("g").attr("class","legend").attr("id",function(t){return"id"+t}).style("font","10px sans-serif"),d=s.merge(c).attr("transform",function(t,e){return"translate(10,"+20*(n.length-e-1)+")"});c.append("rect").attr("width",18).attr("height",18).attr("selected",!1),d.selectAll("rect").attr("x",a).call(r,l,i).on("mouseover",function(){(0,o.select)(this).style("cursor","pointer")}).on("click",function(t){var e=(0,o.select)("#id"+t),r=e.select("rect"),a="true"===r.attr("selected");r.attr("selected",!a).style("stroke",function(){return a?null:"black"}).style("stroke-width",function(){return a?null:2});var l=(0,o.selectAll)(".legend rect[selected=true]").nodes().map(function(t){return n[(0,o.select)(t).datum()]});(0,o.selectAll)(".layer").attr("visibility",function(t){return 0===l.length?null:l.indexOf(t.key.trim())>-1?null:"hidden"})}),c.append("text").attr("y",9).attr("dy",".35em").attr("text-anchor","start"),d=d.selectAll("text").attr("x",a+24).text(function(t){return n[t]});var u=0;return d.each(function(){var t=this.getComputedTextLength();t>u&&(u=t)}),u}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=a;var o=n(1),l=n(2)},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function a(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function o(t,e,n,r){var a=t.selectAll(".xCtrl").nodes().map(function(t){return t.options[t.selectedIndex].value}),o=t.selectAll(".xOrder").nodes().map(function(t){return t.options[t.selectedIndex].value}),l=t.selectAll(".xLabel").nodes().map(function(t){return"hidden"!==t.type&&t.checked});return(0,y.sort)(n,a,o,l,r)}function l(t,e,n,r){var a=o(t,e,n,r);(0,h["default"])(e,e.property("colorScheme"),a,r)}function i(t,e,n,r){var a=t.append("div").attr("class","row"),o=a.append("div").attr("class","col-lg-4"),i=a.append("div").attr("class","col-lg-4"),s=a.append("div").attr("class","col-lg-4"),c=o.append("select").attr("class","xCtrl form-control").on("change",function(){s.select("label").remove();var a=(0,f.select)(this).node(),o=a.options[a.selectedIndex].value,i=r.metaData.indexOf(o)>-1;s.append("label").text(function(){return i?"Relabel X? ":""}).append("input").attr("class","xLabel").attr("type",function(){return i?"checkbox":"hidden"}).property("checked",!0).on("change",function(){l(t,e,n,r)}),l(t,e,n,r)}),d=["Ascending","Descending"];return i.append("select").attr("class","xOrder form-control").on("change",function(){l(t,e,n,r)}).selectAll("option").data(d).enter().append("option").attr("value",function(t){return t}).text(function(t){return t}),c}function s(t,e,n){var r=t.selectAll("option").data(e,function(t){return t});r.exit().remove();var a=r.enter().append("option");return r.merge(a).attr("value",function(t){return t}).property("selected",function(t){return t===n}).text(function(t){return t})}function c(t,e,n){var r=t.append("div").attr("class","col-lg-2 form-group taxaPicker");return r.append("label").text("Taxonomic Level"),r.append("select").attr("class","form-control").on("change",function(){var t=(0,f.select)("body");t.select(".container-fluid").remove(),t.insert("div",":first-child").attr("class","container-fluid"),(0,m["default"])(this.selectedIndex)}).selectAll("option").data(e).enter().append("option").attr("value",function(t){return t}).text(function(t){return t}).property("selected",function(t){return t===n}),r}function d(t,e,n,r){var a=t.append("div").attr("class","col-lg-2 form-group colorPicker");return a.append("label").text("Color Palette"),a.append("select").attr("class","form-control").on("change",function(){var a=this.options[this.selectedIndex].value,l=o(t,e,n,r);(0,h["default"])(e,a,l,r)}).selectAll("option").data(g).enter().append("option").attr("value",function(t){return t.scheme}).text(function(t){return t.name}),a}function u(t,e,n,r){var o=t.append("div").attr("class","col-lg-6 form-group sortByPicker");o.append("label").text("Sort By"),o.append("button").text("+").attr("class","btn btn-primary btn-xs").style("margin-left","10px").on("click",function(){var t=[].concat(a(r.metaData),a(r.sortedKeysReverse)),l=o.selectAll(".xCtrl");if(l.size()!==t.length+1){var c=i(o,e,n,r);s(c,t,r.sortedKeys[0])}});var l=i(o,e,n,r),c=[].concat(a(r.metaData),a(r.sortedKeysReverse));return s(l,c,r.sortedKeys[0]),o}function p(t,e){var n=t.append("div").attr("class","col-lg-2 form-group");n.append("label").html("&nbsp;"),n.append("button").text("Download SVG").attr("class","btn btn-default form-control").on("click",function(){var t=new XMLSerializer,n=t.serializeToString(e.node());n='<?xml version="1.0" standalone="no"?>\r\n'+n;var r="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(n),a=document.createElement("a");a.setAttribute("href",r),a.setAttribute("download","taxaplot.svg"),document.body.appendChild(a),a.click(),document.body.removeChild(a)})}Object.defineProperty(e,"__esModule",{value:!0}),e.availableColorSchemes=void 0,e.addTaxaPicker=c,e.addColorPicker=d,e.addSortByPicker=u,e.addDownloadLinks=p;var f=n(1),v=n(2),m=r(v),x=n(3),h=r(x),y=n(11),g=e.availableColorSchemes=[{name:"PRGn",scheme:"interpolatePRGn"},{name:"BrBG",scheme:"interpolateBrBG"},{name:"PiYG",scheme:"interpolatePiYG"},{name:"PuOr",scheme:"interpolatePuOr"},{name:"RdBu",scheme:"interpolateRdBu"},{name:"RdGy",scheme:"interpolateRdGy"},{name:"RdYlBu",scheme:"interpolateRdYlBu"},{name:"RdYlGn",scheme:"interpolateRdYlGn"},{name:"Spectral",scheme:"interpolateSpectral"}]},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function a(t,e,n){var r=t[n],a=e[n];return r===a?t.position-e.position:(0,h.ascending)(r,a)}function o(t,e,n){return(0,h.ascending)(t[n],e[n])}function l(t,e,n){var r=t[n],a=e[n];return r===a?e.position-t.position:(0,h.descending)(r,a)}function i(t,e,n){return(0,h.descending)(t[n],e[n])}function s(t,e,n){var r=t[n]/t.total,a=e[n]/e.total;return{aRel:r,bRel:a}}function c(t,e,n){var r=s(t,e,n),a=r.aRel,o=r.bRel;return a===o?t.position-e.position:(0,h.ascending)(a,o)}function u(t,e,n){var r=s(t,e,n),a=r.aRel,o=r.bRel;return(0,h.ascending)(a,o)}function p(t,e,n){var r=s(t,e,n),a=r.aRel,o=r.bRel;return a===o?e.position-t.position:(0,h.descending)(a,o)}function f(t,e,n){var r=s(t,e,n),a=r.aRel,o=r.bRel;return(0,h.descending)(a,o)}function v(t,e){for(var n=0;n<t.length;n+=1){for(var r=t[n],a=0,o=0;o<e.length;o+=1)a+=r[e[o]];r.total=a,r.position=n}}function m(t,e,n,r,s){var d=(0,g["default"])(function(){return 0}),v=void 0;e.forEach(function(t,r){var m=r===e.length-1,x=n[r],h=s.metaData.indexOf(t)>-1,y=void 0;m&&"Ascending"===x?y=h?a:c:m&&"Descending"===x?y=h?l:p:m||"Ascending"!==x?m||"Descending"!==x||(y=h?i:f):y=h?o:u,v=function(e,n){return y(e,n,t)},d=d.thenBy(v)});var m={},x=t.sort(d).map(function(t){var n=t[s.first],a=[];return e.forEach(function(e,n){r[n]&&a.push(t[e])}),m[n]=0===a.length?n:a.join("; "),n});return{sortedSampleIDs:x,sortMap:m}}function x(t,e){var n=t.data,r=t.taxa_keys,a=JSON.parse(JSON.stringify(n.columns)),o=void 0,l=void 0,i=a.filter(function(t){return r.indexOf(t)<0}),s=a.splice(0,1)[0];e.property("firstTaxa",s);var c=(0,h.stack)().keys(r).order(function(t){var n=(0,h.stackOrderDescending)(t);return o=new Array(n.length),n.forEach(function(t,e){o[e]=r[t]}),l=o.slice().reverse(),e.property("stackOrder",n),n}).offset(h.stackOffsetExpand),u=c(n);v(n,r);var p=d.map(function(t){return t.name});return{keys:r,columns:a,metaData:i,sortedKeys:o,sortedKeysReverse:l,first:s,layers:u,levels:p}}Object.defineProperty(e,"__esModule",{value:!0}),e.sort=m,e.setupData=x;var h=n(1),y=n(12),g=r(y)}]);