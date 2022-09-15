import { useContext, useState } from 'react';
import {dataContext} from '../../contexts/DataContext'
import './style.css'

function Button({text, type}) {
    const {result, setResult, arith, setArith} = useContext(dataContext);
    const getResult = ()=>{
        let str = arith
        let arr = []
        let tmp = ''
        for(let i=0; i<str.length; i++){
            if(!isNaN(str[i]) || str[i] === '.'){
                tmp = ''
                for(let j=i; j<str.length; j++){
                    if(!isNaN(str[j]) || str[j] === '.'){
                        tmp += str[j]
                        if(j + 1 === str.length && isNaN(str[j+1])){
                            arr.push(tmp)
                            i = j
                        }
                    }
                    else if(isNaN(str[j])){
                        arr.push(tmp)
                        arr.push(str[j])
                        i = j
                        break
                    }
                }
            }
            else
                arr.push(str[i])
        }
        let operand = !isNaN(arr[0]) ? Number(arr[0]) : 0
        
        let i = 0
        while(i < arr.length){
            
            switch(arr[i]){
                case '+':
                    operand += Number(arr[i + 1])
                    i++
                    break
                case '-':
                    operand -= Number(arr[i + 1])
                    i++
                    break
                case '*':
                    operand *= Number(arr[i + 1])
                    i++
                    break
                case '/':
                    operand /= Number(arr[i + 1])
                    i++
                    break
            }
            i++
        }
        console.log(arr)
        setArith('')
        setResult(operand)
        console.log(operand)
    }
    const hundleClick = ()=>{
        if(type === 'clear'){
            setArith('')
            setResult(0)
        }
        else 
        if(type === 'num'){
            setArith(arith + text)
        }
        else 
        if(type === 'arith'){
            setArith(arith + text)
        } 
        else
        if(type === '='){
            getResult()
        }       
    }

    return (
        <button className={type} onClick={hundleClick}>
            {text}
        </button>
    );
}

export default Button;