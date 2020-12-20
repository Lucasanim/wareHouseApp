import React, {useState} from 'react'
import {
    StyleSheet
} from 'react-native'
import {
    Form,
    Text,
    Container,
    Content,
    Item,
    Input,
    Label,
    Button,
} from 'native-base'

import { useNavigation } from '@react-navigation/native';

import { useDispatch } from 'react-redux'

const ProductForm = ({Title, Description, Quantity, Callback, id}) => {

    const [title,setTitle] = useState(Title)
    const [description,setDescription] = useState(Description)
    const [quantity,setQuantity] = useState(Quantity)

    const dispatch = useDispatch()

    const navigation = useNavigation()

    return(
        <Container>
            <Content>

                <Form>
                    <Item floatingLabel>
                        <Label>title</Label>
                        <Input 
                            onChangeText={ (text) => setTitle(text) } 
                            value={title}
                        />
                    </Item>
                    <Item floatingLabel >
                        <Label>Description</Label>
                        <Input 
                            onChangeText={(text)=> setDescription(text)}
                            value={description}
                        />
                    </Item>

                    
                    <Item floatingLabel >
                        <Label>Quantity</Label>    
                        <Input 
                            onChangeText={(text)=> setQuantity(text)}
                            keyboardType='numeric'
                            value={quantity}
                        />
                    </Item>
                </Form>
            </Content>
            <Button rounded primary 
                onPress={()=> dispatch(Callback(title, description, quantity, ()=>navigation.navigate('home'), id))} 
                style={styles.addButton}
            >
                <Text>
                Done
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

export default ProductForm