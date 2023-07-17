## Installation

<li>Download the resource from your <a href="https://keymaster.fivem.net">Keymaster</a>.</li>

<li>Unpack the resource <b><i>n_easysit</i></b> into your desired resources location.</li>
<li>Insert <b>Ace Permission</b>. <i>Select one, steam or license not both.. depends on your server configuration</i></li>


```mdx title="Group"
add_ace group.admin n_easysit allow
```
```mdx title="Steam Identifier"
add_ace identifier.steam:xxxxxxxxxxxxx "n_easysit" allow
```
```mdx title="License Identifier"
add_ace identifier.license:xxxxxxxxxxxxx "n_easysit" allow
```


<li>Execute SQL file</li>

```mdx title="SQL File: n_easysit/n_chairs.sql"
DROP TABLE IF EXISTS `n_easysit`;
CREATE TABLE `n_easysit`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `data` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = DYNAMIC;

SET FOREIGN_KEY_CHECKS = 1;
```

<li>Start the resource on your <i>server.cfg</i> file.</li>

```mdx title="server.cfg"
ensure n_easysit
```



## Command And Notification

<li> Open the configurable file <b><i>n_easysit/config.lua</i></b> and follow our instructions bellow.</li>
<ul>
  <li><b>Command</b>
    <ul>
      <li><i>The name you have to set for example right is /~nchairs , to enable the Creator</i></li>
    </ul>
  </li>
  <li><b>Notify(msg, typ)</b>
    <ul>
      <li>The notification function for our system.</li>
      <li><b>msg</b>, the message we pass into the function.</li>
      <li><b>typ</b>, the type we pass into the function success, warning, error.</li>
      <li>By default we use txAdmin notification system <b><i>TriggerEvent('txAdmin:receiveDirectMessage', msg, "N - Easy Sit")</i></b>, 
      You can change this event into your desired notification system.</li>
    </ul>
  </li>
</ul>

## Discord Webhook Logs

<li>Open the configurable file and setup the <b>Discord Bot Logs</b></li>

```jsx title="n_easysit/server/logger.lua"
Discord = {
    botName = 'My Awesome Bot Name',
    name = "My Awesome Bot Name",
    avatar = "https://cdn.discordapp.com/attachments/XXXXXXXXXXXXX/XXXXXXXXXXXXXX/XXXXXXXXXXXXX.png",
    hook = "https://discord.com/api/webhooks/XXXXXXXXXXX/XXXXXXXXXXXXXXXXXXX"
}
```

## Social Media
<!-- **[Youtube](https://www.youtube.com/@n-developments)**

**[Discord](https://discord.gg/mVUgnGjXQU)**

**[Tebex Store](https://nyambura.tebex.io)**

**[CFX Profile](https://forum.cfx.re/u/Nyambura)** -->


[![Youtube](https://cdn.discordapp.com/attachments/1103694279488065709/1108792832149438545/yt.jpg 'Youtube')](https://www.youtube.com/@n-developments)
[![Discord](https://cdn.discordapp.com/attachments/1103694279488065709/1108792831486742548/discord.jpg 'Discord')](https://discord.gg/mVUgnGjXQU)
[![Tebex Store](https://cdn.discordapp.com/attachments/1103694279488065709/1108792831851626546/tebex.jpg 'Tebex Store')](https://nyambura.tebex.io)
[![CFX](https://cdn.discordapp.com/attachments/1103694279488065709/1108792831126028289/cfx.jpg 'CFX')](https://forum.cfx.re/u/Nyambura)