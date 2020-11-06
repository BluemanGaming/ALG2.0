// Landing gear will attract once you fly higher than 25 meters? from the ground. (idk if FiveM is metric or imperial).
// Got any questions? Reply under the resource post on the FiveM forums!


setInterval(function() {
    const PlayerPed = GetPlayerPed(-1);
    if (IsPedInAnyPlane(PlayerPed)) {
        const veh = GetVehiclePedIsIn(PlayerPed);
        if (GetVehicleHasLandingGear(veh) && IsPlaneLandingGearIntact(veh) && GetEntityHeightAboveGround(veh) > 25.0 && GetLandingGearState(veh) == 0) {
            ControlLandingGear(veh, 1);
            emit('chat:addMessage', {
                args: [`Landing gear successfully attracted!`]
            });
        } else if (GetVehicleHasLandingGear(veh) && IsPlaneLandingGearIntact(veh) && GetEntityHeightAboveGround(veh) < 25.0 && GetLandingGearState(veh) != 0) {
            ControlLandingGear(veh, 2);
            emit('chat:addMessage', {
                args: [`Landing gear successfully retracted!`]
            });
        }
    }
}, 1500);