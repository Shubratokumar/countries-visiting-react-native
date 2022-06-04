import { View, Text, ScrollView, StyleSheet, TextInput } from 'react-native'
import React, {useState, useEffect} from 'react'
import Country from './Country';

export default function Countries() {
    const [ countries, setCountries ] = useState([]);
    const [searched, setSearched] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => {
          setSearched(data);
          setCountries(data);
        })
    }, [])
    const handleTextsearch = text =>{
      const filtered = countries.filter(country => country.name.common.includes(text));
      setSearched(filtered);
    }
  return (
    <View>
      <Text style={styles.header}>Countries available : {searched?.length}</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleTextsearch}
      >
      </TextInput>
      <ScrollView>
          {
              searched?.map(country => <Country
                country={country}
                key={country?.name?.common}
              ></Country>)
          }
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  header: {
    marginTop: 50,
    fontSize: 40,
    color: "cyan",
    padding: 20
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})