import React, { Component } from 'react';
import { View, Keyboard, Modal, TextInput, Text, Image, Button, StyleSheet, TouchableOpacity, ScrollView, FlatList, Switch } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Slider from '@react-native-community/slider';

export default class Entrar extends Component {
  render() {
    return (
          <View style={{
            backgroundColor: '#000000b6',
            width: '100%',
            height: 350,
            borderRadius:15,
            paddingTop: 15,
            alignContent: 'center',

            }}>
            <Text style={{color: '#ffffffff', fontSize: 32, textAlign: 'center'}}> Seja Bem vindo ao Condominio!</Text>
            <Button title='Fechar' onPress={this.props.fechar}/>
          </View>
    );
  }
}