import React from 'react'
import { StyleSheet,TouchableOpacity,Image, View } from 'react-native'

const VegetableScreen = ({navigation}) => {
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
                   source={require('/home/meriem/Downloads/gameapp-main/assets/vegetable/bitter gourd.png')}
                   style={{height: 300, width:300}} 
            />  
          </TouchableOpacity>

          <TouchableOpacity style={{alignItems: 'center', marginBottom:20,width : '100vw'}}>
            <Image 
                   source={require('/home/meriem/Downloads/gameapp-main/assets/vegetable/brinjal.png')}
                   style={{height: 300, width:300}} 
            />  
          </TouchableOpacity>

          <TouchableOpacity style={{alignItems: 'center', marginBottom:20,width : '100vw'}}>
            <Image 
                   source={require('/home/meriem/Downloads/gameapp-main/assets/vegetable/brocolie.png')}
                   style={{height: 300, width:300}} 
            />  
          </TouchableOpacity>

          <TouchableOpacity style={{alignItems: 'center', marginBottom:20,width : '100vw'}}>
            <Image 
                   source={require('/home/meriem/Downloads/gameapp-main/assets/vegetable/cabbage.png')}
                   style={{height: 300, width:300}} 
            />  
          </TouchableOpacity>

          <TouchableOpacity style={{alignItems: 'center', marginBottom:20,width : '100vw'}}>
            <Image 
                   source={require('/home/meriem/Downloads/gameapp-main/assets/vegetable/carrot.png')}
                   style={{height: 300, width:300}} 
            />  
          </TouchableOpacity>

          <TouchableOpacity style={{alignItems: 'center', marginBottom:20,width : '100vw'}}>
            <Image 
                   source={require('/home/meriem/Downloads/gameapp-main/assets/vegetable/cauliflower.png')}
                   style={{height: 300, width:300}} 
            />  
          </TouchableOpacity>

          <TouchableOpacity style={{alignItems: 'center', marginBottom:20,width : '100vw'}}>
            <Image 
                   source={require('/home/meriem/Downloads/gameapp-main/assets/vegetable/chill pepper.png')}
                   style={{height: 300, width:300}} 
            />  
          </TouchableOpacity>

          <TouchableOpacity style={{alignItems: 'center', marginBottom:20,width : '100vw'}}>
            <Image 
                   source={require('/home/meriem/Downloads/gameapp-main/assets/vegetable/garlic.png')}
                   style={{height: 300, width:300}} 
            />  
          </TouchableOpacity>

          <TouchableOpacity style={{alignItems: 'center', marginBottom:20,width : '100vw'}}>
            <Image 
                   source={require('/home/meriem/Downloads/gameapp-main/assets/vegetable/onion.png')}
                   style={{height: 300, width:300}} 
            />  
          </TouchableOpacity>

          <TouchableOpacity style={{alignItems: 'center', marginBottom:20,width : '100vw'}}>
            <Image 
                   source={require('/home/meriem/Downloads/gameapp-main/assets/vegetable/pepper.png')}
                   style={{height: 300, width:300}} 
            />  
          </TouchableOpacity>

          <TouchableOpacity style={{alignItems: 'center', marginBottom:20,width : '100vw'}}>
            <Image 
                   source={require('/home/meriem/Downloads/gameapp-main/assets/vegetable/potato.png')}
                   style={{height: 300, width:300}} 
            />  
          </TouchableOpacity>

          <TouchableOpacity style={{alignItems: 'center', marginBottom:20,width : '100vw'}}>
            <Image 
                   source={require('/home/meriem/Downloads/gameapp-main/assets/vegetable/pumpkin.png')}
                   style={{height: 300, width:300}} 
            />  
          </TouchableOpacity>

          <TouchableOpacity style={{alignItems: 'center', marginBottom:20,width : '100vw'}}>
            <Image 
                   source={require('/home/meriem/Downloads/gameapp-main/assets/vegetable/radish.png')}
                   style={{height: 300, width:300}} 
            />  
          </TouchableOpacity>

          <TouchableOpacity style={{alignItems: 'center', marginBottom:20,width : '100vw'}}>
            <Image 
                   source={require('/home/meriem/Downloads/gameapp-main/assets/vegetable/spinach.png')}
                   style={{height: 300, width:300}} 
            />  
          </TouchableOpacity>

          <TouchableOpacity style={{alignItems: 'center', marginBottom:20,width : '100vw'}}>
            <Image 
                   source={require('/home/meriem/Downloads/gameapp-main/assets/vegetable/tomato.png')}
                   style={{height: 300, width:300}} 
            />  
          </TouchableOpacity>

          <TouchableOpacity style={{alignItems: 'center', marginBottom:20,width : '100vw'}}>
            <Image 
                   source={require('/home/meriem/Downloads/gameapp-main/assets/vegetable/turnip.png')}
                   style={{height: 300, width:300}} 
            />  
          </TouchableOpacity>
        </View>
    )
}

export default VegetableScreen

const styles = StyleSheet.create({})
