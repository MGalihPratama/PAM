import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {StyleSheet} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { tambahCounter, kurangCounter} from './redux/action'
import {Image} from 'react-native'

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(data => data.counter);
    return (
        <View style={styles.container}>
            <Image style={styles.foto} 
            source={{uri:'https://www.pngitem.com/pimgs/m/159-1591688_men-sketch-fashion-people-drawing-fashion-logo-for.png'}}/>
            <TouchableOpacity style={styles.tombol} onPress={()=>dispatch(tambahCounter(counter))}>
                <Text style={{fontSize:30}}>Tambah</Text>
            </TouchableOpacity>
            <Text style={styles.text}>{counter}</Text>
            <TouchableOpacity style={styles.tombol} onPress={()=>dispatch(kurangCounter(counter))}>
                <Text style={{fontSize:30}}>Kurang</Text>
            </TouchableOpacity> 
            <Text style={styles.angka}> Bilangan : {counter%2 ?'Ganjil':'Genap'} {counter>=0 ?'Positif':'Negatif'}</Text>      
        </View>
    )
}
const styles = StyleSheet.create({
    foto : {
        width : 100,
        height: 140
    },
    container :{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
       
    },
    tombol :{
        backgroundColor:'#DDDDDD',
        paddingBottom:5,
        paddingTop:5,
        paddingLeft:20,
        paddingRight:20
    },
    text :{
        fontSize:50,
        marginLeft:20,
        marginRight:20
    },
    angka :{
        backgroundColor:'cyan',
        paddingBottom:5,
        paddingTop:5,
        paddingLeft:20,
        paddingRight:20
    }
})
export default Counter