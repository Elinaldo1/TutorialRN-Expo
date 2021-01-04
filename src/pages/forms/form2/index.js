import React, {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import Header from '../../header/index';
import axios from 'axios';
import {styles} from './styles';


export default function Form2() {

  const [texto1, setTexto1] = useState([]);

  function scraper(){
    const cheerio = require('cheerio');

 axios.get('https://comando4kfilmes.net/')
  .then((response)=>{
    // console.log(response.data);
    const html = response.data;
    const $ = cheerio.load(html);
   
    //  $('h1').each((id,item)=>{
        // if (id===0){
          setTexto1([])
          
           setTexto1($("h2[class='post-title']").map((index, item) =>({key:(index+1)+' - '+$(item).text()})));
          alert(`retornou ${$("h2[class='post-title']").length} registros`)
           // $('h1').map((item,index) =>console.log($(index).text()));
            // console.log(id+' - '+$(item).text())
            //  console.log(JSON.stringify(texto1));
      //  }  
      //  })
  })
  .catch((error)=>{
     console.warn(error);
  });
  }
  function limpar() {
    setTexto1([])
  }
  return(
    <>
      <View style = { styles.header } heigth={50}>
        <TouchableOpacity style={styles.button} onPress = {scraper} >
          <Text>Buscar Dados</Text>
        </TouchableOpacity>
        <Header caption = "Cheerio + Axios"/>
      <TouchableOpacity style={styles.button} onPress = {limpar} >
        <Text>Limpar</Text>
      </TouchableOpacity> 
      </View>

      <View style={styles.container}>
        <FlatList
          data = {texto1}
          renderItem = {({item})=><Text style = {styles.title}>{item.key}</Text>}/>

      </View>
    
    </>
  );
};

