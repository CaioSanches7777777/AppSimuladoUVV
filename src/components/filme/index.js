import { StyleSheet } from "react-native";
import { Button, Image, Text, View } from "react-native-web";
import styles from "./styles";

export default function Filme(props){
    return(
        <View style={styles.conmtainer}>
            <View style={styles.viewImg}>
                <Image source={{url: props.filme.imgUrl}} style={styles.img}></Image>
            </View>

            <View style={styles.viewData}>
                <Text style={styles.titulo}>Título: {props.filme.titulo}</Text>
                <Text style={styles.sinopse}>Sinópse: {props.filme.sinopse}</Text>
                <Text style={styles.preco}>Preço: {props.filme.preco}</Text>
                <Button style={styles.btm} title="Comprar"></Button>
            </View>
        </View>
    )
}