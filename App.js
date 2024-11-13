import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, Image, View, FlatList, Button, TouchableOpacity, SectionList } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

// import RNPickerSelect from 'react-native-picker-select';

const styles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 10,
    borderWidth: 1,
  },

  buttonContainer: {
    textAlign: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 50,
    borderWidth: 1,
  },

  textStyle: {
    fontSize: 15,
    margin: 10,
    fontWeight: 'bold',
  },

  box: {
    borderWidth: 1,
    height: 400,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'beige',
  },

  image: {
    objectFit: 'fill',
    width: 250,
    height: 350,
    marginTop: 120,
    marginBottom: 120,
  }
});

const App = () => {
  const datasource = [ 
    {data:[
      {name: 'Charander', image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_4-2x.png'},
      {name: 'Charizard', image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_6-2x.png'},
    ],
    icon: 'fire-flame-curved',
    title:"Fire", 
    backgroundColor: 'darkorange'},

    {data:[
      {name: 'Pikachu', image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_25-2x.png'},
      {name: 'Raichu', image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_26-2x.png'},
      ],
    icon: 'bolt',
    title:"Electric", 
    backgroundColor: 'yellow'},
    
    {data:[
      {name: 'Squirtle', image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_7-2x.png'},
      {name: 'Wartortle', image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_8-2x.png'},
      ],
    icon: 'water',
    title:"Water", 
    backgroundColor: 'skyblue'},
  ];

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity>
        <View style={styles.box}>
          <Text style={styles.textStyle}>{item.name}</Text>
          <Image source={{uri: item.image}} style={styles.image} />
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View>
      <StatusBar hidden={true} />
      <View style={styles.buttonContainer}>
        <Button title="Add Pokemon" color="darkorange"></Button>
      </View>
      <SectionList contentContainerStyle={{padding: 10, margin: 10, height: 2700}} sections={datasource} renderItem={renderItem} 
      renderSectionHeader={({section:{icon, title, backgroundColor}}) => (
        <Icon name={icon} style={[styles.headerText, {backgroundColor:backgroundColor}]}>
          <Text>{title}</Text>
        </Icon>
      )}/>
    </View>
  );
}

export default App;