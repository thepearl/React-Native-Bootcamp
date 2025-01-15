import {StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';

export default class CardsListsView extends Component {
  render() {
    return (
      <View>
        <Text style={styles.headingText}>Milky Cow</Text>
        <View style={styles.container}>
          <View style={[styles.card, styles.cardOne]}>
            <Text>R</Text>
          </View>
          <View style={[styles.card, styles.cardTwo]}>
            <Text>B</Text>
          </View>
          <View style={[styles.card, styles.cardThree]}>
            <Text>G</Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 8,
    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 6,
        margin: 8,
    },
    cardOne: {
        backgroundColor: 'red',
    },
    cardTwo: {
        backgroundColor: 'blue',
    },
    cardThree: {
        backgroundColor: 'green',
    },
});
