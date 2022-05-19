import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Dimensions, ScrollView, Pressable, Button, ActivityIndicator, Alert, TextInput  } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import InfoHours from '../../components/Info';
import Container from '../../components/Container';
import moment from 'moment';
import 'moment/locale/pt-br'
import Info from '../../components/Info';
import InfoIcon from '../InfoIcon';


const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const BigContainer = width/1.11;
const SmallContainer = BigContainer/2.15;

export default function WeatherForecast() {

  const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#3d3d3d',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container_smalls_info:{
    width:BigContainer,
    flexDirection:'row',
    justifyContent:'space-between',
    flexWrap:'wrap'
  },
  spinner_container:{
    marginTop:(height/2) -70,
    alignItems: 'center',
    width:width
  },
  container_footer:{
      height:50,
      width:width,
      alignItems:'flex-end',
      justifyContent:'center',
      paddingRight: 10
    },
    input_city:{
      alignSelf:'center',
      height: 70,
      backgroundColor: '#ffffff',
      paddingLeft: 15,
      paddingRight: 15,
      borderWidth: 2,
      borderColor: "#20232a",
      alignItems: 'stretch',
      width: width/1.2,
      marginBottom:10  
    },
    city:{
      color:'white',
      fontSize:20,
      marginBottom:50,
      marginTop:50
    }
});

  const [city, setCity] = useState('São Paulo')
  const [forecast, setForecast] = useState({})
  const [foundCity, setFoundCity] = useState(false)
  const [data, setData] = useState(false)
  

  useEffect(()=>{
    foundCity  ? null : getCity();  
  }, [foundCity, data, forecast])


  function getCity(){
          axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=b5cb9159eb0a6bdcf566597ea3bbbe72&lang=pt_br&units=metric`)
            .then((response)=>{
              setForecast(response.data)
              setData(true)                 
              setCity(response.data.city.name)
            })
            .catch((response)=>{   
              setData(true)     
              showAlert()
            })
            setFoundCity(true)
  }

  function changeCity(){
    setFoundCity(false)
    setData(false)
  }

  function showAlert(){
    Alert.alert(
      "Cidade não encontrada",
       "insira uma cidade existente e com nome correto",
       [{ text: "OK"}]
       )
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView >
        <SafeAreaView style={styles.container}>
        {!data ? 
          (<View style={styles.spinner_container}>
            <Container height={70} padding_top={20} width={70}
              component={<ActivityIndicator size="large"></ActivityIndicator>}>
            </Container>
          </View>) : 
          <>
          
          <View style={styles.container_footer}>
              <Pressable onPress={changeCity}>
                <FontAwesome5 name='search' color={"white"} size={25}/>
              </Pressable>
          </View>
          <View>
            <TextInput onChangeText={newCity => setCity(newCity)} style={styles.input_city} placeholder="Digite o numero do telefone"/>
          </View>
          <Text style={styles.city}>{forecast.city.name}</Text>
          <View style={styles.container_smalls_info}>
            <Container  height={SmallContainer} padding_top={10} width={SmallContainer}
              component={<Info title={'Nascer do Sol'} icon={'sunrise'} 
                          width={SmallContainer-20} text={moment(forecast.city.sunrise * 1000).format('LT')}/>}
            />
            <Container  height={SmallContainer} padding_top={10} width={SmallContainer}
              component={<Info title={'Pôr do Sol'} icon={'sunset'} 
                          width={SmallContainer-20} text={moment(forecast.city.sunset * 1000).format('LT')}/>}
            />
            <Container  height={SmallContainer} padding_top={10} width={SmallContainer}
              component={<InfoIcon title={'Icone'} icon={'eye'} 
                          width={SmallContainer-20} source={`https://openweathermap.org/img/wn/${forecast.list[0].weather[0].icon}.png`}/>}
            />
            <Container  height={SmallContainer} padding_top={10} width={SmallContainer}
              component={<Info title={'Sensação Termica'} icon={'thermometer'} 
                          width={SmallContainer-20} text={parseInt(forecast.list[0].main.feels_like) + "º"}/>}
            />
          </View>
          </>
        }     
        </SafeAreaView>
      </ScrollView>
    </SafeAreaView>
  );
}

