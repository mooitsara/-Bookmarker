webpackJsonp([1],{

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "03nf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sign-up"},[_vm._m(0),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('br'),_c('br'),_vm._v(" "),_c('form',{on:{"submit":function($event){$event.preventDefault();_vm.validateBeforeSubmit($event)}}},[_c('p'),_c('h2',[_vm._v("Create a new account!")]),_c('p'),_vm._v(" "),_c('br'),_vm._v(" "),_c('div',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.user.name),expression:"user.name"},{name:"validate",rawName:"v-validate",value:('required'),expression:"'required'"}],class:{'input': true, 'is-danger': _vm.errors.has('user.name') },attrs:{"name":"name","type":"name","placeholder":"Full Name"},domProps:{"value":(_vm.user.name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.user, "name", $event.target.value)}}}),_vm._v(" "),_c('p',{directives:[{name:"show",rawName:"v-show",value:(_vm.errors.has('name')),expression:"errors.has('name')"}],staticStyle:{"color":"red"}},[_vm._v(_vm._s(_vm.errors.first('name')))])]),_vm._v(" "),_c('div',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.user.email),expression:"user.email"},{name:"validate",rawName:"v-validate",value:('required|email'),expression:"'required|email'"}],class:{'input': true, 'is-danger': _vm.errors.has('user.email') },attrs:{"name":"email","type":"email","placeholder":"Email"},domProps:{"value":(_vm.user.email)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.user, "email", $event.target.value)}}}),_vm._v(" "),_c('p',{directives:[{name:"show",rawName:"v-show",value:(_vm.errors.has('email')),expression:"errors.has('email')"}],staticStyle:{"color":"red"}},[_vm._v(_vm._s(_vm.errors.first('email')))])]),_vm._v(" "),_c('div',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.user.password1),expression:"user.password1"},{name:"validate",rawName:"v-validate",value:('required'),expression:"'required'"}],class:{'input': true, 'is-danger': _vm.errors.has('user.password1') },attrs:{"name":"password","type":"password","placeholder":"Password"},domProps:{"value":(_vm.user.password1)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.user, "password1", $event.target.value)}}}),_vm._v(" "),_c('p',{directives:[{name:"show",rawName:"v-show",value:(_vm.errors.has('password')),expression:"errors.has('password')"}],staticStyle:{"color":"red"}},[_vm._v(_vm._s(_vm.errors.first('password')))])]),_vm._v(" "),_c('div',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.user.password2),expression:"user.password2"},{name:"validate",rawName:"v-validate",value:('required|confirmed:password'),expression:"'required|confirmed:password'"}],class:{'input': true, 'is-danger': _vm.errors.has('user.password2') },attrs:{"name":"confirm password","type":"password","placeholder":"Confirm Password"},domProps:{"value":(_vm.user.password2)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.user, "password2", $event.target.value)}}}),_vm._v(" "),_c('p',{directives:[{name:"show",rawName:"v-show",value:(_vm.errors.has('confirm password')),expression:"errors.has('confirm password')"}],staticStyle:{"color":"red"}},[_vm._v(_vm._s(_vm.errors.first('confirm password')))])]),_vm._v(" "),_c('div',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.user.birthdate),expression:"user.birthdate"},{name:"validate",rawName:"v-validate",value:('required|date_format:DD/MM/YYYY'),expression:"'required|date_format:DD/MM/YYYY'"}],class:{'input': true, 'is-danger': _vm.errors.has('user.birthdate') },attrs:{"name":"birthdate","type":"text","placeholder":"Birth day (DD/MM/YYYY)"},domProps:{"value":(_vm.user.birthdate)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.user, "birthdate", $event.target.value)}}}),_vm._v(" "),_c('p',{directives:[{name:"show",rawName:"v-show",value:(_vm.errors.has('birthdate')),expression:"errors.has('birthdate')"}],staticStyle:{"color":"red"}},[_vm._v(_vm._s(_vm.errors.first('birthdate')))])]),_vm._v(" "),_c('div',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.user.url),expression:"user.url"},{name:"validate",rawName:"v-validate",value:('required|url|regex:.*(facebook).*'),expression:"'required|url|regex:.*(facebook).*'"}],class:{'input': true, 'is-danger': _vm.errors.has('user.url') },attrs:{"name":"url","type":"text","placeholder":"Facebook"},domProps:{"value":(_vm.user.url)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.user, "url", $event.target.value)}}}),_vm._v(" "),_c('p',{directives:[{name:"show",rawName:"v-show",value:(_vm.errors.has('url')),expression:"errors.has('url')"}],staticStyle:{"color":"red"}},[_vm._v(_vm._s(_vm.errors.first('url')))])]),_vm._v(" "),_c('div',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.user.phone),expression:"user.phone"},{name:"validate",rawName:"v-validate",value:('required|regex:^([0-9]+)$'),expression:"'required|regex:^([0-9]+)$'"}],class:{'input': true, 'is-danger': _vm.errors.has('user.phone') },attrs:{"name":"phone","type":"text","placeholder":"Phone"},domProps:{"value":(_vm.user.phone)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.user, "phone", $event.target.value)}}}),_vm._v(" "),_c('p',{directives:[{name:"show",rawName:"v-show",value:(_vm.errors.has('phone')),expression:"errors.has('phone')"}],staticStyle:{"color":"red"}},[_vm._v(_vm._s(_vm.errors.first('phone')))])]),_vm._v(" "),_vm._m(2)])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('nav',{staticClass:"navbar navbar-default"},[_c('ul',{staticClass:"nav nav-pills navbar-left",staticStyle:{"margin-left":"10Px"}},[_c('li',{attrs:{"role":"presentation"}},[_c('h4',[_vm._v("Bookmaker.com")])])]),_vm._v(" "),_c('ul',{staticClass:"nav nav-pills navbar-right",staticStyle:{"margin-right":"10Px"}})])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"nav nav-pills navbar-left",staticStyle:{"margin-left":"10Px"}},[_c('input',{staticStyle:{"padding-right":"45px","padding-bottom":"5px","padding-top":"5px"},attrs:{"type":"button","onClick":"window.history.back()","value":"Back"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('button',{staticStyle:{"margin-bottom":"20px"}},[_vm._v("Sign Up")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "0MoM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__("Sazm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__firebaseConfig__ = __webpack_require__("vX5M");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var md5 = __webpack_require__("L6bb");

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'Detail',
  data() {
    return {
      msg: 'User Information',
      user: {
        photoURL: '',
        userId: '',
        name: '',
        email: '',
        url: '',
        phone: ''
      }
    };
  },
  methods: {
    logout() {
      __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().signOut().then(() => {
        this.$router.push({ name: 'Login' });
      });
    }
  },
  created() {
    var user = __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().currentUser;

    if (user) {
      this.user.photoURL = user.photoURL;
      this.user.userId = user.uid;
      this.user.name = user.displayName;
      this.user.email = user.email;

      var uid = md5(user.email);
      console.log(uid);

      __WEBPACK_IMPORTED_MODULE_1__firebaseConfig__["a" /* db */].ref('users/' + uid).once('value').then(snapshot => {
        if (snapshot) {
          console.log(snapshot);
          this.user.name = snapshot.val().name;
          this.user.url = snapshot.val().url;
          this.user.phone = snapshot.val().phone;
        }
      });
    }
  }
});

/***/ }),

/***/ "0qg2":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "3BMn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__("Sazm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'BookMarker',
    data() {
        return {
            book: {
                siteName: '',
                siteUrl: ''
            },
            books: [],
            user: ''
        };
    },
    methods: {
        validateBeforeSubmit() {
            this.$validator.validateAll().then(result => {
                if (result) {
                    this.submit();
                }
            });
        },
        submit() {
            this.$http.post('https://vue-resource-tutorial-e50c2.firebaseio.com/users/' + this.user.uid + '/books.json', this.book).then(response => {
                console.log(response);
                this.fetchData();
                this.book.siteName = '';
                this.book.siteUrl = '';
            }, error => {
                console.log(error);
            });
        },
        fetchData() {
            this.$http.get('https://vue-resource-tutorial-e50c2.firebaseio.com/users/' + this.user.uid + '/books.json').then(response => {
                return response.json();
            }).then(data => {
                // console.log(data)             
                const resultArray = [];
                for (let key in data) {
                    var temp = new Object();
                    temp['key'] = key;
                    temp['siteName'] = data[key].siteName;
                    temp['siteUrl'] = data[key].siteUrl;
                    resultArray.push(temp);
                }
                this.books = resultArray;
            });
        },
        deleteData(key) {
            this.$http.delete('https://vue-resource-tutorial-e50c2.firebaseio.com/users/' + this.user.uid + '/books/' + key + '.json').then(response => {
                this.fetchData();
                console.log(response);
            }, error => {
                console.log(error);
            });
        }
    },
    created() {
        var user = __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().currentUser;
        this.user = user;
        this.fetchData();
    }
});

