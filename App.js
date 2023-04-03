import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Filme from './src/components/filme';
import styles from './src/components/filme';

export default function App() {
  const filmes = [
    {
      titulo:'Avatar',
      sinopse:'Sinopse de Avatar',
      preco:'R$ 20,00',
      imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg8Rn1TMAdicaFC_bLHYW1oTrcpC53GrxMAQ&usqp=CAU",
    }
  ]
  return (
    <View style={styles.container}>
      {filmes.map(f => <Filme filme={f}></Filme>)}
      <StatusBar style="auto" />
    </View>
  );
}

