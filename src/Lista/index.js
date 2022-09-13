import React, { Component } from 'react';
import reactDom from 'react-dom';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

class Lista extends Component{
 constructor(props){
    super(props);
    this.state = {
        feed: this.props.data
    };
    this.carregaIcone = this.carregaIcone.bind(this);
    this.mostraLikes = this.mostraLikes.bind(this);
    this.like = this.like.bind(this);
 }

 carregaIcone(likeada){
    return likeada ? require('../img/likeada.png') : require('../img/like.png')
 }

 like(){
    let feed = this.state.feed;
    if(feed.likeada === true){
        this.setState({
            feed:{
                ...feed,
                likeada:false,
                likers: feed.likers - 1
            }
        });
    }else{
        this.setState({
            feed:{
                ...feed,
                likeada:true,
                likers: feed.likers + 1
            }
        });
    }
 }

 mostraLikes(likers){
    let feed = this.state.feed;
    if(feed.likers <= 0){
        return;
    }
    return(
        <Text style={styles.likes}>
            {feed.likers} {feed.likers > 1 ? 'curtidas' : 'curtida'}
        </Text>
    );
 }

 render(){
    return(
        <View style={styles.areaFeed}>
            <View style={styles.viewPerfil}>
                <Image
                    source={{uri: this.state.feed.imgperfil}}
                    style={styles.fotoPerfil}
                />

                <Text style={styles.nomeUsuario}> {this.state.feed.nome} </Text>
            </View>

            <Image
                resizeMode="cover"
                style={styles.fotoPublicacao}
                source={{uri: this.state.feed.imgPublicacao}}
            />

            <View style={styles.areaBtn}>
                <TouchableOpacity onPress={this.like}>
                    <Image
                    source={this.carregaIcone(this.state.feed.likeada)}
                    style={styles.iconelike}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.iconelike}>
                    <Image
                        source={require('../img/send.png')}
                        style={styles.iconelike}
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
 areaFeed:{
     backgroundColor: "black"
 },
 nomeUsuario:{
    marginLeft: 5,
    fontSize: 13,
    textAlign: 'left',
    color: '#FFF',
    fontWeight: 600,
 },
 fotoPerfil:{
    width: 30,
    aspectRatio: 1,
    borderRadius: 25,
 },
 fotoPublicacao:{
    height: 400,
    alignItems: 'center',
 },
 viewPerfil:{
    flexDirection: 'row',
    flex:1,
    alignItems: 'center',
    padding: 10,
 },
 areaBtn:{
    flexDirection: 'row',
    padding: 5,
    paddingVertical: 8,
 },
 iconelike:{
    width: 23,
    aspectRatio: 1,
    marginLeft: 10
 },
 viewRodape:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'red',
 },
 descRodape:{
    paddingLeft: 5,
    fontSize: 15,
    color: '#FFF'
 },
 nomeRodape:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    paddingLeft: 5
 },
 likes:{
    fontWeight: 'bold',
    marginLeft: 5,
    color: '#FFF'
 }
});
export default Lista;
