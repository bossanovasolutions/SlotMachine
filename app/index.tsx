// App.js

import { SlotMachineService } from '@/services/SlotMachine.service';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  // servico para manejo e validacao dos slots
  const slotMachineService = new SlotMachineService();
  // Estados para os rolos e o resultado
  const [reel1, setReel1] = useState(slotMachineService.generateSpinReel());
  const [reel2, setReel2] = useState(slotMachineService.generateSpinReel());
  const [reel3, setReel3] = useState(slotMachineService.generateSpinReel());
  const [pontuation, setPontuation] = useState(slotMachineService.getUserPoints());
  const [result, setResult] = useState('');

  // Função para girar a slot machine
  const playSlotMachine = () => {
    const newReel1 = slotMachineService.generateSpinReel()
    const newReel2 = slotMachineService.generateSpinReel()
    const newReel3 = slotMachineService.generateSpinReel()

    setReel1(newReel1);
    setReel2(newReel2);
    setReel3(newReel3);

    // Verificando se o jogador ganhou
    slotMachineService.validateRoll([[newReel1, newReel2, newReel3]]);
    setPontuation(slotMachineService.getUserPoints());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Slot Machine</Text>

      <View style={styles.slotRow}>
        <Text style={styles.slot}>{reel1?.figure}</Text>
        <Text style={styles.slot}>{reel2?.figure}</Text>
        <Text style={styles.slot}>{reel3?.figure}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={playSlotMachine}>
        <Text style={styles.buttonText}>Girar</Text>
      </TouchableOpacity>

      <Text style={styles.result}>{`Pontuação: ${pontuation}`}</Text>
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
    width: 100,
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
