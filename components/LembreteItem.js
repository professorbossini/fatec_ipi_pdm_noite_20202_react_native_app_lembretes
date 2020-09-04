import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const LembreteItem = (props) => {
  return (
    <TouchableOpacity onPress={() => props.j(props.chave)}>
      <View style={estilos.itemNaLista}>
        <Text>{props.lembrete}</Text>
      </View>
    </TouchableOpacity>
  );
};

const estilos = StyleSheet.create({
  itemNaLista: {
    padding: 12,
    backgroundColor: '#CCC',
    borderBottomColor: '#000',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 8
  }
});

export default LembreteItem;