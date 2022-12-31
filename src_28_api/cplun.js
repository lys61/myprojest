import { Text, View ,StyleSheet,FlatList,Button} from 'react-native'
import React, { Component } from 'react'

export default class CPLUN extends Component {
    constructor(){
        super()
        this.state={
          pilun:{}
        }
      }
      getpl(){
        var url ='https://news-at.zhihu.com/api/4/story/'+this.props.route.params.id+'/long-comments'
        const response=fetch(url,{method:'get'}).then(res=>res.json())
        return response
      }
      componentDidMount(){
      this.getpl().then(res=>{this.setState({pilun:res})})
      }
      plitem=({item})=>{
        return(
            <View>
             <Text>{item.author}</Text>
            </View>
        )
      }
  render() {
    return (
      <View>
        <FlatList
            data={this.state.pilun.comments}
            renderItem={this.plitem}
            ItemSeparatorComponent={()=>
            {return(<View 
            style={{borderBottomWidth:1,borderBottomColor:'#cc',marginVertical:10}}
            />)}}
          />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container :{
        justifyContent:'center',
        alignItems:'center'
    },
    h1:{
      alignItems:'flex-start',
      width:300,
      height:70,
      borderColor:'black',
      marginHorizontal:10,
    },
    h2:{
      height:70,
      width:70,
    },
    h3:{
      fontWeight:'bold',
      color:'black'
    }
    
})