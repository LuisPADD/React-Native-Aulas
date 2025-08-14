/* {/* // class App extends Component{}
//   render(){

//     let nome = 'Chaves';

//     return(
//       <View>
//         <Text> Teste </Text>
//         <Text style={{ textAlign: 'center', fontSize: 72, color: '#f0d64f'}}>Pernas</Text>

//       <Text style={{fontSize: 11, textAlign: 'center'}}> {nome} </Text>

//       <Jobs largura={300} Altura={300} nome='Chaves'/>

//       </View>
//     );
//   }
// }


//   class Jobs extends Component{
//       render(){
//         let vtm = 'https://preview.redd.it/batfleck-with-cigar-v0-4cohtpx4o6db1.jpeg?width=1080&format=pjpg&auto=webp&s=5876011b5dcf31b87191be989763c7deddd81549'

//           return(
//             <View>
//           <Image
//             source={{ uri: vtm }}
//             style={{ width: this.props.largura, height: this.props.Altura }}
//             />
//             <Text>
//               {this.props.nome}
//             </Text>
//             </View>
//         )

//     }

//   }

/*function App(){
//   return(
//     <View>
//       <Text>Zurgs</Text>
//     </View>
//   );

// }*/

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       nome: 'Teste'
//     };

//     this.entrar = this.entrar.bind(this);

//   }

// entrar(nome){
//   this.setState({
//     nome: nome
//   })

// }


//   render() {
//     return (
//       <View style={[styles.area]}>

//         <Text style={styles.tamanhoLetra}>como diminui a font</Text>
//         <Text>AAAAA</Text>
//         <Text>AAAAA</Text>
//         <Text>AAAAA</Text>
     
// {/*       
//       <Button title="Entrar" onPress={ () => this.entrar('Penes')}/>

