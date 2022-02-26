import React, {useState} from 'react';
import {View, Text, SafeAreaView, FlatList, StyleSheet} from 'react-native';

const App = () => {
  const [data, setData] = ([
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba', 
      title: 'First', 
      content: 'This is First Content', 
    }, 
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63', 
      title: 'Secone', 
      content: 'This is Second Content', 
    }, 
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72', 
      title: 'Third', 
      content: 'This is Third Content', 
    }, 
  ]);

  const renderItem = ({item}) => {
    return (
      <View>
        <Text>{item.title}</Text>
        <Text>{item.content}</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList 
          data={data} 
          renderItem={renderItem} 
          keyExtractor={(item) => item.id} 
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  }, 
})

export default App;