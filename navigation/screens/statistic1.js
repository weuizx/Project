import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    SafeAreaView,
    Image,
    Button,
    TouchableOpacity,
  } from "react-native";

  export default function Statistic1() { 
    return(
        <SafeAreaView style = {styles.example}>
            <Text>Statistic1</Text>
        </SafeAreaView >
    );

  }

  const styles = StyleSheet.create({

    example : {
      flex : 1,
      alignItems : 'center',
      justifyContent : 'center'
    }
     
  })