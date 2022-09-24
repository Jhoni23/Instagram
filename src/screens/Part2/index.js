import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles';
import Lista from '../Lista';

const Part2 = () => {
    const feed = [
            {
                id: '1',
                nome: 'Lucas Silva',
                descricao: 'Mais um dia de muitos bugs :)',
                imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
                imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',
                likeada: true,
                likers: 1
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

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Image
                        source={require('../../img/logo.png')}
                        style={styles.logo}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={require('../../img/send.png')}
                        style={styles.send}
                    />
                </TouchableOpacity>
            </View>
            <FlatList
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                data={feed}
                renderItem={ ({item}) => <Lista data={item} /> }
            />
        </View>
    );
}

export default Part2;