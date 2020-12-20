import React from 'react'
import { StyleSheet, Alert } from 'react-native'
import { Container, Content, Text, Header, Left, Button, Body, Card, CardItem, Title, Right } from 'native-base'

import { useDispatch } from 'react-redux'

import { DeleteProduct } from '../redux/Actions'

const DetailScreen = ({navigation, route}) =>{

    const {item} = route.params

    const dispatch = useDispatch()

    const DeleteProducts = () => {
        Alert.alert(
            `Are you sure to want to delete ${item.title} ?`,
            '',
            [
                {
                text: 'Cancel',
                style: 'cancel'
                },
                { text: 'Yes', onPress: () => dispatch(DeleteProduct(item.id, () => navigation.navigate('home')))  }
            ],
            { cancelable: true }
        )
    }

    return(
        <Container>

            <Header>
                <Left>
                    <Button onPress={()=>navigation.goBack()} transparent >
                        <Text>
                            Back
                        </Text>
                    </Button>
                </Left>
                <Body>
                    <Title>{item.title}</Title>
                </Body>
                <Right>
                    <Button transparent
                        onPress={() => navigation.navigate('edit', {item})}
                    >
                        <Text>
                            Edit
                        </Text>
                    </Button>
                </Right>
            </Header>

            <Content>
                <Card>
                    <CardItem header bordered >
                        <Text>{item.title}</Text>
                    </CardItem>
                    <CardItem >
                        <Text>{item.description}</Text>
                    </CardItem>
                    <CardItem footer bordered>
                        <Text>{item.quantity}</Text>
                    </CardItem>
                </Card>
            </Content>
            <Button rounded danger 
                onPress={()=> DeleteProducts() } 
                style={styles.addButton}
            >
                <Text>
                DELETE
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

export default DetailScreen