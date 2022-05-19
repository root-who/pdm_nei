import { StyleSheet, Text, View, SafeAreaView, Dimensions, ScrollView, Button } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function Container({height, width, component, padding_top}){


    const styles = StyleSheet.create({
        container:{
            backgroundColor:'#b4b4b4',
            width:width,
            paddingTop:padding_top,
            height:height,
            alignItems:'center', 
            marginBottom:20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20 
    }})

    return(
        // {/* CONTAINER PRINCIPAL PARA TEMPERATURA POR HORARIO + FRASE DA PREVISÃO */}
        <View style={styles.container}>
            {component}
        </View>
    )
}
