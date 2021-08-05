import {useRef, useState} from 'react'

enum Operators{
    sum, substruct,multiply,devide
}

const useCalculator = () => {
    const [number, setNumber] = useState('0');
    const [previousNumber, setPreviousNumber] = useState('0');

    const lastOperation = useRef<Operators>()

    const clean = () =>{
        setNumber('0');
        setPreviousNumber('0');
    } 
    const equipNumber = (numberText:string) => {
        if(number.includes('.') && numberText==='.') return;
        if(number.startsWith('0') || number.startsWith('-0')){
            if(numberText==='.'){
                setNumber(number + numberText);
            }else if(numberText ==='0' && number.includes('.')){
                setNumber(number + numberText);
            }else if(numberText !=='0' && !number.includes('.')){
                setNumber(numberText);
            }else if(numberText ==='0' && !number.includes('.')){
                setNumber(number);
            }else{
                setNumber(number + numberText);
            }
        }else{
            setNumber(number + numberText);
        }
    }

    const plusMenos = ()=>{
        if(number.includes('-')){
            setNumber(number.replace('-',''));
        }else{
            setNumber('-' + number);
        }
    }

    const buttonDelete = ()=>{
        let negative = '';
        let numberTemp = number;
        if(number.includes('-')){
            negative='-';
            numberTemp=number.substr(1);
        }
        if(numberTemp.length>1){
            setNumber(negative+numberTemp.slice(0,-1));
        }else{
            setNumber('0');
        }
    }
     
    const changeNumberForPrevious = () =>{
        if(number.endsWith('.')){
            setPreviousNumber(number.slice(0, -1));
        }else{
            setPreviousNumber(number)
        }
        setNumber('0');
    }

    const btnDevide = ()=>{
        changeNumberForPrevious();
        lastOperation.current = Operators.devide;
    }
    const btnMultiply = ()=>{
        changeNumberForPrevious();
        lastOperation.current = Operators.multiply;
    }
    const btnSubstruct = ()=>{
        changeNumberForPrevious();
        lastOperation.current = Operators.substruct;
    }
    const btnSum = ()=>{
        changeNumberForPrevious();
        lastOperation.current = Operators.sum;
    }

    const calc =()=>{
        const num1 = Number(number);
        const num2= Number(previousNumber);
        switch(lastOperation.current){
            case Operators.sum:
              setNumber(`${num1+num2}`);              
              break;
            case Operators.substruct:
               setNumber(`${num2-num1}`);
               break;
            case Operators.multiply:
                setNumber(`${num1*num2}`);
                break;
            case Operators.devide:
                setNumber(`${num2/num1}`);
                break;
            default:
                break;           


        }
        setPreviousNumber('0');
    }

 
    return {
        previousNumber,
        number,
        clean,
        plusMenos,
        btnDevide,
        btnMultiply,
        btnSum,
        btnSubstruct,
        calc,
        equipNumber,
        buttonDelete
    }
}

export default useCalculator
