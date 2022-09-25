import React, { Component } from 'react';
import reactDom from 'react-dom';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import styles from './styles';

import { BsBookmark, BsBookmarkFill, BsHeart, BsHeartFill} from 'react-icons/bs';
import { BsThreeDotsVertical } from 'react-icons/bs';

class Lista extends Component{
 constructor(props){
    super(props);
    this.state = {
        feed: this.props.data
    };
    this.mostraLikes = this.mostraLikes.bind(this);
    this.like = this.like.bind(this);
    this.save = this.save.bind(this);
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

 save(){
    let feed = this.state.feed;
    if(this.state.feed.saved === true){
        this.setState({
            feed:{
                ...feed,
                saved:false
            }
        });
    }else{
        this.setState({
            feed:{
                ...feed,
                saved:true
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
                <View style={styles.perfilImageName}>
                <Image
                    source={{uri: this.state.feed.imgperfil}}
                    style={styles.fotoPerfil}
                />

                <Text style={styles.nomeUsuario}> {this.state.feed.nome} </Text>
                </View>

                <TouchableOpacity style={styles.morePoints}>
                    <BsThreeDotsVertical size={16} color='white'/>
                </TouchableOpacity>
                
            </View>

            <Image
                resizeMode="cover"
                style={styles.fotoPublicacao}
                source={{uri: this.state.feed.imgPublicacao}}
            />

            <View style={styles.areaBtn}>
                <View style={styles.areaFirstBtn}>
                    <TouchableOpacity onPress={this.like}>
                        {this.state.feed.likeada ?
                            <BsHeartFill
                                color='#EA425B'
                                style={styles.iconelike}
                            /> 
                            : 
                            <BsHeart
                                color='white'
                                style={styles.iconelike}
                            /> 
                        }
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image
                            source={require('../../img/chat.png')}
                            style={styles.iconelike}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image
                            source={require('../../img/send.png')}
                            style={styles.iconelike}
                        />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={this.save}>
                    {this.state.feed.saved ?
                        <BsBookmarkFill
                            color='white'
                            style={styles.iconeSave}
                        /> 
                        : 
                        <BsBookmark
                            color='white'
                            style={styles.iconeSave}
                        /> 
                    }
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

export default Lista;
