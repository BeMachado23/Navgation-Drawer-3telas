import React from 'react';
import { Button, View, StyleSheet, Image, Text } from 'react-native';


import { useNavigation } from '@react-navigation/native';

export function ScreenC() {

  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
      <Text style={{alignSelf: 'center', textAlign: 'center', marginTop: 10, fontSize: 18, color: 'white',}}>Aqui está, após o scann voce terá uma nft exclusiva!!!</Text>
      <Image source={require('../../assets/qrcodesus.png')} style={styles.qrcode}/>
      </View>
    </View>
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#69707A",
  },
  container2:{
    marginTop: 120,

  },
  qrcode:{
    width:250,
    height:250,
    justifyContent:"center",
    marginTop: 40,
    marginLeft:810
    
  },
})