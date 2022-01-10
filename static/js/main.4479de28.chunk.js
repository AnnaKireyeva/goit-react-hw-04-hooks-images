(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGalleryItem:"ImageGallery_ImageGalleryItem__3eIE7",ImageGalleryItemImage:"ImageGallery_ImageGalleryItemImage__2K00W"}},12:function(e,t,a){e.exports={Overlay:"Modal_Overlay__3wXlI",Modal:"Modal_Modal__6aOPz"}},17:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2oo54"}},18:function(e,t,a){e.exports={Button:"Button_Button__2CzZy"}},24:function(e,t,a){},46:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(4),o=a.n(r),i=(a(24),a(13)),l=a(3),s=a(5),u=(a(14),a(15)),m=a.n(u),b=(a(45),a(46),a(19)),j=a(6),h=a.n(j),g=a(1);function d(e){var t=e.onSubmit,a=Object(c.useState)(""),n=Object(l.a)(a,2),r=n[0],o=n[1];return Object(g.jsx)("header",{className:h.a.Searchbar,children:Object(g.jsxs)("form",{className:h.a.SearchForm,onSubmit:function(e){e.preventDefault(),""!==r.trim()?(t(r),o("")):s.b.warning("Enter your query!")},children:[Object(g.jsx)("button",{type:"submit",className:h.a.SearchFormButton,children:Object(g.jsx)(b.a,{className:h.a.SearchFormButtonLabel})}),Object(g.jsx)("input",{className:h.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",name:"query",value:r,onChange:function(e){o(e.currentTarget.value)}})]})})}var f=a(16),O=a.n(f),p=a(17),S=a.n(p),y=a(11),_=a.n(y),x=function(e){var t=e.clicked,a=e.imageId,c=e.imageSmall,n=(e.imageLarge,e.alt);return Object(g.jsx)("li",{className:_.a.ImageGalleryItem,onClick:t,children:Object(g.jsx)("img",{id:a,src:c,alt:n,className:_.a.ImageGalleryItemImage})})},I=function(e){var t=e.images,a=e.onClick;return Object(g.jsx)("ul",{className:S.a.ImageGallery,children:t.map((function(e){return Object(g.jsx)(x,{imageId:e.id,imageSmall:e.webformatURL,imageLadge:e.largeImageURL,alt:e.tags,clicked:a},O.a.generate())}))})},v=a(18),w=a.n(v),N=function(e){var t=e.loadMore;return Object(g.jsx)("button",{type:"button",className:w.a.Button,onClick:t,children:"Load more"})},k=a(12),F=a.n(k),B=document.querySelector("#modal-root");function G(e){var t=e.onClose,a=e.src;Object(c.useEffect)((function(){var e=function(e){"Escape"===e.code&&t()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t]);return Object(r.createPortal)(Object(g.jsx)("div",{className:F.a.Overlay,onClick:function(e){e.currentTarget===e.target&&t()},children:Object(g.jsx)("div",{className:F.a.Modal,children:Object(g.jsx)("img",{src:a,alt:""})})}),B)}function C(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(1),o=Object(l.a)(r,2),u=o[0],b=o[1],j=Object(c.useState)([]),h=Object(l.a)(j,2),f=h[0],O=h[1],p=Object(c.useState)(!1),S=Object(l.a)(p,2),y=S[0],_=S[1],x=Object(c.useState)(null),v=Object(l.a)(x,2),w=v[0],k=v[1],F=Object(c.useState)(!1),B=Object(l.a)(F,2),C=B[0],E=B[1],L=Object(c.useState)(""),q=Object(l.a)(L,2),M=q[0],P=q[1];Object(c.useEffect)((function(){a&&(_(!0),O([]),b(1),T())}),[a]);var T=function(){fetch("".concat("https://pixabay.com/api/","?q=").concat(a,"&page=").concat(u,"&key=").concat("24065015-abf144b31d6566bdcce4b2cfb","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.ok?e.json():Promise.reject(new Error("No images for this request"))})).then((function(e){var t=e.hits;if(O((function(e){return[].concat(Object(i.a)(e),Object(i.a)(t))})),b((function(e){return e+1})),0===t.length)return s.b.error("No images for your request")})).catch((function(e){return k(e)})).finally((function(){_(!1),z()}))},z=function(){window.scrollBy({top:document.documentElement.clientHeight,behavior:"smooth"})};return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)("h1",{className:"Title",children:"Image finder"}),Object(g.jsx)(d,{onSubmit:function(e){n(e)}}),w&&Object(g.jsx)("h1",{children:"Something went wrong."}),Object(g.jsx)(s.a,{autoClose:3e3}),Object(g.jsx)(I,{images:f,onClick:function(e){P(e.target.currentSrc),E(!0)}}),y&&Object(g.jsx)(m.a,{type:"BallTriangle",color:"#00BFFF",height:100,width:100,timeout:5e3,className:"Loader"}),f.length>0&&!y&&Object(g.jsx)(N,{loadMore:T}),C&&Object(g.jsx)(G,{onClose:function(e){E(!C),P(e)},src:M,alt:""})]})}o.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(C,{})}),document.getElementById("root"))},6:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__89uaR",SearchForm:"Searchbar_SearchForm__1P3Jq",SearchFormButton:"Searchbar_SearchFormButton__hovEH",SearchFormInput:"Searchbar_SearchFormInput__1rq1A"}}},[[56,1,2]]]);
//# sourceMappingURL=main.4479de28.chunk.js.map