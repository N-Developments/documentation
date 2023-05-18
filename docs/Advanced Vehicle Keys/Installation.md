import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Installation

<li>Download the resource from your <a href="https://keymaster.fivem.net">Keymaster</a>.</li>

<li>Unpack the resource <b><i>nyam_vehiclekeys</i></b> into your desired resources location.</li>

<li>If using ESX execute the SQL depnds on your needs</li>

## Inventories

<li>Usefull Images available at <b><i>nyam_vehiclekeys/guides/images</i></b></li>

<Tabs className="api-tabs">
<TabItem value="qb-inventory" label="QB Inventory">
    <li>Open JS script at <b><i>qb-inventory/html/js/app.js</i></b></li>
    <li>Search for <b><i>else if (itemData.name == "stickynote")</i></b></li>

```jsx title="Add this above."
} else if (itemData.name == "keys") { // "keys" should be same name as Config.ItemName
    $(".item-info-title").html('<p>'+itemData.label+'</p>')
    $(".item-info-description").html('<p><strong>Vehicle Name: </strong><span>' + itemData.info.vehiclename + '</span></p><p><strong>Vehicle Plate: </strong><span>' + itemData.info.vehicleplate +'</span><p>')
```


```jsx title="It should be something like that."
} else if (itemData.name == "keys") { // "keys" should be same name as Config.ItemName
    $(".item-info-title").html('<p>'+itemData.label+'</p>')
    $(".item-info-description").html('<p><strong>Vehicle Name: </strong><span>' + itemData.info.vehiclename + '</span></p><p><strong>Vehicle Plate: </strong><span>' + itemData.info.vehicleplate +'</span><p>');
} else if (itemData.name == "stickynote") {
    $(".item-info-title").html('<p>'+itemData.label+'</p>')
    $(".item-info-description").html('<p>'+ itemData.info.label + '</p>');
```

<li>Items for QB Core</li>

```jsx title="qb_core/shared/items.lua."
	["keys"] = {
		["name"] = "keys",
		["label"] = "Vehicle Key",
		["weight"] = 0,
		["decay"] = 0.0,
		["type"] = "item",
		["image"] = "keys.png",
		["unique"] = true,
		["useable"] = true,
		["shouldClose"] = true,
		["combinable"] = nil,
		["description"] = "A vehicle key, probably no immobilizer sett."
	},
	["vehiclelocksystem"]	= {
		["name"] = "vehiclelocksystem",
		["label"] = "Lock System Kit",
		["weight"] = 150,
		["decay"] = 0.0,
		["type"] = "item",
		["image"] = "vehiclelocksystem.png",
		["unique"] = false,
		["useable"] = true,
		["shouldClose"] = true,
		["combinable"] = nil,
		["description"] = "With this kit you can fix or repair a vehicle-s locksystem, diemn boi..."
	},
```

</TabItem>

<TabItem value="qs-inventory" label="QS Inventory">
    <li>Open JS script at <b><i>qs-inventory/config/config_metadata.js</i></b></li>
    <li>Search for <b><i>else if (itemData.name == "stickynote")</i></b></li>

```jsx title="Add this above."
} else if (itemData.name == "keys") { // "keys" should be same name as Config.ItemName
		$(".item-info-title").html("<p>" + itemData.label + "</p>");
		$(".item-info-description").html(
			"<p><strong>Plate: </strong><span>" +
			itemData.info.plate +
			"</span></p><p><strong>Model: </strong><span>" +
			itemData.info.description +
			"</span></p>"
		);
```


```jsx title="It should be something like that."
} else if (itemData.name == "keys") { // "keys" should be same name as Config.ItemName
		$(".item-info-title").html("<p>" + itemData.label + "</p>");
		$(".item-info-description").html(
			"<p><strong>Plate: </strong><span>" +
			itemData.info.plate +
			"</span></p><p><strong>Model: </strong><span>" +
			itemData.info.description +
			"</span></p>"
		);
} else if (itemData.name == "stickynote") {
            $(".item-info-title").html("<p>" + itemData.label + "</p>");
            $(".item-info-description").html(
                "<p><strong>Note: </strong><span>" +
                itemData.info.text +
                "</span></p>"
            );
```

<li>Items for QB Core</li>

```jsx title="qb_core/shared/items.lua."
	["keys"] = {
		["name"] = "keys",
		["label"] = "Vehicle Key",
		["weight"] = 0,
		["decay"] = 0.0,
		["type"] = "item",
		["image"] = "keys.png",
		["unique"] = true,
		["useable"] = true,
		["shouldClose"] = true,
		["combinable"] = nil,
		["description"] = "A vehicle key, probably no immobilizer sett."
	},
	["vehiclelocksystem"]	= {
		["name"] = "vehiclelocksystem",
		["label"] = "Lock System Kit",
		["weight"] = 150,
		["decay"] = 0.0,
		["type"] = "item",
		["image"] = "vehiclelocksystem.png",
		["unique"] = false,
		["useable"] = true,
		["shouldClose"] = true,
		["combinable"] = nil,
		["description"] = "With this kit you can fix or repair a vehicle-s locksystem, diemn boi..."
	},
```

</TabItem>

<TabItem value="core-inventory" label="Core Inventory">
<li>Open JS script at <b><i>core_inventory/html/script.js.</i></b></li>
<li>Search for this <b><i>if (itemData.metadata.durability)     .</i></b></li>

```jsx title="Add this"
if (itemData.metadata.plate) {
    base = base + '        <div class="inf-durability">' +
    '          <span class="inf-text1">' + itemData.metadata.description + '</span>' +
    '        </div>';
}
```

```jsx title="It should be something like that."
if (itemData.metadata.plate) {
        base = base + '        <div class="inf-durability">' +
        '          <span class="inf-text1">' + itemData.metadata.description + '</span>' +
        '        </div>';
}

if (itemData.metadata.durability) {
        base = base + '        <div class="inf-durability">' +
        '          <span class="inf-text1">' + getText('durability') + '</span>' +
        '          <div class="inf-bar"><div class="inf-fillbar" style="background-color: ' + Settings['durabilitycolor'] + '; width: ' + itemData.metadata.durability + '%"></div></div>' +
        '        </div>';
}
```

<li>Import images at <b><i>core_inventory/html/img</i></b> from <b><i>nyam_vehiclekeys/guides/images/</i></b></li>
<li>Execute SQL file from <b><i>nyam_vehiclekeys/sql/</i></b></li>

```jsx
INSERT INTO `items` (`name`, `label`, `weight`, `rare`, `can_remove`, `x`, `y`, `category`, `componentTint`, `componentHash`, `backpackModel`, `backgroundTexture`, `description`) VALUES
        ('vehicle_key', 'Vehicle Key', 1, 1, 1, 1, 1, 'misc', NULL, NULL, NULL, NULL, 'Vehicle Key'),
        ('lockpick', 'Lock Pick', 1, 1, 1, 1, 1, 'misc', NULL, NULL, NULL, NULL, 'No Info'),
        ('advancedlockpick', 'Advanced Lockpick', 1, 1, 1, 1, 1, 'misc', NULL, NULL, NULL, NULL, 'No Info'),
        ('vehiclelocksystem', 'Vehicle Lock Repairkit', 1, 1, 1, 1, 1, 'misc', NULL, NULL, NULL, NULL, 'Repairs a broken lock system of a vehicle')
;
```

</TabItem>
</Tabs>

<li>Start the resource on your <i>server.cfg</i> file.</li>

```mdx title="server.cfg"
ensure n_easysit
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