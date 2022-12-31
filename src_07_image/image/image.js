import { Text, StyleSheet, View,Image,Dimensions,Button,Switch} from 'react-native'
import React, { Component } from 'react'

export default class image extends Component {
  constructor(){
    super()
    this.state={
      imagechange:'./图片/lxl.jpg'
    }
  }
  lxl=()=>{
    this.setState({
      lxlimage:'./图片/lxl1.jpg'
    })
  }
  render() {
    return (
      <View >
        <View  style={[styles.h2]}>
            <Button 
            title='点我就会爱你'
            onPress={()=>{
                alert('你好啊')
            }}
           />
        </View>
        <View >
          <Image
          style={[styles.h1]}
          source={require('./图片/lxl.jpg')} />
          <Switch
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    h1:{
        justifyContent:'center',
        alignItems:'center',
        width:Dimensions.get('window').width,
        height:300
    },
    h2:{
        height:50,
        width:Dimensions.get('window').width,
        alignItems:'center',
        justifyContent:'center'
    }
})