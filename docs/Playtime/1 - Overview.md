## **N Developments - Playtime**

## **Overview**
The *Playtime* by N Developments provides a robust system to track player activity on your server. With customizable playtime-based rewards, progression systems, and detailed stats, this script enhances player engagement and provides server owners with actionable insights into player behavior.

---

## **Features**
- 🕒 **Accurate Playtime Tracking:** Logs total time players spend on the server.
- 🎁 **Milestone Rewards:** Automatically reward players upon reaching configurable playtime goals.
- 🔄 **Persistent Data:** Save player stats across server restarts.
- ⚙️ **Highly Configurable:** Adjust milestones, reward types, and notifications to fit your server.
- 🔐 **Optimized and Secure:** Minimal performance impact with robust data handling.

---

## **Installation**

1. **Download the Script:**
   - Purchase and download from **[N Developments - Playtime](https://nyambura.tebex.io/package/6586020)**.

2. **Extract the Files:**
   - Unzip the downloaded file and place the folder in your server's `resources` directory.

3. **Add to Server Config:**
   - Open your `server.cfg` file and add the following line:
     ```cfg
     ensure n_playtime
     ```

4. **Restart Your Server:**
   - Restart the server to load the script.

---

## **Configuration**
To customize the script, open the `shared/main.lua` file provided in the resource folder. Below are some key settings:

### **Milestone Rewards:**
Define rewards for reaching specific playtime milestones:
```lua
Shared.Rewards = {
    {
        id = "welcome_noob",
        label = "Welcome, Noob!",
        description = "You've started your journey! Keep playing to unlock your true potential.",
        description2 = "Rewards: 5000$ bank deposit.",
        timeRequired = 1,
        onClaim = {
            ["GiveMoney"] = {"bank", 5000, "Playtime Reward"},
        }
    },
    {
        id = "rookie_grind",
        label = "Rookie Grinder",
        description = "You've got the basics down. Time to sharpen those skills!",
        description2 = "Rewards: 15000$ bank deposit and a phone with attached number 555778",
        timeRequired = 5,
        onClaim = {
            ["GiveMoney"] = {"bank", 15000, "Playtime Reward"},
            ["GiveItem"] = {"phone", 1, {phoneNumber="555778"}, "This is a reason, some inventories accepts reason of give item"},
        }
    },
    {
        id = "journeyman",
        label = "Journeyman Adventurer",
        description = "You're no longer a rookie. Keep grinding to prove yourself!",
        description2 = "Rewards: 25000$ Bank deposit, 1 phone and a vehicle",
        timeRequired = 10, 
        onClaim = {
            ["GiveMoney"] = {"bank", 25000, "Playtime Reward"},
            ["GiveItem"] = {"phone", 1, {phoneNumber="666888777222"}, "This is a reason, some inventories accepts reason of give item"},
            ["GiveVehicle"] = {"sultanrs"},
        }
    },
    {
        id = "seasoned_veteran",
        label = "Seasoned Veteran",
        description = "You've come a long way, adventurer. Your dedication shines!",
        description2 = "Rewards: 25000$ Black money, Trimmed Weed and 1 vehicle",
        timeRequired = 20, 
        onClaim = {
            ["GiveMoney"] = {"black", 25000, "Playtime Reward"},
            ["GiveItem"] = {"trimmed_weed", 15, nil, "This is a reason, some inventories accepts reason of give item"},
            ["GiveVehicle"] = {"adder"},
        }
    },
    {
        id = "master_warrior",
        label = "Master Warrior",
        description = "You've reached elite status. Only a few can rival your skills!",
        description2 = "Rewards: 25000$ black money, Coke Baggies and 1 vehicle",
        timeRequired = 50, 
        onClaim = {
            ["GiveMoney"] = {"black", 25000, "Playtime Reward"},
            ["GiveItem"] = {"coke_baggy", 15, nil, "This is a reason, some inventories accepts reason of give item"},
            ["GiveVehicle"] = {"t20"},
        }
    },
    {
        id = "ultimate_champion",
        label = "Ultimate Champion",
        description = "You're a legend. Few have matched your dedication and skill.",
        description2 = "Rewards: Bank, Money, Black about 25000$, Few Baggies ass Coke/Extassy/Weed, Few vehicles",
        timeRequired = 100,
        onClaim = {
            ["GiveMoney"] = {"black", 25000, "Playtime Reward"},
            ["GiveMoney"] = {"bank", 25000, "Playtime Reward"},
            ["GiveMoney"] = {"money", 25000, "Playtime Reward"},
            ["GiveItem"] = {"coke_baggy", 15, nil, "This is a reason, some inventories accepts reason of give item"},
            ["GiveItem"] = {"extasy_baggy", 15, nil, "This is a reason, some inventories accepts reason of give item"},
            ["GiveItem"] = {"weed_baggy", 15, nil, "This is a reason, some inventories accepts reason of give item"},
            ["GiveVehicle"] = {"t20"},
            ["GiveVehicle"] = {"adder"},
            ["GiveVehicle"] = {"cypher"},
        }
    },
    {
        id = "eternal_hero",
        label = "Eternal Hero",
        description = "Your name echoes through eternity. A true master of the game.",
        description2 = "Rewards: Weed Baggies, Boomer Phone, Boosting Tablet, Hacking Device, Marked Bills, Few vehicles",
        timeRequired = 200,
        onClaim = {
            ["GiveItem"] = {"weed_baggy", 15, nil, "This is a reason, some inventories accepts reason of give item"},
            ["GiveItem"] = {"boomer_phone", 1, nil, "This is a reason, some inventories accepts reason of give item"},
            ["GiveItem"] = {"boosting_tablet", 1, nil, "This is a reason, some inventories accepts reason of give item"},
            ["GiveItem"] = {"hacking_device", 1, nil, "This is a reason, some inventories accepts reason of give item"},
            ["GiveItem"] = {"markedbills", 1, {worth = 75000}, "This is a reason, some inventories accepts reason of give item"},
            ["GiveVehicle"] = {"monstrociti"},
            ["GiveVehicle"] = {"adder"},
            ["GiveVehicle"] = {"cypher"},
        }
    },
}
```

---

## **Commands**
- `/playtime`:
  - View your playtime or the playtime of another player (Admin only).
  
---

## **Support**
For issues or support, feel free to reach out through our social media and community platforms:


[![Youtube](https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/YouTube_icon_%282013-2017%29.png/512px-YouTube_icon_%282013-2017%29.png 'Youtube')](https://www.youtube.com/@n-developments)
[![Discord](https://cdn.discordapp.com/attachments/1103694279488065709/1108792831486742548/discord.jpg) 'Discord')](https://discord.gg/mVUgnGjXQU)
[![Tebex Store](https://cdn.discordapp.com/attachments/1103694279488065709/1108792831851626546/tebex.jpg 'Tebex Store')](https://nyambura.tebex.io)
[![CFX](https://cdn.discordapp.com/attachments/1103694279488065709/1108792831126028289/cfx.jpg 'CFX')](https://forum.cfx.re/u/Nyambura)

---

## **License**
This script is licensed for personal use only. Redistribution or unauthorized sharing is prohibited. For additional licenses or customization requests, contact us via Discord.
