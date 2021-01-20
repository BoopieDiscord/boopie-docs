---
id: defaultvar
title: Default Variables
---

- [Meta Variables](#meta-variables)
  - [Args Block](#args-block)
  - [Uses Block](#uses-block)
- [Discord Object Variables](#discord-object-variables)
  - [Author Block](#author-block)
  - [Target Block](#target-block)
  - [Channel Block](#channel-block)
  - [Server Block](#server-block)

The following blocks will be present and accessable as defaults when running any tag.

## Meta Variables

Meta variables reference meta attributes about the tag invocation.

### Args Block

`TagScriptEngine.adapter.StringAdapter`

The `{args}` block represents the arguments passed after the tag name when invoking a tag. If no parameter is passed, it returns all the text after the invocation name. If an index is passed, it will split the arguments into a list by the given splitter, and return the word at that index. The default splitter is a ” “.

**Usage:** `{args([index]):[splitter]>}`

**Payload:** splitter

**Parameter:** index

**Examples:**

In the following examples, assume the tag’s name is `argstag` and the message content is `[p]argstag My dog is cute! Would you like to see a photo?`.

    {args}
    # My dog is cute! Would you like to see a photo?

    {args(1)}
    # My

    {args(2):!}
    # Would you like to see a photo?

### Uses Block

`TagScriptEngine.adapter.IntAdapter`

The `{uses}` block returns the number of times a tag has been used.

**Usage:** `{uses}`

**Payload:** None

**Parameter:** None

**Examples:**

    {uses}
    # 1

## Discord Object Variables

These blocks reference Discord objects from the tag invocation context.

### Author Block

`tags.adapters.MemberAdapter`

The `{author}` block with no parameters returns the tag invoker’s full username and discriminator, but passing the attributes listed below to the block payload will return that attribute instead.

**Aliases:** `user`

**Usage:** `{author([attribute])`

**Payload:** None

**Parameter:** attribute, None

**Attributes:**

id  
The author’s Discord ID.

name  
The author’s username.

nick  
The author’s nickname, if they have one, else their username.

avatar  
A link to the author’s avatar, which can be used in embeds.

discriminator  
The author’s discriminator.

created\_at  
The author’s account creation date.

timestamp  
The author’s account creation date as a UTC timestamp.

joined\_at  
The date the author joined the server.

mention  
A formatted text that pings the author.

bot  
Whether or not the author is a bot.

### Target Block

The `{target}` block follows the same usage and has the same attributes as the [Author Block](#authorblock), but it defaults to the mentioned user in the tag invocation message if any users are mentioned, or the tag author.

**Usage:** `{target}`

**Aliases:** `{member}`

### Channel Block

`tags.adapters.TextChannelAdapter`

The `{channel}` block with no parameters returns the channel’s full name but passing the attributes listed below to the block payload will return that attribute instead.

**Usage:** `{channel([attribute])`

**Payload:** None

**Parameter:** attribute, None

**Attributes:**

id  
The channel’s ID.

name  
The channel’s name.

created\_at  
The channel’s creation date.

timestamp  
The channel’s creation date as a UTC timestamp.

nsfw  
Whether the channel is nsfw.

mention  
A formatted text that pings the channel.

topic  
The channel’s topic.

### Server Block

`tags.adapters.GuildAdapter`

The `{server}` block with no parameters returns the server’s name but passing the attributes listed below to the block payload will return that attribute instead.

**Aliases:** `guild`

**Usage:** `{server([attribute])`

**Payload:** None

**Parameter:** attribute, None

**Attributes:**

id  
The server’s ID.

name  
The server’s name.

icon  
A link to the server’s icon, which can be used in embeds.

created\_at  
The server’s creation date.

timestamp  
The server’s creation date as a UTC timestamp.

member\_count  
The server’s member count.

description  
The server’s description if one is set, or “No description”.