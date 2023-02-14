import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { SceneManager } from 'UnityEngine.SceneManagement'
import { GameObject } from 'UnityEngine'

export default class SceneChange2 extends ZepetoScriptBehaviour {

    //sceneIndex: int;

    Start() {    
        //this.sceneIndex = SceneManager.GetActiveScene().buildIndex;
    }

    OnTriggerEnter(collider)
    {
        //SceneManager.LoadScene(this.sceneIndex-1);
        SceneManager.LoadScene("5rasadae");
    }
}