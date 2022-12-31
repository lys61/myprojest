import { Text, StyleSheet, View,Button,Alert } from 'react-native'
import React, { Component } from 'react'
import {getnews} from './getnews';
// import Time from '../src_30_time/time'
export default class api extends Component {
    constructor(){
      super()
      this.state={
        date:{},
        dates:{}
      }
    }
    get=()=>{
      const url =`http://news-at.zhihu.com/api/3/stories/latest`
      fetch(url,{
          method:'get'
      })
      .then(res=>res.json())
      .then((res)=>{ 
          this.setState({
            date:res
          })
      }).then(()=>{
        console.log(this.state.date.stories)
      })
      .catch(()=>{
          Alert.alert('请求失败')
      })
    }
    getdate =()=>{
        const url =`http://news-at.zhihu.com/api/3/stories/latest`
        fetch(url,{
            method:'get'
        }).then(res=>res.json())
        .then((res)=>{ 
            Alert.alert('请求成功',JSON.stringify(res))
            console.log(res)
        }).catch(()=>{
            Alert.alert('报错')
        })
    }
    getmyDate=()=>{
      var date = new Date();

      var year = date.getFullYear().toString();
      var month = (date.getMonth()+1).toString();
      var day = date.getDate().toString();
      var hour =  date.getHours().toString();
      var minute = date.getMinutes().toString();

      return year+'年'+month+'月'+day+'日'+' '+hour+':'+minute;
  };
  render() {
    return (
      <View style={[styles.container]}>
        <Button
        title='点击获取数据'
        onPress={this.getdate}/>
        <View>
          <Button
          title='点击获取数据'
          onPress={this.get}/>
        </View>
        <View>
          <Button
          title='点击获取数据'
          onPress={this.gets}/>
        </View>
        <View>
          <Text>
           {this.state.date.date}{this.state.dates.date}
           <this.getmyDate/>
          </Text>
          <Text>
            真的shi 
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container :{
        justifyContent:'center',
        alignItems:'center'
    }
})