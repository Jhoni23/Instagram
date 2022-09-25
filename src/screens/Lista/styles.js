import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
        areaFeed:{
            backgroundColor: "black"
        },
        fotoPublicacao:{
           height: 400,
           alignItems: 'center',
        },
        viewPerfil:{
           flexDirection: 'row',
           justifyContent: 'space-between',
           padding: 10,
        },
        perfilImageName:{
         flexDirection: 'row',
         alignItems: 'center',
        },
        fotoPerfil:{
          width: 28,
           aspectRatio: 1,
           borderRadius: 25,
        },
        nomeUsuario:{
         marginLeft: 5,
         fontSize: 13,
         color: '#FFF',
         fontWeight: 600,
        },
        morePoints:{
         justifyContent: 'center',
        },
        areaBtn:{
           flex:1,
           flexDirection: 'row',
           padding: 5,
           paddingVertical: 10,
           paddingHorizontal: 15,
        },
        areaFirstBtn:{
         flex:1,
         flexDirection: 'row',
      },
        iconelike:{
           width: 21,
           height: 21,
           marginRight: 20
        },
        iconeSave:{
         width: 21,
         height: 21,
      },
        viewRodape:{
           flexDirection: 'row',
           alignItems: 'center',
           marginLeft: 7,
           marginBottom: 13,
        },
        descRodape:{
           paddingLeft: 5,
           fontSize: 14,
           color: '#FFF'
        },
        nomeRodape:{
           fontSize: 14,
           fontWeight: 'bold',
           color: '#FFF',
           paddingLeft: 5
        },
        likes:{
           fontWeight: 'bold',
           marginLeft: 11,
           color: '#FFF',
           marginBottom: 3,
        }
  });
  
  export default styles;