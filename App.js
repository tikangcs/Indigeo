import React, {useState} from 'react';
import HomeScreen from './app/screens/HomeScreen.js'
import FloraScreen from './app/screens/FloraScreen.js';
import FaunaScreen from './app/screens/FaunaScreen.js';
import ViewItemScreen from './app/screens/ViewItemScreen.js';

export default function App() {
  const [currentView, setCurrentView] = useState('Item');
  return (
    currentView === 'Flora' ? <FloraScreen setCurrentView={setCurrentView} /> :
    currentView === 'Fauna' ? <FaunaScreen setCurrentView={setCurrentView} /> :
    currentView === 'Item' ? <ViewItemScreen setCurrentView={setCurrentView} />:
    <HomeScreen setCurrentView={setCurrentView} />
  );
}
