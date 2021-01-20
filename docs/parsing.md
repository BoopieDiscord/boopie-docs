---
id: parsing
title: Parsing Blocks
---

-   [Parsing Blocks](#document-parsing_blocks)
    -   [Restriction Blocks](#restriction-blocks)
    -   [Message Blocks](#message-blocks)
    -   [Utility Blocks](#utility-blocks)
  

Parsing blocks interact with the tag invocation and affect the tag’s output in Discord.

## Restriction Blocks

The following blocks allow for restriction of tags behind roles or channels, or setting tag cooldowns (soon).

### Require Block

`tags.blocks.RequireBlock`
The require block will attempt to convert the given parameter into a channel or role, using name or ID. If the user running the tag is not in the targeted channel or doesn’t have the targeted role, the tag will stop processing and it will send the response if one is given. Multiple role or channel requirements can be given, and should be split by a “,”.

**Usage:** `{require(<role,channel>):[response]}`

**Aliases:** `whitelist`

**Payload:** response, None

**Parameter:** role, channel

**Usage:**

    {require(Moderator)}
    {require(#general, #bot-cmds):This tag can only be run in #general and #bot-cmds.}
    {require(757425366209134764, 668713062186090506, 737961895356792882):You aren't allowed to use this tag.}

### Blacklist Block

`tags.blocks.BlacklistBlock`
The blacklist block will attempt to convert the given parameter into a channel or role, using name or ID. If the user running the tag is in the targeted channel or has the targeted role, the tag will stop processing and it will send the response if one is given. Multiple role or channel requirements can be given, and should be split by a “,”.

**Usage:** `{blacklist(<role,channel>):[response]}`

**Payload:** response, None

**Parameter:** role, channel

**Usage:**

    {blacklist(Muted)}
    {blacklist(#support):This tag is not allowed in #support.}
    {blacklist(Tag Blacklist, 668713062186090506):You are blacklisted from using tags.}

## Message Blocks

Message blocks modify the tag’s output.

### Embed Block

`tags.blocks.EmbedBlock`
An embed block will send an embed in the tag response using properly formatted json.

Usage: `{embed(<json>)}`

Payload: None

Parameter: json

Example:

    {embed({"title":"Hello!", "description":"This is a test embed."})}

### Redirect Block

`tags.blocks.RedirectBlock`
Redirects the tag response to either the given channel, the author’s DMs, or uses a reply based on what is passed to the parameter.

**Usage:** `{redirect(<"dm"|"reply"|channel>)}`

**Payload:** None

**Parameter:** “dm”, “reply”, channel

**Examples:**

    {redirect(dm)}
    {redirect(reply)}
    {redirect(#general)}
    {redirect(626861902521434160)}

### Delete Block

`tags.blocks.DeleteBlock`
Delete blocks will delete the invocation message if the given parameter is true. If there is no parameter i.e. `{delete}` it will default to true.

Usage: `{delete([bool])`

Payload: None

Parameter: bool, None

### React Block

`tags.blocks.ReactBlock`
The react block will react with up to 5 emoji to the tag response message. The given emoji can be custom or unicode emoji. Emojis can be split with “,”.

Usage: `{react(<emoji,emoji>)}`

Payload: None

Parameter: emoji

### ReactU Block

`tags.blocks.ReactUBlock`  
The react block will react with up to 5 emoji to the tag invocation message. The given emoji can be custom or unicode emoji. Emojis can be split with “,”.

Usage: `{reactu(<emoji,emoji>)}`

Payload: None

Parameter: emoji

## Utility Blocks

The following utility blocks extend the power of tags that interface with bot commands.

### Command Block

`tags.blocks.CommandBlock` 
Run a command as if the tag invoker had ran it. Only 3 command blocks can be used in a tag.

**Usage:** `{command:<command>}`

**Aliases:** `c, com, command`

**Payload:** command

**Parameter:** None

**Example:**

    {c:ping}
    # invokes ping command

    {c:kick {target(id)} Chatflood/spam}
    # invokes ban command on the pinged user with the reason as "Chatflood/spam"

### Override Block

`tags.blocks.OverrideBlock` 
Override a command’s permission requirements. This can override mod, admin, or general user permission requirements when running commands with the [Command Block](#commandblock). Passing no parameter will default to overriding all permissions.

In order to add a tag with the override block, the tag author must have `Manage Server` permissions.

This will not override bot owner commands or command checks.

**Usage:** `{override(["admin"|"mod"|"permissions"]):[command]}`

**Payload:** command

**Parameter:** “admin”, “mod”, “permissions”

**Example:**

    {override}
    # overrides all commands and permissions

    {override(admin)}
    # overrides commands that require the admin role

    {override(permissions)}
    {override(mod)}
    # overrides commands that require the mod role or have user permission requirements
