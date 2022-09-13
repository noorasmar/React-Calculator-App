import { useContext, useState } from 'react';
import {dataContext} from '../../contexts/DataContext'
import './style.css'

function Button({text, type}) {
    const {result, setResult, arith, setArith} = useContext(dataContext);
    const operation = (op)=>{
        switch(op){
            case '+':
                setResult(result + text)
        }
    }
    const hundleClick = ()=>{
        if(type === 'clear'){
            setArith('')
            setResult(0)
        }
        else 
        if(type === 'num'){
            setArith(arith + text)
            setResult(+arith)
        }
        else 
        if(type === 'arith'){
            setArith(arith + text)
            setResult(+arith)
        }        
    }

    return (
        <button className={type} onClick={hundleClick}>
            {text}
        </button>
    );
}

export default Button;