import React from 'react';
import { Button, View, StyleSheet, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function ScreenA() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.descricao}>
          Bem-vindo ao App do Bernardo! Aqui estão algumas imagens das coisas que ele gosta. Depois, vá para a aba de troféu!
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/ds3-150x150.jpg')}
          style={styles.image1}
          resizeMode="contain"
        />
        <Image
          source={require('../../assets/academia-img.png')}
          style={styles.image2}
          resizeMode="contain"
        />
        <Image
          source={require('../../assets/Breakingbad.png')}
          style={styles.image3}
          resizeMode="contain"
        />
        <Image
          source={require('../../assets/pc.png')}
          style={styles.image8}
          resizeMode="contain"
        />
        </View>
        <View style={styles.imageContainer2}>
        <Image
          source={require('../../assets/linkin park.png')}
          style={styles.image4}
          resizeMode="contain"
        />
        <Image
          source={require('../../assets/twitch.png')}
          style={styles.image5}
          resizeMode="contain"
        />
        <Image
          source={require('../../assets/xbox.png')}
          style={styles.image6}
          resizeMode="contain"
        />
        <Image
          source={require('../../assets/ordem-paranormal.png')}
          style={styles.image7}
          resizeMode="contain"
        />
        
        </View>
        
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#69707A',
  },
  descricao: {
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 80,
    fontSize: 18,
    color: 'white',
  },
  imageContainer: {
    marginTop: 60,
    flex: 1,
    flexDirection: "row"
  },
  imageContainer2:{
    flex: 1,
    
    flexDirection: "row"
   
  },
  image1: {
    width: 150,
    height: 150,
    marginLeft: 265,
  },
  image2: {
    width: 150,
    height: 150,
    marginLeft: 265,
  },
  image3: {
    width: 150,
    height: 150,
    marginLeft: 265,
  },
  image4: {
    width: 150,
    height: 150,
    marginLeft: 265,
  },
  image5: {
    width: 150,
    height: 150,
    marginLeft: 265,
  },
  image6: {
    width: 150,
    height: 150,
    marginLeft: 265,
  },
  image7: {
    width: 150,
    height: 150,
    marginLeft: 265,

  },
  image8: {
    width: 150,
    height: 150,
    marginLeft: 265,

  },
});
