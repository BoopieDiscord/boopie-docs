(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{81:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return r})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return s}));var n=a(3),l=a(7),i=(a(0),a(95)),o={id:"tags",title:"Tags",sidebar_label:"Tags"},r={unversionedId:"tags",id:"tags",isDocsHomePage:!1,title:"Tags",description:"- Block Syntax",source:"@site/docs\\tags.md",slug:"/tags",permalink:"/docs/tags",editUrl:"https://github.com/YellowBanana508/boopie-docs/edit/master/docs/docs/tags.md",version:"current",sidebar_label:"Tags",sidebar:"someSidebar",previous:{title:"AutoMod V2",permalink:"/docs/automod"},next:{title:"TagScriptEngine Blocks",permalink:"/docs/tagscript"}},b=[{value:"Block Syntax",id:"block-syntax",children:[]},{value:"Usage",id:"usage",children:[{value:"Default Variables",id:"default-variables",children:[]}]}],c={toc:b};function s(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#block-syntax"}),"Block Syntax")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#usage"}),"Usage"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#default-variables"}),"Default Variables"))))),Object(i.b)("p",null,"Boopie comes with the ability to create powerful custom commands through the usage of tag blocks. The basic block begins with a ",Object(i.b)("inlineCode",{parentName:"p"},"{")," and ends with an ",Object(i.b)("inlineCode",{parentName:"p"},"}"),". More advanced blocks may contain after the block declaration ",Object(i.b)("inlineCode",{parentName:"p"},"()")," to specify a parameter or a ",Object(i.b)("inlineCode",{parentName:"p"},":")," to specify a payload."),Object(i.b)("h2",{id:"block-syntax"},"Block Syntax"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"{block(parameter):payload}")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"[arg]")," = Optional"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"<arg>")," = Required"),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"Add a tag using the following command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"[p]tag add mytag Hello world!\n")),Object(i.b)("p",null,"Invoke the tag with your bot prefix and the tag\u2019s name as if it were a command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"[p]mytag\n")),Object(i.b)("p",null,"The bot will then respond with the stored tag content:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"Hello world!\n")),Object(i.b)("h3",{id:"default-variables"},"Default Variables"),Object(i.b)("p",null,"Tags come with built-in variable blocks you can access for more information about the invocation context. These are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"args")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"author")," | ",Object(i.b)("inlineCode",{parentName:"li"},"user")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"target")," | ",Object(i.b)("inlineCode",{parentName:"li"},"member")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"channel")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"guild")," | ",Object(i.b)("inlineCode",{parentName:"li"},"server"))),Object(i.b)("p",null,"You can see attributes available using these blocks in Default Variables."),Object(i.b)("p",null,"Below is an example tag that returns info related to the tag author."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"[p]tag add authorinfo Username: **{author}**\nID: **{author(id)}**\nCreation Date: **{author(created_at)}**\nBot: **{author(bot)}**\n")),Object(i.b)("p",null,"The args block can be useful for customizing tags and works well with the Command Block. Simple echo command that validates if args were provided:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"[p]tag add echo {if({args}==):You must provide text to echo.|{args}}\n")),Object(i.b)("p",null,"Here\u2019s a tag that uses the default variable blocks as well as the If Block:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'    [p]tag add startertag Hi, this is an example of a tag.\n    This tag will now invoke a ping command.\n    {c:ping}\n    {delete({args(0)}==delete)}\n    {embed({\n        "title":"The server this was invoked on was {server}.",\n        "description":"{if({args}==):You did not provide any arguments for this tag|The arguments provided were: `{args}`}",\n        "thumbnail":{"url":"{guild(icon)}"},\n        "author":{"name":"{author} invoked this tag.","icon_url":"{author(avatar)}"},\n        "color":2105893,\n        "footer":{"icon_url":"{author(avatar)}","text":"{target} is the target of this tag."}\n    })}\n')))}s.isMDXComponent=!0}}]);