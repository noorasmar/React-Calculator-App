import Button from '../Button/index'
import './style.css'

function ButtonsList() {
    return ( 
        <div className='container'>
            <Button text='7' type='num'/>
            <Button text='8' type='num'/>
            <Button text='9' type='num'/>
            <Button text='/' type='arith'/>
            <Button text='4' type='num'/>
            <Button text='5' type='num'/>
            <Button text='6' type='num'/>
            <Button text='-' type='arith'/>
            <Button text='1' type='num'/>
            <Button text='2' type='num'/>
            <Button text='3' type='num'/>
            <Button text='+' type='arith'/>
            <Button text='.' type='num'/>
            <Button text='0' type='num'/>
            <Button text='=' type='num'/>
            <Button text='+' type='arith'/>
            <Button text='clear' type='clear'/>
        </div>
    );
}

export default ButtonsList;