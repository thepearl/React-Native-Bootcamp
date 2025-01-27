import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  async function open(url: string) {
    await Linking.openURL(url);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>
            What's new in javascript 2025 - ES12
          </Text>
        </View>
        <View>
          <Image
            source={{
              uri: 'https://w0.peakpx.com/wallpaper/773/459/HD-wallpaper-java-script-baseball-black-chedesign-javascript-js-metal-music-never-programming-university.jpg',
            }}
            style={styles.cardImage}
          />
          <View style={styles.bodyContainer}>
            <Text numberOfLines={3}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </Text>
          </View>
          <View style={styles.footerContainer}>
            <TouchableOpacity onPress={() => open('http://www.facebook.com')}>
              <Text style={styles.socialLink}>Read more</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    card: {
        borderRadius: 12,
        marginVertical: 12,
        marginHorizontal: 16,
    },
    cardImage: {
        height: 190,
        resizeMode: 'stretch',
    },
    bodyContainer: {
        padding: 10,
    },
    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#ffc75f',
        marginHorizontal: 8,
        borderRadius: 6,
        height: 44,
        alignItems: 'center',
    },
    socialLink: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000',
    },
    headerContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
    },
    elevatedCard: {
        backgroundColor: '#FFF',
        elevation: 6, // for android
        shadowOffset: {
            width: 1,
            height:1,
        }, // for iOS
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowRadius: 4,
        paddingBottom: 10,
    },
});
