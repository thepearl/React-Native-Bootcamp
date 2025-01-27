import {Image, StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';

export default class FancyCards extends Component {
  render() {
    return (
      <View>
        <Text style={styles.headingText}>Trending Places</Text>
        <View style={[styles.card, styles.cardElevated]}>
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
              In capital city of Tunis north of Tunisia, In capital city of
              Tunis north of Tunisia, In capital city of Tunis north of Tunisia.
            </Text>
            <Text style={styles.cardFooter}>1 Hour away.</Text>
          </View>
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
    card: {
        width: 350,
        // height: 360,
        borderRadius: 6,
        marginHorizontal: 16,
        marginVertical: 12,
        paddingBottom: 12,
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12,
    },
    cardTitle: {
        color: 'black',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    cardLabel: {
        color: 'black',
        fontSize: 14,
        marginBottom: 6,
    },
    cardDescription: {
        color: '#242B2E',
        fontSize: 12,
        marginBottom: 12,
        marginTop: 6,
        flexShrink: 1,
    },
    cardFooter: {
        color: 'black',
    },
    cardImage: {
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    cardElevated: {
        backgroundColor: 'white',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.15,
    },
});