//         <Text style={{fontSize: 23, color: 'red', textAlign: 'center' }}>
//           {this.state.nome}
//         </Text> */}
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   area:{
//     marginTop: 10
//   },
//   tamanhoLetra:{
//     fontSize: 73
//   }

    //  <View style={{flex:1, 
    //     flexDirection: 'row', 
    //     alignItems: 'center',
    //     justifyContent: 'center', 
    //     backgroundColor: '#a7a7a7ff'
    //     }}>
    //       <View style={{width: 50,height: 50, backgroundColor: 'red'}}></View> 
    //       <View style={{width: 50,height: 50, backgroundColor: 'yellow'}}></View> 
    //       <View style={{width: 50,height: 50, backgroundColor: 'black'}}></View> 
    //  </View>
// }); */

// class App extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       nome: '',
//       input: ''
//     };

//     this.entrar = this.entrar.bind(this);
//   }

//   entrar(){
//     if(this.state.input === ''){
//       alert('Digite seu nome');
//       return;
//     }
//     this.setState({
//       nome: "Bem vindo, "+ this.state.input
//     });
//   }

  
//   render(){
//     return(
//         <View style={styles.container}>
//           <TextInput
//           style={styles.input}
//             placeholder="Digite seu nome"
//             underlineColorAndroid="transparent"
//             onChangeText={(texto) => this.setState({input: texto}) }
//            />

//           <Button
//             title="Entrar"
//             onPress={this.entrar}
//           />

//           <Text style={styles.texto}> {this.state.nome} </Text>        

//      </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//   },
//   input:{
//     height: 50,
//     borderWidth: 1,
//     borderColor: '#222',
//     margin: 10,
//     fontSize: 20,
//     padding: 10,
//   },
//   texto:{
//     textAlign: 'center',
//     fontSize: 44,
//   }
// }); 
// 

//BISCOITIL

//   constructor(props) {
//     super(props);
//     this.state = {
//       textoFrase: '',
//       img: require('./src/biscoito.png')
//     };

//     this.frases= [
//       'A vida é como um biscoito, às vezes você quebra ele.',
//       'Quebrar o biscoito é a melhor parte.',
//       'Biscoitos quebrados são os melhores.',
//       'A vida é feita de biscoitos quebrados.',
//       'Quebrar o biscoito é como quebrar barreiras.',
//       'Cada biscoito quebrado é uma nova oportunidade.',
//       'Biscoitos quebrados trazem sorte.',
//       'Quebrar o biscoito é um ato de coragem.',
//       'A vida é um biscoito, aproveite cada pedaço.',
//       'Biscoitos quebrados são como sonhos, às vezes eles se desfazem.' 
//     ];

//     this.quebrarBiscoito = this.quebrarBiscoito.bind(this);
//   }

// quebrarBiscoito() {
//   let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
//   this.setState({
//     textoFrase: '"'+ this.frases[numeroAleatorio] + '"',
//     img: require('./src/biscoitoAberto.png')
//   });
// }

//   render() {
//     return (
//       <View style={styles.container}>

//       <Image 
//       source={(this.state.img)}
//       style={styles.img}
//       />
//       <Text style={styles.textil}>{this.state.textoFrase}</Text>

//         <TouchableOpacity style={styles.botao} onPress={(textoFrase) => this.quebrarBiscoito()}>
//         <View style={styles.btnArea}>
//         <Text style={styles.btnText}>Quebrar Biscoito</Text>

//         </View>

//         </TouchableOpacity>



//       </View> 



//     );

//   }

// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
    
//   },
//   img: {
//     width: 250,
//     height: 250
// },  
//   textil: {
//     fontSize: 30,
//     color: '#dd7b22',
//     fontStyle: 'italic',
//     textAlign: 'center',
//   } ,

//   botao: {
//     width: 230,
//     height: 50,
//     borderWidth: 2,
//     borderColor: '#c5c7647e',
//     backgroundColor: '#dd7c2293',
//     borderRadius: 25,
//   },

//    btnArea: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',

//   },
//   btnText: {
//     fontSize: 20,
//     color: '#dd7b22',
//     fontWeight: 'bold',
//   },
// });

// Cronometer
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       numero: 0.0,
//       botao: 'Iniciar',
//       ultimo: null,
//     };
//     this.timer = null;

//     this.iniciar = this.iniciar.bind(this);
//     this.parar = this.parar.bind(this);
//   }

// iniciar() {
//   this.setState({ botao: 'Pausar' });
//   if(this.timer != null){
//     clearInterval(this.timer);
//     this.timer = null;
//     this.setState({ botao: 'Iniciar' });

//   }else{

//   this.timer = setInterval ( () => {
//     this.setState({
//       numero: this.state.numero + 0.1,
//     });
//   }, 100);
// }
// }


// parar() {
//   if (this.timer !== null) {
//     clearInterval(this.timer);
//     this.timer = null;
    
//   }
//   this.setState({ botao: 'Iniciar',
//      numero: 0,
//     ultimo: this.state.numero  // Armazena o último tempo
//     }); // Reseta o número e o botão
// }


//   render() {
//     return (
//       <View style={styles.container}>
//         <Image style={styles.img}
//           source={require('./src/pngwing.com.png')}
//         />
          
//         <Text style={styles.timer}> {this.state.numero.toFixed(1)} </Text>


//       <View style={styles.btnArea }>
//         <TouchableOpacity style={styles.botao}onPress={ this.iniciar}>          
//           <Text style={styles.btnText}>{this.state.botao}</Text>
//         </TouchableOpacity>   

//         <TouchableOpacity style={styles.botao} onPress={ this.parar}>
//           <Text style={styles.btnText}>Parar</Text>
//         </TouchableOpacity>  

       
//       </View>
//        <View style={styles.ultimo}>
//           <Text style={styles.txtUltimo}>
//             {this.state.ultimo !== null ? 'Ultimo tempo: ' + this.state.ultimo.toFixed(1) + 's' : ''} 
//             </Text>  
//         </View>
//       </View>

//        );
// }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#00aeef',
//   },
//   img: {
//     width: 250,
//     height: 250,},


//   timer: {
//     fontSize: 50,
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   btnArea: {
//     flexDirection: 'row',},

//   botao: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: 40,
//     margin: 17,
//     backgroundColor: '#fff',
//     borderRadius: 10,
//   },

//   btnText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#00aeef',
//   },
//   txtUltimo: {
//     fontSize: 25,
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });


//ScrowView
// class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <ScrollView showsVerticalScrollIndicator={false}>
//         <View style={styles.box1}></View>
//         <View style={styles.box2}></View>
//         <View style={styles.box3}></View>
//         <View style={styles.box4}></View>
//         </ScrollView>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   box1: {
//     height: 250,
//     backgroundColor: 'red',
//   },
//   box2: {
//     height: 250,
//     backgroundColor: 'black',
//   },
//   box3: {
//     height: 250,
//     backgroundColor: 'white',
//   },
//   box4: {
//     height: 250,
//     backgroundColor: 'red',
//   },
// });

// // FlatList

// import Pessoas from './src/Pessoas';


// class App extends Component {
//   constructor(props){
//       super(props);
//       this.state = {
//         feed: [
//           {nome: 'Luis', idade: 20,email: 'luis@email.com'},
//           {nome: 'Maria', idade: 25,email: 'maria@email.com'},
//           {nome: 'João', idade: 30,email: 'joao@email.com'},
//           {nome: 'Ana', idade: 22,email: 'ana@email.com'},
//         ]
//         };
//       }

