import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles';
import Lista from '../Lista';

import { TbHeart } from 'react-icons/tb';
import { FiPlusSquare } from 'react-icons/fi';
import { RiMessengerLine } from 'react-icons/ri';

const Part2 = () => {
    const feed = [
            {
                id: '1',
                nome: 'Lucas Silva',
                descricao: 'Mais um dia de muitos bugs :)',
                imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
                imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',
                likeada: true,
                saved: true,
                likers: 1
            },
            {
                id: '2',
                nome: 'Matheus',
                descricao: 'Isso sim é ser raiz!!!!!',
                imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
                imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png',
                likeada: false,
                saved: false,
                likers: 0
            },
            {
                id: '3',
                nome: 'Jose Augusto',
                descricao: 'Bora trabalhar Haha',
                imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
                imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',
                likeada: false,
                saved: false,
                likers: 3
            },
            {
                id: '4',
                nome: 'Gustavo Henrique',
                descricao: 'Isso sim que é TI!',
                imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
                imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png',
                likeada: false,
                saved: true,
                likers: 1
            },
            {
                id: '5',
                nome: 'Guilherme',
                descricao: 'Boa tarde galera do insta...',
                imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
                imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
                likeada: false,
                saved: false,
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

                <View style={styles.areaIcons}>
                    <TouchableOpacity>
                        <FiPlusSquare
                            color='white'
                            style={styles.send}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <TbHeart
                            color='white'
                            style={styles.send}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <RiMessengerLine
                            color='white'
                            style={styles.send}
                        />
                    </TouchableOpacity>
                </View>
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