import React from 'react'
import {
    Text,
    Container,
    Button,
    Left,
    Header,
    Body,
    Title,
} from 'native-base'

import { AddProduct } from '../redux/Actions'

import ProductForm from '../components/ProductForm'

const AddScreen = ({navigation}) => {
    return(
        <Container>
            <Header>
                <Left>
                    <Button onPress={()=>navigation.goBack()} transparent >
                        <Text>
                        Cancel
                        </Text>
                    </Button>
                </Left>
                <Body>
                    <Title>Add a Product</Title>
                </Body>
            </Header>

            <ProductForm 
                Callback={AddProduct}
            />
        </Container>
    )
}

export default AddScreen