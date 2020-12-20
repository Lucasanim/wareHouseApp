import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/homeScreen'
import DetailScreen from '../screens/DetailScreen'
import AddScreen from '../screens/AddScreen'
import EditScreen from '../screens/EditScreen'

const Stack = createStackNavigator()

const StackNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="home" component={HomeScreen} 
                options={()=>({
                    headerShown:false
                })}
            />
            <Stack.Screen name="detail" component={DetailScreen} 
                options={()=>({
                    headerShown:false
                })}
            />
            <Stack.Screen name="add" component={AddScreen} 
                options={()=>({
                    headerShown:false
                })}
            />
            <Stack.Screen name="edit" component={EditScreen} 
                options={()=>({
                    headerShown:false
                })}
            />
        </Stack.Navigator>
    )
}

export default StackNavigator