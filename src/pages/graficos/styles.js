import React from 'react';
import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
  container: {

    padding:30,
    flex:1, 
     backgroundColor: '#fff',
     alignItems:'center',
     justifyContent:'center',

   },
  
  grafico:{

     flex:1,
  //  backgroundColor: '#rgba(235, 123, 3, 0.2)',
   
    width:'95%',
    borderRadius:1,
    borderTopWidth:2,
    borderColor:'#3388ff',
    justifyContent:'center',
    marginBottom:5

  },
  boxgrafico2:{
    padding:10,
    width:200,
    height:200
  }
});