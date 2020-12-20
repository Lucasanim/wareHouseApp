import React, {useEffect, useState} from 'react'
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { Button, Container,Text, Card, CardItem,Header, Title, Left, Item, Icon, Input } from 'native-base'
import Icons from 'react-native-vector-icons/Entypo'

import { useDispatch, useSelector } from 'react-redux'

import {FetchProducts} from '../redux/Actions'

const HomeScreen = ({navigation}) => {

  const [SearchQuery, setSearchQuery] = useState('')
  const [text, setText] = useState('')
  const [loader, setLoader] = useState('')

  const products = useSelector((state) => state.Products)

  const dispatch = useDispatch()

  const handleSearch = (text) => {
    let newData = products.filter((item) => {
      let title = item.title.toUpperCase()
      let query = text.toUpperCase()
      return title.indexOf(query) > -1
    })
    if(text ==''){
      setSearchQuery(null)
    }else{
      setSearchQuery(newData)
    }
    setText(text)
    console.log('ND_:', newData) 
  }

  useEffect( ()=>{

    dispatch(FetchProducts())
    
  }, [] )

  return(
    <Container >
      
      <View style={{flex:1}} >

        <Header searchBar rounded >
          <Left>
            <Title>
              Warehouse
            </Title>
          </Left>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" 
              value={text}
              onChangeText={(text) => handleSearch(text) }
            />
            
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>

        <FlatList 
          data={
            SearchQuery ? SearchQuery : products
          }
          keyExtractor={(i) => i.id}
          renderItem={({item})=>{
            return <TouchableOpacity
              onPress={()=>navigation.navigate('detail',{item})}
            >
              <Card>
                <CardItem>
                  <View style={{flexDirection:'row'}} >
                    <View style={{flex:1}} >
                      <Text style={{fontSize:18}} >{item.title}</Text>
                      <Text style={{fontSize:15,color:'gray'}} >{item.description}</Text>
                    </View>

                    <View style={{flex:0.2, justifyContent:'center', backgroundColor:'red', alignItems:'center', borderRadius:50}} >
                      <Text style={{fontWeight:'bold'}} >{item.quantity}</Text>
                    </View>
                  </View>
                </CardItem>
              </Card>
            </TouchableOpacity>
          }}
        />
        
      </View>
      <Button rounded primary 
          onPress={()=> navigation.navigate('add')} 
          style={styles.addButton}
        >
        <Text>
          <Icons name="add-to-list" size={30} />
        </Text>
      </Button> 
    </Container>
  )
}

const styles = StyleSheet.create({
  addButton:{
    position:'absolute',
    bottom:'5%',
    right:'5%'
  },
})

export default HomeScreen
