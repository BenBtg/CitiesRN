import React from 'react';
import { StyleSheet, Text, View, Dimensions, AsyncStorage } from 'react-native';
import Tabs from './src/index'

const key = 'cities'

export default class App extends React.Component {
  state = {
    cities: []
  }

  async componentDidMount(){
    try{
      const citiesJson = await AsyncStorage.getItem(key)
      console.log('cities:', cities)
      const cities = JSON.parse(citiesJson)
      this.setState({cities : cities ? cities : [] })
    } catch(e) {
      console.log('e:', e)
    }
  }

  addCity = (city) => {
    const cities = this.state.cities
    cities.push(city)
    console.log('storing:', city)
    AsyncStorage.setItem(key, JSON.stringify(cities))
    .then(()=> console.log('item stored'))
    .catch(err => { console.log(err)})
    this.setState({cities})
  }

  addLocation = (location, city) => {
    const index = this.state.cities.findIndex(item => {
      return item.id === city.id
    })

    const chosenCity = this.state.cities[index]
    chosenCity.locations.push(location)
    const cities = [
      ...this.state.cities.slice(0, index),
      chosenCity,
      ...this.state.cities.slice(index + 1)
    ]

    this.setState({
      cities
    }, ()=> {
        AsyncStorage.setItem(key, JSON.stringify(cities))
          .then(()=> console.log('item stored'))
          .catch(err => { console.log(err)
        })
    })
  }

//   shouldComponentUpdate(nextProp) {
//     return nextProp.data != this.props.data
// }

  render() {
    return (
      <Tabs 
      screenProps={{
        cities: this.state.cities,
        addCity: this.addCity,
        addLocation: this.addLocation
      }}
    />)
  }
}
