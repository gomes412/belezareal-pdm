import { Text, View, StyleSheet } from "react-native";

const usuarios = [
  {
    id: 1,
    nome: "Roberto",
    cargo: "Professor"
  },
  {
    id: 2,
    nome: "Erika",
    cargo: "Aluna"
  }
  ]; 
  
  export default function Index() {
  return (
    <View
      style={style.container}
    >
    {
      usuarios.map( item => (

        <Text style={style.textoLista}>(item.nome)</Text>
      ))
    }
     </View>
  );
}

const style = StyleSheet.create({
  container: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  },

  itemLista: {
    width: '1001',
    padding: 10,
  }
  
  textoLista: {
    fontSize: 20
  }

})


