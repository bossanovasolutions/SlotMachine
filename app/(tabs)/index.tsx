// App.js

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Array com as figuras possíveis (de 1 a 9)
const figures = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Função para girar o rolo e pegar uma figura aleatória
const spinReel = () => {
  const randomIndex = Math.floor(Math.random() * figures.length);
  return figures[randomIndex];
};

export default function App() {
  // Estados para os rolos e o resultado
  const [reel1, setReel1] = useState(0);
  const [reel2, setReel2] = useState(0);
  const [reel3, setReel3] = useState(0);
  const [result, setResult] = useState('');

  // Função para girar a slot machine
  const playSlotMachine = () => {
    const newReel1 = spinReel();
    const newReel2 = spinReel();
    const newReel3 = spinReel();

    setReel1(newReel1);
    setReel2(newReel2);
    setReel3(newReel3);

    // Verificando se o jogador ganhou
    if (newReel1 === newReel2 && newReel2 === newReel3) {
      setResult('Parabéns! Você ganhou!');
    } else {
      setResult('Que pena! Tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Slot Machine</Text>

      <View style={styles.slotRow}>
        <Text style={styles.slot}>{reel1}</Text>
        <Text style={styles.slot}>{reel2}</Text>
        <Text style={styles.slot}>{reel3}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={playSlotMachine}>
        <Text style={styles.buttonText}>Girar</Text>
      </TouchableOpacity>

      <Text style={styles.result}>{result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  slotRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  slot: {
    fontSize: 40,
    marginHorizontal: 10,
    width: 50,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#000',
    padding: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#ff6347',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
  result: {
    fontSize: 24,
    marginTop: 20,
  },
});
