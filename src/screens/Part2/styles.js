import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
     },
     header:{
        height: 55,
        backgroundColor: '#000',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5,
        borderBottomWidth: 0.2,
        shadowColor: '#000',
        elevation: 1,
        paddingHorizontal: 10
     },
     send:{
        width: 23,
        height: 23
     },
     logo:{
         height: 25,
         width:90,
     }
  });
  
  export default styles;