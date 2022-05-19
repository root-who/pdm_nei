import Feather from 'react-native-vector-icons/Feather';
import { StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';


export default function InfoIcon({icon, title, width, source}){
    const styles = StyleSheet.create({
        info_container:{
            alignItems:'center',
            opacity:0.4,
        },
        title_container:{
            width:width,
            flexDirection: 'row',
            justifyContent:'flex-start',
            marginBottom:40
        },
        title:{
            fontSize:16,
            color:'#3d3d3d'
        },
        image:{
            width:100,
            height:50
        },
        icon:{
            marginRight:5,
            color: '#3d3d3d'
        }
    })
    return(
        <View style={styles.info_container}>
            <View style={styles.title_container}>
                <Feather style={styles.icon} name={icon} size={20}></Feather>
                <Text style={styles.title}>{title}</Text>
            </View>
            <Image style={styles.image} source={{uri : source}}></Image>
        </View> 
    )
}