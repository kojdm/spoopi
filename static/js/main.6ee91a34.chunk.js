(this.webpackJsonpspoopi=this.webpackJsonpspoopi||[]).push([[0],[,,,,function(e,t,a){e.exports=a.p+"static/media/spoopi-arrow.0452a0a7.png"},function(e,t,a){e.exports=a(27)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),o=a.n(c),i=(a(10),a(1));a(11),a(12),a(13);var s=function(e){var t=e.spoopiPlaylist;return r.a.createElement("div",{className:"SpoopiStatus"},r.a.createElement("table",null,Object.entries(t).map((function(e){if(!e[1])return null;var t=function(e){var t=e[0],a=e[1];switch(t){case"categories":return["categories",a.map((function(e){return e.replace("_"," ")})).join(", ")];case"duration":var n=a/60,c=Math.floor(n/60);return["duration",c+"h "+(n-=60*c)+"m"];case"track_count":return["# of songs",a];case"name":return["name",a];case"spotify_url":return["spotify link",r.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},"click to open in spotify")];default:return null}}(e),a=Object(i.a)(t,2),n=a[0],c=a[1];return r.a.createElement("tr",null,r.a.createElement("td",{className:"t-key"},n),r.a.createElement("td",{className:"t-val"},c))}))))};var l=function(e){var t=e.current_page,a=e.spoopiPlaylist,c=Object(n.useState)(window.innerWidth>=800),o=Object(i.a)(c,2),l=o[0],u=o[1];return r.a.createElement("div",{className:"SpoopiNav"},r.a.createElement("div",{className:"spoopi-logo cursive"},"spoopi"),r.a.createElement("div",{className:"spoopi-description"},"(spo)tify (p)laylist t(i)mer"),r.a.createElement("div",{className:"spoopi-info"+(l?" info-clicked":""),onClick:function(){u(!l)}},"categories"===t?"?":r.a.createElement("span",null,"\u2630")),"categories"===t&&l&&r.a.createElement("div",{className:"spoopi-intro cursive"},"welcome to spoopi! here you can create timed spotify playlists. just give spoopi some categories and a duration and it'll find songs that fit into the time you gave it. have fun!"),"categories"!==t&&l&&r.a.createElement(s,{spoopiPlaylist:a}))};a(14),a(15),a(16);var u=function(e){var t=e.id,a=e.name,n=e.image_url,c=e.handleCatCount,o=e.handleCategories,i=e.isSelected;return r.a.createElement("div",{className:"CategoryBox"+(i?" category-selected":""),onClick:function(){c(i?-1:1)<=5&&o(t)}},r.a.createElement("img",{className:"category-image",src:n,alt:t}),r.a.createElement("div",{className:"category-name"},a))};a(17);var m=function(e){var t=e.content,a=e.nextable,n=e.reload,c=e.nextPage;return r.a.createElement("div",{className:"NextButton"+(a?" nextable":""),onClick:function(){if(n)return a&&c("reload");a&&c("next")}},r.a.createElement("div",{className:"next-button-content"},t,a&&r.a.createElement("span",{className:"next-arrow"},"\xbb")))};var p=function(e){var t=e.countryCode,a=e.setCountryCode,c=e.handleCategories,o=e.pageTraversal,s=e.selectedCategories,l=Object(n.useState)([]),p=Object(i.a)(l,2),d=p[0],f=p[1],g=Object(n.useState)(s.length),v=Object(i.a)(g,2),h=v[0],b=v[1];Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("allCategories")),n=localStorage.getItem("countryCode");if(e&&n)return a(n),void f(e);fetch("http://ip-api.com/json/").then((function(e){return e.json()})).then((function(e){a(e.countryCode),localStorage.setItem("countryCode",e.countryCode)})),fetch("https://spoopi-api.herokuapp.com/categories"+(t?"?country_code="+t:"")).then((function(e){return e.json()})).then((function(e){f(e.categories),localStorage.setItem("allCategories",JSON.stringify(e.categories))}))}),[t,a]);var y=function(e){var t=h+e;return t<=5&&b(t),t};return r.a.createElement("div",{className:"CategoriesContainer"},d.map((function(e){return r.a.createElement(u,{id:e.id,name:e.name,image_url:e.image_url,handleCatCount:y,handleCategories:c,isSelected:s.indexOf(e.id)>=0})})),r.a.createElement(m,{content:5===h?"5 of 5 selected":h>=1?h+" selected":"Choose up to 5 categories",nextable:h>=1,nextPage:o}))};a(18),a(19);var d=function(e){var t=e.symbol,a=e.placeholder,n=e.setTime,c=e.value,o=e.readonly,i=e.hours;return r.a.createElement("div",{className:"TimerInput"},r.a.createElement("input",{type:"number",onChange:function(e){e.target.value=e.target.value.slice(0,2);var a=parseInt(e.target.value);"h"===t&&a>12?e.target.value=12:"m"===t&&a>59&&(e.target.value=59),a<0&&(e.target.value=0),n(t,e.target.value)},placeholder:a,value:0===c?"":c,readOnly:o,onBlur:function(e){if("m"===t){var a=parseInt(e.target.value||0);(i=parseInt(i||0))<=0&&a<15&&n(t,15)}}}),r.a.createElement("div",{className:"input-symbol"},t))};var f=function(e){var t=e.duration,a=e.handleDuration,c=e.pageTraversal,o=function(){var e=t/60,a=Math.floor(e/60);return[a,e-=60*a]}(),s=Object(n.useState)(o[0]),l=Object(i.a)(s,2),u=l[0],p=l[1],f=Object(n.useState)(o[1]),g=Object(i.a)(f,2),v=g[0],h=g[1],b=function(e,t){t=parseInt(t||0),"h"===e?(p(t||null),t>=12&&h("00"),t<=0&&v<15&&h(15)):(parseInt(u||0)>=12&&(t=0),h(t||null))};return Object(n.useEffect)((function(){a(u,v)})),r.a.createElement("div",{className:"TimerContainer"},r.a.createElement(d,{symbol:"h",placeholder:"00",setTime:b,value:u}),r.a.createElement(d,{symbol:"m",placeholder:"00",setTime:b,value:v,readonly:u>=12,hours:u}),r.a.createElement(m,{content:function(){var e=[];u<=0&&v>=1?e=[v,"min"]:v<=0&&u>=1?e=[u,"hour"]:u>=1&&v>=1&&(e=[u,"hour",v,"min"]);var t=e.join(" ");return e.length<=0?"Enter a duration for your playlist":"Create a "+t+" playlist"}(),nextable:0!==u||0!==v,nextPage:c}))};a(20),a(21);var g=function(e){var t=e.content,a=e.warning;return r.a.createElement("div",{className:"SpoopiLoader"},r.a.createElement("div",{className:"spoopi-loader-spinner"}),r.a.createElement("div",{className:"spoopi-loader-content"},t),r.a.createElement("div",{className:"spoopi-loader-warning"},a||""))};a(22);var v=function(e){e.content;var t=e.nextable,a=e.name,c=e.setName,o=Object(n.useState)(!1),s=Object(i.a)(o,2),l=s[0],u=s[1],m=Object(n.useState)([]),p=Object(i.a)(m,2),d=p[0],f=p[1];Object(n.useEffect)((function(){fetch("https://random-word-api.herokuapp.com/word?swear=0&number=2").then((function(e){return e.json()})).then((function(e){f(e)}))}),[]);var g=function(){return d.map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ")};return r.a.createElement("div",{className:"AddToSpotifyButton-container"},l&&r.a.createElement("div",{className:"spoopi-name"},"Give your playlist a name:",r.a.createElement("input",{type:"text",onChange:function(e){e.target.value=e.target.value.slice(0,30),c(e.target.value)},placeholder:g()})),r.a.createElement("div",{className:"AddToSpotifyButton"+(t?" nextable":""),onClick:function(){if(t){if(!l)return u(!0);a.length<=0&&c(g());window.open("https://spoopi-api.herokuapp.com/authenticate_user","_blank","titlebar=no, status=no")}}},r.a.createElement("div",{className:"addtospotify-button-content"},"Add to Spotify",t&&r.a.createElement("span",{className:"next-arrow"},"\xbb"))))};a(23);var h=function(e){var t=e.track,a=e.useIframe;return r.a.createElement("div",{className:"TrackBox"+(a?"":" spoopi-track-box")},a?r.a.createElement("iframe",{className:"track-iframe",title:t.id,src:"https://open.spotify.com/embed/track/"+t.id,frameborder:"",allowtransparency:"true",allow:"encrypted-media"}):r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{className:"track-image",src:t.image_url,alt:t.id}),r.a.createElement("div",{className:"track-name"},t.name),r.a.createElement("div",{className:"track-artists"},t.artists.join(", "))))};var b=function(e){var t=e.duration,a=e.categories,c=e.countryCode,o=e.tracks,s=e.handleTracks,l=e.pageTraversal,u=e.setBackable,m=e.name,p=e.setName,d=e.accessToken,f=e.setPlaylist,b=Object(n.useState)(!0),y=Object(i.a)(b,2),E=y[0],k=y[1];Object(n.useEffect)((function(){if(!(t<=0||a.length<=0)){u(!1);var e="https://spoopi-api.herokuapp.com/generate_tracks?seconds="+t+"&category_ids="+a.join(",")+"&country_code="+c;fetch(e).then((function(e){return e.json()})).then((function(e){k(!1),s(e.spoopi.tracks),u(!0)}))}}),[t,a,c,s,u]),Object(n.useEffect)((function(){if(!(!d||o.length<=0||a.length<=0||t<=0||m.length<=0)){var e=o.map((function(e){return e.uri})).join(","),n={access_token:d,track_uris:e,pl_name:m,category_ids:a.join(",")};fetch("https://spoopi-api.herokuapp.com/create_playlist",{method:"POST",body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){f(e.new_playlist)})),l("next")}}),[d]);var j=o.length<=20;return r.a.createElement("div",{className:E?"":"TracksContainer"+(j?" iframe-columns":" spoopi-tracks-columns")},E?r.a.createElement(g,{content:"Generating tracks...",warning:"This could take a while for playlists with multiple categories"}):o.map((function(e){return r.a.createElement(h,{track:e,useIframe:j})})),r.a.createElement(v,{nextable:!E,nextPage:l,name:m,setName:p}))};a(24);var y=function(e){var t=e.playlist,a=e.pageTraversal,c=Object(n.useState)(!0),o=Object(i.a)(c,2),s=o[0],l=o[1];return Object(n.useEffect)((function(){var e=setTimeout((function(){l(!1)}),2e3);return function(){return clearTimeout(e)}}),[]),r.a.createElement("div",{className:"PlaylistContainer"},s?r.a.createElement(g,{content:"Fetching playlist..."}):r.a.createElement(r.a.Fragment,null,r.a.createElement("iframe",{className:"playlist-iframe",title:t.id,src:"https://open.spotify.com/embed/playlist/"+t.id,frameborder:"0",allowtransparency:"true",allow:"encrypted-media"}),r.a.createElement(m,{content:"Create another Spoopi Playlist",nextable:!0,reload:!0,nextPage:a})))};a(25);var E=function(e){var t=e.backPage;return e.backable?r.a.createElement("div",{className:"BackButton",onClick:function(){t("back")}},r.a.createElement("div",{className:"back-button-content"},r.a.createElement("span",{className:"back-arrow"},"\xab"),"Back")):null},k=(a(26),a(4)),j=a.n(k);var O=function(e){var t=e.current_page,a=Object(n.useState)(""),c=Object(i.a)(a,2),o=c[0],s=c[1];return Object(n.useEffect)((function(){var e="";return"categories"===t?e="choose which categories you want your playlist to have":"timer"===t?e="select a duration between\n15 mins and 12 hours":"tracks"===t?e="pro-tip: shorter playlists' songs can be previewed before adding to spotify":"playlist"===t&&(e="enjoy your spoopi playlist!"),s(e)}),[t]),r.a.createElement("div",{className:"SpoopiTip "+t+"-tip-container"},r.a.createElement("div",{className:"spoopi-tip-content cursive"},o),r.a.createElement("img",{className:"spoopi-arrow "+t+"-arrow",src:j.a,alt:"spoopi-arrow"}))};var N=function(e){var t=e.current_page,a=e.pageTraversal,c=e.categories,o=e.setCategories,s=e.duration,l=e.setDuration,u=e.tracks,m=e.setTracks,d=e.name,g=e.setName,v=e.playlist,h=e.setPlaylist,k=Object(n.useState)(!0),j=Object(i.a)(k,2),N=j[0],w=j[1],C=Object(n.useState)(""),S=Object(i.a)(C,2),_=S[0],x=S[1],T=Object(n.useState)(""),P=Object(i.a)(T,2),I=P[0],B=P[1];return Object(n.useEffect)((function(){window.addEventListener("message",(function(e){var t=e.data.access_token;t&&B(t)}),!1)}),[]),Object(n.useEffect)((function(){if(window.location.hash.length>0){var e=window.location.hash,t=e.substring(e.indexOf("=")+1,e.indexOf("&"));window.opener.postMessage({access_token:t}),window.close()}}),[]),r.a.createElement("div",{className:"SpoopiContainer"},"categories"===t&&r.a.createElement(p,{countryCode:_,setCountryCode:x,handleCategories:function(e){var t=c,a=t.indexOf(e);a>=0?t.splice(a,1):t.push(e),o(t)},selectedCategories:c,pageTraversal:a}),"timer"===t&&r.a.createElement(f,{duration:s,handleDuration:function(e,t){var a=60*parseInt(e||0)*60,n=60*parseInt(t||0);l(a+n)},pageTraversal:a}),"tracks"===t&&r.a.createElement(b,{duration:s,categories:c,countryCode:_,tracks:u,handleTracks:m,pageTraversal:a,setBackable:w,name:d,setName:g,accessToken:I,setPlaylist:h}),"playlist"===t&&r.a.createElement(y,{playlist:v,pageTraversal:a}),"categories"!==t&&"playlist"!==t&&r.a.createElement(E,{backPage:a,backable:N}),r.a.createElement(O,{current_page:t}))},w={current_page:"categories"},C=["categories","timer","tracks","playlist"],S=function(e,t){switch(t){case"next":var a=C.indexOf(e.current_page)+1;return{current_page:C[a]};case"back":var n=C.indexOf(e.current_page)-1;return{current_page:C[n]};case"reload":return window.location.reload();default:throw new Error}};var _=function(){var e=Object(n.useReducer)(S,w),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)([]),s=Object(i.a)(o,2),u=s[0],m=s[1],p=Object(n.useState)(0),d=Object(i.a)(p,2),f=d[0],g=d[1],v=Object(n.useState)([]),h=Object(i.a)(v,2),b=h[0],y=h[1],E=Object(n.useState)(""),k=Object(i.a)(E,2),j=k[0],O=k[1],C=Object(n.useState)({}),_=Object(i.a)(C,2),x=_[0],T=_[1],P={categories:u,duration:f,track_count:b.length,name:j,spotify_url:x.spotify_url};return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"column left"},r.a.createElement(N,{current_page:a.current_page,pageTraversal:c,categories:u,setCategories:m,duration:f,setDuration:g,tracks:b,setTracks:y,name:j,setName:O,playlist:x,setPlaylist:T})),r.a.createElement("div",{className:"column right"},r.a.createElement(l,{current_page:a.current_page,spoopiPlaylist:P})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.6ee91a34.chunk.js.map