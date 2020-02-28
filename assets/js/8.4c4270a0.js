(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{229:function(t,a,s){"use strict";s.r(a);var e=s(31),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"faq"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[t._v("#")]),t._v(" FAQ")]),t._v(" "),s("h2",{attrs:{id:"application-died-in-status-loading-source-code-you-need-to-export-the-functional-lifecycles-in-xxx-entry"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#application-died-in-status-loading-source-code-you-need-to-export-the-functional-lifecycles-in-xxx-entry"}},[t._v("#")]),t._v(" "),s("code",[t._v("Application died in status LOADING_SOURCE_CODE: You need to export the functional lifecycles in xxx entry")])]),t._v(" "),s("p",[t._v("This error thrown as qiankun could not find the exported lifecycle method from your entry js.")]),t._v(" "),s("p",[t._v("To solve the exception, try the following steps:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("check you have exported the specified lifecycles, see the "),s("a",{attrs:{href:"https://github.com/umijs/qiankun#2-export-the-lifecycles-from-your-sub-app-entry",target:"_blank",rel:"noopener noreferrer"}},[t._v("doc"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[t._v("check you have set the specified configuration with your bundler, see the "),s("a",{attrs:{href:"https://github.com/umijs/qiankun#3-config-your-sub-app-bundler",target:"_blank",rel:"noopener noreferrer"}},[t._v("doc"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[t._v("check your "),s("code",[t._v("package.json")]),t._v(" name field is unique between sub apps.")])]),t._v(" "),s("li",[s("p",[t._v("Check if the entry js in the sub-app's entry HTML is the last script to load. If not, move the order to make it be the last, or manually mark the entry js as "),s("code",[t._v("entry")]),t._v(" in the HTML, such as:")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/antd.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/appEntry.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("entry")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://www.google.com/analytics.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])]),t._v(" "),s("p",[t._v("If it still not works after the steps above, this is usually due to browser compatibility issues. Try to "),s("strong",[t._v("set the webpack "),s("code",[t._v("output.library")]),t._v(" of the broken sub app the same with your main app registration for your app")]),t._v(", such as:")]),t._v(" "),s("p",[t._v("Such as here is the main configuration:")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// main app")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerMicroApps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'brokenSubApp'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    entry"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'//localhost:7100'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    render"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    activeRule"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("genActiveRule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/react'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Set the "),s("code",[t._v("output.library")]),t._v(" the same with main app registration:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  output"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Keep the same with the registration in main app")]),t._v("\n    library"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'brokenSubApp'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    libraryTarget"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'umd'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    jsonpFunction"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("webpackJsonp_")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("packageName"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"why-dynamic-imported-assets-missing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#why-dynamic-imported-assets-missing"}},[t._v("#")]),t._v(" Why dynamic imported assets missing?")]),t._v(" "),s("p",[t._v("Two way to solve that:")]),t._v(" "),s("h3",{attrs:{id:"_1-with-webpack-live-public-path-config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-with-webpack-live-public-path-config"}},[t._v("#")]),t._v(" 1. With webpack live public path config")]),t._v(" "),s("p",[t._v("qiankun will inject a live public path variable before your sub app bootstrap, what you need is to add this code at the top of your sub app entry js:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("__webpack_public_path__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__INJECTED_PUBLIC_PATH_BY_QIANKUN__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("For more details, check the "),s("a",{attrs:{href:"https://webpack.js.org/guides/public-path/#on-the-fly",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack doc"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Automatic injection "),s("code",[t._v("window. __INJECTED_PUBLIC_PATH_BY_QIANKUN__")]),t._v(" value is calculated according to the child using HTML Entry domain, such as the "),s("code",[t._v("window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__")]),t._v(" actual value is "),s("code",[t._v("//www.test.com/")]),t._v(" while sub application entry is "),s("code",[t._v("//www.test.com/p/index.html")]),t._v(". If the dynamically loaded resources in your sub app are not deployed in the root directory of "),s("code",[t._v("//www.test.com/")]),t._v("(such as deployed in "),s("code",[t._v("//www.test.com/dir/")]),t._v("), you need to turn off the runtime publicPath feature and use "),s("RouterLink",{attrs:{to:"/faq/#_2-with-webpack-static-public-path-config"}},[t._v("static public path config")]),t._v(".")],1)]),t._v(" "),s("h3",{attrs:{id:"_2-with-webpack-static-public-path-config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-with-webpack-static-public-path-config"}},[t._v("#")]),t._v(" 2. With webpack static public path config")]),t._v(" "),s("p",[t._v("You need to set your publicPath configuration to an absolute url, and in development with webpack it might be:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  output"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    publicPath"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("//localhost:")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("port"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"must-a-sub-app-asseta-support-cors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#must-a-sub-app-asseta-support-cors"}},[t._v("#")]),t._v(" Must a sub app asseta support cors?")]),t._v(" "),s("p",[t._v("Yes it is.")]),t._v(" "),s("p",[t._v("Since qiankun get assets which imported by sub app via fetch, these static resources must be required to support "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",target:"_blank",rel:"noopener noreferrer"}},[t._v("cors"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("See "),s("a",{attrs:{href:"https://enable-cors.org/server_nginx.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Enable Nginx Cors"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"how-to-guarantee-the-main-app-stylesheet-isolated-with-sub-apps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-guarantee-the-main-app-stylesheet-isolated-with-sub-apps"}},[t._v("#")]),t._v(" How to guarantee the main app stylesheet isolated with sub apps?")]),t._v(" "),s("p",[t._v("Qiankun will isolate stylesheet between your sub apps automatically, you can manually ensure isolation between master and child applications. Such as add a prefix to all classes in the master application, and if you are using "),s("a",{attrs:{href:"https://ant.design",target:"_blank",rel:"noopener noreferrer"}},[t._v("ant-design"),s("OutboundLink")],1),t._v(", you can follow "),s("a",{attrs:{href:"https://ant.design/docs/react/customize-theme",target:"_blank",rel:"noopener noreferrer"}},[t._v("this doc"),s("OutboundLink")],1),t._v(" to make it works.")]),t._v(" "),s("h2",{attrs:{id:"how-to-make-sub-app-to-run-independently"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-make-sub-app-to-run-independently"}},[t._v("#")]),t._v(" How to make sub app to run independently?")]),t._v(" "),s("p",[t._v("Use the builtin global variable to identify the environment which provided by qiankun master:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__POWERED_BY_QIANKUN__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("mount")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"could-i-active-two-sub-apps-at-the-same-time"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#could-i-active-two-sub-apps-at-the-same-time"}},[t._v("#")]),t._v(" Could I active two sub apps at the same time?")]),t._v(" "),s("p",[t._v("When the subapp should be active depends on your "),s("code",[t._v("activeRule")]),t._v(" config, like the example below, we set "),s("code",[t._v("activeRule")]),t._v(" logic the same between "),s("code",[t._v("reactApp")]),t._v(" and "),s("code",[t._v("react15App")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerMicroApps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// define the activeRule by your self")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'reactApp'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" entry"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'//localhost:7100'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" render"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("activeRule")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isReactApp "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react15App'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" entry"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'//localhost:7102'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" render"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("activeRule")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isReactApp "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue app'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" entry"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'//localhost:7101'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" render"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("activeRule")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isVueApp "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" singular"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("After setting "),s("code",[t._v("singular: false")]),t._v(" in "),s("code",[t._v("start")]),t._v(" method, "),s("code",[t._v("reactApp")]),t._v(" and "),s("code",[t._v("react15App")]),t._v(" should be active at the same time once "),s("code",[t._v("isReactApp")]),t._v(" method returns "),s("code",[t._v("true")]),t._v(".")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("Notice that no more than one application that relies on router can be displayed on the page at the same time, as the browser has only one url location, if there is more than one routing apps, it will definitely result in one of them to be 404 found.")])]),t._v(" "),s("h2",{attrs:{id:"how-to-extract-the-common-library？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-extract-the-common-library？"}},[t._v("#")]),t._v(" How to extract the common library？")]),t._v(" "),s("blockquote",[s("p",[t._v("Don’t share a runtime, even if all teams use the same framework. - "),s("a",{attrs:{href:"https://micro-frontends.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Micro Frontends"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("Although sharing dependencies isn't a good idea, but if you really need it, you can external the common dependencies from sub apps and then import them in master app.")]),t._v(" "),s("p",[t._v("In the future qiankun will provide a smarter way to make it automatically.")]),t._v(" "),s("h2",{attrs:{id:"does-qiankun-compatible-with-ie"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#does-qiankun-compatible-with-ie"}},[t._v("#")]),t._v(" Does qiankun compatible with ie?")]),t._v(" "),s("p",[t._v("Not compatible now, will be supported if enough user appeal for.")]),t._v(" "),s("p",[t._v("If you have to support ie now actually, you could try to disable the "),s("code",[t._v("jsSandbox")]),t._v(" to make your app work(but not guarantee correctly).")])])}),[],!1,null,null,null);a.default=n.exports}}]);