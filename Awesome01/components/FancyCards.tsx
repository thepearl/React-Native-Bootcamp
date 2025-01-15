import {Image, StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';

export default class FancyCards extends Component {
  render() {
    return (
      <View>
        <Text style={styles.headingText}>Trending Places</Text>
        <View style={[styles.card, styles.cardElevated]} />
        <Image
          style={styles.cardImage}
          source={{
            uri: 'https://турпоиск.kiev.ua/images/contr/tunis.jpg',
          }}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Tunis Medina</Text>
          <Text style={styles.cardLabel}>
            In capital city of Tunis north of Tunisia.
          </Text>
          <Text style={styles.cardDescription}>
            In capital city of Tunis north of Tunisia, In capital city of Tunis
            north of Tunisia, In capital city of Tunis north of Tunisia.
          </Text>
          <Text style={styles.cardFooter}>1 Hour away.</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {},
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    card: {},
    cardBody: {},
    cardTitle: {},
    cardLabel: {},
    cardDescription: {},
    cardFooter: {},
    cardImage: {
        height: 180,
    },
    cardElevated: {},
});
