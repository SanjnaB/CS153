import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  TextInput,
  Button,
  Alert,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import About from './About';
import RecipeofWeek from './RecipeofWeek';
import SuggestedMeals from './SuggestedMeals';
import FindMealPlan from './FindMealPlan';
import CalorieCalculator from './CalorieCalculator';


function HomeNavigation({ navigation }) {

  return (
    <ScrollView>
     <View style={{ flex: 3, flexDirection: 'row' }}>
            <Image
              style={{
                flex: 7,
                width: 400,
                height: 490,
              }}
              source={{
                uri: 'https://www.eatthis.com/wp-content/uploads/sites/4/2021/05/healthy-foods.jpg?quality=82&strip=1&resize=640%2C360',
              }}
            />
          </View>

    <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'stretch', borderColor: 'brown' }}>
      <Button
        color = 'brown'
        title="About"
        onPress={() => navigation.navigate('About')}
      />
      <Button
        color = 'brown'
        title="Recipe of the Week"
        onPress={() => navigation.navigate('Recipe of the Week')}
      />
      <Button
        color = 'brown'
        title="Suggested Meals"
        onPress={() => navigation.navigate('Suggested Meals')}
      />
      <Button
        color = 'brown'
        title="Find A Meal Plan"
        onPress={() => navigation.navigate('Find A Meal Plan')}
      />
      <Button
        color = 'brown'
        title="Calorie Calculator"
        onPress={() => navigation.navigate('Calorie Calculator')}
      />
        </View>
    </ScrollView>
  );
}

function AboutPage({ navigation }) {
  return (
    <About/>
  );
}

function RecipeofWeekPage({ navigation }) {
  return (
    <RecipeofWeek/>
  );
}

function SuggestedMealsPage({ navigation }) {
  return (
    <SuggestedMeals/>
  );
}

function FindMealPlanPage({ navigation }) {
  return (
    <FindMealPlan/>
  );
}

function CalorieCalculatorPage({ navigation }) {
  return (
    <CalorieCalculator/>
  );
}


const Tab = createNativeStackNavigator();

export default function App(){
  
  return(
          <View style={styles.container}>
            
            <View style={{flex: 3, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'center'}}>
              <Text style={styles.header}>
              Welcome to Recipes-For-All 
              </Text>
            </View>
            <View style={styles.container}>
                <Text style={{fontSize: 20, margin: 0,}}>
                </Text>
            </View>
            <View style={{flex: 20, flexDirection: 'column'}}>
            <NavigationContainer style={{flex: 1, flexDirection: 'column'}}>
                  <Tab.Navigator>
                    <Tab.Screen name="Home" component={HomeNavigation} />
                    <Tab.Screen name="About" component={AboutPage} />
                    <Tab.Screen name="Recipe of the Week" component={RecipeofWeekPage} />
                    <Tab.Screen name="Suggested Meals" component={SuggestedMealsPage} />
                    <Tab.Screen name="Find A Meal Plan" component={FindMealPlanPage} />
                    <Tab.Screen name="Calorie Calculator" component={CalorieCalculatorPage} />
                  </Tab.Navigator>
                </NavigationContainer>
            </View>
          </View>
  )
}


const styles = StyleSheet.create({
  header: {
    flex:1,
    fontSize:32,
    padding: 20,
    margin: 10,
    color:"white",
    backgroundColor: "brown",
    alignItems: "center",
  },
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: 'stretch',
    flexDirection: 'colomn',
    backgroundColor: 'white',
  },
  textinput:{
      flex:0.5,
      margin:20,
      fontSize:20
    },
})
