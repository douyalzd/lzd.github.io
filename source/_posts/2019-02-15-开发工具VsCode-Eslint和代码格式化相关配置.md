---
title: 开发工具VsCode-Eslint和代码格式化相关配置
author:
    nick: lzd
    github_name: douyalzd
mathjax: false
top: false
summary: 为使开发更规范化，这里给出了关于vscode开发工具格式化代码的相关设置和eslint的配置信息
categories: 开发工具
tags:
    - eslitn
    - 开发工具
date: 2019-02-15 12:02:49
---

### eslint 全局安装
> `npm i -g eslint eslint-plugin-html eslint-plugin-vue babel-eslint`

### vscode 配置

> 需要安装【Prettier-Code formatter】和【ESLint】、【Vetur】、【beautify】插件

``` json
{
    "editor.tabSize": 4,
    "prettier.tabWidth": 4,
    "prettier.eslintIntegration": true,
    "files.autoSave": "afterDelay",
    "files.autoSaveDelay": 60000,
    "eslint.autoFixOnSave": true,
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "html",
        {"language": "vue", "autoFix": true}
    ],
    "eslint.options": {
        //"configFile": "E:/git/github/styleguide/eslint/.eslintrc.js",
        "plugins": ["html"]
    },
    "vetur.format.defaultFormatter.html": "js-beautify-html",
    "vetur.format.defaultFormatter.js": "prettier",
    "vetur.format.defaultFormatterOptions": {
        "js-beautify-html": {
            "wrap-attributes": "aligned-multiple",
            "wrap-attributes-indent-size": 4,
            "wrap-line-length": 150,
            "indent_size": 4,
        },
        "prettier": {
            "tabWidth": 4,
            "printWidth": 200,
            "singleQuote": false,
            "jsxBracketSameLine": true,
        },
    },
}
```

### eslintrc.js

