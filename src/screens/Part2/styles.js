import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
     },
     header:{
        height: 50,
        backgroundColor: '#000',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 0.2,
        shadowColor: '#000',
        elevation: 1,
        paddingHorizontal: 10,
     },
     send:{
        width: 26,
        height: 26,
        marginLeft: 20
     },
     logo:{
         height: 25,
         width:90,
     },
     areaIcons:{
      flexDirection: 'row'
     }
  });
  
  export default styles;