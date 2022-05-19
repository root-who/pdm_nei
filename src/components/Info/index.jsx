import Feather from 'react-native-vector-icons/Feather';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';


export default function Info({text, icon, title, width, text_color}){
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
        text:{
            fontSize:30,
            color:'#3d3d3d'
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
            <Text style={styles.text}>{text}</Text>
        </View> 
    )
}

