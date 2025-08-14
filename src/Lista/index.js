import React, { Component } from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity, ScrollView, FlatList, Switch } from 'react-native';

export default class Lista extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: this.props.data,
    };

    this.mostraLikes = this.mostraLikes.bind(this);
    this.like = this.like.bind(this);
    this.carregaIcon = this.carregaIcon.bind(this);
  }

  mostraLikes(likers) {

    let feed = this.state.feed;

    if (feed.likers <= 0) {
      return;
    }

    return (

      <Text style={styles.txtCurtida}>
        {feed.likers} {feed.likers > 1 ? 'Curtidas' : 'Curtida'}
      </Text>

    );



  }

  like() {
    let feed = this.state.feed;
    this.setState({
      feed: {
        ...feed,
        likeada: !feed.likeada,
        likers: feed.likeada ? feed.likers - 1 : feed.likers + 1
      }
    });

  //   if (feed.likeada === true) {
  //     this.setState({
  //       feed: {
  //         ...feed,
  //         likeada: false,
  //         likers: feed.likers - 1
  //       }
  //     });}
  // else {
  //       this.setState({
  //         feed: {
  //           ...feed,
  //           likeada: true,
  //           likers: feed.likers + 1
  //         }
  //       });

  //     }
}
  

  carregaIcon(estado){
   return estado ? require('../img/likeada.png') : require('../img/like.png')


  }

  render() {
    return (
      <View style={StyleSheet.areaFeed}>


        <View style={styles.ViewPerfil}>
          <Image
            source={{ uri: this.state.feed.imgperfil }} //imagem do perfil
            style={styles.fotoPerfil}
          />

          <Text style={styles.nomeUsuario}> {this.state.feed.nome}</Text>
        </View>

        <Image
          resizeMode='cover'
          source={{ uri: this.state.feed.imgPublicacao }} //imagem da publicacao
          style={styles.fotoPublicacao}
        />

        <View style={styles.secaoIcones}>
          <TouchableOpacity
            onPress={this.like}
          >
            <Image
              source={this.carregaIcon(this.state.feed.likeada)}//botao like
              style={styles.like}
              on
            />
          </TouchableOpacity>


          <TouchableOpacity>
            <Image
              source={require('../../src/img/send.png')} //botao like
              style={styles.send}
              on
            />
          </TouchableOpacity>
        </View>
        {this.mostraLikes(this.state.feed.likers)}


        <View style={styles.viewRodape}>
          <Text style={styles.nomeRodape}>
            {this.state.feed.nome}
          </Text>
          <Text style={styles.descRodape}>
            {this.state.feed.descricao}
          </Text>
        </View>




      </View>

    );

  }
}

const styles = StyleSheet.create({
  areaFeed: {

  },
  nomeUsuario: {
    marginLeft: 10,
    fontSize: 22,
    textAlign: 'left',
    color: '#000',
  },
  fotoPerfil: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  ViewPerfil: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  fotoPublicacao: {
    flex: 1,
    height: 400,
    alignItems: 'center',
  },
  secaoIcones: {
    flexDirection: 'row',
    justifyContent: 'left',
    padding: 10,
  },
  like: {
    width: 33,
    height: 33,
  },
  send: {
    width: 33,
    height: 33,
    marginLeft: 20,
  },

  viewRodape: {
    flexDirection: 'row',
    alignItems: 'center'

  },
  nomeRodape: {
    paddingLeft: 5,
    fontSize: 18,
    fontWeight: 'bold'
  },
  descRodape: {
    paddingLeft: 5,
    Color: '#424242ff'

  },
  txtCurtida: {
    fontWeight: 'bold',
    marginLeft: 5,
    justifyContent: 'center'
  },

});

