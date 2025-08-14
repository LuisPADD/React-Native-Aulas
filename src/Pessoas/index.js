import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


class Pessoas extends Component {
  render() {
    return (
      <View style={styles.textoArea}>
        <Text style={styles.nomes}>Nome: {this.props.data.nome} </Text>
        <Text style={styles.nomes}>Idade: {this.props.data.idade} </Text>
        <Text style={styles.nomes}>Email: {this.props.data.email} </Text>

      </View>

    );

  }
}

const styles = StyleSheet.create({
      textoArea: {
    height : 200,
    backgroundColor: '#222',
    marginBottom: 10,
  },

  nomes: {
    fontSize: 20,
    color: '#FFF',
  },
});

export default Pessoas;