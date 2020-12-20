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

import { UpdateProduct } from '../redux/Actions'

import ProductForm from '../components/ProductForm'

const EditScreen = ({navigation, route}) => {

    const {item} = route.params


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
                    <Title>Edit Product</Title>
                </Body>
            </Header>

            <ProductForm 
                Title={item.title}
                Description={item.description}
                Quantity={item.quantity}
                Callback={UpdateProduct}
                id={item.id}
            />
        </Container>
    )
}

export default EditScreen