/***/ }),

/***/ "9Gsz":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "9qno":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "B/yz":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Bu0r":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__("Sazm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebaseui__ = __webpack_require__("2ahc");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebaseui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebaseui__);
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'auth',
  mounted() {
    var uiConfig = {
      signInSuccessUrl: '/hello',
      signInOptions: [__WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth.GoogleAuthProvider.PROVIDER_ID, __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth.FacebookAuthProvider.PROVIDER_ID, __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth.EmailAuthProvider.PROVIDER_ID]
    };

    var ui = new __WEBPACK_IMPORTED_MODULE_1_firebaseui___default.a.auth.AuthUI(__WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth());
    ui.start('#firebaseui-auth-container', uiConfig);
  }
});

/***/ }),

/***/ "CLO7":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Cg/X":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sign-up-validate"},[_c('form',{on:{"submit":function($event){$event.preventDefault();_vm.validateBeforeSubmit($event)}}},[_c('p',[_vm._v("Let's create a new account!")]),_vm._v(" "),_c('div',{staticClass:"form-group",class:{'has-error': _vm.errors.has('user.name') }},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.user.name),expression:"user.name"},{name:"validate",rawName:"v-validate.initial",value:(_vm.user.name),expression:"user.name",modifiers:{"initial":true}}],ref:"name",attrs:{"type":"text","data-rules":"required|alpha|min:5","placeholder":"Full Name"},domProps:{"value":(_vm.user.name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.user, "name", $event.target.value)}}}),_c('br'),_vm._v(" "),(_vm.errors.has('user.name'))?_c('p',{staticClass:"text-danger"},[_vm._v(_vm._s(_vm.errors.first('user.name')))]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"form-group",class:{'has-error': _vm.errors.has('user.email') }},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.user.email),expression:"user.email"},{name:"validate",rawName:"v-validate.initial",value:(_vm.user.email),expression:"user.email",modifiers:{"initial":true}}],ref:"email",attrs:{"type":"email","data-rules":"required|email","placeholder":"Email"},domProps:{"value":(_vm.user.email)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.user, "email", $event.target.value)}}}),_c('br'),_vm._v(" "),(_vm.errors.has('user.email'))?_c('p',{staticClass:"text-danger"},[_vm._v(_vm._s(_vm.errors.first('user.email')))]):_vm._e()]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.user.password1),expression:"user.password1"}],attrs:{"type":"password","placeholder":"Password"},domProps:{"value":(_vm.user.password1)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.user, "password1", $event.target.value)}}}),_c('br'),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.user.password2),expression:"user.password2"}],ref:"password2",attrs:{"type":"password","placeholder":"Confirm password"},domProps:{"value":(_vm.user.password2)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.user, "password2", $event.target.value)}}}),_c('br'),_vm._v(" "),_c('div',{staticClass:"form-group",class:{'has-error': _vm.errors.has('user.website') }},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.user.website),expression:"user.website"},{name:"validate",rawName:"v-validate.initial",value:(_vm.user.website),expression:"user.website",modifiers:{"initial":true}}],ref:"url",attrs:{"type":"text","data-rules":"required|url","placeholder":"Website"},domProps:{"value":(_vm.user.website)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.user, "website", $event.target.value)}}}),_c('br'),_vm._v(" "),(_vm.errors.has('user.website'))?_c('p',{staticClass:"text-danger"},[_vm._v(_vm._s(_vm.errors.first('user.website')))]):_vm._e()]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.user.phone),expression:"user.phone"}],attrs:{"type":"text","placeholder":"Phone number"},domProps:{"value":(_vm.user.phone)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.user, "phone", $event.target.value)}}}),_c('br'),_vm._v(" "),_c('button',{on:{"click":_vm.signup}},[_vm._v("Sign Up")])]),_vm._v(" "),_c('span',[_vm._v("or go back to "),_c('router-link',{attrs:{"to":"/login"}},[_vm._v("login")]),_vm._v(".")],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "Chp7":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "CsEn":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "FRnD":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Gjqj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"jumbotron"},[_c('h2',[_vm._v("Bookmark Your Favorite Sites")]),_vm._v(" "),_c('form',{on:{"submit":function($event){$event.preventDefault();_vm.validateBeforeSubmit($event)}}},[_c('div',{staticClass:"form-group"},[_c('label',[_vm._v("Site Name")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.book.siteName),expression:"book.siteName"},{name:"validate",rawName:"v-validate",value:('required'),expression:"'required'"}],staticClass:"form-control",class:{'input': true, 'is-danger': _vm.errors.has('book.siteName') },attrs:{"name":"name","type":"text","placeholder":"Website Name"},domProps:{"value":(_vm.book.siteName)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.book, "siteName", $event.target.value)}}}),_vm._v(" "),_c('p',{directives:[{name:"show",rawName:"v-show",value:(_vm.errors.has('name')),expression:"errors.has('name')"}],staticStyle:{"color":"red"}},[_vm._v(_vm._s(_vm.errors.first('name')))])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',[_vm._v("Site URL")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.book.siteUrl),expression:"book.siteUrl"},{name:"validate",rawName:"v-validate",value:('required|url'),expression:"'required|url'"}],staticClass:"form-control",class:{'input': true, 'is-danger': _vm.errors.has('book.siteUrl') },attrs:{"name":"url","type":"url","placeholder":"Website URL"},domProps:{"value":(_vm.book.siteUrl)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.book, "siteUrl", $event.target.value)}}}),_vm._v(" "),_c('p',{directives:[{name:"show",rawName:"v-show",value:(_vm.errors.has('url')),expression:"errors.has('url')"}],staticStyle:{"color":"red"}},[_vm._v(_vm._s(_vm.errors.first('url')))])]),_vm._v(" "),_c('button',{staticClass:"btn btn-primary"},[_vm._v("Submit")])])]),_vm._v(" "),_vm._l((_vm.books),function(b){return _c('div',{key:b.key,staticClass:"well"},[_c('h3',[_vm._v(" "+_vm._s(b.siteName)+"\n            "),_c('a',{staticClass:"btn btn-default",attrs:{"target":"_blank","href":b.siteUrl}},[_vm._v("Visit")]),_vm._v(" "),_c('a',{staticClass:"btn btn-danger",on:{"click":function($event){_vm.deleteData(b.key)}}},[_vm._v("Delete ")])])])}),_vm._v(" "),_vm._m(1)],2)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"header clearfix"},[_c('h1',{staticClass:"text-muted"},[_vm._v("Bookmarker")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"footer"},[_c('p',[_vm._v("© 2016 Bookmarker, Inc.")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "HCTz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__("Sazm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'Header',
    methods: {
        logout() {
            __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().signOut().then(() => {
                this.$router.push({ name: 'Login' });
            });
        }
    }
});

