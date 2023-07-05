import React from 'react';
import { Button, View, StyleSheet, Text, Image } from 'react-native';


import { useNavigation } from '@react-navigation/native';


export function ScreenB() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
    <View style={styles.container2}>
    <Text style={{alignSelf: 'center', textAlign: 'center', marginTop: 10, fontSize: 18, color: 'white',}}>Obrigado por visitar agora voce terá uma nft "achievement" assim como a abaixo.</Text>
    <Image source={require('../../assets/achievement.png')} style={styles.achivement}/>
    <Text style={{alignSelf: 'center', textAlign: 'center', marginTop: 10, fontSize: 18, color: 'white',}}>Essa é uma imagem unica e com valor unico para poder ter acesso a ela, faça um scann do QR Code na proxima aba!</Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#69707A",
    textAlign:"center",
    alignItems:"center",
    alignContent:"center",
    
  },
  achivement:{
    width:250,
    height:250,
    justifyContent:"center",
    marginTop: 40,
    marginLeft:340
    
    
  },
  container2:{
    marginTop: 120,
    
  },
})