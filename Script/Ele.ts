import { Collider } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { CharacterController, Mathf, Quaternion, Time, Vector3, } from 'UnityEngine';

export default class Ele extends ZepetoScriptBehaviour {

    Start() {    

    }
    private OnTriggerEnter(coll: Collider) {
        if (coll.transform.root!=this.transform)
             coll.transform.parent = this.transform
    }
    private OnTriggerExit(coll: Collider) {
        if (coll.transform.root==this.transform)
             coll.transform.parent = null;
    }

}