import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Filme from './src/components/filme';


export default function App() {
  const filmes = [
    {
      titulo:'Avatar',
      sinopse:'Sinopse de Avatar',
      preco:'R$ 20,00',
      imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg8Rn1TMAdicaFC_bLHYW1oTrcpC53GrxMAQ&usqp=CAU",
    },
    {
      titulo:'Gato de Botas',
      sinopse:'Sinopse de Gato de Botas',
      preco:'R$ 18,00',
      imgUrl:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRLkEdZWNPUZdUItmhnFmJChykum-cYTxG-N6iqXhctW2bu1qQm",
    }
  ]

  return (
    <View style={styles.container}>
      {filmes.map(f => <Filme filme={f}></Filme>)}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
