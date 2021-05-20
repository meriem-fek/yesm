import React from 'react'
import { StyleSheet, Text,TouchableOpacity, View ,Image} from 'react-native'

const AnimalScreen = ({navigation}) => {
    return (
        <View style={{
            flex: 1, backgroundColor: '#deb887'
     ,display: 'flex',
            flexDirection: 'row',
    alignContent: 'baseline',
    alignItems: 'center',
    width: 'fit-content',
}}>
        <TouchableOpacity style={{alignItems: 'center', marginBottom:20 ,width : '100vw'}}>
        <Image  
            source={require('/home/meriem/Downloads/gameapp-main/assets/animals/Bird.png')}
            style={{height: 300, width:300}}  />  
        </TouchableOpacity>    

        <TouchableOpacity style={{alignItems: 'center', marginBottom:20 ,width : '100vw'}}>
        <Image  
            source={require('/home/meriem/Downloads/gameapp-main/assets/animals/cat.png')}
            style={{height: 300, width:300}}  />  
        </TouchableOpacity>    

        <TouchableOpacity style={{alignItems: 'center', marginBottom:20 ,width : '100vw'}}>
        <Image  
            source={require('/home/meriem/Downloads/gameapp-main/assets/animals/crocodile.png')}
            style={{height: 300, width:300}}  />  
        </TouchableOpacity>  

        <TouchableOpacity style={{alignItems: 'center', marginBottom:20 ,width : '100vw'}}>
        <Image  
            source={require('/home/meriem/Downloads/gameapp-main/assets/animals/dog.png')}
            style={{height: 300, width:300}}  />  
        </TouchableOpacity>  

        <TouchableOpacity style={{alignItems: 'center', marginBottom:20 ,width : '100vw'}}>
        <Image  
            source={require('/home/meriem/Downloads/gameapp-main/assets/animals/fish.png')}
            style={{height: 300, width:300}}  />  
        </TouchableOpacity>  
        
        <TouchableOpacity style={{alignItems: 'center', marginBottom:20 ,width : '100vw'}}>
        <Image  
            source={require('/home/meriem/Downloads/gameapp-main/assets/animals/horse.png')}
            style={{height: 300, width:300}}  />  
        </TouchableOpacity>  

        <TouchableOpacity style={{alignItems: 'center', marginBottom:20 ,width : '100vw'}}>
        <Image  
            source={require('/home/meriem/Downloads/gameapp-main/assets/animals/pinguin.png')}
            style={{height: 300, width:300}}  />  
        </TouchableOpacity>  

        <TouchableOpacity style={{alignItems: 'center', marginBottom:20 ,width : '100vw'}}>
        <Image  
            source={require('/home/meriem/Downloads/gameapp-main/assets/animals/rabbit.png')}
            style={{height: 300, width:300}}  />  
        </TouchableOpacity>  

        <TouchableOpacity style={{alignItems: 'center', marginBottom:20 ,width : '100vw'}}>
        <Image  
            source={require('/home/meriem/Downloads/gameapp-main/assets/animals/sheep.png')}
            style={{height: 300, width:300}}  />  
        </TouchableOpacity>  

        <TouchableOpacity style={{alignItems: 'center', marginBottom:20 ,width : '100vw'}}>
        <Image  
            source={require('/home/meriem/Downloads/gameapp-main/assets/animals/vache.png')}
            style={{height: 300, width:300}}  />  
        </TouchableOpacity>  


        

        </View>
    )
}

export default AnimalScreen

const styles = StyleSheet.create({})
