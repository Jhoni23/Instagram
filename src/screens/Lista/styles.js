import {StyleSheet} from 'react-native';

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
  
  export default styles;