//   render() {
//     return (
//       <View style={styles.container}>
//         <FlatList
//         data = {this.state.feed}
//         renderItem = {( {item}) => <Pessoas data={item}/>}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },

// });

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       pizza: 0,
//       pizzas:[
//         {id: 1, nome: 'Calabresa', preco: 35},
//         {id: 2, nome: 'Feijão', preco: 20},
//         {id: 3, nome: 'Unha', preco: 34.49},
//         {id: 4, nome: 'Margarita', preco: 45},
//         {id: 5, nome: 'Portuguesa', preco: 51},
//       ],
//     };
//   }

//   render() {

//     let pizzasItems = this.state.pizzas.map((v, id) => {return <Picker.Item key={id} value={id} label={v.nome} />  });

//     return (
//       <View style={styles.container}>

//       <Text style={styles.logo}>Menu Pizza</Text>
//       <Picker
//       selectedValue={this.state.pizza}
//       onValueChange={(itemValue, itemIndex) => this.setState({pizza: itemValue})}
//       >
//         {pizzasItems}
        
//       </Picker>
//       <Text style={styles.pizza}>Pizza de {this.state.pizzas[this.state.pizza].nome}</Text>
//       <Text style={styles.pizza}>R$: {this.state.pizzas[this.state.pizza].preco.toFixed(2)} </Text>
//       </View>

//     );
//   }
// }



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 20,
//     backgroundColor: '#f0f0f0',
//   },
//   logo: {
//     fontSize: 30,
//     color: '#333',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   pizza: {
//     fontSize: 20,
//     color: '#ff6347',
//     textAlign: 'center',
//     marginTop: 15,
//   },

//Slider
// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       valor: 50,
//     }
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Se ler, Gozil!</Text>
//         <Slider
//   style={{}}
//   minimumValue={0}
//   maximumValue={100}
//   onValueChange={(valorBolinha) => this.setState({valor: valorBolinha})}
//   minimumTrackTintColor="#003cffff"
//   maximumTrackTintColor="#919191ff"
//   value={this.state.valor}
// />
//         <Text style={{fontSize: 150}}>{this.state.valor.toFixed(0)}</Text>

//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 30,
//     flex: 1,
//   },

//switch
//export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       status: false, // Estado inicial do Switch
//     }
//   }

//   render() {
//     return (
//       <View style = {style.container}>

//         <Switch 
//         value={this.state.status}
//         onValueChange={(valorSwitch) => this.setState( {status: valorSwitch})}
//         />

//         <Text>{this.state.status ? 'Ativo' : 'Inativo'}</Text>
        
//       </View>
//     );
//   }
// }
// const style = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },


import React, { Component } from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity, ScrollView, FlatList, Switch } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import Lista from './src/Lista';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        feed: [
           {
          id: '1', 
          nome: 'Lucas Silva', 
          descricao: 'Mais um dia de muitos bugs :)', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',  
          likeada: false, 
          likers: 0
         },
        {
          id: '2', 
          nome: 'Matheus', 
          descricao: 'Isso sim é ser raiz!!!!!', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png', 
          likeada: false, 
          likers: 0
        },
        {
          id: '3', 
          nome: 'Jose Augusto', 
          descricao: 'Bora trabalhar Haha', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',  
          likeada: false, 
          likers: 3
        },
        {
          id: '4', 
          nome: 'Gustavo Henrique', 
          descricao: 'Isso sim que é TI!', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png', 
          likeada: false, 
          likers: 1
        },
        {
          id: '5', 
          nome: 'Guilherme', 
          descricao: 'Boa tarde galera do insta...', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
          likeada: false, 
          likers: 32
        }
        ]

    };
  }

  render() {

    return (
      <View style={styles.container}>
         <View style={styles.header}>  
            <TouchableOpacity>
                  <Image
            source={require('./src/img/logo.png')} //botao Home
            style={styles.logo}
            />
            </TouchableOpacity>

            <TouchableOpacity>
            <Image
            source={require('./src/img/send.png')} //botao Send
            style={styles.send}
            />
            </TouchableOpacity>
            </View>

        <FlatList
        showsHorizontalScrollIndicator={false}
        data={this.state.feed}
        renderItem={ ({item}) => <Lista data={item}/>}
        keyExtractor={ (item) => item.id }
        />
      </View>
    );
}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
},
  header: {
    backgroundColor: '#fff',
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,

    borderBottomWidth: 0.2,
    shadowColor: '#000',
    elevation: 1,

},
send: {
    width: 23,
    height: 23,
    marginRight: 10,
},
  });





