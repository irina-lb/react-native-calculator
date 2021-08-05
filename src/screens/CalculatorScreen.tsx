import React from 'react'
import {View, Text} from 'react-native'
import ButtonCalc from '../components/ButtonCalc'
import { styles } from '../theme/appTheme'
import useCalculator from '../hooks/useCalculator'



const CalculatorScreen = () => {

    const {previousNumber,
        number,
        clean,
        plusMenos,
        btnDevide,
        btnMultiply,
        btnSum,
        btnSubstruct,
        buttonDelete,
        calc,
        equipNumber} = useCalculator()


    return (
        <View style = {styles.calculatorContainer}>
            {
                (previousNumber !== '0') &&
                <Text style={styles.smallResult}>{previousNumber}</Text>
            }            
            <Text style = {styles.result} numberOfLines={1} adjustsFontSizeToFit>{number}</Text>
            <View style = {styles.row}>
                < ButtonCalc text = 'C' color='#9b9b9b' action={clean}/>
                < ButtonCalc text = '+/-' color='#9b9b9b' action={plusMenos}/>
                < ButtonCalc text = 'del' color='#9b9b9b' action={buttonDelete}/>
                < ButtonCalc text = '/' color='#ff9427' action={btnDevide}/>
            </View>
            <View style = {styles.row}>
                < ButtonCalc text = '7' action={equipNumber} />
                < ButtonCalc text = '8' action={equipNumber} />
                < ButtonCalc text = '9' action={equipNumber} />
                < ButtonCalc text = 'x' action={btnMultiply}color='#ff9427' />
            </View>
            <View style = {styles.row}>
                < ButtonCalc text = '4' action={equipNumber} />
                < ButtonCalc text = '5' action={equipNumber} />
                < ButtonCalc text = '6' action={equipNumber} />
                < ButtonCalc text = '-' color='#ff9427'  action={btnSubstruct}/>
            </View>
            <View style = {styles.row}>
                < ButtonCalc text = '1' action={equipNumber} />
                < ButtonCalc text = '2' action={equipNumber} />
                < ButtonCalc text = '3' action={equipNumber} />
                < ButtonCalc text = '+' color='#ff9427'  action={btnSum}/>
            </View>
            <View style = {styles.row}>
                < ButtonCalc text = '0' action={equipNumber} width={true}/>
                < ButtonCalc text = '.' action={equipNumber} />
                < ButtonCalc text = '=' color='#ff9427' action={calc}/>
            </View>
        </View>
    )
}

export default CalculatorScreen
