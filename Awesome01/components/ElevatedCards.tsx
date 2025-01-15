import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.container}>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>H scroll</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>H scroll</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>H scroll</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>H scroll</Text>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    container: {
        padding: 8,
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        margin: 4,
        borderRadius: 6,
    },
    elevatedCard: {
        backgroundColor: 'gray',
        elevation: 6, // for android
        shadowOffset: {
            width: 1,
            height:1,
        }, // for iOS
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
});
