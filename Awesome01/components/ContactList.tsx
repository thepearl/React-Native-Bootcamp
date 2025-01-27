import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contactList = [
    {
      id: 1,
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
    },
    {
      id: 2,
      name: 'Kdot Lamar',
      email: 'kdot-lamar@gmail.com',
      image: 'https://randomuser.me/api/portraits/men/65.jpg',
    },
    {
      id: 3,
      name: '2 Pac',
      email: 'pac@gmail.com',
      image: 'https://randomuser.me/api/portraits/men/61.jpg',
    },
    {
      id: 4,
      name: 'BIG Biggie',
      email: 'bigbig@gmail.com',
      image: 'https://randomuser.me/api/portraits/men/60.jpg',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.contactListContainer} scrollEnabled={false}>
        {contactList.map(contact => (
          <View key={contact.id} style={styles.singleContactContainer}>
            <Image
              source={{
                uri: contact.image,
              }}
              style={styles.contactImage}
            />
            <View style={styles.contactInfosContainer}>
              <Text style={styles.nameText}>Name: {contact.name}</Text>
              <Text style={styles.emailText}>Email: {contact.email}</Text>
            </View>
          </View>
        ))}
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
    contactListContainer: {
        paddingHorizontal: 16,
        marginVertical: 6,
    },
    singleContactContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
        backgroundColor: '#adc5cf',
        padding: 6,
        borderRadius: 6,
    },
    contactImage: {
        height: 60,
        width: 60,
        borderRadius: 30,
        marginRight: 14,
    },
    contactInfosContainer: {
    },
    emailText: {
        fontSize: 14,
        fontWeight: '500',
        paddingVertical: 4,
    },
    nameText: {
        fontSize: 16,
        fontWeight: '600',
        paddingVertical: 4,
    },
});
