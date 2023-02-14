import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { SceneManager } from 'UnityEngine.SceneManagement'
import { GameObject } from 'UnityEngine'

export default class SceneChange extends ZepetoScriptBehaviour {

    //sceneIndex: int;

    Start() {    
        //this.sceneIndex = SceneManager.GetActiveScene().buildIndex;
    }

    OnTriggerEnter(collider)
    {
        SceneManager.LoadScene("Ulsan");
        //SceneManager.LoadScene(this.sceneIndex + 1);
    }
}