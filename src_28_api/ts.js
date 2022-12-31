import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { WebView } from 'react-native';

export default class ts extends Component {
  render() {
    return (
        <WebView
        source={{uri: 'https://github.com/facebook/react-native'}}
        style={{marginTop: 20}}
    )
  }
}

const styles = StyleSheet.create({})