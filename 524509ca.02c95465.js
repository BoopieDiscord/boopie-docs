(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return s}));var a=n(3),l=n(7),o=(n(0),n(94)),r={id:"parsing",title:"Parsing Blocks"},c={unversionedId:"parsing",id:"parsing",isDocsHomePage:!1,title:"Parsing Blocks",description:"-   Parsing Blocks",source:"@site/docs\\parsing.md",slug:"/parsing",permalink:"/docs/parsing",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/parsing.md",version:"current",sidebar:"someSidebar",previous:{title:"Default Variables",permalink:"/docs/defaultvar"}},b=[{value:"Restriction Blocks",id:"restriction-blocks",children:[{value:"Require Block",id:"require-block",children:[]},{value:"Blacklist Block",id:"blacklist-block",children:[]}]},{value:"Message Blocks",id:"message-blocks",children:[{value:"Embed Block",id:"embed-block",children:[]},{value:"Redirect Block",id:"redirect-block",children:[]},{value:"Delete Block",id:"delete-block",children:[]},{value:"React Block",id:"react-block",children:[]},{value:"ReactU Block",id:"reactu-block",children:[]}]},{value:"Utility Blocks",id:"utility-blocks",children:[{value:"Command Block",id:"command-block",children:[]},{value:"Override Block",id:"override-block",children:[]}]}],i={toc:b};function s(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#document-parsing_blocks"}),"Parsing Blocks"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#restriction-blocks"}),"Restriction Blocks")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#message-blocks"}),"Message Blocks")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#utility-blocks"}),"Utility Blocks"))))),Object(o.b)("p",null,"Parsing blocks interact with the tag invocation and affect the tag\u2019s output in Discord."),Object(o.b)("h2",{id:"restriction-blocks"},"Restriction Blocks"),Object(o.b)("p",null,"The following blocks allow for restriction of tags behind roles or channels, or setting tag cooldowns (soon)."),Object(o.b)("h3",{id:"require-block"},"Require Block"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"tags.blocks.RequireBlock"),"\nThe require block will attempt to convert the given parameter into a channel or role, using name or ID. If the user running the tag is not in the targeted channel or doesn\u2019t have the targeted role, the tag will stop processing and it will send the response if one is given. Multiple role or channel requirements can be given, and should be split by a \u201c,\u201d."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Usage:")," ",Object(o.b)("inlineCode",{parentName:"p"},"{require(<role,channel>):[response]}")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Aliases:")," ",Object(o.b)("inlineCode",{parentName:"p"},"whitelist")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Payload:")," response, None"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameter:")," role, channel"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Usage:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"{require(Moderator)}\n{require(#general, #bot-cmds):This tag can only be run in #general and #bot-cmds.}\n{require(757425366209134764, 668713062186090506, 737961895356792882):You aren't allowed to use this tag.}\n")),Object(o.b)("h3",{id:"blacklist-block"},"Blacklist Block"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"tags.blocks.BlacklistBlock"),"\nThe blacklist block will attempt to convert the given parameter into a channel or role, using name or ID. If the user running the tag is in the targeted channel or has the targeted role, the tag will stop processing and it will send the response if one is given. Multiple role or channel requirements can be given, and should be split by a \u201c,\u201d."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Usage:")," ",Object(o.b)("inlineCode",{parentName:"p"},"{blacklist(<role,channel>):[response]}")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Payload:")," response, None"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameter:")," role, channel"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Usage:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"{blacklist(Muted)}\n{blacklist(#support):This tag is not allowed in #support.}\n{blacklist(Tag Blacklist, 668713062186090506):You are blacklisted from using tags.}\n")),Object(o.b)("h2",{id:"message-blocks"},"Message Blocks"),Object(o.b)("p",null,"Message blocks modify the tag\u2019s output."),Object(o.b)("h3",{id:"embed-block"},"Embed Block"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"tags.blocks.EmbedBlock"),"\nAn embed block will send an embed in the tag response using properly formatted json."),Object(o.b)("p",null,"Usage: ",Object(o.b)("inlineCode",{parentName:"p"},"{embed(<json>)}")),Object(o.b)("p",null,"Payload: None"),Object(o.b)("p",null,"Parameter: json"),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'{embed({"title":"Hello!", "description":"This is a test embed."})}\n')),Object(o.b)("h3",{id:"redirect-block"},"Redirect Block"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"tags.blocks.RedirectBlock"),"\nRedirects the tag response to either the given channel, the author\u2019s DMs, or uses a reply based on what is passed to the parameter."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Usage:")," ",Object(o.b)("inlineCode",{parentName:"p"},'{redirect(<"dm"|"reply"|channel>)}')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Payload:")," None"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameter:")," \u201cdm\u201d, \u201creply\u201d, channel"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Examples:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"{redirect(dm)}\n{redirect(reply)}\n{redirect(#general)}\n{redirect(626861902521434160)}\n")),Object(o.b)("h3",{id:"delete-block"},"Delete Block"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"tags.blocks.DeleteBlock"),"\nDelete blocks will delete the invocation message if the given parameter is true. If there is no parameter i.e. ",Object(o.b)("inlineCode",{parentName:"p"},"{delete}")," it will default to true."),Object(o.b)("p",null,"Usage: ",Object(o.b)("inlineCode",{parentName:"p"},"{delete([bool])")),Object(o.b)("p",null,"Payload: None"),Object(o.b)("p",null,"Parameter: bool, None"),Object(o.b)("h3",{id:"react-block"},"React Block"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"tags.blocks.ReactBlock"),"\nThe react block will react with up to 5 emoji to the tag response message. The given emoji can be custom or unicode emoji. Emojis can be split with \u201c,\u201d."),Object(o.b)("p",null,"Usage: ",Object(o.b)("inlineCode",{parentName:"p"},"{react(<emoji,emoji>)}")),Object(o.b)("p",null,"Payload: None"),Object(o.b)("p",null,"Parameter: emoji"),Object(o.b)("h3",{id:"reactu-block"},"ReactU Block"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"tags.blocks.ReactUBlock"),Object(o.b)("br",{parentName:"p"}),"\n","The react block will react with up to 5 emoji to the tag invocation message. The given emoji can be custom or unicode emoji. Emojis can be split with \u201c,\u201d."),Object(o.b)("p",null,"Usage: ",Object(o.b)("inlineCode",{parentName:"p"},"{reactu(<emoji,emoji>)}")),Object(o.b)("p",null,"Payload: None"),Object(o.b)("p",null,"Parameter: emoji"),Object(o.b)("h2",{id:"utility-blocks"},"Utility Blocks"),Object(o.b)("p",null,"The following utility blocks extend the power of tags that interface with bot commands."),Object(o.b)("h3",{id:"command-block"},"Command Block"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"tags.blocks.CommandBlock"),"\nRun a command as if the tag invoker had ran it. Only 3 command blocks can be used in a tag."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Usage:")," ",Object(o.b)("inlineCode",{parentName:"p"},"{command:<command>}")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Aliases:")," ",Object(o.b)("inlineCode",{parentName:"p"},"c, com, command")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Payload:")," command"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameter:")," None"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'{c:ping}\n# invokes ping command\n\n{c:kick {target(id)} Chatflood/spam}\n# invokes ban command on the pinged user with the reason as "Chatflood/spam"\n')),Object(o.b)("h3",{id:"override-block"},"Override Block"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"tags.blocks.OverrideBlock"),"\nOverride a command\u2019s permission requirements. This can override mod, admin, or general user permission requirements when running commands with the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#commandblock"}),"Command Block"),". Passing no parameter will default to overriding all permissions."),Object(o.b)("p",null,"In order to add a tag with the override block, the tag author must have ",Object(o.b)("inlineCode",{parentName:"p"},"Manage Server")," permissions."),Object(o.b)("p",null,"This will not override bot owner commands or command checks."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Usage:")," ",Object(o.b)("inlineCode",{parentName:"p"},'{override(["admin"|"mod"|"permissions"]):[command]}')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Payload:")," command"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameter:")," \u201cadmin\u201d, \u201cmod\u201d, \u201cpermissions\u201d"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"{override}\n# overrides all commands and permissions\n\n{override(admin)}\n# overrides commands that require the admin role\n\n{override(permissions)}\n{override(mod)}\n# overrides commands that require the mod role or have user permission requirements\n")))}s.isMDXComponent=!0}}]);