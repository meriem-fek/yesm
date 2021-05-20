import React from 'react'
import { StyleSheet, View, BackHandler,Button,ImageBackground} from 'react-native'



const HomeScreen = ({navigation}) => {
    return (
        <View style={{flex: 1, backgroundColor: '#d8bfd8'}}>
            <Button color='#d8bfd8' onPress={()=>navigation.navigate('Learn')} title='learn' />
            
    
            <Button color='#d8bfd8' onPress={()=>navigation.navigate('Play')} title='play' />
                
            
            <Button color='#d8bfd8' onPress= {() => BackHandler.exitApp()} title='exit'/>
       
            
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    
})
