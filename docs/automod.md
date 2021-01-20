---
id: automod
title: AutoMod V2
sidebar_label: AutoMod V2
---

Not satisfied with the automod Boopie has? Sure! Make your own one here!.



# Warden

- [Warden](#warden)
  - [An introduction to Warden](#an-introduction-to-warden)
    - [Rule format: a basic example](#rule-format-a-basic-example)
    - [Context](#context)
    - [Defining a more complex rule](#defining-a-more-complex-rule)
    - [A quick recap](#a-quick-recap)
    - [Final notes](#final-notes)
  - [Advanced features](#advanced-features)
    - [Execution order](#execution-order)
    - [Heat level](#heat-level)
  - [Events](#events)
  - [Conditions](#conditions)
  - [Actions](#actions)
  - [Context variables](#context-variables)
  - [Examples](#examples)

## An introduction to Warden
Warden is the most versatile module that you can find in Boopie.  
It allows you to define custom rules by combining a rich set of events, conditions and actions.  
Need to filter messages only in certain channels? Or maybe rename people meeting very specific requirements? Warden got you covered!
### Rule format: a basic example
Rules can be written in the YAML language and must be structured in a very specific way to be deemed a valid rule.  
Let's start with a basic scenario: you have an innate fear of spiders and you wish to delete any message that mentions them.  
So, without further ado, you add this rule through `[p]defender warden add`
```yaml
name: spiders-are-spooky
rank: 1
event: on-message
if:
  - message-matches-any: ["*spider*"]
do:
  - delete-user-message:
```
And now let's break this down.  
* `name` is the name of this rule. Every rule that you add will have an unique name to tell them apart. If you try to add a rule with a name that is already registered a confirmation will be asked before proceeding with overwrite.  
* `rank` is the highest rank that this rule will target. As explained in `[p]defender status`, Rank 1 is the highest rank there is. This means that every message that is sent will be targeted, even staff's.
* `event` is *when* this rule will enter into effect. There are currently 5 [events](#events) available.  
   A rule can also be defined with multiple events by using a list, example: `[on-message, on-message-edit]`
* `if` is the section where the [conditions](#conditions) are defined. It supports both basic condition and special condition blocks (we'll get to that later). Every condition (and condition block) must resolve to `true` for the rule's action to be executed.
* `do` is the section where the [actions](#actions) are defined. Actions are ordered and will be executed in the order you have defined them. If one of them errors out for whatever reason, the action's execution will stop. You can monitor errors in `[p]defender monitor`.  

The condition `message-matches-any` takes the message in the *context* and analyzes its content. Here we have put the word spider surrounded by the wildcard `*`: this means that the word spider simply being present in a message is enough for this condition to pass.

As you may have noticed the action `delete-user-message` doesn't need any parameter: it simply deletes the message in the context.  

### Context
Events have a context. `on-message` for example, will have `message` and `user` (the message author's) available, so any condition and action that is bound to analyze or take action on a message will be allowed to be used in that rule.  
A rule with the condition `message-matches-any` combined with the event `on-user-join` will be rejected: Warden doesn't have a message to analyze in this event, therefore the rule will be simply deemed invalid.  
Depending on the context you will have certain *context variables* available: there are some special actions that accept these variables in their parameters.  
Example:  
```yaml
send-mod-log: "No particular reason: I just really dislike $user."
```
If the user in context is called HairySpider#9999 Warden will post a mod-log entry as  
```
No particular reason: I just really dislike HairySpider#9999.
```

### Defining a more complex rule
This first rule was very basic. What if, instead, we wanted to outright **ban** any user that mentions spiders *OR* has the word spider in their username/nickname, like our friend HairySpider#9999?  
But, since we are also hindered by a conscience, we want to give new users time to read the #rules channel, so we'll make sure to only punish infidels who are knowingly breaking the rules.  
Finally, the ruling class, staff members, must be free to discuss the enemy of the state without ever getting banned themselves.  
Wow, this got complicated fast huh? Luckily this is where *condition blocks* come to our aid.  

At the time of writing there are three condition blocks:
* `if-any`
* `if-all`
* `if-not`  

When a rule is processed, conditions blocks are individually resolved to **true** or **false**.  
For `if-all` to pass, every condition that it contains must be **true**.  
Every condition contained in `if-not` must resolve to **false**.   
And as you can probably guess by now, a single **true** condition inside `if-any` is enough for it to pass.
```yaml
name: spiders-are-spooky
rank: 1
event: on-message
if:
  - if-any:
     - username-matches-any: ["*spider*"]
     - message-matches-any: ["*spider*"]
     - nickname-matches-any: ["*spider*"]
  - if-not:
     - user-joined-less-than: 2
     - is-staff: true
do:
  - ban-user-and-delete: 1
  - send-mod-log: "Usage of the S word is not welcome in this community. Begone, $user."
```
This is how a condition block is structured: it contains basic conditions. To prevent too much complexity nested condition blocks are not allowed.  
In our case here *if* the author's of a message has the word spider in their username/nickname *OR* their message contains the word spider *AND* at the same time hasn't joined less than **2** hours ago and is also not a staff member *then* they will be banned and all the messages sent by them in the last day will be deleted.  
Additionally, a mod-log entry for this last ban will be posted, condemning the author of this unspeakable crime for everyone to see.  
Our Orwellian quest of never ever allowing the S word to be used in our community again is now completed.

As you can see condition blocks are a nice to have when you need a slightly more complex logic but remember that they're not mandatory, you can choose to use them only when you truly need to.

### A quick recap

Rules are triggered when the specified event takes place.  
The user's rank (if applicable, not every event has a user context) will be matched against the one defined in the rule.  
After that, the conditions will be evaluated and finally, if the conditions have passed, Warden will start processing the actions one by one.  
If any of the actions fail execution will stop and the error will be reported in `[p]defender monitor`.  
Rules can have an order of execution. See [advanced features](#advanced-features) for more informations.

### Final notes

Rules give you complete freedom by design.  
In that last example even *trusted roles* and *helper roles* aren't protected: if they pass the conditions they will be targeted by the actions.  
Be careful when you design the logic of a rule with drastic actions such as bans. The parameter **rank** is there to help you protect categories of users: trusted users, helper users and staff will always be immune if you set the rank to at least level 2.
## Advanced features
### Execution order
The rules that you add do not have any guaranteed order of execution. You can change this, however, for example to make sure that a particular rule is always executed first (or after all your other ordered rules): this is done with the optional `priority` parameter.  
Priority can be a number between 1 and 999. When something happens, Boopie gathers all the rules that you have added for that particular event and reorders them based on the priority parameter. Rules that lack a priority parameter will always be executed last, in an unordered manner.  
Boopie will not stop you from defining multiple rules with the same priority: this is fine for rules that are for different events as they won't "conflict" with each other, however be mindful of that when you set up prioritized rules for a single event.  
This is how you define a rule with priority:
```yaml
name: always-first
rank: 1
priority: 1
event: on-message
if:
  - message-matches-any: ["*"]
do:
  - send-to-monitor: "I'm 1st!"
```
### Heat level
Conditions give you a way to have your rules only execute under very specific conditions. However, what if, for example, we want our rule to execute after an user triggered some other rule a defined amount of times? That's where the heat level system comes in handy.  
Imagine that each user has an invisible bar, just like an health bar in videogames, where their heat level is being tracked:  

`[____________________]`  

This bar can contain a maximum of 100 heat points. Normally it is empty. Through rule actions you can assign points to this bar. Each point has a definite lifetime and you decide how much that is:  

`add-user-heatpoint: 10s`  (also accepts minutes and hours. Up to 24 hours)  
`[X___________________]`  

After 10 seconds have elapsed, the bar will go back to being empty. You can also assign multiple heatpoints at once with the same lifetime:  

`add-user-heatpoints: [5, 10m]`  
`[XXXXX_______________]`  

And in case you want to empty the bar:  
`empty-user-heat:`  

But how do you check for heat points in rules? With conditions:  
`user-heat-is: 5`
or  
`user-heat-more-than: 2`

You may want to first assign heatpoints and *then*, in a separate rule, check the heat level. Since rules are normally executed in an unordered manner, remember to use the [priority parameter](#execution-order) to make sure that your heat-assigning rules are executed first.  
Channels also have heat levels and they work the same way as users'. You can find all the related conditions and actions in the sections below plus some handy [examples](#examples) at the bottom.  

## Events
* `on-message`  
**Triggered when:** a new message is sent  
**Available context:** message, user  
* `on-message-edit`  
**Triggered when:** a message is edited  
**Available context:** message, user  
* `on-message-delete`  
**Triggered when:** a message is deleted  
**Available context:** message, user  
* `on-user-join`  
**Triggered when:** a new user joins the server  
**Available context:** user  
* `on-user-leave`  
**Triggered when:** a user leaves the server  
**Available context:** user  
* `on-emergency`  
**Triggered when:** the server enters a state of emergency, either automatic or manual   
**Available context:** none  
* `manual`  
**Triggered when:** the rule is manually run by an admin with `[p]defender warden run`   
**Available context:** user  

## Conditions
* `message-matches-any`  
Is `true` if any of patters that you list are found in the message's context  
**Accepts:** A list of patterns. Patterns can make use of wildcards such as `*` and `?`  
**Context:** `message`  
* `message-has-attachment`  
Will check if the message contains an attachment  
**Accepts:** A bool (true or false)    
**Context:** `message`  
* `message-contains-url`  
Will check if the message contains a clickable URL.  
Note: URLs lacking a protocol (http/https) will not be detected.  
**Accepts:** A bool (true or false)    
**Context:** `message`  
* `message-contains-invite`  
Will check if the message contains a standard Discord invite  
**Accepts:** A bool (true or false)    
**Context:** `message`  
* `message-contains-media`  
Will check if the message contains any media link  (picture or video)  
**Accepts:** A bool (true or false)    
**Context:** `message`  
* `message-contains-more-than-mentions`  
Will check if the message contains more than X mentions.  
**Accepts:** A number representing the number of mentions  
**Context:** `message`  
* `message-contains-more-than-unique-mentions`  
Will check if the message contains more than X unique mentions. As opposed to the non-unique variant the mentioned users are being counted, *not* just the mentions themselves.  
**Accepts:** A number representing the number of unique mentions.  
**Context:** `message`  
* `message-contains-more-than-emojis`  
Will check if the message contains more than X emojis. **Important:** emojis with [modifiers](https://en.wikipedia.org/wiki/Emoticons_(Unicode_block)#Emoji_modifiers), such as a thumbs up emoji with custom skin color, will be considered 2 separate emojis.  
**Accepts:** A number representing the number of emojis.  
**Context:** `message`  
* `message-has-more-than-characters`  
Will check if the message contains more than X characters. Emojis and custom emojis will be considered a single character. Mentions, both users and channels, are counted too.  
**Accepts:** A number representing the number of characters.  
**Context:** `message`  
* `user-id-matches-any`  
Is `true` if any of the IDs that you list match the user's ID  
**Accepts:** A list of IDs (numbers)  
**Context:** `user`  
**Example:** `user-id-matches-any: [123456789, 2626262626]`  
* `username-matches-any`  
Is `true` if any of patters that you list are found in the user's username  
**Accepts:** A list of patterns. Patterns can make use of wildcards such as `*` and `?`  
**Context:** `user`  
* `nickname-matches-any`  
Is `true` if any of patters that you list are found in the user's nickname  
**Accepts:** A list of patterns. Patterns can make use of wildcards such as `*` and `?`  
**Context:** `user`  
* `user-created-less-than`  
Is `true` if the user's account was created less than X hours ago  
**Accepts:** A number, representing the amount of hours to be checked  
**Context:** `user`  
* `user-joined-less-than`  
Is `true` if the user's has joined the server less than X hours ago  
**Accepts:** A number, representing the amount of hours to be checked  
**Context:** `user`  
* `user-has-default-avatar`  
Will check if the user has a default Discord avatar  
**Accepts:** A bool (true or false)  
**Context:** `user`  
**Example:** `user-has-default-avatar: true` will be `true` if the profile picture is a default one  
* `user-has-sent-less-than-messages`  
Will check if the user has sent less than X messages in the server. **Important:** Boopie, by default, counts how many messages a user sends in a server. This does *not* check the real total number of messages a user has sent in a server since its creation.  
**Accepts:** A number representing the number of messages  
**Context:** `user`  
* `user-is-rank`  
Will check if the user is the specified rank. This condition allows for *rank-specific* Warden rules and grants more granular control compared to the standard `rank` parameter, which merely indicates the maximum rank a rule will have effect on.  
**Accepts:** A number representing the rank the user must belong to  
**Context:** `user`  
* `channel-matches-any`  
**Accepts:** A list of channel's names or IDs  
**Context:** `message`  
**Example:** `channel-matches-any: [general, testing, 483223782]` will be `true` if the message was sent in any of these channels  
* `channel-is-public`  
Will check if the message was sent in a publicly viewable channel.  
**Accepts:** A bool (true or false)    
**Context:** `message`  
* `in-emergency-mode`  
Will check if the server is in emergency mode, either manual or automatic  
**Accepts:** A bool (true or false)    
**Context:** Any  
* `user-has-any-role-in`  
Is `true` if the user belongs to any of these roles in the list  
**Accepts:** A list of role names or IDs  
**Context:** `user`  
**Example:** `user-has-any-role-in: [12345678, spider-fighter]` will be `true` if the user belongs to any of these roles  
* `is-staff`  
Will check if the user is a staff member  
**Accepts:** A bool (true or false)    
**Context:** `user`  
* `user-heat-is`  
Is `true` if the user has the specified [heat level](#heat-level)  
**Accepts:** A number between 0 and 100    
**Context:** `user`  
* `user-heat-more-than`  
Is `true` if the user exceeds the specified [heat level](#heat-level)  
**Accepts:** A number between 0 and 100    
**Context:** `user`  
* `channel-heat-is`  
Is `true` if the channel has the specified [heat level](#heat-level)  
**Accepts:** A number between 0 and 100    
**Context:** `message`  
* `channel-heat-more-than`  
Is `true` if the channel exceeds the specified [heat level](#heat-level)  
**Accepts:** A number between 0 and 100    
**Context:** `message`  

## Actions
* `dm-user`  
Will DM the user in the context  
**Accepts:** A string. Supports context variables.  
**Context:** `user`  
* `set-user-nickname`  
Will change the nickname of a user  
**Accepts:** A string representing the new nickname to set. Supports context variables.  
**Context:** `user`  
* `delete-user-message`  
Will delete the user's message  
**Accepts:** Nothing    
**Context:** `message`  
* `add-roles-to-user`  
Will assign the listed roles to the user  
**Accepts:** A list of roles (names / IDs)  
**Context:** `user`  
* `remove-roles-from-user`  
Will remove the listed roles from the user  
**Accepts:** A list of roles (names / IDs)  
**Context:** `user`  
* `ban-user-and-delete`  
Will ban the user from the server and delete X days worth of messages  
**Accepts:** A number representing the days worth of messages to delete  
**Context:** `user`  
* `kick-user`  
Will kick the user from the server  
**Accepts:** Nothing  
**Context:** `user`  
* `softban-user`  
Will kick the user from the server and delete 1 days worth of messages  
**Accepts:** Nothing  
**Context:** `user`  
* `notify-staff`  
Will send a message in the channel designated for notifications  
**Accepts:** A string representing the message to send. Supports context variables.  
**Context:** Any  
* `notify-staff-and-ping`  
Will send a message in the channel designated for notifications along with a staff role ping  
**Accepts:** A string representing the message to send. Supports context variables.  
**Context:** Any  
* `notify-staff-with-embed`  
Will send a message with embed in the channel designated for notifications  
**Accepts:** A list containing 2 elements: title of the embed, content of the embed. Supports context variables.    
**Context:** Any  
* `send-mod-log`  
Will create a new mod-log case of the last expel action issued by the rule  
**Accepts:** A string representing the reason of the expel action. Supports context variables.  
**Context:** Any  
* `send-in-channel`  
Will send a message in the same channel as the context's message  
**Accepts:** A string representing the message to send. Supports context variables.  
**Context:** `message`  
* `set-channel-slowmode`  
Will set (or deactivate) slowmode of the channel in the context's message  
**Accepts:** A string representing the slowmode time. Some examples: '5 seconds', '2 minutes', '4 hours'. '0 seconds' will deactivate slowmode.   
**Context:** `message`  
* `enable-emergency-mode`  
Will toggle emergency mode  
**Accepts:** A bool (true or false), representing whether emergency mode should be enabled or disabled  
**Context:** Any  
* `send-to-monitor`  
Will send a message to Boopie's monitor, `[p]defender monitor`  
**Accepts:** A string representing the message to send. Supports context variables.  
**Context:** Any  
* `send-dm`  
Will DM a user-defined ID.  
**Accepts:** A list containing 2 elements: ID of the user, content of the message. Supports context variables.  
**Context:** Any  
* `send-to-channel`  
Will send a message to a user-defined channel.  
**Accepts:** A list containing 2 elements: ID or name of the channel, content of the message. Supports context variables.  
**Context:** Any  
* `no-op`  
Does nothing. Useful only for testing a rule's conditions with `[p]defender warden run`  
**Accepts:** Nothing  
**Context:** Any  
* `add-user-heatpoint`  
Adds a single heat point with the specified lifetime to the user's [heat level](#heat-level)  
**Accepts:** A string representing the heat point's lifetime. Some examples: '5 seconds', '2 minutes', '4 hours'  
**Context:** `user`  
**Example:** `add-user-heatpoint: 5 seconds` `add-user-heatpoint: 1m`  
* `add-user-heatpoints`  
Adds multiple heat points with the specified lifetime to the user's [heat level](#heat-level)  
**Accepts:** A list containing two elements: the amount of heatpoints to assign (1-100) and a string representing the heat points' lifetime. Some examples: '5 seconds', '2 minutes', '4 hours'  
**Context:** `user`  
**Example:** `add-user-heatpoints: [10, 5 seconds]` `add-user-heatpoints: [2, 1m]`  
* `add-channel-heatpoint`  
Adds a single heat point with the specified lifetime to the channel's [heat level](#heat-level)  
**Accepts:** A string representing the heat point's lifetime. Some examples: '5 seconds', '2 minutes', '4 hours'  
**Context:** `message`  
**Example:** `add-channel-heatpoint: 5 seconds` `add-channel-heatpoint: 1m`  
* `add-channel-heatpoints`  
Adds multiple heat points with the specified lifetime to the channel's [heat level](#heat-level)  
**Accepts:** A list containing two elements: the amount of heatpoints to assign (1-100) and a string representing the heat points' lifetime. Some examples: '5 seconds', '2 minutes', '4 hours'  
**Context:** `message`  
**Example:** `add-channel-heatpoints: [10, 5 seconds]` `add-channel-heatpoints: [2, 1m]`  
* `empty-user-heat`  
Sets the user's [heat level](#heat-level) to 0  
**Accepts:** Nothing  
**Context:** `user`  
* `empty-channel-heat`  
Sets the channel's [heat level](#heat-level) to 0  
**Accepts:** Nothing  
**Context:** `message`  

## Context variables
For more informations see [context](#context)
* `$action_name`  
The action's name  
* `$guild`  
The guild's name  
* `$guild_id`  
The guild's ID  
* `$user`  
The user's name + the discriminator  
* `$user_name`  
The user's name  
* `$user_id`  
The user's ID  
* `$user_mention`  
The user's mention  
* `$user_nickname`  
The user's nickname. "None" if not set.  
* `$user_created_at`  
The date and time in which the user created the account.    
* `$user_joined_at`  
The date and time in which the user joined the server.  
* `$user_heat`  
The user's [heat level](#heat-level)  
* `$message`  
The message content.  
* `$message_id`  
The message's ID.  
* `$message_created_at`  
The date and time in which the message was created.  
* `$message_link`  
The URL pointing to the message  
* `$attachment_filename`  
The message attachment's filename, if any.  
* `$attachment_url`  
The message attachment's url, if any.  
* `$channel`  
The channel's name in the form of #channel_name  
* `$channel_name`  
The channel's name  
* `$channel_id`  
The channel's ID  
* `$channel_mention`  
The channel's mention  
* `$channel_heat`  
The channel's [heat level](#heat-level)  

## Examples
This rule renames users who are attempting to hoist. Hoisting means prepending an exclamation mark to the username with the purpose of showing up at the top of the user list. This rule can also be manually run against every server member (`[p]def warden run`). Trusted users, staff and users who already have a nickname are ignored.
```yaml
rank: 2
name: dehoist
event: [on-user-join, manual]
if:
  - username-matches-any: ["!*"]
  - if-not:
      - nickname-matches-any: ["*"]
do:
  - set-user-nickname: "no hoisting"
```
This rule prevents new users (rank 4) from sending attachments. Staff is also notified about the deletion and is being given precise context about where that happened.
```yaml
rank: 4
name: no-attachments-rank4
event: [on-message, on-message-edit]
if:
  - message-has-attachment: true
do:
  - delete-user-message:
  - send-in-channel: "$user_mention Sorry, you are not allowed to send attachments."
  - notify-staff-with-embed: ["Attachment removed", "New user $user_mention attempted to send an attachment in $channel_mention\nMessage content, if any: $message\n[Click to jump]($message_link)"]
```
This rule bans any user (except trusted users and staff) who mentions at least 15 different people.
```yaml
rank: 2
name: mention-ban-rank2
event: [on-message]
if:
  - message-contains-more-than-unique-mentions: 14
do:
  - ban-user-and-delete: 1
  - send-mod-log: "User banned for mentioning too many people."
```
The following two rules take advantage of the [heat level](#heat-level) system to kick a user after 3 infractions. Notice the `priority` parameter in the first rule.  
```yaml
rank: 2
name: bad-word
priority: 1
event: on-message
if:
  - message-matches-any: ["*b?d w?rd*"]
do:
  - delete-user-message:
  - send-in-channel: "No bad word here!"
  - add-user-heatpoint: 1h
```

```yaml
rank: 2
name: check-heat
event: on-message
if:
  - user-heat-is: 3
do:
  - kick-user:
```