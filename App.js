// ACTUAL CODE
import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native'
import uuid from 'react-native-uuid'

// Custom Components
import Header from './components/Header'
import ListItem from './components/ListItem'
import AddItem from './components/AddItem'

const App = () => {
  const [items, setItems] = useState([
    {id: uuid.v4(), text: 'Milk'},
    {id: uuid.v4(), text: 'Eggs'},
    {id: uuid.v4(), text: 'Bread'},
    {id: uuid.v4(), text: 'Juice'},
  ])

  const addNew = (text) => {
    if(!text){
      Alert.alert('Error','Please enter an item', [{text:"OK"}])
    } else {
      setItems(prevItems => {
        return [{id: uuid.v4(), text:text},...prevItems]
      })
    }
  }

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id)
    })
  }

  return(
    <View style={styles.container}>
      <Header />
      <AddItem addNew={addNew} />
      {/* // used to display data in the form of a simple list view */}
      <FlatList 
        data={items} 
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App


// A BASIC TEMPLATE
// import React from 'react';
// import { View, Text, Image, StyleSheet } from 'react-native';

// const App = () => {
//   return(
//     <View style={styles.container}>
//       <Text style={styles.text}>Hello World</Text>
//       <Image source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}} style={styles.img}/>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container:{
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text:{
//     color:'darkslateblue',
//     fontSize: 30,
//   },
//   img:{
//     width:100,
//     height:100,
//     // this is the way of adding a radius and not the usual way
//     borderRadius: 100 / 2,
//   },
// })

// export default App