"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[4338],{58522:(e,s,i)=>{i.r(s),i.d(s,{default:()=>As});var t=i(59496),a=i(92273),n=i(23362),r=i(68519),c=i(60378),l=i(47303),d=i(36717),o=i(41030),u=i(80582),m=i(90631),f=i(85345),g=i(40530),h=i(5959),x=i(59125),b=i(77741),j=i(74895),p=i(84875),y=i.n(p),N=i(65748),v=i(58767),k=i(97536),C=i(60630),E=i(23487),S=i(32135),I=i(21346),L=i(53942),w=i(73787),D=i(9719),O=i(3882),T=i(27509),F=i(23484),M=i(93452),A=i(78061),_=i(67551),P=i(19252),B=i(46191),U=i(79933);const z=e=>{if(!Number.isInteger(e))return"";const s=Date.now()-Number(e),i=Math.round(s/1e3/60),t=Math.round(s/1e3/60/60),a=Math.round(s/1e3/60/60/24),n=Math.round(s/1e3/60/60/24/7);return a>=7?c.ag.get("time.weeks.short",n):t>=24?c.ag.get("time.days.short",a):i>=60?c.ag.get("time.hours.short",t):i>0?c.ag.get("time.minutes.short",i):c.ag.get("time.now")};var R=i(4637);const J=e=>{const{timestamp:s,isNowPlaying:i}=e;return i?(0,R.jsx)(U.w,{label:c.ag.get("time.now"),children:(0,R.jsx)(B.h,{"aria-label":c.ag.get("time.now"),iconSize:16})}):(0,R.jsx)("span",{children:z(s)})},Z="main-buddyFeed-friendActivity",Y="SQHCRmgNjRywo1Lt7rP3",H="SCwzmMSXoZsmhGtGX81s",K="VLKqDIGaQn2bILzJKSZ0",q="main-buddyFeed-friendsFeedContainer",W="main-buddyFeed-avatarContainer",Q="main-buddyFeed-overlay",V="main-buddyFeed-playIcon",G="main-buddyFeed-activityMetadata",X="main-buddyFeed-usernameAndTimestamp",$="main-buddyFeed-username",ee="main-buddyFeed-timestamp",se="main-buddyFeed-artistAndTrackName",ie="main-buddyFeed-playbackContextIcon",te="main-buddyFeed-playbackContext",ae="main-buddyFeed-playbackContextLink",ne="main-buddyFeed-addFriendPlaceholder",re="main-buddyFeed-addFriendPlaceholderBtn",ce="main-buddyFeed-emptyBuddyFeed",le="main-buddyFeed-addFriendPlaceholderText",de="PjDcsgAPmXlcTBJRGpIu",oe="IRpPQFA57qgQ5jicWWaD",ue="Hm3nIbegLclY1uCAmnx_",me="bhRoVUHjWdo9mgUkU6fe",fe="BliqfY7vu_qE2C9zs5Ou",ge="qdYWuHZd4HdSWfd4pSQB",he="DhvYWKjDc7uyF3HfkDJJ",xe="ralK8s_OmE8a8zWcfNKM",be=e=>Date.now()-e<9e5,je=(e,s)=>{const i=(0,v.EC)(e)?.type;switch(i){case v.JM.PLAYLIST:case v.JM.PLAYLIST_V2:return(0,R.jsx)(S.X,{uri:e});case v.JM.EPISODE:case v.JM.SHOW:return(0,R.jsx)(I.M,{uri:e});case v.JM.ALBUM:return(0,R.jsx)(C.Y,{uri:e,artistUri:s});case v.JM.ARTIST:return(0,R.jsx)(E.m,{uri:e});default:return null}},pe=e=>{switch(e){case v.JM.ALBUM:return P.p.ALBUM;case v.JM.ARTIST:return P.p.ARTIST;case v.JM.SHOW:return P.p.SHOW;case v.JM.EPISODE:return P.p.EPISODE;case v.JM.PLAYLIST:case v.JM.PLAYLIST_V2:return P.p.PLAYLIST;default:return}},ye=e=>{const{show:s=!0,spec:i,friend:a}=e,n=(0,t.useMemo)((()=>a.user.imageUrl?[{url:a.user.imageUrl,width:0,height:0}]:[]),[a.user.imageUrl]),r=(0,f.o)(),l=(0,b.$P)(),d=a.track,o=d.uri,u=d?.context?.uri,{usePlayContextItem:m}=(0,_.n)({uri:u},{featureIdentifier:"buddy_feed",referrerIdentifier:"buddy_feed"}),{togglePlay:g,isPlaying:h,isActive:x}=m({uri:o}),j=(0,v.EC)(d.context?.uri),p=j?.type,C=(0,t.useCallback)((()=>{g(),r({intent:h?"pause":"play",type:"click",itemIdSuffix:"buddyfeed_play",targetUri:o});const e=i.friendRowFactory().playButtonFactory();x?h?l.logInteraction(e.hitPause({itemToBePaused:o})):l.logInteraction(e.hitResume({itemToBeResumed:o})):l.logInteraction(e.hitPlay({itemToBePlayed:o}))}),[g,r,h,o,i,x,l]),S=(0,t.useCallback)(((e,s)=>{l.logInteraction(i.friendRowFactory().friendRowLinkFactory({identifier:e}).hitUiNavigate({destination:s}))}),[l,i]),I=(0,T.O1)([o],d.name),P=(0,T.O1)([d.artist?.uri],d.artist?.name),B=(0,T.O1)([d.context?.uri],d.context?.name);return s?(0,R.jsxs)("div",{className:y()(Z),children:[(0,R.jsx)(F._,{menu:je(d.context?.uri,d.artist?.uri),children:(0,R.jsxs)("div",{className:W,children:[(0,R.jsx)(k.q,{label:a.user.name,width:40,userIconSize:16,images:n,withBadge:be(a.timestamp)}),(0,R.jsx)(O.I,{className:Q,iconClassName:V,isPlaying:h,isLocked:!1,onClick:C,playAriaLabel:h?c.ag.get("pause"):`${c.ag.get("play")} ${d.artist.name} ${d.name}`})]})}),(0,R.jsxs)("div",{className:y()(G),children:[(0,R.jsxs)("div",{className:X,children:[(0,R.jsx)(N.D,{as:"p",variant:"mestoBold",className:y()($,"ellipsis-one-line"),children:(0,R.jsx)(A.ZP,{value:"/buddyfeed_user_profile",children:(0,R.jsx)(F._,{menu:(0,R.jsx)(w.I,{uri:a.user.uri}),children:(0,R.jsx)(D.Link,{title:a.user.name,to:a.user.uri,dir:"auto",onClick:()=>S("profile_link",a.user.uri),children:a.user.name})})})}),(0,R.jsx)(N.D,{as:"p",variant:"finale",className:y()(ee),children:(0,R.jsx)(J,{timestamp:a.timestamp,isNowPlaying:be(a.timestamp)})})]}),(0,R.jsxs)(N.D,{as:"p",variant:"finale",className:se,children:[(0,R.jsx)(A.ZP,{value:"/buddyfeed_track",children:(0,R.jsx)(F._,{menu:(0,R.jsx)(L.$,{uri:d.uri,contextUri:d.context?.uri,albumUri:d.album?.uri,artists:[d.artist]}),children:(0,R.jsx)(D.Link,{title:d.name,to:o,className:"ellipsis-one-line",dir:"auto",draggable:!0,onDragStart:I,onClick:()=>S("track_link",o),children:d.name})})}),(0,R.jsx)("span",{"aria-hidden":!0,children:" • "}),(0,R.jsx)(A.ZP,{value:"/buddyfeed_artist",children:(0,R.jsx)(F._,{menu:d.artist?(0,R.jsx)(E.m,{uri:d.artist.uri}):null,children:(0,R.jsx)(D.Link,{title:d.artist?.name,to:d.artist?.uri,className:"ellipsis-one-line",dir:"auto",draggable:!0,onDragStart:P,onClick:()=>S("artist_link",d.artist?.uri),children:d.artist?.name})})})]}),(0,R.jsx)(N.D,{as:"p",variant:"finale",className:y()("ellipsis-one-line",te),children:(0,R.jsx)(A.ZP,{value:"/buddyfeed_context",children:(0,R.jsx)(F._,{menu:je(d.context?.uri,d.artist?.uri),children:(0,R.jsxs)(D.Link,{title:d.context?.name,to:d.context?.uri,className:ae,draggable:!0,onDragStart:B,onClick:()=>S("context_link",d.context?.uri),children:[(0,R.jsx)(M.t,{type:pe(p),iconSize:16,className:ie}),(0,R.jsx)("span",{dir:"auto",className:"ellipsis-one-line",children:d.context?.name})]})})})})]})]},a.user.uri):null},Ne=100;function ve({friends:e,spec:s}){return(0,R.jsx)(j.U5,{flipKey:e.map((e=>e.user.uri)).join(""),children:(0,R.jsx)("ol",{children:e.map(((e,i)=>(0,R.jsx)(j.$3,{flipId:e.user.uri,children:(0,R.jsx)("li",{children:(0,R.jsx)(ye,{friend:e,show:i<Ne,spec:s},e.user.uri)})},e.user.uri)))})})}var ke=i(95728),Ce=i(73549),Ee=i(27364),Se=i(29264),Ie=i(35380),Le=i(17657),we=i(18636),De=i(46819),Oe=i(86235),Te=i(66151),Fe=i(87910);const Me="w5nHQ74JGTytKwWanjvB",Ae="u11kJflcqt7CSXo9qL_T",_e="MmENkh6tW0MyjTtTtPHZ",Pe="Gl0dkNQbAyNjVZ1IpghI",Be=({name:e,following:s,imageUrl:i,uri:n})=>{const r=(0,Te.q)(),l=(0,f.o)(),d=t.createRef(),[o,u]=(0,t.useState)(s);(0,Fe.d)(Oe.rA.OPERATION_COMPLETE,(e=>{if(e.data.uris.includes(n))switch(e.data.operation){case Oe.BM.FOLLOW_USER:u(!0);break;case Oe.BM.UNFOLLOW_USER:u(!1)}}));const m=(0,t.useCallback)((()=>{o?r.unfollowUsers([n]):(r.followUsers([n]),l({intent:"follow",type:"click",itemIdSuffix:"buddyfeed"})),d.current&&d.current.blur()}),[o,d,n,r,l]);return(0,R.jsxs)("div",{className:Me,children:[(0,R.jsx)(k.q,{label:e,width:40,userIconSize:16,images:(0,t.useMemo)((()=>[{width:40,height:40,url:i}]),[i])}),(0,R.jsxs)("div",{className:y()(Ae,"ellipsis-one-line"),children:[(0,R.jsx)(N.D,{as:"p",variant:"mestoBold",className:"ellipsis-one-line",children:e}),o&&(0,R.jsx)(N.D,{as:"p",variant:"finale",className:"ellipsis-one-line",children:c.ag.get("following")})]}),(0,R.jsx)("div",{className:_e,children:(0,R.jsx)(h.E,{className:Pe,size:"sm",ref:d,onClick:m,ariaLabel:o?c.ag.get("buddy-feed.button.remove-friend"):c.ag.get("buddy-feed.button.add-friend"),icon:o?De.k:a.t})})]})},Ue={friendsList:"main-buddyFeed-friendsList"};function ze({facebookFriends:e}){return(0,R.jsx)("div",{className:Ue.friendsList,children:e.map((({uri:e,following:s,title:i,image:t})=>(0,R.jsx)(Be,{uri:e,name:i,imageUrl:t,following:s},`fb-friend-${e}`)))})}var Re=i(83194);const Je={loadingFriends:"main-buddyFeed-loadingFriends"};function Ze(){return(0,R.jsx)("div",{className:Je.loadingFriends,children:Array(20).fill(0).map(((e,s)=>(0,R.jsx)(Re.C,{isLoading:!0,charCount:100,as:"p",variant:"canon"},s)))})}var Ye=i(75387),He=i(88482);const Ke="pZFwflwH1vXVCmAO5vbz",qe="yPL55nV5rC97vJhAf7ke",We="qpgo9DQ9rVZbO5pLJog5",Qe="A3hvkJOGkBNa6zWj6oZa",Ve="pIyez6N1SF3jW0U5VUx4",Ge="lIxuZR4lYTrEKkMYedty",Xe="VEmC3OHK3uAasHvO5OuA",$e="wzGPtuvvLpOpY1PDu4Qv",es="YoJTUV4hazVCFNbfKoNq",ss=({onBackButtonClick:e})=>{const[s,i]=(0,t.useState)(""),{isLoading:a,friends:n}=(e=>{const s=(0,He.I)(),i=e.trim().toLowerCase(),{data:t,isLoading:a}=(0,Ye.useQuery)("useFacebookFriends",(async()=>(await s.fetchFacebookFriends()).sort(((e,s)=>e.title>s.title?1:-1))));return{isLoading:a,friends:t?.filter((({title:e})=>-1!==e.trim().toLowerCase().indexOf(i)))??[]}})(s),r=(0,Le.y1)((e=>{i(e.target.value)}),100),l=(0,t.useCallback)((e=>{null!==e&&e.focus()}),[]);return(0,R.jsxs)("div",{className:Ke,children:[(0,R.jsx)(h.E,{ariaLabel:c.ag.get("buddy-feed.button.back"),onClick:e,ref:l,className:qe,icon:ke.e,size:"sm",testId:"back-to-friends"}),(0,R.jsxs)("div",{className:We,children:[(0,R.jsx)("div",{className:Qe,children:(0,R.jsx)(Ee.z,{className:Ve,iconSize:32})}),(0,R.jsx)("div",{className:Ge,children:a?(0,R.jsx)(Re.C,{isLoading:!0,charCount:25,as:"p",variant:"mesto"}):(0,R.jsx)(N.D,{as:"p",variant:"mesto",children:c.ag.get("buddy-feed.number-of-friends",n.length)})})]}),a?(0,R.jsx)(Ze,{}):(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)("div",{className:Xe,children:[(0,R.jsx)(we.j,{className:es,iconSize:16,role:"presentation"}),(0,R.jsx)("input",{onChange:r,className:$e,placeholder:c.ag.get("buddy-feed.find-in-playlists")})]}),(0,R.jsx)(ze,{facebookFriends:n})]})]})};var is=i(13369);function ts({isOpen:e,onClose:s,onConfirm:i}){return(0,R.jsx)(is.Q,{onClose:s,"aria-label":c.ag.get("web-player.buddy-feed.connect-with-facebook-title"),onConfirm:i,titleText:c.ag.get("web-player.buddy-feed.connect-with-facebook-title"),descriptionText:c.ag.get("web-player.buddy-feed.connect-with-facebook-description"),cancelText:c.ag.get("queue.cancel-button"),confirmText:c.ag.get("web-player.buddy-feed.connect-button"),isOpen:e})}let as;!function(e){e[e.LOADING=0]="LOADING",e[e.CONNECTED=1]="CONNECTED",e[e.DISCONNECTED=2]="DISCONNECTED"}(as||(as={}));const ns="EmZCbU1_B_J9RAHebolL",rs="Ym6Yyx83U7mNKOMw9dxw",cs="NXcZaSipzomJ6d4_nM94",ls="b9rqRkvRvhrSY4FYHQVC",ds="xHc_2FQr3NxfCgfDSVhY",os="QAJYN0xWh3h2A5d8_C1g",us="PKhH1CknobkjJdVITsb4",ms="HgRmCE3NxfiYNtv6pF3H",fs="HnA5mipUMkheAlbxqCn_",gs="mvp0xhvZTo0xv0TIwi9u",hs=e=>{const s=(0,f.o)(),{onBackButtonClick:i,feedIsEmpty:a,goToAddFriends:n=!1}=e,r=function(){const e=(0,He.I)(),[s,i]=(0,t.useState)(as.LOADING);return(0,t.useEffect)((()=>e.subscribeToFacebookConnectionState((e=>{i(e.connection?as.CONNECTED:as.DISCONNECTED)})).cancel),[e]),s}(),l=(0,He.I)(),[d,o]=(0,t.useState)(!1),[u,m]=(0,t.useState)(!1),[g,x]=(0,t.useState)(!1),b=(0,t.useCallback)((e=>{null!==e&&e.focus()}),[]),j=(0,t.useCallback)((()=>{location.reload()}),[]);if(u)return(0,R.jsxs)("div",{className:fs,children:[(0,R.jsx)(h.E,{onClick:i,ref:b,className:cs,ariaLabel:c.ag.get("buddy-feed.button.back"),icon:ke.e,size:"sm"}),(0,R.jsxs)("div",{className:gs,children:[(0,R.jsx)(N.D,{as:"h1",variant:"balladBold",className:rs,children:c.ag.get("error-dialog.generic.header")}),(0,R.jsx)(N.D,{as:"p",variant:"mesto",className:ls,children:c.ag.get("error-dialog.generic.body")}),(0,R.jsx)(Ce.D,{colorSet:"invertedLight",onClick:j,children:c.ag.get("error.reload")})]})]});const p=(n||g)&&r===as.CONNECTED;return(0,R.jsxs)("div",{className:ns,children:[p&&(0,R.jsx)(ss,{onBackButtonClick:()=>{a&&x(!1),i()}}),!p&&(0,R.jsxs)("div",{className:os,children:[(0,R.jsx)(h.E,{ariaLabel:c.ag.get("buddy-feed.button.back"),onClick:i,className:cs,ref:b,icon:ke.e,size:"sm"}),(0,R.jsx)(N.D,{as:"h1",variant:"balladBold",className:rs,children:c.ag.get("buddy-feed.friend-activity")}),(0,R.jsx)(N.D,{as:"p",variant:"mesto",className:ls,children:c.ag.get("buddy-feed.facebook.connect-with-friends-default")}),(0,R.jsx)("div",{className:us,children:(0,R.jsx)(Ce.D,{className:ms,buttonSize:"sm",iconLeading:Ee.z,UNSAFE_colorSet:(0,Se.Ev)("#2374E1",Ie.$_Y.white),onClick:()=>{s({intent:"connect-to-facebook",type:"click",itemIdSuffix:"buddyfeed"}),r!==as.CONNECTED?o(!0):x(!0)},children:c.ag.get("buddy-feed.facebook.button")})}),(0,R.jsx)(N.D,{as:"p",variant:"finale",className:ds,children:c.ag.get("buddy-feed.facebook.disclaimer")}),(0,R.jsx)(ts,{isOpen:d,onClose:()=>{o(!1)},onConfirm:()=>{l.connectToFacebook().then((()=>{x(!0),o(!1)})).catch((()=>{m(!0)}))}})]})]})};var xs=i(76229),bs=i(77805);const js=({showOnlineIndicator:e})=>(0,R.jsxs)("div",{className:de,children:[(0,R.jsxs)("div",{className:oe,children:[(0,R.jsx)(bs.f,{iconSize:24}),e?(0,R.jsx)("div",{className:ue}):null]}),(0,R.jsxs)("div",{className:me,children:[(0,R.jsx)("div",{className:y()(fe,ge)}),(0,R.jsx)("div",{className:fe}),(0,R.jsx)("div",{className:fe})]})]}),ps=()=>(0,R.jsxs)("div",{"data-testid":"buddy-feed-empty-state",className:ce,children:[(0,R.jsx)(N.D,{as:"p",className:le,children:c.ag.get("buddy-feed.let-followers-see-your-listening")}),(0,R.jsx)(js,{showOnlineIndicator:!0}),(0,R.jsx)(js,{showOnlineIndicator:!0}),(0,R.jsx)(js,{}),(0,R.jsx)(N.D,{as:"p",className:le,children:c.ag.get("buddy-feed.enable-share-listening-activity")}),(0,R.jsx)(xs.rU,{to:"/preferences",className:he,children:(0,R.jsx)(Ce.D,{colorSet:"invertedLight",className:xe,children:c.ag.get("desktop.settings.settings")})})]});var ys=i(28126),Ns=i(61141);const vs="jUF2eKgYMm64aYykubct",ks="zhL_lhJqzKfJVy7L5VuY",Cs="XqquM_o2eODcnD8Y4QhS",Es="UGtycHBJ4egymBSmD_lX",Ss="ND2ydDPzwQZB7HyaGCN8",Is="D9YN554UFGJle2CPP1TA",Ls="v7Zcy9UKVUTDZIMKB6ZF",ws="RX3U6eAasqazEkuFdnj0",Ds=({children:e,page:s})=>{const i=0===s,t=e.filter(((e,i)=>i!==s));return(0,R.jsx)(ys.Z,{component:null,children:t.map((e=>(0,R.jsx)(Ns.Z,{in:i,timeout:500,classNames:{enter:i?vs:Ss,enterActive:i?ks:Is,exit:i?Cs:Ls,exitActive:i?Es:ws},children:e},i?"first-page":"second-page")))})};function Os(e){return e.sort(((e,s)=>s.timestamp-e.timestamp))}function Ts(e,s){return s.some((s=>s.user.uri===e.user.uri))?s:Os([...s,e])}function Fs(e,s){return s.filter((s=>s.user.uri!==e))}function Ms(e){const s=(0,He.I)(),[i,a]=(0,t.useState)(Os(e)),{subscribeToFriend:n,unSubscribeFromFriend:r}=function(e,s){const i=(0,He.I)(),a=(0,t.useRef)(e),n=(0,t.useRef)({}),r=(0,t.useRef)(s);r.current=s;const c=(0,t.useCallback)((e=>{const s=(0,v.EC)(e)?.username;return i.subscribeToBuddyActivity(s,(e=>{e&&r.current(e)}))}),[i]),l=(0,t.useCallback)((e=>{n.current[e]?.cancel(),delete n.current[e]}),[]);return(0,t.useEffect)((()=>{n.current=a.current.reduce(((e,s)=>{const i=s.user.uri,t=c(i);return e[i]=t,e}),{})}),[c]),(0,t.useEffect)((()=>{const e=n.current;return()=>{Object.values(e).forEach((e=>{e.cancel()}))}}),[]),{subscribeToFriend:c,unSubscribeFromFriend:l}}(e,(e=>{a((s=>function(e,s){return Os(s.map((s=>s.user.uri===e.user.uri?e:s)))}(e,s)))}));return(0,Fe.d)(Oe.rA.OPERATION_COMPLETE,(async e=>{const t=e.data.uris;if(e.data.operation!==Oe.BM.FOLLOW_USER){if(e.data.operation===Oe.BM.UNFOLLOW_USER)for(const e of t)i.find((s=>s.user.uri===e))&&(r(e),a((s=>Fs(e,s))))}else for(const e of t)if(!i.find((s=>s.user.uri===e))){const i=(await s.fetchFriendActivity([e]))[0];a((e=>Ts(i,e))),n(e)}})),i}const As=({initialFriends:e,className:s})=>{const i=(0,f.o)(),j=(0,l.n)(),p=Ms(e),y=(0,b.$P)(),{spec:N}=(0,b.fU)(r.createDesktopFriendActivityEventFactory,{});(0,t.useEffect)((()=>{i({intent:"view",type:"impression",itemIdSuffix:"buddyfeed"})}),[i]);const[v,k]=(0,t.useState)(!1),C=()=>{v||y.logInteraction(N.addFriendButtonFactory().hitUiReveal()),k(!v)},E=0===p.length,S=(0,t.useCallback)((()=>{y.logInteraction(N.closeButtonFactory().hitUiHide())}),[y,N]);return(0,R.jsx)(x.DJ.Provider,{value:"buddy_feed",children:(0,R.jsx)(d.l,{label:c.ag.get("buddy-feed.friend-activity"),className:s,children:(0,R.jsxs)(Ds,{page:v?1:0,children:[(0,R.jsx)("div",{className:K,children:(0,R.jsx)(hs,{onBackButtonClick:C,feedIsEmpty:E,goToAddFriends:v})}),(0,R.jsxs)("div",{className:q,children:[(0,R.jsxs)(o.K,{children:[(0,R.jsx)(u.V,{title:c.ag.get("buddy-feed.friend-activity"),panel:m.s.BuddyFeed,onClose:S,actions:!j&&(0,R.jsx)(g._,{label:c.ag.get("buddy-feed.add-friends"),children:(0,R.jsx)(h.E,{ariaLabel:c.ag.get("buddy-feed.add-friends"),testId:"add-friends-button",size:"sm",onClick:C,icon:a.t})})}),(0,R.jsx)("div",{className:ne,children:(0,R.jsx)(h.E,{ariaLabel:c.ag.get("buddy-feed.add-friends"),className:re,size:"sm",onClick:C,icon:a.t})}),E?(0,R.jsx)(ps,{}):(0,R.jsx)(ve,{friends:p,spec:N})]}),j&&(0,R.jsx)("div",{className:Y,children:(0,R.jsx)(n.P,{className:H,"data-testid":"add-friends-button",buttonSize:"sm",onClick:C,title:c.ag.get("buddy-feed.find-friends"),children:c.ag.get("buddy-feed.find-friends")})})]})]})})})}}}]);
//# sourceMappingURL=xpui-routes-buddy-feed.js.map