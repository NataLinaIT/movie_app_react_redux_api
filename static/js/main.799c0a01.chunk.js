(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{121:function(e,t,a){},125:function(e,t,a){},126:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(20),i=a.n(o),s=a(14),c=a(15),l=a(17),u=a(16),m=a(10),p=a(13),_=a(77),v=a(130),d=a(127),g=a(4),h=a(47),b=a.n(h),f="https://api.themoviedb.org/3",E="3f4ca4f3a9750da53450646ced312397",y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(a,n){fetch(e,t).then((function(e){if(e.status<400)return e.json();throw e})).then((function(e){a(e)})).catch((function(e){e.json().then((function(e){n(e)}))}))}))},w=function(){function e(){Object(s.a)(this,e)}return Object(c.a)(e,null,[{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.params,n=void 0===a?{}:a,r=Object(g.a)({api_key:E},n);return y("".concat(f).concat(e,"?").concat(b.a.stringify(r)),{mode:"cors",headers:{"Content-type":"application/json"}})}},{key:"post",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.params,n=void 0===a?{}:a,r=t.body,o=void 0===r?{}:r,i=Object(g.a)({api_key:E},n);return y("".concat(f).concat(e,"?").concat(b.a.stringify(i)),{method:"POST",mode:"cors",headers:{"Content-type":"application/json"},body:JSON.stringify(o)})}}]),e}(),O=function(){var e="".concat(f,"/genre/movie/list?api_key=").concat(E,"&language=en-US");return fetch(e).then((function(e){return e.json()}))},j={showModal:!1,errors:{},user:null,username:"",password:"",session_id:null,submiting:!1},N=function(e){return{type:"UPDATE_SABMITSTATUS",payload:e}},M=function(e){return{type:"UPDATE_USER",userId:e}},k=function(e){return{type:"UPDATE_SESSION_ID",sessionId:e}},I=function(){return function(e){e({type:"SHOW_MODAL"})}},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_MODAL":return Object(g.a)(Object(g.a)({},e),{},{showModal:!e.showModal});case"UPDATE_INPUT":var a=t.values.username,n=t.values.password;return Object(g.a)(Object(g.a)({},e),{},{username:a||e.username,password:n||e.password,errors:Object(g.a)(Object(g.a)({},e.errors),{},{base:null,username:a?null:e.errors.username,password:n?null:e.errors.password})});case"UPDATE_ERRORS":var r=t.errors.username,o=t.errors.password,i="This field is required",s="Required! Must be 5 characters or more";return Object(g.a)(Object(g.a)({},e),{},{errors:Object(g.a)(Object(g.a)({},e.errors),{},{username:r?null:i,password:o?null:s})});case"UPDATE_BASE_ERROR":return Object(g.a)(Object(g.a)({},e),{},{errors:Object(g.a)(Object(g.a)({},e.errors),{},{base:t.message})});case"RESET_LOGIN_FORM":return Object(g.a)(Object(g.a)({},e),{},{username:"",password:""});case"UPDATE_SABMITSTATUS":return Object(g.a)(Object(g.a)({},e),{},{submiting:t.payload});case"UPDATE_USER":return Object(g.a)(Object(g.a)({},e),{},{user:t.userId});case"UPDATE_SESSION_ID":return Object(g.a)(Object(g.a)({},e),{},{sessionId:t.sessionId});default:return e}},S=a(8),T=a.n(S),F=function(e){var t=e.errors,a=e.username,n=e.password,o=e.submiting,i=e.onChange,s=e.handleBlur,c=e.onLogin,l=e.getClassForInput;return r.a.createElement("div",{className:"form-login-container"},r.a.createElement("form",{className:"form-login"},r.a.createElement("h1",{className:"h3 mb-3 font-weight-normal text-center"},"Login"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"User"),r.a.createElement("input",{type:"text",className:l("username"),id:"username",placeholder:"Your name",name:"username",value:a,onChange:i,onBlur:s}),t.username&&r.a.createElement("div",{className:"invalid-feedback"},t.username)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"User"),r.a.createElement("input",{type:"password",className:l("password"),id:"password",placeholder:"Your password",name:"password",value:n,onChange:i,onBlur:s}),t.password&&r.a.createElement("div",{className:"invalid-feedback"},t.password)),r.a.createElement("button",{type:"submit",className:"btn btn-lg btn-primary btn-block",onClick:c,disabled:o},"Login"),t.base&&r.a.createElement("div",{className:"invalid-feedback"},t.base)))},P=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onChange=function(t){var a=t.target.name,n=t.target.value,r={};r.password="password"===a?n:"",r.username="username"===a?n:"",e.props.changeInput(r)},e.handleBlur=function(){var t=e.validateFields();e.props.validateFields(t)},e.validateFields=function(){var t={};return""===e.props.username?t.username=!1:t.username=!0,e.props.password.length<5?t.password=!1:t.password=!0,t},e.onSubmit=function(){e.props.submitLoginForm({username:e.props.username,password:e.props.password})},e.onLogin=function(t){t.preventDefault();var a=e.validateFields();a.username&&a.password?e.onSubmit():e.props.validateFields(a)},e.getClassForInput=function(t){return T()("form-control",{invalid:e.props.errors[t]})},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.errors,a=e.changeInput,n=e.username,o=e.password;return r.a.createElement(F,{errors:t,changeInput:a,username:n,password:o,onChange:this.onChange,handleBlur:this.handleBlur,onLogin:this.onLogin,getClassForInput:this.getClassForInput})}}]),a}(r.a.Component),C=Object(m.b)((function(e){return{errors:e.auth.errors,username:e.auth.username,password:e.auth.password}}),{changeInput:function(e){return function(t){t(function(e){return{type:"UPDATE_INPUT",values:e}}(e))}},validateFields:function(e){return function(t){t(function(e){return{type:"UPDATE_ERRORS",errors:e}}(e))}},submitLoginForm:function(e){return function(t){w.get("/authentication/token/new").then((function(t){return w.post("/authentication/token/validate_with_login",{body:{username:e.username,password:e.password,request_token:t.request_token}})})).then((function(e){return w.post("/authentication/session/new",{body:{request_token:e.request_token}})})).then((function(e){return t(k(e.session_id)),Re.set("session_id",e.session_id,{path:"/",maxAge:2592e3}),w.get("/account",{params:{session_id:e.session_id}})})).then((function(e){t(N(!1)),t(M(e)),t({type:"RESET_LOGIN_FORM"}),t({type:"SHOW_MODAL"})})).catch((function(e){console.log("error",e),t({type:"UPDATE_BASE_ERROR",message:e.status_message}),t(N(!1))}))}}})(P),A=Object(m.b)((function(e){return{showModal:e.auth.showModal}}),{toogleModal:I})((function(e){return r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-success",type:"button",onClick:e.toogleModal},"Login"),r.a.createElement(v.a,{isOpen:e.showModal,toggle:e.toogleModal},r.a.createElement(d.a,null,r.a.createElement(C,null))))})),D=a(128),x=a(131),R=a(132),U=a(129),W=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={dropdownOpen:!1},e.toggleDropdown=function(){e.setState((function(e){return{dropdownOpen:!e.dropdownOpen}}))},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.user,a=e.onLogout;return r.a.createElement(D.a,{isOpen:this.state.dropdownOpen,toggle:this.toggleDropdown},r.a.createElement(x.a,{tag:"div",onClick:this.toggleDropdown,"data-toggle":"dropdown","aria-expanded":this.state.dropdownOpen},r.a.createElement("img",{width:"40",className:"rounded-circle",src:"https://secure.gravatar.com/avatar/".concat(t.avatar.gravatar.hash,'.jpg?s=64"'),alt:"user_image",onClick:this.toggleDropdown})),r.a.createElement(R.a,{right:!0},r.a.createElement(U.a,{onClick:a},"Logout")))}}]),a}(n.Component),B=Object(m.b)((function(e){return{user:e.auth.user}}),{})((function(e){return r.a.createElement(W,{user:e.user,onLogout:e.onLogout})})),G=(a(121),Object(m.b)((function(e){return{user:e.auth.user}}),{})((function(e){return r.a.createElement("nav",{className:"navbar navbar-dark bg-primary"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement("div",{className:"nav-link"},"Movies DB"))),e.user?r.a.createElement(B,{onLogout:e.onLogout}):r.a.createElement(A,null)))}))),V=a(40),H=a.n(V),q=a(50),J=a.n(q),X=a(72),Y=a(38),Z=function(e,t,a){return e&&e.map((function(e){for(var n in e)n===t&&(e[n]=a)})),e},K={filters:[{sort_by:"popularity.desc"},{primary_release_year:"2020"},{with_genres:[]}],sort_by_options:[{label:"Popularity descending",value:"popularity.desc"},{label:"Popularity ascending",value:"popularity.asc"},{label:"Rating descending",value:"vote_average.desc"},{label:"Rating ascending",value:"vote_average.asc"}],year_options:[{label:"2020",value:"2020"},{label:"2019",value:"2019"},{label:"2018",value:"2018"},{label:"2017",value:"2017"},{label:"2016",value:"2016"},{label:"2015",value:"2015"}],genresList:[],page:1,wishList:[]},Q=function(e){return function(t){t(function(e){return{type:"SORT_BY",params:e}}(e))}},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SORT_BY":return Object(g.a)(Object(g.a)({},e),{},{filters:Z(e.filters,t.params.name,t.params.value),page:1});case"SET_MOVIE_GENRES":return Object(g.a)(Object(g.a)({},e),{},{genresList:t.list});case"SET_ACTIVE_PAGE":return Object(g.a)(Object(g.a)({},e),{},{page:t.page});case"ADD_TO_WISH_LIST":var a=[].concat(Object(Y.a)(e.wishList),[t.movie]);return Object(g.a)(Object(g.a)({},e),{},{wishList:a});case"REMOVE_FROM_WISH_LIST":var n=e.wishList.filter((function(e){return e.id!==t.movie.id}));return Object(g.a)(Object(g.a)({},e),{},{wishList:n});default:return e}},$={movies:[],total_pages:0},ee=function(e,t,a,n){return function(r){var o={sort_by:e,page:n,primary_release_year:t};a.length>0&&(o.with_genres=a.join(",")),w.get("/discover/movie",{params:o}).then((function(e){var t,a;r((t=e.results,a=e.total_pages,{type:"GET_MOVIES",movies:t,total_pages:a}))}))}},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_MOVIES":return Object(g.a)(Object(g.a)({},e),{},{movies:t.movies,total_pages:t.total_pages});case"REMOVE_MOVIE":var a=e.movies.filter((function(e){return e.id!==t.movie.id}));return Object(g.a)(Object(g.a)({},e),{},{movies:a});default:return e}},ae=a(76),ne=a(24),re=a(23),oe=a.n(re),ie=function(e){var t=Object(n.useState)(!1),a=Object(ae.a)(t,2),o=a[0],i=a[1],s=e.movie.backdrop_path||e.movie.poster_path;return r.a.createElement("div",{className:"".concat(oe.a.movie_card," card"),style:{width:"100%"}},r.a.createElement("img",{className:"card-img-top ".concat(oe.a.card_img__height),src:e.movie.poster_path?"https://image.tmdb.org/t/p/w500".concat(s):"",alt:"movie_image"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:oe.a.rating},e.movie.vote_average),r.a.createElement(ne.b,{className:oe.a.card_title,to:"/movie/".concat(e.movie.id)},e.movie.title),r.a.createElement("div",{className:oe.a.buttons_wrapper},r.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},o?r.a.createElement("button",{type:"button",className:"btn ".concat(oe.a.btn_remove),onClick:function(){return t=e.movie,i(!1),void e.removeMovieFromWishList(t);var t}},"Remove"):r.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return t=e.movie,i(!0),void e.addMovieToWishList(t);var t}},"Watch")),r.a.createElement("button",{className:oe.a.delete_btn,onClick:e.removeMovie.bind(null,e.movie)},"Delete"))))},se=function(e){return r.a.createElement(r.a.Fragment,null,e.movies.map((function(t){return r.a.createElement("div",{key:t.id},r.a.createElement(ie,{movie:t,removeMovie:e.removeMovie,addMovieToWishList:e.addMovieToWishList,removeMovieFromWishList:e.removeMovieFromWishList}))})))},ce=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.props.getMovies(this.props.sort_by,this.props.primary_release_year,this.props.with_genres,this.props.page)}},{key:"render",value:function(){var e=this.props,t=e.movies,a=e.removeMovie,n=e.addMovieToWishList,o=e.removeMovieFromWishList;return r.a.createElement(se,{movies:t,removeMovie:a,addMovieToWishList:n,removeMovieFromWishList:o})}}]),a}(r.a.Component),le=Object(m.b)((function(e){return{movies:e.movieList.movies,sort_by:e.movieFilters.filters[0].sort_by,with_genres:e.movieFilters.filters[2].with_genres,primary_release_year:e.movieFilters.filters[1].primary_release_year}}),{changeFilter:Q,getMovies:ee,removeMovie:function(e){return function(t){t(function(e){return{type:"REMOVE_MOVIE",movie:e}}(e))}},addMovieToWishList:function(e){return function(t){t(function(e){return{type:"ADD_TO_WISH_LIST",movie:e}}(e))}},removeMovieFromWishList:function(e){return function(t){t(function(e){return{type:"REMOVE_FROM_WISH_LIST",movie:e}}(e))}}})(ce),ue=function(e){return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"sort_by"}," Sort by: "),r.a.createElement("select",{id:"sort_by",className:"form-control",name:"sort_by",value:e.sort_by,onChange:function(t){var a=t.target.value,n=t.target.name;e.changeFilter({value:a,name:n})}},e.sort_by_options.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.label)}))))},me=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.name,n=e.value,o=e.onChange,i=e.labelText,s=e.children;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},i),r.a.createElement("select",{id:t,className:"form-control",name:a,value:n,onChange:o},s))}}]),a}(n.Component),pe=function(e){return r.a.createElement(me,{id:"primary_release_year",name:"primary_release_year",value:e.primary_release_year,onChange:function(t){var a=t.target.value,n=t.target.name;e.changeFilter({value:a,name:n})},labelText:"Year of release:"},e.options.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.label)})))},_e=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onChange=function(t){e.props.changeFilter({name:"with_genres",value:t.target.checked?[].concat(Object(Y.a)(e.props.with_genres),[t.target.value]):e.props.with_genres.filter((function(e){return e!==t.target.value}))})},e.resetGenres=function(){e.props.changeFilter({name:"with_genres",value:[]})},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.props.getMovieGenres()}},{key:"render",value:function(){var e=this,t=this.props,a=t.with_genres,n=t.genresList;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"form-check-wrapper"},r.a.createElement("h6",null,"Genres:"),n.map((function(t){return r.a.createElement("div",{key:t.id,className:"form-check"},r.a.createElement("input",{className:"form-check-input",type:"checkbox",value:t.id,id:"genre".concat(t.id),onChange:e.onChange,checked:a.includes(String(t.id))}),r.a.createElement("label",{className:"form-check-label",htmlFor:"genre".concat(t.id)},t.name))}))),r.a.createElement("div",null,r.a.createElement("button",{type:"button",className:"btn btn-outline-dark mb-2",onClick:this.resetGenres},"Show all genres")))}}]),a}(r.a.Component),ve=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"componentDidUpdate",value:function(e){this.props.page!==e.page?this.props.getMovies(this.props.sort_by,this.props.primary_release_year,this.props.with_genres,this.props.page):this.props.getMovies(this.props.sort_by,this.props.primary_release_year,this.props.with_genres,1)}},{key:"render",value:function(){var e=this.props,t=e.sort_by,a=e.primary_release_year,n=e.with_genres,o=e.sort_by_options,i=e.year_options,s=e.changeFilter,c=e.genresList,l=e.getMovieGenres;return r.a.createElement("form",{className:"mb-3"},r.a.createElement(ue,{sort_by:t,changeFilter:s,sort_by_options:o}),r.a.createElement(pe,{primary_release_year:a,changeFilter:s,options:i}),r.a.createElement(_e,{with_genres:n,changeFilter:s,genresList:c,getMovieGenres:l}))}}]),a}(n.Component),de=Object(m.b)((function(e){return{filters:e.movieFilters.filters,sort_by:e.movieFilters.filters[0].sort_by,primary_release_year:e.movieFilters.filters[1].primary_release_year,with_genres:e.movieFilters.filters[2].with_genres,sort_by_options:e.movieFilters.sort_by_options,year_options:e.movieFilters.year_options,genresList:e.movieFilters.genresList,page:e.movieFilters.page}}),{changeFilter:Q,getMovieGenres:function(){return function(){var e=Object(X.a)(J.a.mark((function e(t){var a;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:a=e.sent,t({type:"SET_MOVIE_GENRES",list:a.genres});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},getMovies:ee})(ve),ge=a(73),he=a.n(ge),be=function(e){return r.a.createElement("nav",{className:he.a.pagination_wrapper},r.a.createElement("ul",{className:"pagination mb-0 mr-3"},r.a.createElement("li",{className:T()("page-item",{disabled:1===e.page})},r.a.createElement("span",{className:"page-link",onClick:e.prevPage},"Prev")),r.a.createElement("span",null," ",e.page," - ",e.total_pages),r.a.createElement("li",{className:T()("page-item",{disabled:e.total_pages<=e.page})},r.a.createElement("span",{className:"page-link",onClick:e.nextPage},"Next"))))},fe=Object(m.b)((function(e){return{page:e.movieFilters.page,total_pages:e.movieList.total_pages}}),{updatePage:function(e){return function(t){t(function(e){return{type:"SET_ACTIVE_PAGE",page:e}}(e))}}})((function(e){return r.a.createElement(be,{page:e.page,total_pages:e.total_pages,nextPage:function(){var t=e.page+1;e.updatePage(t)},prevPage:function(){var t=e.page-1;e.updatePage(t)}})})),Ee=a(74),ye=a.n(Ee),we=function(e){return r.a.createElement("div",{className:ye.a.wish_list},r.a.createElement("p",null,"Wish list: ",e.wishList))},Oe=Object(m.b)((function(e){return{wishList:e.movieFilters.wishList}}),{})((function(e){return r.a.createElement(we,{wishList:e.wishList.length})})),je=a(35),Ne=a.n(je),Me=function(e){return r.a.createElement("div",{className:Ne.a.burger_container},r.a.createElement("div",{className:Ne.a.burger_line}),r.a.createElement("div",{className:Ne.a.burger_line}),r.a.createElement("div",{className:Ne.a.burger_line}))},ke=function(){return r.a.createElement("div",{className:"container-fluid",style:{padding:"0 40px"}},r.a.createElement("div",{className:"".concat(H.a.tools_wrapper," d-flex justify-content-between")},r.a.createElement(Me,null),r.a.createElement(Oe,null)),r.a.createElement("div",{className:"d-flex justify-content-between flex-nowrap"},r.a.createElement("div",{className:"".concat(H.a.filters_form,' col-lg-3"')},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h3",null,"Filters"),r.a.createElement(de,null)))),r.a.createElement("div",{className:H.a.movies_container},r.a.createElement(le,null))),r.a.createElement(fe,null))},Ie=a(6),Le=a.n(Ie),Se=function(e){var t=e.movieItem,a=t.backdrop_path,n=t.poster_path,o=t.title,i=t.release_date,s=t.genres,c=t.runtime,l=t.vote_average,u=t.tagline,m=t.overview,p=t.spoken_languages,_=t.production_countries;return r.a.createElement("div",null,r.a.createElement("div",{className:Le.a.back_link},r.a.createElement(ne.b,{to:"/"},"Back to main page")),r.a.createElement("div",null,r.a.createElement("div",{className:Le.a.bg_banner_wrapper},r.a.createElement("div",{className:Le.a.bg_banner},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500".concat(a),alt:"banner"}))),r.a.createElement("div",{className:Le.a.description_wrapper},r.a.createElement("div",{className:Le.a.movie_image},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500".concat(n),alt:"main_image"})),r.a.createElement("div",{className:Le.a.description},r.a.createElement("div",{className:Le.a.flex_string},r.a.createElement("h1",null,o),r.a.createElement("p",null,"(",i?i.slice(0,4):null,")")),r.a.createElement("ul",{className:"genres"},s?s.map((function(e){return r.a.createElement("li",{key:e.name},e.name," ",r.a.createElement("span",null))})):null,r.a.createElement("li",{className:Le.a.runtime},c,"m")),r.a.createElement("div",{className:Le.a.flex_string},r.a.createElement("div",{className:Le.a.score_wrapper},r.a.createElement("div",{className:Le.a.rating},l),r.a.createElement("p",null,"Users score")),r.a.createElement("div",{className:Le.a.tools_wrapper},r.a.createElement("div",{className:"".concat(Le.a.add_to_wishlist," ").concat(Le.a.circle),title:"Add to list"},r.a.createElement("i",{class:"fas fa-list"})),r.a.createElement("div",{className:"".concat(Le.a.add_to_wishlist," ").concat(Le.a.circle),title:"Mark as favorite"},r.a.createElement("i",{className:"fas fa-heart"})),r.a.createElement("div",{className:"".concat(Le.a.add_to_wishlist," ").concat(Le.a.circle),title:"Add to you watch list"},r.a.createElement("i",{className:"fas fa-bookmark"})),r.a.createElement("div",{className:"".concat(Le.a.add_to_wishlist," ").concat(Le.a.circle),title:"Rate it!"},r.a.createElement("i",{className:"fas fa-star"})))),r.a.createElement("p",{className:Le.a.tagline},u),r.a.createElement("h3",null,"Overview"),r.a.createElement("p",{className:Le.a.overview},m),r.a.createElement("div",{className:Le.a.flex_string},r.a.createElement("div",{className:Le.a.language_wraper},r.a.createElement("span",{className:Le.a.nbsp},"Language: ")," ",r.a.createElement("span",null," ",p?p.map((function(e){return e.name})):null)),r.a.createElement("div",{className:Le.a.production_countries},r.a.createElement("span",{className:Le.a.nbsp},"Countrie: ")," ",r.a.createElement("span",null,_?_.map((function(e){return e.name})):null)))))))},Te={movieItem:[]},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_MOVIE_ITEM":return Object(g.a)(Object(g.a)({},e),{},{movieItem:t.item});default:return e}},Pe=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getMovieItem(e)}},{key:"render",value:function(){return r.a.createElement(Se,{movieItem:this.props.movieItem})}}]),a}(n.Component),Ce=Object(m.b)((function(e){return{movieItem:e.movie.movieItem}}),{getMovieItem:function(e){return function(t){w.get("/movie/".concat(e)).then((function(e){return t({type:"SET_MOVIE_ITEM",item:e})}))}}})(Pe),Ae=a(53),De=a.n(Ae),xe=function(){return r.a.createElement("footer",{className:De.a.footer},r.a.createElement("div",{className:De.a.logo},"Movies DB"),r.a.createElement("div",null,r.a.createElement("h5",null,"THE BASICS"),r.a.createElement("ul",null,r.a.createElement("li",null,"About TMDb"),r.a.createElement("li",null,"Contact Us"),r.a.createElement("li",null,"API"),r.a.createElement("li",null,"System Status"))),r.a.createElement("div",null,r.a.createElement("h5",null,"LEGAL"),r.a.createElement("ul",null,r.a.createElement("li",null,"Terms of Use"),r.a.createElement("li",null,"API Terms of Use"),r.a.createElement("li",null,"Privacy Policy"))))},Re=new _.a,Ue=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).updateSessionId=function(e){e&&Re.set("session_id",e,{path:"/",maxAge:2592e3})},e.onLogout=function(){Re.remove("session_id"),e.props.logout(e.props.session_id)},e.componentDidMount=function(){var t=Re.get("session_id");t&&(e.props.updateSession(t),e.updateSessionId(e.props.session_id))},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(G,{onLogout:this.onLogout}),r.a.createElement(p.a,{exact:!0,path:"/",component:ke}),r.a.createElement(p.a,{path:"/movie/:id",component:Ce}),r.a.createElement(xe,null))}}]),a}(r.a.Component),We=Object(m.b)((function(e){return{user:e.auth.user,session_id:e.auth.session_id}}),{logout:function(e){return function(t){y("".concat(f,"/authentication/session?api_key=").concat(E),{method:"DELETE",mode:"cors",headers:{"Content-type":"application/json"},body:JSON.stringify({session_id:e})}).then((function(){t(M(null)),t(k(null))}))}},updateSession:function(e){return function(t){y("".concat(f,"/account?api_key=").concat(E,"&session_id=").concat(e)).then((function(e){t(M(e)),t(k(e)),t((function(e){e({type:"SHOW_MODAL"})}))}))}}})(Ue),Be=(a(124),a(125),a(75)),Ge=a(25),Ve=Object(Ge.c)({movieList:te,movieFilters:z,auth:L,movie:Fe}),He=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Ge.d)(Object(Ge.a)(Be.a)),qe=Object(Ge.e)(Ve,He);i.a.render(r.a.createElement(ne.a,null,r.a.createElement(m.a,{store:qe},r.a.createElement(We,null))),document.getElementById("root")),window.store=qe},23:function(e,t,a){e.exports={movie_card:"MovieItem_movie_card__3dt8C",card_img__height:"MovieItem_card_img__height__2xOeJ",rating:"MovieItem_rating__3jZ4g",card_title:"MovieItem_card_title__2Cnp6",buttons_wrapper:"MovieItem_buttons_wrapper__3VS5U",btn_remove:"MovieItem_btn_remove__1_NGG",delete_btn:"MovieItem_delete_btn__20EN_"}},35:function(e,t,a){e.exports={burger_container:"Burger_burger_container__1GXsU",burger_line:"Burger_burger_line__aiGjh"}},40:function(e,t,a){e.exports={filters_form:"MoviesPage_filters_form__1B-he",movies_container:"MoviesPage_movies_container__cpo5s",tools_wrapper:"MoviesPage_tools_wrapper__3vkI1"}},53:function(e,t,a){e.exports={footer:"Footer_footer__1w0lV",logo:"Footer_logo__3ACxa"}},6:function(e,t,a){e.exports={back_link:"MoviePage_back_link__281q2",bg_banner_wrapper:"MoviePage_bg_banner_wrapper__QWU4U",bg_banner:"MoviePage_bg_banner___8X2K",movie_image:"MoviePage_movie_image__1_KWA",description_wrapper:"MoviePage_description_wrapper__1wI7B",score_wrapper:"MoviePage_score_wrapper__3hZa4",tools_wrapper:"MoviePage_tools_wrapper__2b1Vx",description:"MoviePage_description__kfPLC",flex_string:"MoviePage_flex_string__2A2aQ",runtime:"MoviePage_runtime__2mjiC",rating:"MoviePage_rating__2q7eU",circle:"MoviePage_circle__7EHOm",tagline:"MoviePage_tagline__1F3IZ",overview:"MoviePage_overview__2nNPg",language_wraper:"MoviePage_language_wraper__dEhqx",production_countries:"MoviePage_production_countries__DdFIe",nbsp:"MoviePage_nbsp__15XjW"}},73:function(e,t,a){e.exports={pagination_wrapper:"Pagination_pagination_wrapper__3ONoi"}},74:function(e,t,a){e.exports={wish_list:"WishList_wish_list__2BC4W"}},79:function(e,t,a){e.exports=a(126)}},[[79,1,2]]]);
//# sourceMappingURL=main.799c0a01.chunk.js.map