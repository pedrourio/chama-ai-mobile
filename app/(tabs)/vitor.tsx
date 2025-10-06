import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ScrollView } from 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

export default function Vitor() {
    const [resultado, setResultado] = useState('');

    const imprime = (n: number) => {
        if (resultado == '') {
            setResultado(`${resultado} ${n.toString()}`)
        } else {
            setResultado(`${resultado} + ${n.toString()}`)
        }
    }

    const limpa = () => {
        setResultado('');
    }

    return (
        <ThemedView style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'gray', flex: 1, flexDirection: 'column' }}>
            <ThemedText>Calculadora!</ThemedText>
            <ThemedView style={{ justifyContent: 'center', alignItems: 'center', flex: 0.5, flexDirection: 'column', padding: 10, paddingHorizontal: 30, margin: 10 }}>
                <ThemedView style={{ backgroundColor: 'green', padding: 30, marginBottom: 10, width: 200 }}>
                    <ScrollView horizontal scrollEnabled>
                        <ThemedText>{resultado}</ThemedText>
                    </ScrollView>
                </ThemedView>
                <ThemedView style={{ backgroundColor: 'gray', padding: 10, marginBottom: 10 }}>
                    <ThemedView style={{ flexDirection: 'row', padding: 10, width: 100, justifyContent: 'space-between' }}>
                        <TouchableOpacity style={{ backgroundColor: '#FFFFFF' }} onPress={() => imprime(1)}>1</TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: '#FFFFFF' }} onPress={() => imprime(2)}>2</TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: '#FFFFFF' }} onPress={() => imprime(3)}>3</TouchableOpacity>
                    </ThemedView>
                    <ThemedView style={{ flexDirection: 'row', padding: 10, width: 100, justifyContent: 'space-between' }}>
                        <ThemedText>1</ThemedText>
                        <ThemedText>1</ThemedText>
                        <ThemedText>1</ThemedText>
                    </ThemedView>
                    <ThemedView style={{ flexDirection: 'row', padding: 10, width: 100, justifyContent: 'space-between' }}>
                        <ThemedText>1</ThemedText>
                        <ThemedText>1</ThemedText>
                        <ThemedText>1</ThemedText>
                    </ThemedView>
                    <ThemedView style={{ flexDirection: 'row', padding: 10, width: 100, justifyContent: 'space-between' }}>
                        <TouchableOpacity style={{ backgroundColor: '#FFFFFF' }} onPress={limpa}>LIMPAR</TouchableOpacity>
                    </ThemedView>


                </ThemedView>
            </ThemedView>
        </ThemedView>
    )
}

const styles = StyleSheet.create({});