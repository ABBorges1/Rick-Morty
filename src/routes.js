import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Main from './pages/main'
import Login from './pages/login'
import Character from './pages/character'
import Register from "./pages/register";

const Stack = createStackNavigator()

export default function Routes() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="login" component={Login} options={{
                    title: 'Rick and Morty - Login',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#0D0D0D'
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        color: '#F2F5F7',
                    },
                    }}/>
                <Stack.Screen name="main" component={Main} options={{
                    title: 'Rick and Morty',
                    headerTitleAlign: 'center',
                    headerLeft: null,
                    headerStyle: {
                        backgroundColor: '#0D0D0D'
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        color: '#F2F5F7',
                    },
                }}/>
                <Stack.Screen name="character" component={Character} options={{
                    title: 'Rick and Morty - Details',
                    headerTitleAlign: 'center',
                    headerTintColor: '#F2F5F7',
                    headerStyle: {
                        backgroundColor: '#0D0D0D'
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        color: '#F2F5F7',
                    },
                }}/> 
                <Stack.Screen name="register" component={Register} options={{
                    title: 'Rick and Morty - Cadastro',
                    headerTitleAlign: 'center',
                    headerLeft: null,
                    headerStyle: {
                        backgroundColor: '#0D0D0D'
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        color: '#F2F5F7',
                    },
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}