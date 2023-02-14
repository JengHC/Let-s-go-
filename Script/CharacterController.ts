import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import {SpawnInfo, ZepetoPlayers} from "ZEPETO.Character.Controller";
import { Quaternion, Vector3 } from 'UnityEngine';
import { WorldService } from 'ZEPETO.World'

export default class CharacterController extends ZepetoScriptBehaviour {

    Start() {
        //Character Spawn Coordinate Change Script
        var spawnInfo = new SpawnInfo();
        spawnInfo.position = new Vector3(6.05,1,-5.7);
        spawnInfo.rotation = Quaternion.identity;

        ZepetoPlayers.instance.CreatePlayerWithUserId(WorldService.userId, spawnInfo, true);
        ZepetoPlayers.instance.OnAddedLocalPlayer.AddListener(()=>{
            let _player = ZepetoPlayers.instance.LocalPlayer;

        // ZepetoPlayers.instance.CreatePlayerWithZepetoId("lover123e", "lover123e", spawnInfo,true);
        // ZepetoPlayers.instance.OnAddedLocalPlayer.AddListener(()=>{
        //     let _player = ZepetoPlayers.instance.LocalPlayer;
        })
    }
}

// import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
// import { SpawnInfo, ZepetoPlayers, LocalPlayer, ZepetoCharacter } from 'ZEPETO.Character.Controller'
// import { WorldService } from 'ZEPETO.World';
// //import { Quaternion, Vector3 } from 'UnityEngine';
// export default class CharacterController extends ZepetoScriptBehaviour {
//     Start() {
//         // var spawnInfo = new SpawnInfo();
//         // spawnInfo.position = new Vector3(0,0,5);
//         // spawnInfo.rotation = Quaternion.identity;
//         //Gets the UserId (logged in through Editor)
//         ZepetoPlayers.instance.CreatePlayerWithUserId(WorldService.userId,new SpawnInfo(), true);
//         ZepetoPlayers.instance.OnAddedLocalPlayer.AddListener(() => {
//             let _player : LocalPlayer = ZepetoPlayers.instance.LocalPlayer;
//         });
//     }
// }  