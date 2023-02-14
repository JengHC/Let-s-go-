import { ZepetoScriptBehaviour } from 'ZEPETO.Script';
import { Text } from "UnityEngine.UI";
import { GameObject } from 'UnityEngine';

//define variable to use
export default class UIController3 extends ZepetoScriptBehaviour
{
    public messageUI: Text;
    public messageUI2: Text;

    Start()
    {
        this.Init();
    }
    
    public Init() 
    {
        this.messageUI.text = " Play ";
    }

    public Loading()
    {
        this.messageUI.text = " ";
    }

    public Open()
    {
        this.messageUI.text = " ";
    }

    Start2()
    {
        this.Init2();
    }
    
    public Init2() 
    {
        this.messageUI2.text = "Pause";
    }

    public Loading2()
    {
        this.messageUI2.text = " ";
    }

    public Open2()
    {
        this.messageUI2.text = " ";
    }

    // public Lose()
    // {
    //     this.messageUI.text = "It's a blank";
    // }

}