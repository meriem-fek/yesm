import React from 'react'
import { StyleSheet, Text, TouchableOpacity,Image, View } from 'react-native'
// import SoundPlayer from 'react-native-sound-player'



const NumberScreen = ({navigation}) => {
    return (
        <View style={{
            flex: 1, backgroundColor: '#fafad2'
     ,display: 'flex',
            flexDirection: 'row',
    alignContent: 'baseline',
    alignItems: 'center',
    width: 'fit-content',
}}>

        <TouchableOpacity style={{alignItems: 'center', marginBottom:20,width : '100vw'}}>
             <Image 
                source={require('/home/meriem/Downloads/gameapp-main/assets/number/0.png')}
                style={{height: 300, width:300}}  />   
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems: 'center', marginBottom:20,width : '100vw'}}>
             <Image 
                source={require('/home/meriem/Downloads/gameapp-main/assets/number/1.png')}
                style={{height: 200, width:300}}  />   
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems: 'center', marginBottom:20,width : '100vw'}}>
             <Image 
                source={require('/home/meriem/Downloads/gameapp-main/assets/number/2.png')}
                style={{height: 200, width:300}}  />   
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems: 'center', marginBottom:20,width : '100vw'}}>
             <Image 
                source={require('/home/meriem/Downloads/gameapp-main/assets/number/3.png')}
                style={{height: 200, width:300}}  />   
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems: 'center', marginBottom:20,width : '100vw'}}>
             <Image 
                source={require('/home/meriem/Downloads/gameapp-main/assets/number/4.png')}
                style={{height: 200, width:300}}  />   
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems: 'center', marginBottom:20,width : '100vw'}}>
             <Image 
                source={require('/home/meriem/Downloads/gameapp-main/assets/number/5.png')}
                style={{height: 200, width:300}}  />   
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems: 'center', marginBottom:20,width : '100vw'}}>
             <Image 
                source={require('/home/meriem/Downloads/gameapp-main/assets/number/6.png')}
                style={{height: 200, width:300}}  />   
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems: 'center', marginBottom:20,width : '100vw'}}>
             <Image 
                source={require('/home/meriem/Downloads/gameapp-main/assets/number/7.png')}
                style={{height: 200, width:300}}  />   
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems: 'center', marginBottom:20,width : '100vw'}}>
             <Image 
                source={require('/home/meriem/Downloads/gameapp-main/assets/number/8.png')}
                style={{height: 200, width:300}}  />   
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems: 'center', marginBottom:20,width : '100vw'}}>
             <Image 
                source={require('/home/meriem/Downloads/gameapp-main/assets/number/9.png')}
                style={{height: 200, width:300}}  />   
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems: 'center', marginBottom:20,width : '100vw'}}>
             <Image 
                source={require('/home/meriem/Downloads/gameapp-main/assets/number/10.png')}
                style={{height: 200, width:300}}  />   
        </TouchableOpacity>
       
        </View>
       
    )
}

export default NumberScreen

const styles = StyleSheet.create({})
