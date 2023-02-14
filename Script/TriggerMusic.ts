import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { AudioSource, Debug, GameObject } from 'UnityEngine';


export default class TriggerMusic extends ZepetoScriptBehaviour {

    playSound : AudioSource;
    targetTag : string = "Music";

    OnTriggerEnter(collider){
        if(this.gameObject.CompareTag(this.targetTag)){
            this.playSound.Play();
            Debug.Log("김해 노래 재생")
        }
        
    }
    OnTriggerExit(collider){
        if(this.gameObject.CompareTag(this.targetTag)){
        this.playSound.Stop();
        }
    }
}
    // OnTriggerEnter(SphereCollider){
    //     this.playSound.Play();
    // }
    // OnTriggerExit(SphereCollider){
    //     this.playSound.Stop();
    // }

    // OneTriggerEnter(Spherecollider){
    //     if(this.gameObject.CompareTag("Music")){
    //         this.playSound.Play();
    //     }
        
    // }
    // OnTriggerExit(Spherecollider){
    //     if(this.gameObject.CompareTag("Music")){
    //         this.playSound.Stop();
    //     }
    // }
