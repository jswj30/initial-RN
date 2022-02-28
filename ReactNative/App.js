import React, {useState, useLayoutEffect} from 'react';
import {View, Text, SafeAreaView, FlatList, StyleSheet, ActivityIndicator} from 'react-native';

const App = () => {
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  useLayoutEffect(() => {
    getData();
  }, [])

  const getData = () => {
    setIsLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts/')
    .then((res) => res.json())
    .then((res) => {
      let result = data.concat(res.slice(offset, offset + 10));
      setData([...result]);
    })
    .then(() => {
      setOffset(offset + 10);
      setIsLoading(false);
    })
    .catch((err) => {
      console.error(err);
      setIsLoading(false);
    })
  }
  
  const renderItem = ({item}) => {
    return (
      <View style={styles.renderArea}>
        <Text>{item.id}</Text>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.content}>{item.body}</Text>
      </View>
    )
  }

  const onEndReached = () => {
    if (isLoading) {
      return;
    } else {
      getData();
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Today's Info</Text>
      <FlatList 
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.8}
      />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  }, 
  renderArea: {
    // borderWidth: 1, 
    paddingVertical: 15, 
    paddingHorizontal: 20, 
  }, 
  title: {
    textAlign: 'center', 
    color: '#222222', 
    fontSize: 20, 
    // borderWidth: 1, 
  }, 
  content: {
    color: '#222222', 
    fontSize: 16, 
    // borderWidth: 1, 
  }
})

export default App;