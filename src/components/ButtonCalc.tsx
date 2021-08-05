import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import { styles } from '../theme/appTheme'

interface Props{
    text:string;
    color?: string;
    width?: boolean;
    action:(numberText:string)=>void;
}


const ButtonCalc = ({text,width, color="#2d2d2d", action}:Props) => {
    return (        
        <TouchableOpacity onPress={()=>action(text)}>
            <View style = {{...styles.button, backgroundColor: color, width: width? 145:60}}>
                <Text style = {{...styles.buttonText,
                    color:(color==='#9b9b9b') ? 'black': 'white'}}>
                        {text}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default ButtonCalc
