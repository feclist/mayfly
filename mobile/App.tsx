import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import MapboxGL from '@react-native-mapbox-gl/maps'
import { MAPBOX_API_TOKEN } from 'react-native-dotenv'

MapboxGL.setAccessToken(MAPBOX_API_TOKEN)


const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'tomato'
  },
  map: {
    flex: 1
  }
})

export default class App extends Component {
  componentDidMount() {
    MapboxGL.setTelemetryEnabled(false)
  }

  render() {
    return (
      <View style={styles.page}>
        <View style={styles.container}>
          <MapboxGL.MapView style={styles.map} />
        </View>
      </View>
    )
  }
}
