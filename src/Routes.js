import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {StyleSheet, Text} from 'react-native';


import Home from './pages/home/index';
import Form from './pages/forms/form1';
import Form2 from './pages/forms/form2';
import Grafico from './pages/graficos/index';

const AppStack = createStackNavigator();
const Drawer   = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const Routes = () => {
  return(
    


    <NavigationContainer>
      <Tab.Navigator initialRouteName = "Home" tabBarOptions = {
        {
          activeBackgroundColor: "fff",
          inactiveBackgroundColor: "313131"

        }
        
      }>
      <Tab.Screen name = "Home" component = {Home} />
      <Tab.Screen name = "Form" component = {Form} />
      <Tab.Screen name = "Form2" component = {Form2} />
      <Tab.Screen name = "Graficos" component = {Grafico} />
    </Tab.Navigator>
    {/*     <AppStack.Navigator headerMode='none' >
          <AppStack.Screen name="Home" component={Home} />
          <AppStack.Screen name="Form" component={Form} />
          <AppStack.Screen name="Form2" component={Form2} />
        </AppStack.Navigator> */}
        {/* <Drawer.Navigator
        
        initialRouteName = "Home" 
        drawerStyle = {style.container} 
        drawerContentOptions= {{ 
          activeBacgroundColor: "#fff",
         inactiveTintColor: "#fff"
        }} >
            <Drawer.Screen name="Home" component  = {Home} 
            options = {
              {
                drawerLabel: (({focused}) => <Text style={{color: focused ? '#fff' : '#ff39' }}>Tela 1</Text>)
                // drawerIcon: (({focused})=> <Icon color={focused ? '#f' : '#ff'} name = 'Home' /> )
              }
            } 
            />
            <Drawer.Screen name="Form" component  = {Form}
              options = {
                {
                  drawerLabel: (({focused}) => <Text style={{color: focused ? '#fff' : '#ff39' }}>Tela 2</Text>)
                  // drawerIcon: (({focused})=> <Icon color={focused ? '#f' : '#ff'} name = 'Home' /> )
                }
              }
            />
            <Drawer.Screen name="Form2" component = {Form2}
              options = {
                {
                  drawerLabel: (({focused}) => <Text style={{color: focused ? '#fff' : '#ff39' }}>Tela 3</Text>)
                  // drawerIcon: (({focused})=> <Icon color={focused ? '#f' : '#ff'} name = 'Home' /> )
                }
              }          
            />
              <Drawer.Screen name="Graficos" component = {Grafico}
              options = {
                {
                  drawerLabel: (({focused}) => <Text style={{color: focused ? '#fff' : '#ff39' }}>Graficos</Text>)
                  // drawerIcon: (({focused})=> <Icon color={focused ? '#f' : '#ff'} name = 'Home' /> )
                }
              }          
            />          
        </Drawer.Navigator> */}
    </NavigationContainer>

  );
}

export default Routes;

const style = StyleSheet.create({
  container:{
    backgroundColor: "#363636",
    paddingVertical: 10
  },

});