/***/ }),

/***/ "M93x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__("xJD8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2e11a528_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__("rDhJ");
function injectStyle (ssrContext) {
  __webpack_require__("kZzT")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2e11a528_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "MisR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"firebaseui-auth-container"}})}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "MzTz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('app-header'),_vm._v(" "),_c('router-view')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__("M93x");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__("YaEn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__("Sazm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__firebaseConfig__ = __webpack_require__("vX5M");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue_router__ = __webpack_require__("/ocq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue_resource__ = __webpack_require__("ORbq");
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.








__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_5_vue_router__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_6_vue_resource__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */].beforeEach((to, from, next) => {
  var currentUser = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser;

  var requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next({ name: 'Login' });else if (!requiresAuth && currentUser) next({ name: 'Detail' });else next();
});

let app;

// firebase.initializeApp(config);
__WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().onAuthStateChanged(user => {
  if (!app) {
    app = new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
      el: '#app',
      router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
      template: '<App/>',
      components: { App: __WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */] }
    });
  }
});

/***/ }),

/***/ "OBXJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__("Sazm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__firebaseConfig__ = __webpack_require__("vX5M");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var md5 = __webpack_require__("L6bb");
let usersRef = __WEBPACK_IMPORTED_MODULE_1__firebaseConfig__["a" /* db */].ref('users');

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'signUp',
    data() {
        return {
            user: {
                name: '',
                email: '',
                password1: '',
                password2: '',
                url: '',
                phone: '',
                birthdate: ''
            }
        };
    },
    methods: {
        validateBeforeSubmit() {
            this.$validator.validateAll().then(result => {
                if (result) {
                    this.signup();
                }
            });
        },
        signup() {
            __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().createUserWithEmailAndPassword(this.user.email, this.user.password1).then(user => {
                alert('Your accound has been created!');

                /* add user info to database */
                var newUser = this.addUserInfo();

                this.$router.push({ name: 'Login' });
            }, error => {
                var errorCode = error.code;
                var errorMsg = error.message;
                if (errorCode == 'auth/weak-password') {
                    alert('The password is too week');
                } else {
                    alert('Oops.' + errorMsg);
                }
            });
        },
        addUserInfo() {
            var newUser = {
                name: this.user.name,
                email: this.user.email,
                url: this.user.url,
                phone: this.user.phone,
                birthdate: this.user.birthdate
            };

            var uid = md5(this.user.email);
            console.log(uid);
            __WEBPACK_IMPORTED_MODULE_1__firebaseConfig__["a" /* db */].ref('users/' + uid).set(newUser);
        }
    }
});

