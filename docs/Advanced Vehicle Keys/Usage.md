import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Handlers

nyam_vehiclekeys:giveKey


<Tabs className="api-tabs">
<TabItem value="js" label="Client Side">

```jsx title="nyam_vehiclekeys:giveKey | plate, vehicle"
local vehicle = GetVehiclePedIsIn(PlayerPedId(), false)
local plate = GetVehicleNumberPlateText(vehicle)
TriggerEvent('nyam_vehiclekeys:giveKey', plate, vehicle)
```

```jsx title="nyam_vehiclekeys:useLockpick | isAdvanced"
// from client to client
TriggerEvent('nyam_vehiclekeys:useLockpick', true or false)
// from server to client
TriggerClientEvent('nyam_vehiclekeys:useLockpick', source, true or false)
```

```jsx title="nyam_vehiclekeys:toggleEngine | plate"
// From Server to Client
TriggerClientEvent('nyam_vehiclekeys:toggleEngine', source, plate) // it will toggle current drivers engine.

// From Client to Client (self)
local vehicle = GetVehiclePedIsIn(PlayerPedId(), false)
local plate = GetVehicleNumberPlateText(vehicle)
TriggerEvent('nyam_vehiclekeys:toggleEngine', plate) // it will toggle you vehicles engine ON/OFF
```

```jsx title="exports.nyam_vehiclekeys:getVehicleState | plate"
local vehicle = GetVehiclePedIsIn(PlayerPedId(), false)
local plate = GetVehicleNumberPlateText(vehicle)
local vehicleState = exports.nyam_vehiclekeys:getVehicleState(plate)

if vehicleState.isLocked then

end

if vehicleState.isEngineOn then

end

if vehicleState.isLockPicked then

end

if vehicleState.isHotWired then

end
// Here is some parameters you can check for a specific vehicle plate from client side.
// EG: Usable for inventory, to block people using trunk with (vehicleState.isLocked)
// EG: Police can check if a car has been Hotwired or Lockpicked, just your ideas you know and your coding knowledge on how todo that.
```





</TabItem>    

<TabItem value="n" label="Server Side">
<li>There's nothing for you from the server side</li>
</TabItem>
</Tabs>
