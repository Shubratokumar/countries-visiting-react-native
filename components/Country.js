import { View, Text, Image, StyleSheet} from 'react-native'
import React from 'react'

export default function Country({country}) {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:20, paddingBottom: 15}}> Country Name : {country?.name.common}</Text>
      <Image
          source={{
            uri: country.flags.png
          }}
          style={{ width: 200, height: 200 }}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  }
})

