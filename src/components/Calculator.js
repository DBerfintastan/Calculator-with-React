import { useState } from "react";

function Calculator()
{
    var[number1, setNumber1]=useState(0);
    var[number2, setNumber2]=useState(0);
    const[answer, setAnswer]= useState(0);

    const onChangeNumber1=(e)=>setNumber1(e.target.value);
    const onChangeNumber2=(e)=>setNumber2(e.target.value);

    const add=()=>
    {
        setAnswer(Number(number1)+Number(number2));
    }

    const substraction=()=>
    {
        setAnswer(Number(number1)-Number(number2));
    }

    const multiplay=()=>
    {
        setAnswer(Number(number1)*Number(number2));
    }

    const divide=()=>
    {
        setAnswer(Number(number1)/Number(number2));
    }
    const expo=()=>
    {
        if(number2>0)
        {
            var ans=1;
            var i=0;
            while(i<Number(number2))
            {
                ans=ans*Number(number1);
                i++;
            }
        }
        else ans="Geçersiz Üs Girdiniz."
        setAnswer(ans);
    }
    const mode=()=>
    {
        setAnswer(Number(number1)%Number(number2));
    }
    return(
        <div>
            <br/>
            <label>
                Sayı Giriniz:
                <input value={number1} onChange={onChangeNumber1}></input>
            
                <br/><br/>
                Sayı Giriniz:
                <input value={number2} onChange={onChangeNumber2}></input>
            </label>
            <br/><br/>
            <button onClick={add}> Topla</button> &nbsp;
            <button onClick={substraction}> Çıkar</button> &nbsp;
            <button onClick={divide}> Böl</button> &nbsp;
            <button onClick={multiplay}> Çarp</button> &nbsp;
            <button onClick={expo}> Üs</button> &nbsp;
            <button onClick={mode}> Mod Al</button>
            <br/><br/>
            Girilen sayı: {number1}
            <br/>
            Girilen sayı: {number2}
            <br/><br/>

            SONUÇ: {answer}
        </div>

    );

}

export default Calculator;