/***/ }),

/***/ "QYvC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_BookMarker_vue__ = __webpack_require__("3BMn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ae313c84_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_BookMarker_vue__ = __webpack_require__("Gjqj");
function injectStyle (ssrContext) {
  __webpack_require__("fDxd")
  __webpack_require__("0qg2")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-ae313c84"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_BookMarker_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ae313c84_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_BookMarker_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "TPPJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('nav',{staticClass:"navbar navbar-default"},[_vm._m(0),_vm._v(" "),_c('ul',{staticClass:"nav nav-pills navbar-right",staticStyle:{"margin-right":"5Px"}},[_c('li',{attrs:{"role":"presentation"}},[_c('router-link',{attrs:{"to":"/detail"}},[_vm._v("Profile")])],1),_vm._v(" "),_c('li',{attrs:{"role":"presentation"}},[_c('router-link',{attrs:{"to":"/bookmarker"}},[_vm._v("Bookmarks")])],1),_vm._v(" "),_c('li',{attrs:{"role":"presentation"}},[_c('router-link',{attrs:{"to":"/about"}},[_vm._v("About Us")])],1),_vm._v(" "),_c('li',{attrs:{"role":"presentation"}},[_c('a',{on:{"click":_vm.logout}},[_vm._v("Sign Out")])])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"nav nav-pills navbar-left",staticStyle:{"margin-left":"10Px"}},[_c('li',{attrs:{"role":"presentation"}},[_c('h4',[_vm._v("Bookmaker.com")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "XGD4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__("Sazm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vee_validate__ = __webpack_require__("sUu7");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





__WEBPACK_IMPORTED_MODULE_1_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_2_vee_validate__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_2_vee_validate__["a" /* default */].Validator.extend('passphrase', {
    getMessage: field => 'Sorry dude, wrong pass phrase.',
    validate: value => value.toUpperCase() == 'Demogorgon'.toUpperCase()
});

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'signUpValidate',
    data() {
        return {
            user: {
                name: '',
                email: '',
                password1: '',
                password2: '',
                website: '',
                phone: ''
            }
        };
    },
    methods: {
        validateBeforeSubmit() {
            this.$validator.validateAll();
            if (!this.error.any()) {
                this.signup();
            }
        },
        signup() {
            __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().createUserWithEmailAndPassword(this.user.email, this.user.password1).then(user => {
                alert('Your accound has been created!');
                this.$router.push({ name: 'Login' });
            }, error => {
                var errorCode = error.code;
                var errorMsg = error.message;
                if (errorCode == 'auth/weak-password') {
                    alert('The password is too week');
                } else {
                    alert('Oops.' + errorMsg);
                }
            });
        }
    }
});

/***/ }),

/***/ "YaEn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__("/ocq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Detail__ = __webpack_require__("wHgX");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Login__ = __webpack_require__("xJsL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Signup__ = __webpack_require__("psOb");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_FirebaseAuth__ = __webpack_require__("kn4y");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_SignupValidate__ = __webpack_require__("pMke");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_BookMarker__ = __webpack_require__("QYvC");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_User_vue__ = __webpack_require__("jyJz");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_About_vue__ = __webpack_require__("c27y");











__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '/detail',
    // name: 'Hello',
    component: __WEBPACK_IMPORTED_MODULE_8__components_User_vue__["a" /* default */],
    children: [{
      path: '',
      component: __WEBPACK_IMPORTED_MODULE_2__components_Detail__["a" /* default */],
      name: 'Detail',
      meta: {
        requiresAuth: true
      }
    }, {
      path: '/bookmarker',
      component: __WEBPACK_IMPORTED_MODULE_7__components_BookMarker__["a" /* default */],
      name: 'BookMarker',
      meta: {
        requiresAuth: true
      }
    }, {
      path: '/about',
      component: __WEBPACK_IMPORTED_MODULE_9__components_About_vue__["a" /* default */],
      name: 'About',
      meta: {
        requiresAuth: true
      }
    }]
  }, {
    path: '/login',
    name: 'Login',
    component: __WEBPACK_IMPORTED_MODULE_3__components_Login__["a" /* default */]
  }, {
    path: '/signup',
    name: 'Signup',
    component: __WEBPACK_IMPORTED_MODULE_4__components_Signup__["a" /* default */]
  }, {
    path: '/signup2',
    name: 'Signup2',
    component: __WEBPACK_IMPORTED_MODULE_6__components_SignupValidate__["a" /* default */]
  }, {
    path: '*',
    redirect: { name: 'Login' }
  }, {
    path: '/firebaseauth',
    name: 'Auth',
    component: __WEBPACK_IMPORTED_MODULE_5__components_FirebaseAuth__["a" /* default */]
  }],
  mode: 'history'
}));

/***/ }),

