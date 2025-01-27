import {SafeAreaView, ScrollView} from 'react-native';
import React, {Component} from 'react';
import CardsListsView from './components/CardsListsView.tsx';
import ElevatedCards from './components/ElevatedCards.tsx';
import FancyCards from './components/FancyCards.tsx';
import ActionCard from './components/ActionCard.tsx';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <CardsListsView />
          <ElevatedCards />
          <FancyCards />
          <ActionCard />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
