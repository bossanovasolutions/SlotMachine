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
  const [reel4, setReel4] = useState(slotMachineService.generateSpinReel());
  const [reel5, setReel5] = useState(slotMachineService.generateSpinReel());
  const [reel6, setReel6] = useState(slotMachineService.generateSpinReel());
  const [reel7, setReel7] = useState(slotMachineService.generateSpinReel());
  const [reel8, setReel8] = useState(slotMachineService.generateSpinReel());
  const [reel9, setReel9] = useState(slotMachineService.generateSpinReel());
  const [pontuation, setPontuation] = useState(0);

  // Função para girar a slot machine
  const playSlotMachine = () => {
    const newReel1 = slotMachineService.generateSpinReel()
    const newReel2 = slotMachineService.generateSpinReel()
    const newReel3 = slotMachineService.generateSpinReel()
    const newReel4 = slotMachineService.generateSpinReel()
    const newReel5 = slotMachineService.generateSpinReel()
    const newReel6 = slotMachineService.generateSpinReel()
    const newReel7 = slotMachineService.generateSpinReel()
    const newReel8 = slotMachineService.generateSpinReel()
    const newReel9 = slotMachineService.generateSpinReel()

    setReel1(newReel1);
    setReel2(newReel2);
    setReel3(newReel3);
    setReel4(newReel4);
    setReel5(newReel5);
    setReel6(newReel6);
    setReel7(newReel7);
    setReel8(newReel8);
    setReel9(newReel9);

    // Verificando se o jogador ganhou
    const points = slotMachineService.validateRoll([
      [newReel1, newReel2, newReel3],
    ]);
    setPontuation(pontuation + points);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Slot Machine</Text>

      <View style={styles.slotRow}>
        <Text style={styles.slot}>{reel1?.figure}</Text>
        <Text style={styles.slot}>{reel2?.figure}</Text>
        <Text style={styles.slot}>{reel3?.figure}</Text>
      </View>

      <View style={styles.slotRow}>
        <Text style={styles.slot}>{reel4?.figure}</Text>
        <Text style={styles.slot}>{reel5?.figure}</Text>
        <Text style={styles.slot}>{reel6?.figure}</Text>
      </View>

      <View style={styles.slotRow}>
        <Text style={styles.slot}>{reel7?.figure}</Text>
        <Text style={styles.slot}>{reel8?.figure}</Text>
        <Text style={styles.slot}>{reel9?.figure}</Text>
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