``` javascript
module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: 'eslint:recommended',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // check if imports actually resolve
    'settings': {
        'import/resolver': {
            'webpack': {
                'config': 'build/webpack.base.conf.js'
            }
        }
    },
    // add your custom rules here
    //it is base on https://github.com/vuejs/eslint-config-vue
    rules: {
        "indent": [2, 4, {// 强制使用一致的缩进
            'SwitchCase': 1
        }], 
        'no-mixed-spaces-and-tabs': 2, // 禁止空格和 tab 的混合缩进
        'arrow-spacing': [2, { // 强制箭头函数的箭头前后使用一致的空格
            'before': true,
            'after': true
        }],
        'block-spacing': [2, 'always'], // 禁止或强制在代码块中开括号前和闭括号后有空格
        'brace-style': [2, '1tbs', { // 强制在代码块中使用一致的大括号风格
            'allowSingleLine': true
        }],
        'camelcase': [0, { // 强制使用骆驼拼写法命名约定
            'properties': 'always'
        }],
        'comma-dangle': [2, 'never'], // 要求或禁止末尾逗号
        'comma-spacing': [2, { // 强制在逗号前后使用一致的空格
            'before': false,
            'after': true
        }],
        'comma-style': [2, 'last'], // 强制使用一致的逗号风格
        'curly': [2, 'multi-line'], // 强制所有控制语句使用一致的括号风格
        'dot-location': [2, 'property'], // 强制在点号之前和之后一致的换行
        'eol-last': 2, // 要求或禁止文件末尾存在空行
        //'eqeqeq': [2, 'allow-null'], // 要求使用 === 和 !==
        'key-spacing': [2, { // 强制在对象字面量的属性中键和值之间使用一致的间距
            'beforeColon': false,
            'afterColon': true
        }],
        'keyword-spacing': [2, { // 强制在关键字前后使用一致的空格
            // "after": true,
            // "before": true
           "overrides": { "if": { "after": false, "before": true }, "else": { "after": true, "before": false }, "for": { "after": false, "before": true }, "while": { "after": false, "before": true} }
        }],
        'new-cap': [2, { // 要求构造函数首字母大写
            'newIsCap': true,
            'capIsNew': false
        }],
        'new-parens': 2, // 要求调用无参构造函数时有圆括号
        'no-array-constructor': 2, // 禁用 Array 构造函数
        'no-caller': 2, // 禁用 arguments.caller 或 arguments.callee
        'no-console': 'off', // 禁用 console
        'no-class-assign': 2, // 禁止修改类声明的变量
        'no-cond-assign': 2, // 禁止条件表达式中出现赋值操作符
        'no-const-assign': 2, // 禁止修改 const 声明的变量
        'no-control-regex': 2, // 禁止在正则表达式中使用控制字符
        'no-delete-var': 2, // 禁止删除变量
        'no-dupe-args': 2, // 禁止 function 定义中出现重名参数
        'no-dupe-class-members': 2, // 禁止类成员中出现重复的名称
        'no-dupe-keys': 2, // 禁止对象字面量中出现重复的 key
        'no-duplicate-case': 2, // 禁止出现重复的 case 标签
        'no-empty-character-class': 2, // 禁止在正则表达式中使用空字符集
        'no-empty-pattern': 2, // 禁止使用空解构模式
        'no-eval': 2, // 禁用 eval()
        'no-ex-assign': 2, // 禁止对 catch 子句的参数重新赋值
        'no-extend-native': 2, // 禁止扩展原生类型
        'no-extra-parens': [2, 'functions'], // 禁止不必要的括号
        'no-fallthrough': 2, // 禁止 case 语句落空
        'no-floating-decimal': 2, // 禁止数字字面量中使用前导和末尾小数点
        'no-func-assign': 2, // 禁止对 function 声明重新赋值
        'no-implied-eval': 2, // 禁止使用类似 eval() 的方法
        'no-invalid-regexp': 2, // 禁止 RegExp 构造函数中存在无效的正则表达式字符串
        'no-irregular-whitespace': 2, // 禁止在字符串和注释之外不规则的空白
        'no-label-var': 2, // 不允许标签与变量同名
        'no-labels': [2, { // 禁用标签语句
            'allowLoop': false,
            'allowSwitch': false
        }],
        'no-lone-blocks': 2, // 禁用不必要的嵌套块
        'no-multi-spaces': 2, // 禁止使用多个空格
        'no-multi-str': 2, // 禁止使用多行字符串
        'no-multiple-empty-lines': [2, { // 禁止出现多行空行
            'max': 2
        }],
        'no-new-require': 2, // 禁止调用 require 时使用 new 操作符
        'no-new-symbol': 2, // 禁止 Symbolnew 操作符和 new 一起使用
        'no-new-wrappers': 2, // 禁止对 String，Number 和 Boolean 使用 new 操作符
        'no-obj-calls': 2, // 禁止把全局对象作为函数调用
        'no-octal': 2, // 禁用八进制字面量
        'no-octal-escape': 2, // 禁止在字符串中使用八进制转义序列
        'no-path-concat': 2, // 禁止对 __dirname 和 __filename 进行字符串连接
        'no-proto': 2, // 禁用 __proto__ 属性
        'no-redeclare': 2, // 禁止多次声明同一变量
        'no-regex-spaces': 2, // 不允许正则表达式文字中的多个空格
        'no-return-assign': [2, 'except-parens'], // 禁止在 return 语句中使用赋值语句
        'no-self-assign': 2, // 禁止自我赋值
        'no-self-compare': 2, // 禁止自身比较
        'no-sequences': 2, // 禁用逗号操作符
        'no-shadow-restricted-names': 2, // 禁止将标识符定义为受限的名字
        'no-spaced-func': 2, // 要求或禁止在函数标识符和其调用之间有空格 (func-call-spacing)
        'no-sparse-arrays': 2, // 禁用稀疏数组
        'no-this-before-super': 2, // 禁止在构造函数中，在调用 super() 之前使用 this 或 super
        'no-throw-literal': 2, // 禁止抛出异常字面量
        'no-trailing-spaces': 2, // 禁用行尾空格
        'no-undef': 2, // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
        'no-undef-init': 2, // 禁止将变量初始化为 undefined
        'no-unexpected-multiline': 2, // 禁止出现令人困惑的多行表达式
        'no-unmodified-loop-condition': 2, // 禁用一成不变的循环条件
        'no-unneeded-ternary': [2, { // 禁止可以在有更简单的可替代的表达式时使用三元操作符
            'defaultAssignment': false
        }],
        'no-unreachable': 2, // 禁止在return、throw、continue 和 break 语句之后出现不可达代码
        'no-unsafe-finally': 2, // 禁止在 finally 语句块中出现控制流语句
        'no-unused-vars': [2, { // 禁止出现未使用过的变量
            'vars': 'all',
            'args': 'none'
        }],
        'no-useless-call': 2, // 禁止不必要的 .call() 和 .apply()
        'no-useless-computed-key': 2, // 禁止在对象中使用不必要的计算属性
        'no-useless-constructor': 2, // 禁用不必要的构造函数
        'no-useless-escape': 0, // 禁用不必要的转义字符
        'no-whitespace-before-property': 2, // 禁止属性前有空白
        'no-with': 2, // 禁用 with 语句
        'one-var': [2, { // 强制函数中的变量要么一起声明要么分开声明
            'initialized': 'never'
        }],
        'operator-linebreak': [2, 'before'],  // 强制操作符使用一致的换行符
        'padded-blocks': [2, 'never'], // 要求或禁止块内填充
        // 'quotes': [2, 'double', { // 强制使用一致的反勾号、双引号或单引号
        //     'avoidEscape': true,
        //     'allowTemplateLiterals': true
        // }],
        'semi': [2, 'always', { "omitLastInOneLineBlock": true}], // 要求或禁止使用分号代替 ASI
        'semi-spacing': [2, { // 强制分号之前和之后使用一致的空格
            'before': false,
            'after': true
        }],
        'space-before-blocks': [2, 'always'], // 强制在块之前使用一致的空格
        'space-before-function-paren': [2, 'never'], // 强制在 function的左括号之前使用一致的空格
        'space-in-parens': [2, 'never'], // 强制在圆括号内使用一致的空格
        'space-infix-ops': 2, // 要求操作符周围有空格
        'space-unary-ops': [2, { // 强制在一元操作符前后使用一致的空格
            'words': true,
            'nonwords': false
        }],
        'spaced-comment': [2, 'always', { // 强制在注释中 // 或 /* 使用一致的空格
            'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
        }],
        'template-curly-spacing': [2, 'never'], // 要求或禁止模板字符串中的嵌入表达式周围空格的使用
        'use-isnan': 2, // 要求使用 isNaN() 检查 NaN
        'valid-typeof': 2, // 强制 typeof 表达式与有效的字符串进行比较
        'wrap-iife': [2, 'any'], // 要求 IIFE 使用括号括起来
        'yield-star-spacing': [2, 'both'], // 强制在 yield* 表达式中 * 周围使用空格
        'yoda': [2, 'never'], // 要求或禁止 “Yoda” 条件
        'prefer-const': 2,  // 要求使用 const 声明那些声明后不再被修改的变量
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0, // 禁用 debugger
        'object-curly-spacing': [2, 'always', { // 强制在大括号中使用一致的空格
            objectsInObjects: false
        }],
        'array-bracket-spacing': [2, 'never'] // 强制数组方括号中使用一致的空格
    }
}

```

