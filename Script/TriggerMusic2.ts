import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { AudioSource, Debug, GameObject } from 'UnityEngine';


export default class TriggerMusic2 extends ZepetoScriptBehaviour {

    playSound : AudioSource;
    targetTag : string = "Music2";

    OnTriggerEnter(collider)
    {
        if(this.gameObject.CompareTag(this.targetTag))
        {
            this.playSound.Play();
            Debug.Log("부산 노래 재생");
        }
    }
    OnTriggerExit(collider)
    {
        if(this.gameObject.CompareTag(this.targetTag))
        {
        this.playSound.Stop();
        }
    }
       // OnTriggerEnter(Spherecollider){
    //     this.playSound.Play();
    // }
    // OnTriggerExit(Spherecollider){
    //     this.playSound.Stop();
    // }

    // OnTriggerEnter(Spherecollider){
    //     if(this.gameObject.tag == "Music2"){
    //         this.playSound.Play();
    //     }
        
    // }
    // OnTriggerExit(Spherecollider){
    //     if(this.gameObject.tag="Music2"){
    //     this.playSound.Stop();
    //     }
    // }
}