/***/ "Zs8U":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({});

/***/ }),

/***/ "a6oF":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "c27y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_About_vue__ = __webpack_require__("Zs8U");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_65cd5d78_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_About_vue__ = __webpack_require__("wjOv");
function injectStyle (ssrContext) {
  __webpack_require__("FRnD")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_About_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_65cd5d78_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_About_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "fDxd":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "hnOm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"login"},[_vm._m(0),_vm._v(" "),_c('br'),_c('br'),_vm._v(" "),_c('form',{on:{"submit":function($event){$event.preventDefault();_vm.validateBeforeSubmit($event)}}},[_vm._m(1),_vm._v(" "),_c('div',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.user.email),expression:"user.email"},{name:"validate",rawName:"v-validate",value:('required'),expression:"'required'"}],class:{'input': true, 'is-danger': _vm.errors.has('user.email') },attrs:{"name":"email","type":"email","placeholder":"Email"},domProps:{"value":(_vm.user.email)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.user, "email", $event.target.value)}}}),_vm._v(" "),_c('p',{directives:[{name:"show",rawName:"v-show",value:(_vm.errors.has('email')),expression:"errors.has('email')"}],staticStyle:{"color":"red"}},[_vm._v(_vm._s(_vm.errors.first('email')))])]),_vm._v(" "),_c('div',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.user.password),expression:"user.password"},{name:"validate",rawName:"v-validate",value:('required'),expression:"'required'"}],class:{'input': true, 'is-danger': _vm.errors.has('user.password') },attrs:{"name":"password","type":"password","placeholder":"Password"},domProps:{"value":(_vm.user.password)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.user, "password", $event.target.value)}}}),_vm._v(" "),_c('p',{directives:[{name:"show",rawName:"v-show",value:(_vm.errors.has('password')),expression:"errors.has('password')"}],staticStyle:{"color":"red"}},[_vm._v(_vm._s(_vm.errors.first('password')))])]),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('p',[_vm._v("You don't have an account ? Please "),_c('router-link',{attrs:{"to":"/signup"}},[_vm._v(" Sign Up")]),_c('br')],1),_vm._v(" "),_c('br'),_vm._v(" "),_vm._m(3)])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('nav',{staticClass:"navbar navbar-default"},[_c('ul',{staticClass:"nav nav-pills navbar-left",staticStyle:{"margin-left":"10Px"}},[_c('li',{attrs:{"role":"presentation"}},[_c('h4',[_vm._v("Bookmaker.com")])])]),_vm._v(" "),_c('ul',{staticClass:"nav nav-pills navbar-right",staticStyle:{"margin-right":"10Px"}},[_c('li',{attrs:{"role":"presentation"}},[_c('h4',[_vm._v("Please Sign In before you use website")])])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('div',{staticClass:"header clearfix"},[_c('h2',{staticClass:"text-muted"},[_vm._v("Sign In")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('button',{staticStyle:{"margin-bottom":"20px"}},[_vm._v("Sign In")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('footer',{staticClass:"footer"},[_c('p',[_vm._v("© 2016 Bookmarker, Inc.")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "jyJz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_User_vue__ = __webpack_require__("qgpy");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9adb2876_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_User_vue__ = __webpack_require__("MzTz");
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_User_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9adb2876_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_User_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "kZzT":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "kn4y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_FirebaseAuth_vue__ = __webpack_require__("Bu0r");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0252b8d3_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FirebaseAuth_vue__ = __webpack_require__("MisR");
function injectStyle (ssrContext) {
  __webpack_require__("Chp7")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_FirebaseAuth_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0252b8d3_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FirebaseAuth_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "nKb+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__("Sazm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebaseui__ = __webpack_require__("2ahc");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebaseui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebaseui__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'login',
    data() {
        return {
            user: {
                email: '',
                password: ''
            }
        };
    },
    methods: {
        validateBeforeSubmit() {
            this.$validator.validateAll().then(result => {
                if (result) {
                    this.login();
                }
            });
        },
        login() {
            __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().signInWithEmailAndPassword(this.user.email, this.user.password).then(user => {
                alert('Sign In Success!');
                this.$router.push({ name: 'Detail' });
            }, err => {
                if (err.code === 'auth/wrong-password') {
                    alert('Wrong password.');
                } else if (err.code === 'auth/user-not-found') {
                    alert('User not found!');
                } else if (err.code === 'auth/invalid-email') {
                    alert('Invalid email');
                } else {
                    alert('Oops. ' + err.message);
                }
            }).catch(error => {
                if (error.code === 'auth/wrong-password') {
                    alert('Wrong password');
                } else {
                    alert(error.message);
                }
            });
        },
        loginGoogle() {
            console.log("Google login");
            // Using a popup.
            var provider = new __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth.GoogleAuthProvider();
            provider.addScope('profile');
            provider.addScope('email');
            __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().signInWithPopup(provider).then(result => {
                if (result) {
                    // This gives you a Google Access Token.
                    var token = result.credential.accessToken;
                    // The signed-in user info.
                    var user = result.user;

                    console.log('token: ' + token);
                    console.log(user);

                    this.$router.push('/detail');
                }
            }, err => {
                alert('Oops. ' + err.message);
            });
        },
        loginFacebook() {
            console.log("Facebook login");
            var provider = new __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth.FacebookAuthProvider();
            provider.addScope('public_profile');
            provider.setCustomParameters({
                'display': 'popup'
            });

            __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().signInWithPopup(provider).then(result => {
                if (result) {
                    // This gives you a Google Access Token.
                    var token = result.credential.accessToken;
                    // The signed-in user info.
                    var user = result.user;

                    console.log('token: ' + token);
                    console.log(user);

                    this.$router.push('/hello');
                }
            }, err => {
                alert('Oops. ' + err.message);
            });
        }
    }

});

