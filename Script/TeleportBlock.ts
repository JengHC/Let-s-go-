import { Collider, GameObject } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class TeleportBlock extends ZepetoScriptBehaviour {

    public teleportPos:GameObject;

    Start() {    

    }

    OnTriggerEnter(obj:Collider)
    {
        this.Teleport(obj.gameObject)
    }

    Teleport(obj:GameObject)
    {
        //this.enabled=false;
        obj.transform.position = this.teleportPos.transform.position;
        //this.enabled=true;
    }
}