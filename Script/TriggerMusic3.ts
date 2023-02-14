import { AudioSource, Debug } from 'UnityEngine'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class TriggerMusic3 extends ZepetoScriptBehaviour {
    playSound : AudioSource;
    targetTag : string ="Music3";

    OnTriggerEnter(Spherecollider)
    {
        if(this.gameObject.CompareTag(this.targetTag))
        {
            this.playSound.Play();
            Debug.Log("울산 노래 재생");
        }
    }

    OnTriggerExit(Spherecollider)
    {
        if(this.gameObject.CompareTag(this.targetTag))
        {
            this.playSound.Stop();
        }
    }
}