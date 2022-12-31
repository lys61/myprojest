import { Text, StyleSheet, View,Button ,Alert,ScrollView,TouchableOpacity,Dimensions} from 'react-native'
import React, { Component } from 'react'
import { WebView } from 'react-native-webview';
import HTMLView from 'react-native-htmlview'
import {getdetial} from '../src_28_api/getnews'
import { value } from 'deprecated-react-native-prop-types/DeprecatedTextInputPropTypes';
export default class Webview extends Component {
  constructor(){
    super()
    this.state={
      pilun:{}
    }
  }
  getpl(){
    var url ='https://news-at.zhihu.com/api/3/story-extra/'+this.props.route.params.id
    const response=fetch(url,{method:'get'}).then(res=>res.json())
    return response
  }
  componentDidMount(){
    this.getpl().then(res=>{this.setState({pilun:res})})
  }
  render() {
    return (
      <>
      <WebView source={{ uri:this.props.route.params.uri}} />
      <View style={{flexDirection:'row',height:30}}>
        <Text style={styles.h1}>评论：{this.state.pilun.comments}</Text>
        <Text style={styles.h1}>赞：{this.state.pilun.popularity}</Text>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('短评',{id:this.props.route.params.id})}>
           <Text style={styles.h1}>短评：{this.state.pilun.short_comments}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('长评',{id:this.props.route.params.id})}>
           <Text style={styles.h1}>长评：{this.state.pilun.long_comments}</Text>
        </TouchableOpacity>
        {/* <Button title='获取'
        onPress={()=>console.log(this.state.pilun)}
        /> */}
      </View>
      </>
      
    //  <HTMLView
    //  value={hl}/>
    //  <Button title='获取html代码' onPress={()=>{console.log(this.props.params.id)}}/>
    )
  }
}

const styles = StyleSheet.create({
  h1:{
    width:Dimensions.get('window').width/4,
    fontSize:20,
    marginLeft:5
  }
})