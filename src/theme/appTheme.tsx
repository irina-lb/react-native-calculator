import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background:{
        flex:1,
        backgroundColor:'black',
    },
    result:{
        color:'white',
        fontSize:60,
        textAlign:'right',
        marginBottom:5,
    },
    smallResult:{
        color:'rgba(255,255,255,0.5)',
        fontSize:30,
        textAlign:'right'
    },
    calculatorContainer:{
        flex: 1,
        paddingHorizontal:20,
        justifyContent:"flex-end",
    },
    row:{
        flexDirection:'row',
        justifyContent:'center',
        marginBottom:18,
        paddingHorizontal:10
    },
    button:{
        height:65,
        width:65,
        backgroundColor:'#9b9b9b',
        borderWidth:1,
        borderRadius:100,
        marginHorizontal:10,
    },
    buttonText:{
        textAlign:'center',
        padding:10,
        fontSize:30,
        color:'white', 
        fontWeight:'bold',
    }
})