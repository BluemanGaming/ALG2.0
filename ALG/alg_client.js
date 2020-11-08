// Landing gear will attract once you fly higher than 25 meters? from the ground. (idk if FiveM is metric or imperial).
// Got any questions? Reply under the resource post on the FiveM forums!


setInterval(function() {
    const PlayerPed = GetPlayerPed(-1);
    if (IsPedInAnyPlane(PlayerPed) || IsPedInAnyHeli(PlayerPed)) {
        const veh = GetVehiclePedIsIn(PlayerPed);
        if (GetVehicleHasLandingGear(veh) && GetEntityHeightAboveGround(veh) > 25.0 && GetLandingGearState(veh) == 0) {
            ControlLandingGear(veh, 1);
            BeginTextCommandThefeedPost('STRING');
            AddTextComponentSubstringPlayerName(`Landing gear successfully attracted!`);
            EndTextCommandThefeedPostTicker(false, true);
        } else if (GetVehicleHasLandingGear(veh) && GetEntityHeightAboveGround(veh) < 25.0 && GetLandingGearState(veh) != 0) {
            ControlLandingGear(veh, 2);
            BeginTextCommandThefeedPost('STRING');
            AddTextComponentSubstringPlayerName(`Landing gear successfully retracted!`);
            EndTextCommandThefeedPostTicker(false, true);
        }
    }
}, 1500);