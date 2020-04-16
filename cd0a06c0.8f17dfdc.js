(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{217:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return i})),n.d(a,"metadata",(function(){return c})),n.d(a,"rightToc",(function(){return l})),n.d(a,"default",(function(){return b}));var t=n(1),p=n(10),r=(n(0),n(240)),i={id:"typescript",title:"TypeScript"},c={id:"plugins/typescript",title:"TypeScript",description:"This is the most basic TypeScript plugin and it can generate typings based on `GraphQLSchema`, which can be used by any other typescript related plugin.",source:"@site/docs/plugins/typescript.md",permalink:"/docs/plugins/typescript",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/plugins/typescript.md",sidebar:"sidebar",previous:{title:"All Plugins",permalink:"/docs/plugins/index"},next:{title:"TypeScript Operations",permalink:"/docs/plugins/typescript-operations"}},l=[{value:"Installation",id:"installation",children:[]},{value:"Configuration",id:"configuration",children:[]}],o={rightToc:l};function b(e){var a=e.components,n=Object(p.a)(e,["components"]);return Object(r.b)("wrapper",Object(t.a)({},o,n,{components:a,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This is the most basic TypeScript plugin and it can generate typings based on ",Object(r.b)("inlineCode",{parentName:"p"},"GraphQLSchema"),", which can be used by any other typescript related plugin."),Object(r.b)("p",null,"It generates types for your entire schema: types, input types, enums, interfaces, scalars and unions."),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("p",null,"Install using ",Object(r.b)("inlineCode",{parentName:"p"},"yarn"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{}),"$ yarn add -D @graphql-codegen/typescript \n")),Object(r.b)("h2",{id:"configuration"},"Configuration"),Object(r.b)("p",null,Object(r.b)("h3",{parentName:"p"},"scalars (",Object(r.b)("inlineCode",{parentName:"h3"},"ScalarsMap"),")"),Object(r.b)("p",{parentName:"p"},"Extends or overrides the built-in scalars and custom GraphQL scalars to a custom type."),Object(r.b)("h4",{parentName:"p"},"Usage Example"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),'config:\n  scalars:\n    DateTime: Date\n    JSON: "{ [key: string]: any }"\n')),Object(r.b)("h3",{parentName:"p"},"namingConvention (",Object(r.b)("inlineCode",{parentName:"h3"},"NamingConvention"),", default value: ",Object(r.b)("inlineCode",{parentName:"h3"},"pascal-case#pascalCase"),")"),Object(r.b)("p",{parentName:"p"},"Allow you to override the naming convention of the output. You can either override all namings, or specify an object with specific custom naming convention per output. The format of the converter must be a valid ",Object(r.b)("inlineCode",{parentName:"p"},"module#method"),". Allowed values for specific output are: ",Object(r.b)("inlineCode",{parentName:"p"},"typeNames"),", ",Object(r.b)("inlineCode",{parentName:"p"},"enumValues"),'. You can also use "keep" to keep all GraphQL names as-is. Additionally you can set ',Object(r.b)("inlineCode",{parentName:"p"},"transformUnderscore")," to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," if you want to override the default behaviour, which is to preserves underscores."),Object(r.b)("h4",{parentName:"p"},"Usage Example: Override All Names"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: lower-case#lowerCase\n")),Object(r.b)("h4",{parentName:"p"},"Usage Example: Upper-case enum values"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    enumValues: upper-case#upperCase\n")),Object(r.b)("h4",{parentName:"p"},"Usage Example: Keep"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: keep\n")),Object(r.b)("h4",{parentName:"p"},"Usage Example: Remove Underscores"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    transformUnderscore: true\n")),Object(r.b)("h3",{parentName:"p"},"typesPrefix (",Object(r.b)("inlineCode",{parentName:"h3"},"string"),", default value: ",Object(r.b)("inlineCode",{parentName:"h3"},'""'),")"),Object(r.b)("p",{parentName:"p"},"Prefixes all the generated types."),Object(r.b)("h4",{parentName:"p"},'Usage Example: Add "I" Prefix'),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  typesPrefix: I\n")),Object(r.b)("h3",{parentName:"p"},"skipTypename (",Object(r.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(r.b)("inlineCode",{parentName:"h3"},"false"),")"),Object(r.b)("p",{parentName:"p"},"Does not add __typename to the generated types, unless it was specified in the selection set."),Object(r.b)("h4",{parentName:"p"},"Usage Example"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  skipTypename: true\n")),Object(r.b)("h3",{parentName:"p"},"nonOptionalTypename (",Object(r.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(r.b)("inlineCode",{parentName:"h3"},"false"),")"),Object(r.b)("p",{parentName:"p"},"Automatically adds ",Object(r.b)("inlineCode",{parentName:"p"},"__typename")," field to the generated types, even when they are not specified in the selection set, and makes it non-optional"),Object(r.b)("h4",{parentName:"p"},"Usage Example"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  nonOptionalTypename: true\n"))),Object(r.b)("p",null,Object(r.b)("h3",{parentName:"p"},"addUnderscoreToArgsType (",Object(r.b)("inlineCode",{parentName:"h3"},"boolean"),")"),Object(r.b)("p",{parentName:"p"},"Adds ",Object(r.b)("inlineCode",{parentName:"p"},"_")," to generated ",Object(r.b)("inlineCode",{parentName:"p"},"Args")," types in order to avoid duplicate identifiers."),Object(r.b)("h4",{parentName:"p"},"Usage Example: With Custom Values"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"  config:\n    addUnderscoreToArgsType: true\n")),Object(r.b)("h3",{parentName:"p"},"enumValues (",Object(r.b)("inlineCode",{parentName:"h3"},"EnumValuesMap"),")"),Object(r.b)("p",{parentName:"p"},"Overrides the default value of enum values declared in your GraphQL schema. You can also map the entire enum to an external type by providing a string that of ",Object(r.b)("inlineCode",{parentName:"p"},"module#type"),"."),Object(r.b)("h4",{parentName:"p"},"Usage Example: With Custom Values"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"  config:\n    enumValues:\n      MyEnum:\n        A: 'foo'\n")),Object(r.b)("h4",{parentName:"p"},"Usage Example: With External Enum"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"  config:\n    enumValues:\n      MyEnum: ./my-file#MyCustomEnum\n")),Object(r.b)("h4",{parentName:"p"},"Usage Example: Import All Enums from a file"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"  config:\n    enumValues: ./my-file\n")),Object(r.b)("h3",{parentName:"p"},"declarationKind (",Object(r.b)("inlineCode",{parentName:"h3"},"DeclarationKindConfig"),")"),Object(r.b)("p",{parentName:"p"},"Overrides the default output for various GraphQL elements."),Object(r.b)("h4",{parentName:"p"},"Usage Example: Override all declarations"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"  config:\n    declarationKind: 'interface'\n")),Object(r.b)("h4",{parentName:"p"},"Usage Example: Override only specific declarations"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"  config:\n    declarationKind:\n      type: 'interface'\n      input: 'interface'\n")),Object(r.b)("h3",{parentName:"p"},"enumPrefix (",Object(r.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(r.b)("inlineCode",{parentName:"h3"},"true"),")"),Object(r.b)("p",{parentName:"p"},"Allow you to disable prefixing for generated enums, works in combination with ",Object(r.b)("inlineCode",{parentName:"p"},"typesPrefix"),"."),Object(r.b)("h4",{parentName:"p"},"Usage Example: Disable enum prefixes"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"  config:\n    typesPrefix: I\n    enumPrefix: false\n"))),Object(r.b)("p",null,Object(r.b)("h3",{parentName:"p"},"avoidOptionals (",Object(r.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(r.b)("inlineCode",{parentName:"h3"},"false"),")"),Object(r.b)("p",{parentName:"p"},"This will cause the generator to avoid using TypeScript optionals (",Object(r.b)("inlineCode",{parentName:"p"},"?"),") on types, so the following definition: ",Object(r.b)("inlineCode",{parentName:"p"},"type A { myField: String }")," will output ",Object(r.b)("inlineCode",{parentName:"p"},"myField: Maybe<string>")," instead of ",Object(r.b)("inlineCode",{parentName:"p"},"myField?: Maybe<string>"),"."),Object(r.b)("h4",{parentName:"p"},"Usage Example: Override all definition types"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   avoidOptionals: true\n")),Object(r.b)("h4",{parentName:"p"},"Usage Example: Override only specific definition types"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   avoidOptionals:\n     field: true\n     inputValue: true\n     object: true\n")),Object(r.b)("h3",{parentName:"p"},"constEnums (",Object(r.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(r.b)("inlineCode",{parentName:"h3"},"false"),")"),Object(r.b)("p",{parentName:"p"},"Will prefix every generated ",Object(r.b)("inlineCode",{parentName:"p"},"enum")," with ",Object(r.b)("inlineCode",{parentName:"p"},"const"),", you can read more about const enums ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"https://www.typescriptlang.org/docs/handbook/enums.html"}),"here"),"."),Object(r.b)("h4",{parentName:"p"},"Usage Example"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   constEnums: true\n")),Object(r.b)("h3",{parentName:"p"},"enumsAsTypes (",Object(r.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(r.b)("inlineCode",{parentName:"h3"},"false"),")"),Object(r.b)("p",{parentName:"p"},"Generates enum as TypeScript ",Object(r.b)("inlineCode",{parentName:"p"},"type")," instead of ",Object(r.b)("inlineCode",{parentName:"p"},"enum"),". Useful it you wish to genereate ",Object(r.b)("inlineCode",{parentName:"p"},".d.ts")," declartion file instead of ",Object(r.b)("inlineCode",{parentName:"p"},".ts")),Object(r.b)("h4",{parentName:"p"},"Usage Example"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   enumsAsTypes: true\n")),Object(r.b)("h3",{parentName:"p"},"enumsAsConst (",Object(r.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(r.b)("inlineCode",{parentName:"h3"},"false"),")"),Object(r.b)("p",{parentName:"p"},"Generates enum as TypeScript ",Object(r.b)("inlineCode",{parentName:"p"},"const assertions")," instead of ",Object(r.b)("inlineCode",{parentName:"p"},"enum"),". This can even be used to enable enum-like patterns in plain JavaScript code if you choose not to use TypeScript\u2019s enum construct."),Object(r.b)("h4",{parentName:"p"},"Usage Example"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   enumsAsConst: true\n")),Object(r.b)("h3",{parentName:"p"},"fieldWrapperValue (",Object(r.b)("inlineCode",{parentName:"h3"},"string"),", default value: ",Object(r.b)("inlineCode",{parentName:"h3"},"T | Promise | (() = T | Promise)"),")"),Object(r.b)("p",{parentName:"p"},"Allow to override the type value of ",Object(r.b)("inlineCode",{parentName:"p"},"FieldWrapper"),"."),Object(r.b)("h4",{parentName:"p"},"Usage Example: Only allow values"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   fieldWrapperValue: T\n")),Object(r.b)("h3",{parentName:"p"},"immutableTypes (",Object(r.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(r.b)("inlineCode",{parentName:"h3"},"false"),")"),Object(r.b)("p",{parentName:"p"},"Generates immutable types by adding ",Object(r.b)("inlineCode",{parentName:"p"},"readonly")," to properties and uses ",Object(r.b)("inlineCode",{parentName:"p"},"ReadonlyArray"),"."),Object(r.b)("h4",{parentName:"p"},"Usage Example"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   immutableTypes: true\n")),Object(r.b)("h3",{parentName:"p"},"maybeValue (",Object(r.b)("inlineCode",{parentName:"h3"},"string"),", default value: ",Object(r.b)("inlineCode",{parentName:"h3"},"T | null"),")"),Object(r.b)("p",{parentName:"p"},"Allow to override the type value of ",Object(r.b)("inlineCode",{parentName:"p"},"Maybe"),"."),Object(r.b)("h4",{parentName:"p"},"Usage Example: Allow undefined"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"generates:\n path/to/file.ts:\n   plugins:\n     - typescript\n   config:\n     maybeValue: T | null | undefined\n")),Object(r.b)("h4",{parentName:"p"},"Usage Example: Allow ",Object(r.b)("inlineCode",{parentName:"h4"},"null")," in resolvers:"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"generates:\n path/to/file.ts:\n   plugins:\n     - typescript\n     - typescript-resolves\n   config:\n     maybeValue: 'T extends PromiseLike<infer U> ? Promise<U | null> : T | null'\n")),Object(r.b)("h3",{parentName:"p"},"noExport (",Object(r.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(r.b)("inlineCode",{parentName:"h3"},"false"),")"),Object(r.b)("p",{parentName:"p"},"Set the to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," in order to generate output without ",Object(r.b)("inlineCode",{parentName:"p"},"export")," modifier. This is useful if you are generating ",Object(r.b)("inlineCode",{parentName:"p"},".d.ts")," file and want it to be globally available."),Object(r.b)("h4",{parentName:"p"},"Usage Example: Disable all export from a file"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   noExport: true\n")),Object(r.b)("h3",{parentName:"p"},"wrapFieldDefinitions (",Object(r.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(r.b)("inlineCode",{parentName:"h3"},"true"),")"),Object(r.b)("p",{parentName:"p"},"Set the to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," in order to wrap field definitions with ",Object(r.b)("inlineCode",{parentName:"p"},"FieldWrapper"),". This is useful to allow return types such as Promises and functions."),Object(r.b)("h4",{parentName:"p"},"Usage Example: Enable wrapping fields"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   wrapFieldDefinitions: false\n"))))}b.isMDXComponent=!0},240:function(e,a,n){"use strict";n.d(a,"a",(function(){return s})),n.d(a,"b",(function(){return d}));var t=n(0),p=n.n(t);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,p=function(e,a){if(null==e)return{};var n,t,p={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(p[n]=e[n]);return p}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var o=p.a.createContext({}),b=function(e){var a=p.a.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):c({},a,{},e)),n},s=function(e){var a=b(e.components);return p.a.createElement(o.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return p.a.createElement(p.a.Fragment,{},a)}},u=Object(t.forwardRef)((function(e,a){var n=e.components,t=e.mdxType,r=e.originalType,i=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),s=b(n),u=t,d=s["".concat(i,".").concat(u)]||s[u]||m[u]||r;return n?p.a.createElement(d,c({ref:a},o,{components:n})):p.a.createElement(d,c({ref:a},o))}));function d(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var r=n.length,i=new Array(r);i[0]=u;var c={};for(var l in a)hasOwnProperty.call(a,l)&&(c[l]=a[l]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var o=2;o<r;o++)i[o]=n[o];return p.a.createElement.apply(null,i)}return p.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);