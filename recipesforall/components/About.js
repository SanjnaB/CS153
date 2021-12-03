import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar, TextInput, Button } from 'react-native';

const About = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.paragraph}>
            <Text style={styles.header}>Welcome to my Recipes-For-All app!</Text>
            <Text style={{textAlign: 'center'}}>

          {"\n\n"}This app is designed to help anyone who has food restrictions find appetizing and filling recipes. {"\n\n"}

          You can view some suggested meal ideas for various food restrictions on the View Types of Meal Plans page but we offer over 100 recipes for over 30 kinds of meal restrictions!{"\n\n"}

         Additionally, if there is a meal plan or recipe you like, you can save it to your profile for later use for your easy reference. Feel free to sign up below and make a profile now!{"\n\n"}

          I also provided a calorie counter function so that you can also make sure you are fueling your body correctly.  When I started eating primarily plant-based, it was easy to unintentionally eat less calories so tracking was helpful to making sure I gave my body enough fuel and energy when I eliminated a food group. {"\n\n"}
      </Text>
      <View style={styles.formBox}>
            <Text style={{ fontSize: 32, fontFamily: 'verana' }}>
              Register Here!{' '}
            </Text>
            <TextInput style={styles.input} placeholder="First Name" />
            <TextInput style={styles.input} placeholder="Last Name" />
            <TextInput style={styles.input} placeholder="Email" />
            <Button title="Submit" color="darkblue" />
          </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scrollView: {
    marginHorizontal: 10,
  },
});

export default About;
