(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{80:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return s}));var n=a(3),b=a(7),r=(a(0),a(95)),l={id:"defaultvar",title:"Default Variables"},c={unversionedId:"defaultvar",id:"defaultvar",isDocsHomePage:!1,title:"Default Variables",description:"- Meta Variables",source:"@site/docs\\defaultvariables.md",slug:"/defaultvar",permalink:"/docs/defaultvar",editUrl:"https://github.com/YellowBanana508/boopie-docs/edit/main/docs/docs/defaultvariables.md",version:"current",sidebar:"someSidebar",previous:{title:"TagScriptEngine Blocks",permalink:"/docs/tagscript"},next:{title:"Parsing Blocks",permalink:"/docs/parsing"}},p=[{value:"Meta Variables",id:"meta-variables",children:[{value:"Args Block",id:"args-block",children:[]},{value:"Uses Block",id:"uses-block",children:[]}]},{value:"Discord Object Variables",id:"discord-object-variables",children:[{value:"Author Block",id:"author-block",children:[]},{value:"Target Block",id:"target-block",children:[]},{value:"Channel Block",id:"channel-block",children:[]},{value:"Server Block",id:"server-block",children:[]}]}],i={toc:p};function s(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#meta-variables"}),"Meta Variables"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#args-block"}),"Args Block")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#uses-block"}),"Uses Block")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#discord-object-variables"}),"Discord Object Variables"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#author-block"}),"Author Block")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#target-block"}),"Target Block")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#channel-block"}),"Channel Block")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#server-block"}),"Server Block"))))),Object(r.b)("p",null,"The following blocks will be present and accessable as defaults when running any tag."),Object(r.b)("h2",{id:"meta-variables"},"Meta Variables"),Object(r.b)("p",null,"Meta variables reference meta attributes about the tag invocation."),Object(r.b)("h3",{id:"args-block"},"Args Block"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"TagScriptEngine.adapter.StringAdapter")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"{args}")," block represents the arguments passed after the tag name when invoking a tag. If no parameter is passed, it returns all the text after the invocation name. If an index is passed, it will split the arguments into a list by the given splitter, and return the word at that index. The default splitter is a \u201d \u201c."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Usage:")," ",Object(r.b)("inlineCode",{parentName:"p"},"{args([index]):[splitter]>}")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Payload:")," splitter"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameter:")," index"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Examples:")),Object(r.b)("p",null,"In the following examples, assume the tag\u2019s name is ",Object(r.b)("inlineCode",{parentName:"p"},"argstag")," and the message content is ",Object(r.b)("inlineCode",{parentName:"p"},"[p]argstag My dog is cute! Would you like to see a photo?"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"{args}\n# My dog is cute! Would you like to see a photo?\n\n{args(1)}\n# My\n\n{args(2):!}\n# Would you like to see a photo?\n")),Object(r.b)("h3",{id:"uses-block"},"Uses Block"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"TagScriptEngine.adapter.IntAdapter")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"{uses}")," block returns the number of times a tag has been used."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Usage:")," ",Object(r.b)("inlineCode",{parentName:"p"},"{uses}")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Payload:")," None"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameter:")," None"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Examples:")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"{uses}\n# 1\n")),Object(r.b)("h2",{id:"discord-object-variables"},"Discord Object Variables"),Object(r.b)("p",null,"These blocks reference Discord objects from the tag invocation context."),Object(r.b)("h3",{id:"author-block"},"Author Block"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"tags.adapters.MemberAdapter")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"{author}")," block with no parameters returns the tag invoker\u2019s full username and discriminator, but passing the attributes listed below to the block payload will return that attribute instead."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Aliases:")," ",Object(r.b)("inlineCode",{parentName:"p"},"user")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Usage:")," ",Object(r.b)("inlineCode",{parentName:"p"},"{author([attribute])")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Payload:")," None"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameter:")," attribute, None"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Attributes:")),Object(r.b)("p",null,"id",Object(r.b)("br",{parentName:"p"}),"\n","The author\u2019s Discord ID."),Object(r.b)("p",null,"name",Object(r.b)("br",{parentName:"p"}),"\n","The author\u2019s username."),Object(r.b)("p",null,"nick",Object(r.b)("br",{parentName:"p"}),"\n","The author\u2019s nickname, if they have one, else their username."),Object(r.b)("p",null,"avatar",Object(r.b)("br",{parentName:"p"}),"\n","A link to the author\u2019s avatar, which can be used in embeds."),Object(r.b)("p",null,"discriminator",Object(r.b)("br",{parentName:"p"}),"\n","The author\u2019s discriminator."),Object(r.b)("p",null,"created","_","at",Object(r.b)("br",{parentName:"p"}),"\n","The author\u2019s account creation date."),Object(r.b)("p",null,"timestamp",Object(r.b)("br",{parentName:"p"}),"\n","The author\u2019s account creation date as a UTC timestamp."),Object(r.b)("p",null,"joined","_","at",Object(r.b)("br",{parentName:"p"}),"\n","The date the author joined the server."),Object(r.b)("p",null,"mention",Object(r.b)("br",{parentName:"p"}),"\n","A formatted text that pings the author."),Object(r.b)("p",null,"bot",Object(r.b)("br",{parentName:"p"}),"\n","Whether or not the author is a bot."),Object(r.b)("h3",{id:"target-block"},"Target Block"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"{target}")," block follows the same usage and has the same attributes as the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#authorblock"}),"Author Block"),", but it defaults to the mentioned user in the tag invocation message if any users are mentioned, or the tag author."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Usage:")," ",Object(r.b)("inlineCode",{parentName:"p"},"{target}")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Aliases:")," ",Object(r.b)("inlineCode",{parentName:"p"},"{member}")),Object(r.b)("h3",{id:"channel-block"},"Channel Block"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"tags.adapters.TextChannelAdapter")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"{channel}")," block with no parameters returns the channel\u2019s full name but passing the attributes listed below to the block payload will return that attribute instead."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Usage:")," ",Object(r.b)("inlineCode",{parentName:"p"},"{channel([attribute])")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Payload:")," None"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameter:")," attribute, None"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Attributes:")),Object(r.b)("p",null,"id",Object(r.b)("br",{parentName:"p"}),"\n","The channel\u2019s ID."),Object(r.b)("p",null,"name",Object(r.b)("br",{parentName:"p"}),"\n","The channel\u2019s name."),Object(r.b)("p",null,"created","_","at",Object(r.b)("br",{parentName:"p"}),"\n","The channel\u2019s creation date."),Object(r.b)("p",null,"timestamp",Object(r.b)("br",{parentName:"p"}),"\n","The channel\u2019s creation date as a UTC timestamp."),Object(r.b)("p",null,"nsfw",Object(r.b)("br",{parentName:"p"}),"\n","Whether the channel is nsfw."),Object(r.b)("p",null,"mention",Object(r.b)("br",{parentName:"p"}),"\n","A formatted text that pings the channel."),Object(r.b)("p",null,"topic",Object(r.b)("br",{parentName:"p"}),"\n","The channel\u2019s topic."),Object(r.b)("h3",{id:"server-block"},"Server Block"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"tags.adapters.GuildAdapter")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"{server}")," block with no parameters returns the server\u2019s name but passing the attributes listed below to the block payload will return that attribute instead."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Aliases:")," ",Object(r.b)("inlineCode",{parentName:"p"},"guild")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Usage:")," ",Object(r.b)("inlineCode",{parentName:"p"},"{server([attribute])")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Payload:")," None"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameter:")," attribute, None"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Attributes:")),Object(r.b)("p",null,"id",Object(r.b)("br",{parentName:"p"}),"\n","The server\u2019s ID."),Object(r.b)("p",null,"name",Object(r.b)("br",{parentName:"p"}),"\n","The server\u2019s name."),Object(r.b)("p",null,"icon",Object(r.b)("br",{parentName:"p"}),"\n","A link to the server\u2019s icon, which can be used in embeds."),Object(r.b)("p",null,"created","_","at",Object(r.b)("br",{parentName:"p"}),"\n","The server\u2019s creation date."),Object(r.b)("p",null,"timestamp",Object(r.b)("br",{parentName:"p"}),"\n","The server\u2019s creation date as a UTC timestamp."),Object(r.b)("p",null,"member","_","count",Object(r.b)("br",{parentName:"p"}),"\n","The server\u2019s member count."),Object(r.b)("p",null,"description",Object(r.b)("br",{parentName:"p"}),"\n","The server\u2019s description if one is set, or \u201cNo description\u201d."))}s.isMDXComponent=!0}}]);