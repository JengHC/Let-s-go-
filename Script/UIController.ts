import { ZepetoScriptBehaviour } from 'ZEPETO.Script';
import { Text } from "UnityEngine.UI";
import { GameObject } from 'UnityEngine';

//define variable to use
export default class UIController extends ZepetoScriptBehaviour
{
    public messageUI: Text;

    Start()
    {
        this.Init();
    }
    
    public Init() 
    {
        this.messageUI.text = " ";
    }

    public Loading()
    {
        this.messageUI.text = "상자 오픈";
    }

    public Open()
    {
        this.messageUI.text = " 아이템 획득 ";
    }

    // public Lose()
    // {
    //     this.messageUI.text = "It's a blank";
    // }

}