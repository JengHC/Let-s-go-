import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { AudioSource, GameObject } from 'UnityEngine'

export default class TriggerSFX extends ZepetoScriptBehaviour {

    playSound : AudioSource;

    targetTag : string = "Music";
    
    OnTriggerEnter(collider){
        this.playSound.Play();
    }
    OnTriggerExit(collider){
        this.playSound.Stop();
    }
}