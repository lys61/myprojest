import { Text, StyleSheet, View ,Dimensions} from 'react-native'
import React, { Component } from 'react'

export default class index extends Component {
  render() {
    return (
      <View style={[{justifyContent:'center'},{}]}>
        <Text style={[styles.h1]}>只爱小黎啊</Text>
        
        <View>
          <Text style={[styles.h2]}>曾经和他相遇</Text>
          <View style={[styles.rongqi]}>
            <Text style={[{fontSize:20}]}>刘演森</Text>
            <Text style={[{fontSize:20}]}>刘天龙</Text>
            <Text style={[{fontSize:20}]}>流星赶月</Text>
          </View>
          <View>
            <View style={[{ flexDirection:'row'},{alignItems:'center'}]}>
              <Text style={[styles.h3]}>1</Text>
              <Text style={[styles.h3]}>2</Text>
              <Text style={[styles.h3]}>3</Text>
            </View>
            <View style={[{ flexDirection:'row'},{alignItems:'center'}]}>
              <Text style={[styles.h3]}>4</Text>
              <Text style={[styles.h3]}>5</Text>
              <Text style={[styles.h3]}>6</Text>
            </View>
            <View style={[{ flexDirection:'row'},{alignItems:'center'}]}>
              <Text style={[styles.h3]}>7</Text>
              <Text style={[styles.h3]}>8</Text>
              <Text style={[styles.h3]}>9</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  rongqi:{
    height:200,
    margin:10,
    borderWidth:5,
    borderColor:'blue',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },
  h1:{
    fontSize:20,
    marginHorizontal:20,//水平外边距
    textAlign:'center'
  },
  h2:{
    fontSize:30,
    color:'green',
    width:400,
    height:35,
    backgroundColor:'yellow',
    textAlign:'center'
  },
  h3:{
    height:40,
    width:Dimensions.get('window').width/3.3,
    margin:6,
    borderWidth:2,
    borderColor:'black',
    fontSize:30,
    textAlign:'center'
  }
})