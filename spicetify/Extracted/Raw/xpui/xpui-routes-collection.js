"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[6309],{85967:(e,t,a)=>{a.d(t,{u:()=>A});var n=a(59496),s=a(84875),r=a.n(s),i=a(65748),l=a(73549),o=a(61873),c=a(87088);const u="FvfvGU3jvHRskUU9v9_8",d="Q9AlbZn2EGzy3MTWXa8X",m="mxmxS0y8LiwSs5nueKPT",p="GXxVAveNFStY3pBI_NO4",h="eHcXC2s97InYP7rMNT0H";var g=a(4637);const A=(0,n.memo)((function(e){const{children:t,message:a,title:n,linkTitle:s,linkTo:A,onClick:x,renderInline:f=!1}=e,{isXSOnly:E,isSMOnly:C}=(0,o.e)(),y=E||C;return(0,g.jsxs)("section",{className:r()(u,{[d]:f}),children:[t,(0,g.jsx)(i.D,{as:"h1",variant:y?"cello":"alto",className:p,children:n}),(0,g.jsx)(i.D,{variant:y?"mesto":"ballad",className:h,children:a}),s&&(A||x)&&(0,g.jsx)(l.D,{colorSet:"invertedLight",className:m,href:A,onClick:x,component:c.Z,children:s})]})}))},41988:(e,t,a)=>{a.d(t,{n:()=>_});var n=a(59496),s=a(84875),r=a.n(s),i=a(92053),l=a(65748),o=a(15384),c=a(10523),u=a(60378),d=a(17657),m=a(59125),p=a(82340);var h=a(27203),g=a(90929),A=a(16551);const x="main-topBar-contentArea",f="queue-tabBar-headerIsCentered",E="queue-tabBar-headerItem",C="queue-tabBar-moreButton",y="queue-tabBar-moreButtonActive",b="yxf_6IsQEmHjijEBUMTP",L="queue-tabBar-active",j="queue-tabBar-headerItemLink",T="queue-tabBar-header",S="queue-tabBar-chevron";var D=a(4637);const I=({items:e,activeItemId:t})=>(0,D.jsx)(g.v,{children:e.map((e=>e.disabled?(0,D.jsx)(A.s,{disabled:!0,role:"menuitemradio",className:b,onClick:e.handleClick,children:e.title},e.uri):(0,D.jsx)(A.s,{role:"menuitemradio",to:e.to,end:!0,"aria-checked":e.itemId===t,className:({isActive:e})=>r()(b,{[L]:e}),onClick:e.handleClick,children:e.title},e.uri)))});var k=a(65138);const _=(0,n.memo)((function({isCentered:e,links:t,landmarkLabel:a,className:s}){const g=(0,n.useRef)(null),[A,b]=(0,n.useState)([]),[_,v]=(0,n.useState)(0),[R,O]=(0,n.useState)([]),P=function(){const[e,t]=(0,n.useState)(window.innerWidth),{scrollNodeChildRef:a}=(0,n.useContext)(m.VX),s=(0,d.y1)((e=>{e?.width&&t(e.width)}),250);return(0,p.y)({refOrElement:a,observeOnly:"width",onResize:s}),e}()??1/0,{pathname:N}=(0,i.TH)(),B=t.find((e=>e.to===N));return(0,n.useEffect)((()=>{g.current&&v(g.current.clientWidth)}),[P]),(0,n.useEffect)((()=>{if(!g.current)return;const e=Array.from(g.current.children).map((e=>e.clientWidth));b(e)}),[t]),(0,n.useEffect)((()=>{if(!g.current)return;if(A.slice(0,-1).reduce(((e,t)=>e+t),0)<=_)return void O([]);const e=A.reduce(((e,t)=>e>t?e:t),0),t=[];let a=e;A.forEach(((e,n)=>{_>=a+e?a+=e:t.push(n)})),O(t)}),[_,A]),(0,D.jsx)("nav",{className:r()(s,x),"aria-label":a,children:(0,D.jsxs)("ul",{className:e?f:T,ref:g,children:[t.filter(((e,t)=>!R.includes(t))).map((e=>{const t=e?.render??(e=>e);return(0,D.jsx)(n.Fragment,{children:t((0,D.jsx)("li",{className:E,children:e.disabled?(0,D.jsx)("div",{className:j,children:(0,D.jsx)(l.D,{variant:"mestoBold",children:e.title})}):(0,D.jsx)(k.O,{end:!0,className:({isActive:e})=>r()(j,{[L]:e}),to:e.to,onClick:e.handleClick,children:(0,D.jsx)(l.D,{variant:"mestoBold",children:e.title})})}))},e.to)})),R.length||0===A.length?(0,D.jsx)("li",{className:E,children:(0,D.jsx)(h.xV,{renderInline:!0,menu:(0,D.jsx)(I,{items:t.filter(((e,t)=>R.includes(t))),activeItemId:B?.itemId}),children:(e,t,a)=>(0,D.jsxs)("button",{className:r()(C,{[y]:B}),type:"button",onClick:t,ref:a,children:[(0,D.jsx)(l.D,{variant:"mestoBold",children:B?B.title:u.ag.get("more")}),e?(0,D.jsx)(o.U,{iconSize:16,className:S,"aria-hidden":"true"}):(0,D.jsx)(c.i,{iconSize:16,className:S,"aria-hidden":"true"})]})})}):null]})})}))},17980:(e,t,a)=>{a.d(t,{$:()=>o,Q:()=>l});var n=a(59496),s=a(17970),r=a(78293),i=a(4637);const l=(0,n.createContext)({setSortState:()=>{throw new Error("setSortState must be used within a LibrarySortProvider")},sortState:r.oT.ADDED_AT}),o=n.memo((function({uri:e,children:t,defaultSortOption:a}){return(0,i.jsx)(s.r,{uri:e,defaultState:a,sortContext:l,children:t})}))},78293:(e,t,a)=>{a.d(t,{Aq:()=>d,Bf:()=>D,EY:()=>x,G5:()=>C,JV:()=>I,MY:()=>o,Ru:()=>c,ZP:()=>f,a6:()=>g,aY:()=>j,e3:()=>h,ei:()=>l,o$:()=>m,oT:()=>i,pT:()=>L,rJ:()=>S,u3:()=>T,w0:()=>y});var n=a(60378),s=a(10952),r=a(73084);let i;!function(e){e.SHOW_ALPHABETICAL="SHOW_ALPHABETICAL",e.BOOK_ALPHABETICAL="BOOK_ALPHABETICAL",e.EPISODE_ALPHABETICAL="EPISODE_ALPHABETICAL",e.PLAYLIST_ALPHABETICAL="PLAYLIST_ALPHABETICAL",e.ALBUM_ALPHABETICAL="ALBUM_ALPHABETICAL",e.ADDED_AT="ADDED_AT",e.CREATOR_NAME="CREATOR_NAME",e.CREATOR_NAME_ALPHABETICAL="CREATOR_NAME_ALPHABETICAL",e.ALBUM_CREATOR_NAME="ALBUM_CREATOR_NAME",e.RECENTLY_PLAYED="RECENTLY_PLAYED",e.MOST_RELEVANT="MOST_RELEVANT",e.CUSTOM_ORDER="CUSTOM_ORDER"}(i||(i={}));const l={"show-alphabetical":i.SHOW_ALPHABETICAL,"book-alphabetical":i.BOOK_ALPHABETICAL,"episode-alphabetical":i.EPISODE_ALPHABETICAL,"playlist-alphabetical":i.PLAYLIST_ALPHABETICAL,"album-alphabetical":i.ALBUM_ALPHABETICAL,"recently-added":i.ADDED_AT,"creator-name":i.CREATOR_NAME,"creator-name-alphabetical":i.CREATOR_NAME_ALPHABETICAL,"album-creator-name":i.ALBUM_CREATOR_NAME,"recently-played":i.RECENTLY_PLAYED,"playlist-most-relevant":i.MOST_RELEVANT,"playlist-custom-order":i.CUSTOM_ORDER},o={[i.RECENTLY_PLAYED]:{key:"recently-played",get value(){return n.ag.get("collection.sort.recently-played")}},[i.ADDED_AT]:{key:"recently-added",get value(){return n.ag.get("collection.sort.recently-added")}},[i.SHOW_ALPHABETICAL]:{key:"show-alphabetical",get value(){return n.ag.get("collection.sort.alphabetical")}},[i.BOOK_ALPHABETICAL]:{key:"book-alphabetical",get value(){return n.ag.get("collection.sort.alphabetical")}},[i.EPISODE_ALPHABETICAL]:{key:"episode-alphabetical",get value(){return n.ag.get("collection.sort.alphabetical")}},[i.PLAYLIST_ALPHABETICAL]:{key:"playlist-alphabetical",get value(){return n.ag.get("collection.sort.alphabetical")}},[i.ALBUM_CREATOR_NAME]:{key:"album-creator-name",get value(){return n.ag.get("collection.sort.creator")}},[i.CREATOR_NAME]:{key:"creator-name",get value(){return n.ag.get("collection.sort.creator")}},[i.CREATOR_NAME_ALPHABETICAL]:{key:"creator-name-alphabetical",get value(){return n.ag.get("collection.sort.alphabetical")}},[i.ALBUM_ALPHABETICAL]:{key:"album-alphabetical",get value(){return n.ag.get("collection.sort.alphabetical")}},[i.MOST_RELEVANT]:{key:"playlist-most-relevant",get value(){return n.ag.get("collection.sort.most-relevant")}},[i.CUSTOM_ORDER]:{key:"playlist-custom-order",get value(){return n.ag.get("collection.sort.custom-order")}}},c=[i.ADDED_AT,i.ALBUM_ALPHABETICAL,i.CREATOR_NAME],u={[i.ADDED_AT]:{field:s.lY.ADDED_AT,order:s.As.DESC},[i.ALBUM_ALPHABETICAL]:{field:s.lY.NAME,order:s.As.ASC},[i.CREATOR_NAME]:{field:s.lY.ARTIST_NAME,order:s.As.ASC}};const d=e=>{if(function(e){return c.includes(e)}(e))return u[e]},m=[i.ADDED_AT,i.CREATOR_NAME_ALPHABETICAL],p={[i.ADDED_AT]:{field:s.hx.ADDED_AT,order:s.As.DESC},[i.CREATOR_NAME_ALPHABETICAL]:{field:s.hx.NAME,order:s.As.ASC}};const h=e=>{if(function(e){return m.includes(e)}(e))return p[e]},g=[i.ADDED_AT,i.SHOW_ALPHABETICAL],A={[i.ADDED_AT]:{field:s.aW.ADDED_AT,order:s.As.DESC},[i.SHOW_ALPHABETICAL]:{field:s.aW.NAME,order:s.As.ASC}};const x=e=>{if(function(e){return g.includes(e)}(e))return A[e]},f=[i.ADDED_AT,i.BOOK_ALPHABETICAL],E={[i.ADDED_AT]:s.VN.ADDED_AT,[i.BOOK_ALPHABETICAL]:s.VN.NAME};const C=e=>{if(function(e){return f.includes(e)}(e))return E[e]},y=[i.MOST_RELEVANT,i.RECENTLY_PLAYED,i.ADDED_AT,i.PLAYLIST_ALPHABETICAL,i.CUSTOM_ORDER],b={[i.ADDED_AT]:{field:r.bD.ADDED_AT,order:r.As.DESC},[i.RECENTLY_PLAYED]:{field:r.bD.RECENTLY_PLAYED,order:r.As.ASC},[i.PLAYLIST_ALPHABETICAL]:{field:r.bD.NAME,order:r.As.ASC},[i.MOST_RELEVANT]:{field:r.bD.RELEVANCE,order:r.As.DESC},[i.CUSTOM_ORDER]:void 0};const L=e=>{if(function(e){return y.includes(e)}(e))return b[e]},j=i.ADDED_AT,T=i.ADDED_AT,S=i.ADDED_AT,D=i.MOST_RELEVANT,I=i.ADDED_AT},87772:(e,t,a)=>{a.d(t,{h:()=>p});var n=a(59496),s=a(76847),r=a(99811),i=a(77741),l=a(22525),o=a(17980),c=a(78293),u=a(4637);const d=n.memo((function({sortOptions:e,onSort:t}){const{sortState:a,setSortState:s}=(0,n.useContext)(o.Q),r=(0,n.useCallback)((e=>{const a=c.ei[e];t?.(a),s(a)}),[t,s]),i=e.map((e=>c.MY[e])),d=c.MY[a];return(0,u.jsx)(l.A,{options:i,onSelect:r,selected:d})})),m="collection-searchBar-searchBar",p=n.memo((function({canSort:e,canFilter:t,filterPlaceholder:a,sortOptions:l}){const{spec:o,logger:c}=(0,i.fU)(s.createDesktopSearchBarEventFactory,{}),p=(0,n.useCallback)((()=>{c.logInteraction(o.filterFieldFactory().keyStrokeFilter())}),[c,o]),h=(0,n.useCallback)((()=>{c.logInteraction(o.filterFieldFactory().hitClearFilter())}),[c,o]),g=(0,n.useCallback)((()=>{c.logInteraction(o.sortButtonFactory().hitSort())}),[c,o]);return(0,u.jsxs)("div",{className:m,children:[t?(0,u.jsx)(n.Suspense,{fallback:null,children:(0,u.jsx)(r.K,{placeholder:a,onFilter:p,onClear:h})}):null,e?(0,u.jsx)(d,{sortOptions:l,onSort:g}):null]})}))},60241:(e,t,a)=>{a.d(t,{$:()=>n.$,Q:()=>n.Q});var n=a(17980)},62605:(e,t,a)=>{a.d(t,{Aq:()=>n.Aq,Bf:()=>n.Bf,EY:()=>n.EY,G5:()=>n.G5,JV:()=>n.JV,Ru:()=>n.Ru,ZP:()=>n.ZP,a6:()=>n.a6,aY:()=>n.aY,e3:()=>n.e3,o$:()=>n.o$,oT:()=>n.oT,pT:()=>n.pT,rJ:()=>n.rJ,u3:()=>n.u3,w0:()=>n.w0});var n=a(78293)},16890:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Ve});var n=a(59496),s=a(90641),r=a(92053),i=a(69062),l=a(79334),o=a(60378),c=a(62256),u=a(68277),d=a(78241),m=a(9020),p=a(65748),h=a(84225),g=a(96103),A=a(84875),x=a.n(A),f=a(75615),E=a(59125),C=a(5633),y=a(60806),b=a(56094),L=a(4637);const j=(0,n.memo)((function({index:e}){return(0,L.jsx)(y.C,{index:e,headerText:"",uri:"",renderCardImage:()=>(0,L.jsx)(b.x,{images:[]}),featureIdentifier:"unknown"})})),T={delayedVisibility:"lA3jnNwnLc3CoYKT06Vz"};function S({renderCard:e,nrCards:t,fetchData:a,limit:s=50,cardGridApiRef:r}){const{scrollNodeRef:i}=(0,n.useContext)(E.VX),{getItems:l,nrValidItems:o,invalidateCache:c,hasItems:u}=(0,C.Q)({nrItems:t,fetch:a,limit:s});(0,n.useImperativeHandle)(r,(()=>({update:()=>c()})));return(0,L.jsx)("div",{className:x()({[T.delayedVisibility]:!u}),children:(0,L.jsx)(f.u,{renderItems:(t,a,n)=>l(t,a).map(((a,s)=>(a?e(a,t+s,n):null)??(0,L.jsx)(j,{index:s},t+s))),scrollNodeRef:i,nrItems:o,estimatedItemMaxHeight:250})})}var D=a(85967),I=a(37277),k=a(12646),_=a(93452),v=a(78061),R=a(98908),O=a(77741),P=a(16078),N=a(18415);const B={offset:0,limit:1},w=()=>{const e=(0,n.useContext)(R.H);return(e=>{const[t,a]=(0,n.useState)(null),s=(0,n.useCallback)((async()=>{if(!e)return;const t=await e();a(t?.totalLength||0)}),[e]);return(0,n.useEffect)((()=>{null===t&&s()}),[t,s]),{total:t}})((0,n.useCallback)((()=>e?e?.getShows(B):Promise.resolve({totalLength:0})),[e]))},M=()=>{const e=(0,n.useContext)(R.H),[t,a]=(0,n.useState)(null),s=(0,n.useCallback)((async()=>{if(!e)return;const t=await(e?.getBooks(B));a(t?.totalLength||0)}),[e]);return(0,n.useEffect)((()=>{null===t&&s()}),[t,s]),(0,N.b)(P.EW.UPDATE,s),{total:t}};var H=a(87772),Y=a(60241),U=a(62605),F=a(76160);const W=n.memo((function({nrAlbums:e}){const t=(0,n.useContext)(R.H),{filter:a}=(0,n.useContext)(k.fo),{sortState:s}=(0,n.useContext)(Y.Q),r=(0,n.useRef)(null),{spec:i,UBIFragment:c}=(0,O.fU)(h.createDesktopLibraryEventFactory,{data:{uri:"spotify:app:collection:albums",identifier:l.Wg.YOURLIBRARY_ALBUMS}}),u=(0,n.useMemo)((()=>i.headerFactory()),[i]),d=(0,n.useCallback)((async(e,n)=>{const r=await t.getAlbums({offset:e,limit:n,filter:a,sort:(0,U.Aq)(s)});return{items:r.items,totalLength:r.totalLength}}),[t,a,s]),m=(0,n.useCallback)(((e,t)=>(0,L.jsx)(v.ZP,{value:"card",index:t,children:(0,L.jsx)(g.r,{index:t,uri:e.uri,name:e.name,images:e.images,artists:e.artists,sharingInfo:e.sharingInfo})},e.uri)),[]);return(0,L.jsxs)(c,{spec:i,children:[(0,L.jsx)(c,{spec:u,children:(0,L.jsxs)("div",{className:F.Z.header,children:[(0,L.jsx)(p.D,{as:"h1",variant:"canon",children:o.ag.get("albums")}),(0,L.jsx)(n.Suspense,{fallback:null,children:(0,L.jsx)(H.h,{canSort:t.getCapabilities().canSort,canFilter:t.getCapabilities().canFilter,filterPlaceholder:o.ag.get("collection.filter.albums"),sortOptions:U.Ru})})]})}),(0,L.jsx)(S,{nrCards:e,renderCard:m,fetchData:d,cardGridApiRef:r})]})})),V=n.memo((function(){const{total:e}=(()=>{const e=(0,n.useContext)(R.H),[t,a]=(0,n.useState)(null),s=(0,n.useCallback)((async()=>{if(!e)return;const t=await(e?.getAlbums(B));a(t?.totalLength||0)}),[e]);return(0,n.useEffect)((()=>{null===t&&s()}),[t,s]),(0,N.b)(P.EW.UPDATE,s),{total:t}})();return null===e?(0,L.jsx)(I.h,{hasError:!1,errorMessage:o.ag.get("error.request-collection-albums-failure")}):e?(0,L.jsx)(W,{nrAlbums:e}):(0,L.jsx)(D.u,{linkTo:"/search",linkTitle:o.ag.get("collection.empty-page.albums-cta"),message:o.ag.get("collection.empty-page.albums-subtitle"),title:o.ag.get("collection.empty-page.albums-title"),children:(0,L.jsx)(_.t,{type:"album"})})})),Z=n.memo((function(){return(0,L.jsx)(Y.$,{uri:"collection/albums",defaultSortOption:U.aY,children:(0,L.jsx)(k.hz,{uri:"collection/albums",children:(0,L.jsx)(V,{})})})}));var G=a(22678);const K=n.memo((function({nrArtists:e}){const t=(0,n.useContext)(R.H),{filter:a}=(0,n.useContext)(k.fo),{sortState:s}=(0,n.useContext)(Y.Q),r=(0,n.useRef)(null),{spec:i,UBIFragment:c}=(0,O.fU)(h.createDesktopLibraryEventFactory,{data:{uri:"spotify:app:collection:artists",identifier:l.Wg.YOURLIBRARY_ARTISTS}}),u=(0,n.useMemo)((()=>i.headerFactory()),[i]),d=(0,n.useCallback)((async(e,n)=>{const r=await t.getArtists({offset:e,limit:n,filter:a,sort:(0,U.e3)(s)});return{items:r.items,totalLength:r.totalLength}}),[t,a,s]),m=(0,n.useCallback)(((e,t)=>(0,L.jsx)(v.ZP,{value:"card",index:t,children:(0,L.jsx)(G.I,{index:t,name:e.name,uri:e.uri,images:e.images})},e.uri)),[]);return(0,n.useEffect)((()=>{r.current&&r.current.update()}),[s,a,e]),(0,L.jsxs)(c,{spec:i,children:[(0,L.jsx)(c,{spec:u,children:(0,L.jsxs)("div",{className:F.Z.header,children:[(0,L.jsx)(p.D,{as:"h1",variant:"canon",children:o.ag.get("artists")}),(0,L.jsx)(n.Suspense,{fallback:null,children:(0,L.jsx)(H.h,{canSort:t.getCapabilities().canSort,canFilter:t.getCapabilities().canFilter,filterPlaceholder:o.ag.get("collection.filter.artists"),sortOptions:U.o$})})]})}),(0,L.jsx)(S,{nrCards:e,renderCard:m,fetchData:d,cardGridApiRef:r})]})})),Q=n.memo((function(){const{total:e}=(()=>{const e=(0,n.useContext)(R.H),[t,a]=(0,n.useState)(null),s=(0,n.useCallback)((async()=>{if(!e)return;const t=await(e?.getArtists(B));a(t?.totalLength||0)}),[e]);return(0,n.useEffect)((()=>{null===t&&s()}),[t,s]),(0,N.b)(P.EW.UPDATE,s),{total:t}})();return null===e?(0,L.jsx)(I.h,{hasError:!1,errorMessage:o.ag.get("error.request-collection-artists-failure")}):e>0?(0,L.jsx)(K,{nrArtists:e}):(0,L.jsx)(D.u,{message:o.ag.get("collection.empty-page.artists-subtitle"),title:o.ag.get("collection.empty-page.artists-title"),linkTo:"/search",linkTitle:o.ag.get("collection.empty-page.artists-cta"),children:(0,L.jsx)(_.t,{type:"artist"})})})),J=n.memo((function(){return(0,L.jsx)(Y.$,{uri:"collection/artists",defaultSortOption:U.u3,children:(0,L.jsx)(k.hz,{uri:"collection/artists",children:(0,L.jsx)(Q,{})})})}));var z=a(77660);const X=n.memo((function({nrBooks:e}){const t=(0,n.useContext)(R.H),{filter:a}=(0,n.useContext)(k.fo),{sortState:s}=(0,n.useContext)(Y.Q),{spec:r,UBIFragment:i}=(0,O.fU)(h.createDesktopLibraryEventFactory,{data:{uri:"spotify:app:collection:audiobooks",identifier:l.Wg.YOURLIBRARY_AUDIOBOOKS}}),c=(0,n.useMemo)((()=>r.headerFactory()),[r]),u=(0,n.useRef)(null),d=(0,n.useCallback)((async(e,n)=>{const r=await t.getBooks({offset:e,limit:n,filter:a,sort:(0,U.G5)(s)});return{items:r.items.map((e=>(e=>""===e.authorName&&""===e.name)(e)?null:e)),totalLength:r.totalLength}}),[t,a,s]),m=(0,n.useCallback)(((e,t)=>(0,L.jsx)(v.ZP,{value:"card",index:t,children:(0,L.jsx)(z.c,{index:t,uri:e.uri,name:e.name,images:e.images,authorName:e.authorName,isLocked:e.isLocked})},e.uri)),[]);return(0,L.jsxs)(i,{spec:r,children:[(0,L.jsx)(i,{spec:c,children:(0,L.jsxs)("div",{className:F.Z.header,children:[(0,L.jsx)(p.D,{as:"h1",variant:"canon",children:o.ag.get("search.title.audiobooks")}),(0,L.jsx)(H.h,{canSort:t.getCapabilities().canSort,canFilter:t.getCapabilities().canFilter,filterPlaceholder:"Search in Audiobooks",sortOptions:U.ZP})]})}),(0,L.jsx)(S,{nrCards:e,renderCard:m,fetchData:d,cardGridApiRef:u})]})})),q=n.memo((function(){const{total:e}=M();return null===e?(0,L.jsx)(I.h,{hasError:!1,errorMessage:o.ag.get("error.request-collection-albums-failure")}):e>0?(0,L.jsx)(X,{nrBooks:e}):(0,L.jsx)(D.u,{linkTo:"/search",linkTitle:o.ag.get("collection.empty-page.books-cta"),message:o.ag.get("collection.empty-page.books-subtitle"),title:o.ag.get("collection.empty-page.books-title"),children:(0,L.jsx)(_.t,{type:"book"})})})),$=n.memo((function(){return(0,L.jsx)(Y.$,{uri:"collection/books",defaultSortOption:U.JV,children:(0,L.jsx)(k.hz,{uri:"collection/books",children:(0,L.jsx)(q,{})})})}));var ee=a(16439),te=a(96875),ae=a(16955),ne=a(40307),se=a(39790),re=a(27094),ie=a(20870),le=a(35841),oe=a(6783),ce=a(59913),ue=a(81924),de=a(19252),me=a(86848),pe=a(48593),he=a(20368),ge=a(83194);const Ae={container:"collection-collectionEntityHeroCard-likedSongs",likedSongs:"collection-collectionEntityHeroCard-container",yourEpisodes:"collection-collectionEntityHeroCard-yourEpisodes",headerContainer:"collection-collectionEntityHeroCard-headerContainer",tracksContainer:"collection-collectionEntityHeroCard-tracksContainer",skeletonRow:"collection-collectionEntityHeroCard-skeletonRow",descriptionContainer:"collection-collectionEntityHeroCard-descriptionContainer",opacityText:"collection-collectionEntityHeroCard-opacityText",moreText:"collection-collectionEntityHeroCard-moreText"};function xe(e,t){return Array.from(new Array(e).keys()).map((e=>(0,L.jsx)(ge.C,{as:"div",className:Ae.skeletonRow,charCount:t,isLoading:!0},e)))}const fe=({index:e,onClick:t})=>{const a=(0,he.MY)({limit:7}),{user:n}=(0,s.v9)(le.Gg),r=(0,ie.I2)(n?.id);return r?(0,L.jsx)(pe.Z,{index:e,className:x()(Ae.container,Ae.likedSongs),onClick:t,headerText:r.name,featureIdentifier:"your_library",uri:r.uri,ariaPlayLabel:o.ag.get("playlist.a11y.play",r.name),ariaPauseLabel:o.ag.get("playlist.a11y.pause",r.name),renderCardImage:()=>{return(0,L.jsx)("div",{className:Ae.headerContainer,children:(0,L.jsx)("div",{className:Ae.tracksContainer,children:a?(e=a,e.items.map((({uri:e,name:t,artists:[a]},n)=>(0,L.jsxs)("span",{children:[(0,L.jsx)("span",{className:Ae.opacityText,children:n?" • ":""}),(0,L.jsx)("span",{dir:"auto",children:a.name}),(0,L.jsx)("span",{dir:"auto",className:Ae.opacityText,children:t})]},e)))):xe(3)})});var e},renderSubHeaderContent:()=>(0,L.jsx)("div",{className:Ae.descriptionContainer,children:a?`${a.totalLength} ${r.name}`:xe(1,r.name.length)})}):null},Ee=(e,t,a)=>(0,L.jsx)(v.ZP,{value:"card",index:t,children:a},`${e.uri}`??0),Ce=(e,t,a)=>{switch(e.type){case de.p.LIKED_SONGS:return Ee(e,t,a>1?(0,L.jsx)(fe,{index:t},e.uri):(0,L.jsx)(te.p,{index:t},e.uri));case de.p.YOUR_EPISODES:return Ee(e,t,(0,L.jsx)(se.T,{index:t},e.uri));case de.p.LOCAL_FILES:return Ee(e,t,(0,L.jsx)(ae.P,{index:t},e.uri));case de.p.PLAYLIST:return Ee(e,t,(0,L.jsx)(ee.Z,{index:t,name:e.name,uri:e.uri,images:e.images,description:e.description,authorName:e.owner?.displayName,isPlayable:e.totalLength>0},e.uri));case"placeholder":return Ee(e,t,(0,L.jsx)(ee.Z,{index:t,uri:e.uri,name:"",images:[],description:"",authorName:""},e.uri));case"empty":return(0,L.jsx)(n.Fragment,{},t);case"folder":return null;default:return(0,me._)(e),null}},ye=n.memo((function({nrPlaylists:e,showYourEpisodesCard:t,showLocalFilesCard:a}){const{filter:r}=(0,n.useContext)(k.fo),{sortState:i}=(0,n.useContext)(Y.Q),c=(0,n.useContext)(ue.BS),u=(0,n.useRef)(null),d=(0,s.v9)(le.Gg).user,{spec:m,UBIFragment:g}=(0,O.fU)(h.createDesktopLibraryEventFactory,{data:{uri:"spotify:app:collection:playlists",identifier:l.Wg.YOURLIBRARY_PLAYLISTS}}),A=(0,n.useMemo)((()=>m.headerFactory()),[m]),x=(0,n.useMemo)((()=>{const e=[];if(r)return e;const n=(0,ie.I2)(d?.id);n&&(e.push(n),e.push({uri:"",type:"empty"}));const s=t?(0,ie.bl)(d?.id):null;s&&e.push(s);const i=a?(0,ie.gB)():null;return i&&e.push(i),e}),[r,a,t,d]),f=(0,n.useCallback)((()=>{u?.current&&u.current.update()}),[u]);(0,ue.iu)(f);const E=(0,n.useCallback)((async(e,t)=>{const a=x.slice(e),n=e-(x.length-a.length),s=await c.getContents({offset:n,limit:t,filter:r,sort:(0,U.pT)(i),flatten:!0,decorateImagesAndOwner:!0}),l=s.items.map((e=>"placeholder"===e.type?null:e));return{items:[...a,...l],totalLength:s.totalItemCount+x.length}}),[x,c,r,i]);return(0,L.jsxs)(g,{spec:m,children:[(0,L.jsx)(g,{spec:A,children:(0,L.jsxs)("div",{className:F.Z.header,children:[(0,L.jsx)(p.D,{as:"h1",variant:"canon",children:o.ag.get("playlists")}),(0,L.jsx)(n.Suspense,{fallback:null,children:(0,L.jsx)(H.h,{canSort:c.getCapabilities().canSort,canFilter:c.getCapabilities().canFilter,filterPlaceholder:o.ag.get("collection.filter.playlists"),sortOptions:U.w0})})]})}),(0,L.jsx)(S,{nrCards:e+x.length,renderCard:Ce,fetchData:E,cardGridApiRef:u})]})})),be=n.memo((function(){const e=(0,ue.Rt)(),t=(0,ne.x)(),a=(0,oe.u)(),{createPlaylist:s}=(0,re.K)(),r=(0,ce.I)(),i=(0,n.useCallback)((()=>{s()}),[s]);return null===e||null===t?(0,L.jsx)(I.h,{hasError:!1,errorMessage:o.ag.get("error.request-collection-albums-failure")}):e?.playlistCount?(0,L.jsx)(ye,{nrPlaylists:e.playlistCount,showYourEpisodesCard:t.totalLength>0,showLocalFilesCard:a.canFetchAllTracks&&r}):(0,L.jsx)(D.u,{linkTitle:o.ag.get("collection.empty-page.playlists-cta"),onClick:i,title:o.ag.get("collection.empty-page.playlists-title"),message:o.ag.get("collection.empty-page.playlists-subtitle"),children:(0,L.jsx)(_.t,{type:"playlist"})})})),Le=n.memo((function(){return(0,L.jsx)(Y.$,{uri:"collection/playlists",defaultSortOption:U.Bf,children:(0,L.jsx)(k.hz,{uri:"collection/playlists",children:(0,L.jsx)(be,{})})})}));var je=a(32878),Te=a(82807),Se=a(3835),De=a(14102),Ie=a(10196);const ke=()=>{const e="ginger-audio-shows-top-20-web",{view:t}=(0,Te.P)(e);if(!t)return null;const{content:a,name:n}=t,{total:s=0,items:r}=a;return(0,L.jsx)(Ie.P,{title:n,total:s,seeAllUri:(0,Se.p)(e),children:r.filter((e=>"show"===e.type)).map(((e,t)=>(0,L.jsx)(je._,{name:e.name,uri:e.uri,images:e.images,publisher:e.publisher,mediaType:{audio:De.E.AUDIO,video:De.E.VIDEO,mixed:De.E.MIXED}[e.media_type]??De.E.AUDIO,sharingInfo:null,index:t},e.uri)))})};var _e=a(38595),ve=a(10118),Re=a(48246);function Oe(e,t){return Array.from(new Array(e).keys()).map((e=>(0,L.jsx)(ge.C,{as:"div",className:Ae.skeletonRow,charCount:t,isLoading:!0},e)))}const Pe=({index:e})=>{const t=(0,he.j$)({limit:7}),{user:a}=(0,s.v9)(le.Gg),n=(0,ie.bl)(a?.id);return n?(0,L.jsx)(pe.Z,{index:e,className:x()(Ae.container,Ae.yourEpisodes),headerText:n.name,featureIdentifier:"your_library",uri:n.uri,ariaPlayLabel:o.ag.get("playlist.a11y.play",n.name),ariaPauseLabel:o.ag.get("playlist.a11y.pause",n.name),renderCardImage:()=>{return(0,L.jsx)("div",{className:Ae.headerContainer,children:(0,L.jsx)("div",{className:Ae.tracksContainer,children:t?(e=t,e.items.map((({uri:e,name:t,show:a},n)=>(0,L.jsxs)("span",{children:[(0,L.jsx)("span",{className:Ae.opacityText,children:n?" • ":""}),(0,L.jsx)("span",{dir:"auto",children:t}),a&&(0,L.jsx)("span",{dir:"auto",className:Ae.opacityText,children:a.name})]},e)))):Oe(3)})});var e},renderSubHeaderContent:()=>(0,L.jsx)("div",{className:Ae.descriptionContainer,children:t?o.ag.get("tracklist-header.episodes-counter",t.totalLength):Oe(1,n.name.length)})}):null},Ne=n.memo((function({nrShows:e}){const t=(0,n.useContext)(R.H),{filter:a}=(0,n.useContext)(k.fo),{sortState:r}=(0,n.useContext)(Y.Q),i=(0,n.useRef)(!1),c=(0,n.useRef)({entities:[],total:e}),[u,d]=(0,n.useState)(0),{user:m}=(0,s.v9)(le.Gg),{spec:g,UBIFragment:A}=(0,O.fU)(h.createDesktopLibraryEventFactory,{data:{uri:"spotify:app:collection:podcasts",identifier:l.Wg.YOURLIBRARY_SHOWS}}),x=(0,n.useMemo)((()=>g.headerFactory()),[g]),f=(0,n.useCallback)((async(e,n,s=!1)=>{if(!i.current){i.current=!s;const l=await t.getShows({offset:e,limit:n,filter:a,sort:(0,U.EY)(r)});c.current=function(e,t,a){const n={...a};return n.entities=t?e.items||[]:n.entities.concat(e.items||[]),n.total=e.totalLength,n}(l,s,c.current),i.current=!1,d((e=>e+1))}}),[t,a,r,c]),E=(0,n.useCallback)((e=>{c.current=function(e,t){const a={...t},n=t.entities.filter((t=>t.uri!==e));return a.total=(t.total||0)-(t.entities.length-n.length),a.entities=n,a}(e,c.current),d((e=>e+1))}),[]);(0,n.useEffect)((()=>{f(0,50,!!u)}),[a,r]);const C=(0,n.useCallback)((()=>{c.current.entities.length!==c.current.total&&f(c.current.entities.length,50)}),[f,c]);return(0,L.jsx)(A,{spec:g,children:(0,L.jsxs)(ve.C,{onReachBottom:C,children:[(0,L.jsx)(A,{spec:x,children:(0,L.jsxs)("div",{className:F.Z.header,children:[(0,L.jsx)(p.D,{as:"h1",variant:"canon",children:o.ag.get("podcasts")}),(0,L.jsx)(n.Suspense,{fallback:null,children:(0,L.jsx)(H.h,{canSort:t.getCapabilities().canSort,canFilter:t.getCapabilities().canFilter,filterPlaceholder:o.ag.get("collection.filter.podcasts"),sortOptions:U.a6})})]})}),(0,L.jsx)(Re.r,{onLibraryItemRemove:E,children:(0,L.jsx)(v.ZP,{value:"EntitiesGrid",children:(0,L.jsx)(_e.T,{render:()=>{const e=(0,ie.bl)(m?.id),t=a||!e||0===c.current.entities.length?[]:[(0,L.jsx)(n.Suspense,{fallback:null,children:(0,L.jsx)(Pe,{index:0})},"your-episodes-card")],s=t.length>0;return t.concat(c.current.entities.map(((e,t)=>{const a=s?t+1:t;return(0,L.jsx)(v.ZP,{value:"card",index:a,children:(0,L.jsx)(je._,{index:a,name:e.name,uri:e.uri,images:e.images,publisher:e.publisher,sharingInfo:null})},e.uri)})))}})})})]})})})),Be=n.memo((function(){const{total:e}=w(),{productState:t}=(0,s.v9)(le.Gg),a=!!t&&parseInt(t.ads,10)>0;return null===e?(0,L.jsx)(I.h,{hasError:!1,errorMessage:o.ag.get("error.request-collection-shows-failure")}):e?(0,L.jsx)(Ne,{nrShows:e}):(0,L.jsxs)("div",{className:x()(F.Z.emptyStateContainer,{[F.Z.adBarEnabled]:a}),children:[(0,L.jsx)(D.u,{linkTo:"/genre/podcasts-web",linkTitle:o.ag.get("collection.empty-page.shows-cta"),message:o.ag.get("collection.empty-page.shows-subtitle"),title:o.ag.get("collection.empty-page.shows-title"),renderInline:!0,children:(0,L.jsx)(_.t,{type:"show"})}),(0,L.jsx)(ke,{})]})})),we=n.memo((function(){return(0,L.jsx)(Y.$,{uri:"collection/podcasts",defaultSortOption:U.rJ,children:(0,L.jsx)(k.hz,{uri:"collection/podcasts",children:(0,L.jsx)(Be,{})})})}));var Me=a(80179),He=a(41988),Ye=a(15649);const Ue=({isAudiobooksEnabled:e})=>{const t=(0,s.v9)(m.rH),{spec:a,logger:r}=(0,O.fU)(Me.createDesktopLibraryTopbarEventFactory,{}),i=(0,n.useMemo)((()=>[{title:o.ag.get("playlists"),itemId:"collection.tab-playlists",to:"/collection/playlists",uri:"spotify:app:collection:playlists"},...t?[{title:o.ag.get("podcasts"),itemId:"collection.tab-podcasts",to:"/collection/podcasts",uri:"spotify:app:collection:podcasts"}]:[],...e?[{title:o.ag.get("search.title.audiobooks"),itemId:"collection.tab-audiobooks",to:"/collection/audiobooks",uri:"spotify:app:collection:audiobooks"}]:[],{title:o.ag.get("artists"),itemId:"collection.tab-artists",to:"/collection/artists",uri:"spotify:app:collection:artists"},{title:o.ag.get("albums"),itemId:"collection.tab-albums",to:"/collection/albums",uri:"spotify:app:collection:albums"}].map(((e,t)=>{const n=e.uri;return{...e,handleClick:()=>{const e=a.linkFactory({position:t,uri:n}).hitUiNavigate({destination:n});r.logInteraction(e)}}}))),[t,e,r,a]);return(0,L.jsx)(Ye.w,{children:(0,L.jsx)(He.n,{className:F.Z.tabBar,links:i})})};var Fe=a(34991);const We=n.lazy((async()=>await a.e(4246).then(a.bind(a,78716)))),Ve=()=>{const e=(0,s.v9)(m.rH),t=(0,i.W6)(d.uB);(0,u.z)("your_library");const{total:a}=M(),n=!!(a&&a>0);return(0,L.jsxs)("section",{className:"contentSpacing",children:[(0,L.jsx)(c.$,{children:o.ag.get("collection.page-title")}),(0,L.jsxs)(r.Z5,{children:[(0,L.jsx)(r.AW,{path:"artists",element:(0,L.jsx)(Fe.K,{pageId:l.Wg.YOURLIBRARY_ARTISTS,children:(0,L.jsx)(J,{})})}),(0,L.jsx)(r.AW,{path:"albums",element:(0,L.jsx)(Fe.K,{pageId:l.Wg.YOURLIBRARY_ALBUMS,children:(0,L.jsx)(Z,{})})}),(0,L.jsx)(r.AW,{path:"playlists",element:(0,L.jsx)(Fe.K,{pageId:l.Wg.YOURLIBRARY_PLAYLISTS,children:(0,L.jsx)(Le,{})})}),e&&(0,L.jsx)(r.AW,{path:"podcasts",element:(0,L.jsx)(Fe.K,{pageId:l.Wg.YOURLIBRARY_SHOWS,children:(0,L.jsx)(we,{})})}),(t||n)&&(0,L.jsx)(r.AW,{path:"audiobooks",element:(0,L.jsx)(Fe.K,{pageId:l.Wg.YOURLIBRARY_AUDIOBOOKS,children:(0,L.jsx)($,{})})}),(0,L.jsx)(r.AW,{path:"music-downloads",element:(0,L.jsx)(Fe.K,{pageId:l.Wg.YOURLIBRARY_DOWNLOADS,children:(0,L.jsx)(We,{})})})]}),(0,L.jsx)(Ue,{isAudiobooksEnabled:t||n})]})}},16955:(e,t,a)=>{a.d(t,{P:()=>E});var n=a(59496),s=a(17657),r=a(60378),i=a(60806),l=a(56094),o=a(20870),c=a(28314),u=a(68164),d=a(6783),m=a(69092),p=a(59913),h=a(67551),g=a(19412),A=a(55106),x=a(4637);const f=function({uri:e,name:t,images:a,index:o}){const f=(0,d.u)(),E=(0,n.useRef)(null),C=(0,n.useRef)(!0),y=(0,n.useContext)(m.t),{isPlaying:b}=(0,g.cR)(u.b),{togglePlay:L}=(0,h.n)({uri:u.b,pages:[{items:E.current?.map((e=>({...e,provider:null})))||[]}]},{featureIdentifier:"local_files"});(0,n.useEffect)((()=>(C.current=!0,()=>{C.current=!1})),[]);const j=(0,p.I)(),T=(0,s.y1)((async(e,t)=>{if(!E.current){const e=await y.getTracks();E.current=e}C&&L({loggingParams:t},{uri:u.b,pages:[{items:E.current?.map((e=>({...e,provider:null})))||[]}]})}),c.s_,{leading:!0,trailing:!1});return f.canFetchAllTracks&&j?(0,x.jsx)(i.Z,{index:o,delegatePlayback:!0,delegateLogging:!0,isPlaying:b,onPlay:T,headerText:t,featureIdentifier:"local_files",uri:e,renderCardImage:()=>(0,x.jsx)(l.x,{images:a,FallbackComponent:A.S}),renderSubHeaderContent:()=>(0,x.jsx)("span",{children:r.ag.get("local-files.description")})}):null},E=({index:e})=>{const t=(0,o.gB)();return(0,x.jsx)(n.Suspense,{fallback:null,children:(0,x.jsx)(f,{index:e,name:t.name,uri:t.uri,images:t.images})})}},61873:(e,t,a)=>{a.d(t,{e:()=>p});var n=a(80701);const s="(min-width: 0px)",r="(min-width: 0px) and (max-width: 767px)",i="(min-width: 768px)",l="(min-width: 768px) and (max-width: 1023px)",o="(min-width: 1024px)",c="(min-width: 1024px) and (max-width: 1279px)",u="(min-width: 1280px)",d="(min-width: 1280px) and (max-width: 1919px)",m="(min-width: 1920px)",p=()=>({isXS:(0,n.a)(s),isXSOnly:(0,n.a)(r),isSM:(0,n.a)(i),isSMOnly:(0,n.a)(l),isMD:(0,n.a)(o),isMDOnly:(0,n.a)(c),isLG:(0,n.a)(u),isLGOnly:(0,n.a)(d),isXL:(0,n.a)(m)})},82807:(e,t,a)=>{a.d(t,{P:()=>p});var n=a(59496),s=a(75387),r=a(72254),i=a(96186),l=a(90641),o=a(69062),c=a(60378),u=a(14040),d=a(35841),m=a(82220);const p=(e,t)=>{const a=(()=>{const e=(0,o.W6)(m.Xf),t=(0,l.v9)(u.rZ),{overrides:a}=(0,l.v9)(d.Gg),s=c.ag.getLocale(),r=a?.country||t,i=a?.locale||s;return(0,n.useMemo)((()=>{const t=["album","playlist","artist","show","station","episode","merch","artist_concerts"];return e&&t.push("uri_link"),{country:r,locale:i,types:t.join(",")}}),[r,e,i])})(),{data:p,fetchNextPage:h}=(0,s.useInfiniteQuery)(["useView",e,a],(async({pageParam:t})=>void 0===t?async function(e,t){const{body:a}=await i.kO.getView(r.b.getInstance(),e,t);return a}(e,a):async function(e){const t=new URL(e),a=t.origin,n=t.pathname,s=Object.fromEntries(t.searchParams.entries()),{body:l}=await i.TV.getGeneric(r.b.getInstance(),a,n,s,"/useView/fetchNext/{next}");return l}(t)),{cacheTime:t?.cacheTime??18e5,staleTime:t?.staleTime??3e5,getNextPageParam:e=>e.content.next??void 0,getPreviousPageParam:e=>e.content.previous??void 0});return{view:(0,n.useMemo)((()=>p?.pages.reduce(((e,t)=>({...e,content:{...e.content,href:t.content.href,next:t.content.next,offset:t.content.offset,previous:t.content.previous,total:t.content.total,items:e.content.items.concat(t.content.items)}})))),[p?.pages]),getNextPage:h}}},76160:(e,t,a)=>{a.d(t,{Z:()=>n});const n={header:"collection-collection-header",tabBar:"collection-collection-tabBar",AddToPlaylistIcon:"collection-collection-AddToPlaylistIcon",emptyStateContainer:"collection-collection-emptyStateContainer",adBarEnabled:"collection-collection-adBarEnabled"}}}]);
//# sourceMappingURL=xpui-routes-collection.js.map