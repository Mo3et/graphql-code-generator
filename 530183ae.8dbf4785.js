(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{171:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return o})),n.d(a,"metadata",(function(){return c})),n.d(a,"rightToc",(function(){return l})),n.d(a,"default",(function(){return s}));var t=n(1),r=n(10),p=(n(0),n(240)),o={id:"java-apollo-android",title:"Java Apollo Android"},c={id:"plugins/java-apollo-android",title:"Java Apollo Android",description:"The `java-apollo-android` plugin and presets creates generated mappers and parsers for a complete type-safe GraphQL requests, for developers that uses Apollo Android runtime.",source:"@site/docs/plugins/java-apollo-android.md",permalink:"/docs/plugins/java-apollo-android",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/plugins/java-apollo-android.md",sidebar:"sidebar",previous:{title:"Java Resolvers",permalink:"/docs/plugins/java-resolvers"},next:{title:"Fragment Matcher",permalink:"/docs/plugins/fragment-matcher"}},l=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Configuration",id:"configuration",children:[]}],i={rightToc:l};function s(e){var a=e.components,n=Object(r.a)(e,["components"]);return Object(p.b)("wrapper",Object(t.a)({},i,n,{components:a,mdxType:"MDXLayout"}),Object(p.b)("p",null,"The ",Object(p.b)("inlineCode",{parentName:"p"},"java-apollo-android")," plugin and presets creates generated mappers and parsers for a complete type-safe GraphQL requests, for developers that uses Apollo Android runtime."),Object(p.b)("h2",{id:"installation"},"Installation"),Object(p.b)("p",null,"To get started with this plugins and preset, make sure you have the following installed:"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"NodeJS (10 or later)"),Object(p.b)("li",{parentName:"ul"},"NPM or Yarn")),Object(p.b)("p",null,"Run the following in your Android project:"),Object(p.b)("pre",null,Object(p.b)("code",Object(t.a)({parentName:"pre"},{}),"  $ yarn init --yes\n  $ yarn add @graphql-codegen/cli graphql @graphql-codegen/java-apollo-android\n")),Object(p.b)("p",null,"Then, create ",Object(p.b)("inlineCode",{parentName:"p"},"codegen.yml")," with the following configuration:"),Object(p.b)("pre",null,Object(p.b)("code",Object(t.a)({parentName:"pre"},{}),'schema: POINT_TO_YOUR_SCHEMA\ndocuments: POINT_TO_YOUR_GRAPHQL_OPERATIONS\ngenerates:\n  ./app/src/main/java/:\n    preset: java-apollo-android\n    config:\n      package: "com.my.app.generated.graphql"\n      fragmentPackage: "com.my.app.generated.graphql"\n      typePackage: "type"\n    plugins:\n      - java-apollo-android\n')),Object(p.b)("blockquote",null,Object(p.b)("p",{parentName:"blockquote"},"Also, make sure to add ",Object(p.b)("inlineCode",{parentName:"p"},"node_modules")," to your ",Object(p.b)("inlineCode",{parentName:"p"},".gitignore")," file.")),Object(p.b)("p",null,"To integrate with your Gradle build, you can add the following to your app Gradle file:"),Object(p.b)("pre",null,Object(p.b)("code",Object(t.a)({parentName:"pre"},{}),'preBuild.doFirst {\n    def proc = "yarn graphql-codegen".execute()\n    proc.waitForProcessOutput(System.out, System.err)\n}\n\nbuild.dependsOn preBuild\n')),Object(p.b)("p",null,"This will make sure to run and generate output before each time you build your project."),Object(p.b)("h2",{id:"usage"},"Usage"),Object(p.b)("p",null,"You can find a ",Object(p.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/dotansimha/graphql-codegen-appsync-android-example"}),"repository with a working example using AppSync")),Object(p.b)("h2",{id:"configuration"},"Configuration"),Object(p.b)("p",null,Object(p.b)("h3",{parentName:"p"},"package (",Object(p.b)("inlineCode",{parentName:"h3"},"string"),")"),Object(p.b)("p",{parentName:"p"},"Customize the Java package name for the generated operations. The default package name will be generated according to the output file path."),Object(p.b)("h4",{parentName:"p"},"Usage Example"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),'generates:\n./app/src/main/java/:\n  preset: java-apollo-android\n  config:\n    package: "com.my.paackage.generated.graphql"\n  plugins:\n    - java-apollo-android\n')),Object(p.b)("h3",{parentName:"p"},"typePackage (",Object(p.b)("inlineCode",{parentName:"h3"},"string"),")"),Object(p.b)("p",{parentName:"p"},"Customize the Java package name for the types generated based on input types."),Object(p.b)("h4",{parentName:"p"},"Usage Example"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),'generates:\n./app/src/main/java/:\n  preset: java-apollo-android\n  config:\n    typePackage: "com.my.paackage.generated.graphql"\n  plugins:\n    - java-apollo-android\n')),Object(p.b)("h3",{parentName:"p"},"fragmentPackage (",Object(p.b)("inlineCode",{parentName:"h3"},"string"),")"),Object(p.b)("p",{parentName:"p"},"Customize the Java package name for the fragments generated classes."),Object(p.b)("h4",{parentName:"p"},"Usage Example"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),'generates:\n./app/src/main/java/:\n  preset: java-apollo-android\n  config:\n    fragmentPackage: "com.my.paackage.generated.graphql"\n  plugins:\n    - java-apollo-android\n'))),Object(p.b)("p",null,Object(p.b)("h3",{parentName:"p"},"scalars (",Object(p.b)("inlineCode",{parentName:"h3"},"ScalarsMap"),")"),Object(p.b)("p",{parentName:"p"},"Extends or overrides the built-in scalars and custom GraphQL scalars to a custom type."),Object(p.b)("h4",{parentName:"p"},"Usage Example"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),'config:\n  scalars:\n    DateTime: Date\n    JSON: "{ [key: string]: any }"\n')),Object(p.b)("h3",{parentName:"p"},"namingConvention (",Object(p.b)("inlineCode",{parentName:"h3"},"NamingConvention"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},"pascal-case#pascalCase"),")"),Object(p.b)("p",{parentName:"p"},"Allow you to override the naming convention of the output. You can either override all namings, or specify an object with specific custom naming convention per output. The format of the converter must be a valid ",Object(p.b)("inlineCode",{parentName:"p"},"module#method"),". Allowed values for specific output are: ",Object(p.b)("inlineCode",{parentName:"p"},"typeNames"),", ",Object(p.b)("inlineCode",{parentName:"p"},"enumValues"),'. You can also use "keep" to keep all GraphQL names as-is. Additionally you can set ',Object(p.b)("inlineCode",{parentName:"p"},"transformUnderscore")," to ",Object(p.b)("inlineCode",{parentName:"p"},"true")," if you want to override the default behaviour, which is to preserves underscores."),Object(p.b)("h4",{parentName:"p"},"Usage Example: Override All Names"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: lower-case#lowerCase\n")),Object(p.b)("h4",{parentName:"p"},"Usage Example: Upper-case enum values"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    enumValues: upper-case#upperCase\n")),Object(p.b)("h4",{parentName:"p"},"Usage Example: Keep"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: keep\n")),Object(p.b)("h4",{parentName:"p"},"Usage Example: Remove Underscores"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    transformUnderscore: true\n")),Object(p.b)("h3",{parentName:"p"},"typesPrefix (",Object(p.b)("inlineCode",{parentName:"h3"},"string"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},'""'),")"),Object(p.b)("p",{parentName:"p"},"Prefixes all the generated types."),Object(p.b)("h4",{parentName:"p"},'Usage Example: Add "I" Prefix'),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  typesPrefix: I\n")),Object(p.b)("h3",{parentName:"p"},"skipTypename (",Object(p.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},"false"),")"),Object(p.b)("p",{parentName:"p"},"Does not add __typename to the generated types, unless it was specified in the selection set."),Object(p.b)("h4",{parentName:"p"},"Usage Example"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  skipTypename: true\n")),Object(p.b)("h3",{parentName:"p"},"nonOptionalTypename (",Object(p.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},"false"),")"),Object(p.b)("p",{parentName:"p"},"Automatically adds ",Object(p.b)("inlineCode",{parentName:"p"},"__typename")," field to the generated types, even when they are not specified in the selection set, and makes it non-optional"),Object(p.b)("h4",{parentName:"p"},"Usage Example"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  nonOptionalTypename: true\n"))))}s.isMDXComponent=!0},240:function(e,a,n){"use strict";n.d(a,"a",(function(){return b})),n.d(a,"b",(function(){return u}));var t=n(0),r=n.n(t);function p(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){p(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},p=Object.keys(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),s=function(e){var a=r.a.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):c({},a,{},e)),n},b=function(e){var a=s(e.components);return r.a.createElement(i.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},d=Object(t.forwardRef)((function(e,a){var n=e.components,t=e.mdxType,p=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),b=s(n),d=t,u=b["".concat(o,".").concat(d)]||b[d]||m[d]||p;return n?r.a.createElement(u,c({ref:a},i,{components:n})):r.a.createElement(u,c({ref:a},i))}));function u(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var p=n.length,o=new Array(p);o[0]=d;var c={};for(var l in a)hasOwnProperty.call(a,l)&&(c[l]=a[l]);c.originalType=e,c.mdxType="string"==typeof e?e:t,o[1]=c;for(var i=2;i<p;i++)o[i]=n[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);