/***/ }),

/***/ "pMke":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SignupValidate_vue__ = __webpack_require__("XGD4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_392a80d4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SignupValidate_vue__ = __webpack_require__("Cg/X");
function injectStyle (ssrContext) {
  __webpack_require__("9Gsz")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-392a80d4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SignupValidate_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_392a80d4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SignupValidate_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "psOb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Signup_vue__ = __webpack_require__("OBXJ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_47f2412b_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Signup_vue__ = __webpack_require__("03nf");
function injectStyle (ssrContext) {
  __webpack_require__("B/yz")
  __webpack_require__("CsEn")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-47f2412b"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Signup_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_47f2412b_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Signup_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "qgpy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Header__ = __webpack_require__("teIl");
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
    components: {
        appHeader: __WEBPACK_IMPORTED_MODULE_0__Header__["a" /* default */]
    }
});

/***/ }),

/***/ "rDhJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('router-view')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "rpEy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"detail"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"header clearfix"},[_c('h1',{staticClass:"text-muted"},[_vm._v(_vm._s(_vm.msg))])]),_vm._v(" "),_c('h3',[(_vm.user.name)?_c('p',[_vm._v("Name: "+_vm._s(_vm.user.name))]):_vm._e(),_vm._v(" "),_c('p',[_vm._v("Email: "+_vm._s(_vm.user.email))]),_vm._v(" "),_c('p',[_vm._v("Website: "+_vm._s(_vm.user.url))]),_vm._v(" "),_c('p',[_vm._v("Phone: "+_vm._s(_vm.user.phone))])]),_vm._v(" "),_c('br'),_vm._v(" "),_vm._m(0)])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"footer"},[_c('p',[_vm._v("© 2016 Bookmarker, Inc.")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "teIl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Header_vue__ = __webpack_require__("HCTz");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_406a20fb_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Header_vue__ = __webpack_require__("TPPJ");
function injectStyle (ssrContext) {
  __webpack_require__("a6oF")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Header_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_406a20fb_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Header_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "uZY3":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "vX5M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseApp */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return db; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__("Sazm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);


/* Firebase configuration */
let config = {
    apiKey: "AIzaSyCAD1FK8dyvXSIpiE8V71dakbxCXfyNkMY",
    authDomain: "vue-resource-tutorial-8aa47.firebaseapp.com",
    databaseURL: "https://vue-resource-tutorial-e50c2.firebaseio.com/",
    projectId: "vue-resource-tutorial-8aa47",
    storageBucket: "vue-resource-tutorial-8aa47.appspot.com",
    messagingSenderId: "880920997027"
};

const firebaseApp = __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.initializeApp(config);
const db = firebaseApp.database();



/***/ }),

/***/ "wHgX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Detail_vue__ = __webpack_require__("0MoM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_39d5caa6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Detail_vue__ = __webpack_require__("rpEy");
function injectStyle (ssrContext) {
  __webpack_require__("CLO7")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-39d5caa6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Detail_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_39d5caa6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Detail_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "wjOv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('div',{staticClass:"header clearfix"},[_c('h1',{staticClass:"text-muted"},[_vm._v("Assignment 261405")])]),_vm._v(" "),_c('div',{staticClass:"jumbotron"},[_c('h2',[_vm._v("Make By")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('h4',[_vm._v("Itsara Timaroon 570610621")]),_vm._v(" "),_c('h4',[_vm._v("Computer Engineering Chaing Mai University")])]),_vm._v(" "),_c('footer',{staticClass:"footer"},[_c('p',[_vm._v("© 2016 Bookmarker, Inc.")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "xJD8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'app'
});

/***/ }),

/***/ "xJsL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Login_vue__ = __webpack_require__("nKb+");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0ce80895_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Login_vue__ = __webpack_require__("hnOm");
function injectStyle (ssrContext) {
  __webpack_require__("9qno")
  __webpack_require__("zKYZ")
  __webpack_require__("uZY3")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0ce80895"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Login_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0ce80895_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Login_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "zKYZ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.634298c16e900cb6757c.js.map