### eslint 解释

``` json
"no-alert": 0,//禁止使用alert confirm prompt
"no-array-constructor": 2,//禁止使用数组构造器
"no-bitwise": 0,//禁止使用按位运算符
"no-caller": 1,//禁止使用arguments.caller或arguments.callee
"no-catch-shadow": 2,//禁止catch子句参数与外部作用域变量同名
"no-class-assign": 2,//禁止给类赋值
"no-cond-assign": 2,//禁止在条件表达式中使用赋值语句
"no-console": 2,//禁止使用console
"no-const-assign": 2,//禁止修改const声明的变量
"no-constant-condition": 2,//禁止在条件中使用常量表达式 if(true) if(1)
"no-continue": 0,//禁止使用continue
"no-control-regex": 2,//禁止在正则表达式中使用控制字符
"no-debugger": 2,//禁止使用debugger
"no-delete-var": 2,//不能对var声明的变量使用delete操作符
"no-div-regex": 1,//不能使用看起来像除法的正则表达式/=foo/
"no-dupe-keys": 2,//在创建对象字面量时不允许键重复 {a:1,a:1}
"no-dupe-args": 2,//函数参数不能重复
"no-duplicate-case": 2,//switch中的case标签不能重复
"no-else-return": 2,//如果if语句里面有return,后面不能跟else语句
"no-empty": 2,//块语句中的内容不能为空
"no-empty-character-class": 2,//正则表达式中的[]内容不能为空
"no-empty-label": 2,//禁止使用空label
"no-eq-null": 2,//禁止对null使用==或!=运算符
"no-eval": 1,//禁止使用eval
"no-ex-assign": 2,//禁止给catch语句中的异常参数赋值
"no-extend-native": 2,//禁止扩展native对象
"no-extra-bind": 2,//禁止不必要的函数绑定
"no-extra-boolean-cast": 2,//禁止不必要的bool转换
"no-extra-parens": 2,//禁止非必要的括号
"no-extra-semi": 2,//禁止多余的冒号
"no-fallthrough": 1,//禁止switch穿透
"no-floating-decimal": 2,//禁止省略浮点数中的0 .5 3.
"no-func-assign": 2,//禁止重复的函数声明
"no-implicit-coercion": 1,//禁止隐式转换
"no-implied-eval": 2,//禁止使用隐式eval
"no-inline-comments": 0,//禁止行内备注
"no-inner-declarations": [2, "functions"],//禁止在块语句中使用声明（变量或函数）
"no-invalid-regexp": 2,//禁止无效的正则表达式
"no-invalid-this": 2,//禁止无效的this，只能用在构造器，类，对象字面量
"no-irregular-whitespace": 2,//不能有不规则的空格
"no-iterator": 2,//禁止使用__iterator__ 属性
"no-label-var": 2,//label名不能与var声明的变量名相同
"no-labels": 2,//禁止标签声明
"no-lone-blocks": 2,//禁止不必要的嵌套块
"no-lonely-if": 2,//禁止else语句内只有if语句
"no-loop-func": 1,//禁止在循环中使用函数（如果没有引用外部变量不形成闭包就可以）
"no-mixed-requires": [0, false],//声明时不能混用声明类型
"no-mixed-spaces-and-tabs": [2, false],//禁止混用tab和空格
"linebreak-style": [0, "windows"],//换行风格
"no-multi-spaces": 1,//不能用多余的空格
"no-multi-str": 2,//字符串不能用\换行
"no-multiple-empty-lines": [1, {"max": 2}],//空行最多不能超过2行
"no-native-reassign": 2,//不能重写native对象
"no-negated-in-lhs": 2,//in 操作符的左边不能有!
"no-nested-ternary": 0,//禁止使用嵌套的三目运算
"no-new": 1,//禁止在使用new构造一个实例后不赋值
"no-new-func": 1,//禁止使用new Function
"no-new-object": 2,//禁止使用new Object()
"no-new-require": 2,//禁止使用new require
"no-new-wrappers": 2,//禁止使用new创建包装实例，new String new Boolean new Number
"no-obj-calls": 2,//不能调用内置的全局对象，比如Math() JSON()
"no-octal": 2,//禁止使用八进制数字
"no-octal-escape": 2,//禁止使用八进制转义序列
"no-param-reassign": 2,//禁止给参数重新赋值
"no-path-concat": 0,//node中不能使用__dirname或__filename做路径拼接
"no-plusplus": 0,//禁止使用++，--
"no-process-env": 0,//禁止使用process.env
"no-process-exit": 0,//禁止使用process.exit()
"no-proto": 2,//禁止使用__proto__属性
"no-redeclare": 2,//禁止重复声明变量
"no-regex-spaces": 2,//禁止在正则表达式字面量中使用多个空格 /foo bar/
"no-restricted-modules": 0,//如果禁用了指定模块，使用就会报错
"no-return-assign": 1,//return 语句中不能有赋值表达式
"no-script-url": 0,//禁止使用javascript:void(0)
"no-self-compare": 2,//不能比较自身
"no-sequences": 0,//禁止使用逗号运算符
"no-shadow": 2,//外部作用域中的变量不能与它所包含的作用域中的变量或参数同名
"no-shadow-restricted-names": 2,//严格模式中规定的限制标识符不能作为声明时的变量名使用
"no-spaced-func": 2,//函数调用时 函数名与()之间不能有空格
"no-sparse-arrays": 2,//禁止稀疏数组， [1,,2]
"no-sync": 0,//nodejs 禁止同步方法
"no-ternary": 0,//禁止使用三目运算符
"no-trailing-spaces": 1,//一行结束后面不要有空格
"no-this-before-super": 0,//在调用super()之前不能使用this或super
"no-throw-literal": 2,//禁止抛出字面量错误 throw "error";
"no-undef": 1,//不能有未定义的变量
"no-undef-init": 2,//变量初始化时不能直接给它赋值为undefined
"no-undefined": 2,//不能使用undefined
"no-unexpected-multiline": 2,//避免多行表达式
"no-underscore-dangle": 1,//标识符不能以_开头或结尾
"no-unneeded-ternary": 2,//禁止不必要的嵌套 var isYes = answer === 1 ? true : false;
"no-unreachable": 2,//不能有无法执行的代码
"no-unused-expressions": 2,//禁止无用的表达式
"no-unused-vars": [2, {"vars": "all", "args": "after-used"}],//不能有声明后未被使用的变量或参数
"no-use-before-define": 2,//未定义前不能使用
"no-useless-call": 2,//禁止不必要的call和apply
"no-void": 2,//禁用void操作符
"no-var": 0,//禁用var，用let和const代替
"no-warning-comments": [1, { "terms": ["todo", "fixme", "xxx"], "location": "start" }],//不能有警告备注
"no-with": 2,//禁用with

"array-bracket-spacing": [2, "never"],//是否允许非空数组里面有多余的空格
"arrow-parens": 0,//箭头函数用小括号括起来
"arrow-spacing": 0,//=>的前/后括号
"accessor-pairs": 0,//在对象中使用getter/setter
"block-scoped-var": 0,//块语句中使用var
"brace-style": [1, "1tbs"],//大括号风格
"callback-return": 1,//避免多次调用回调什么的
"camelcase": 2,//强制驼峰法命名
"comma-dangle": [2, "never"],//对象字面量项尾不能有逗号
"comma-spacing": 0,//逗号前后的空格
"comma-style": [2, "last"],//逗号风格，换行时在行首还是行尾
"complexity": [0, 11],//循环复杂度
"computed-property-spacing": [0, "never"],//是否允许计算后的键名什么的
"consistent-return": 0,//return 后面是否允许省略
"consistent-this": [2, "that"],//this别名
"constructor-super": 0,//非派生类不能调用super，派生类必须调用super
"curly": [2, "all"],//必须使用 if(){} 中的{}
"default-case": 2,//switch语句最后必须有default
"dot-location": 0,//对象访问符的位置，换行的时候在行首还是行尾
"dot-notation": [0, { "allowKeywords": true }],//避免不必要的方括号
"eol-last": 0,//文件以单一的换行符结束
"eqeqeq": 2,//必须使用全等
"func-names": 0,//函数表达式必须有名字
"func-style": [0, "declaration"],//函数风格，规定只能使用函数声明/函数表达式
"generator-star-spacing": 0,//生成器函数*的前后空格
"guard-for-in": 0,//for in循环要用if语句过滤
"handle-callback-err": 0,//nodejs 处理错误
"id-length": 0,//变量名长度
"indent": [2, 4],//缩进风格
"init-declarations": 0,//声明时必须赋初值
"key-spacing": [0, { "beforeColon": false, "afterColon": true }],//对象字面量中冒号的前后空格
"lines-around-comment": 0,//行前/行后备注
"max-depth": [0, 4],//嵌套块深度
"max-len": [0, 80, 4],//字符串最大长度
"max-nested-callbacks": [0, 2],//回调嵌套深度
"max-params": [0, 3],//函数最多只能有3个参数
"max-statements": [0, 10],//函数内最多有几个声明
"new-cap": 2,//函数名首行大写必须使用new方式调用，首行小写必须用不带new方式调用
"new-parens": 2,//new时必须加小括号
"newline-after-var": 2,//变量声明后是否需要空一行
"object-curly-spacing": [0, "never"],//大括号内是否允许不必要的空格
"object-shorthand": 0,//强制对象字面量缩写语法
"one-var": 1,//连续声明
"operator-assignment": [0, "always"],//赋值运算符 += -=什么的
"operator-linebreak": [2, "after"],//换行时运算符在行尾还是行首
"padded-blocks": 0,//块语句内行首行尾是否要空行
"prefer-const": 0,//首选const
"prefer-spread": 0,//首选展开运算
"prefer-reflect": 0,//首选Reflect的方法
"quotes": [1, "single"],//引号类型 `` "" ''
"quote-props":[2, "always"],//对象字面量中的属性名是否强制双引号
"radix": 2,//parseInt必须指定第二个参数
"id-match": 0,//命名检测
"require-yield": 0,//生成器函数必须有yield
"semi": [2, "always"],//语句强制分号结尾
"semi-spacing": [0, {"before": false, "after": true}],//分号前后空格
"sort-vars": 0,//变量声明时排序
"space-after-keywords": [0, "always"],//关键字后面是否要空一格
"space-before-blocks": [0, "always"],//不以新行开始的块{前面要不要有空格
"space-before-function-paren": [0, "always"],//函数定义时括号前面要不要有空格
"space-in-parens": [0, "never"],//小括号里面要不要有空格
"space-infix-ops": 0,//中缀操作符周围要不要有空格
"space-return-throw-case": 2,//return throw case后面要不要加空格
"space-unary-ops": [0, { "words": true, "nonwords": false }],//一元运算符的前/后要不要加空格
"spaced-comment": 0,//注释风格要不要有空格什么的
"strict": 2,//使用严格模式
"use-isnan": 2,//禁止比较时使用NaN，只能用isNaN()
"valid-jsdoc": 0,//jsdoc规则
"valid-typeof": 2,//必须使用合法的typeof的值
"vars-on-top": 2,//var必须放在作用域顶部
"wrap-iife": [2, "inside"],//立即执行函数表达式的小括号风格
"wrap-regex": 0,//正则表达式字面量用小括号包起来
"yoda": [2, "never"]//禁止尤达条件

```
