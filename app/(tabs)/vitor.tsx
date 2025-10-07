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

    const LinhaTeclado = (t1: any, t2: any, t3: any)=>{
        return <ThemedView style={{ flexDirection: 'row', padding: 10, width: 100, justifyContent: 'space-between' }}>{t1}{t2}{t3}</ThemedView>

    }

    const Tecla = () =>{
        return <TouchableOpacity style={{ backgroundColor: '#FFFFFF' }} onPress={() => imprime(1)}>1</TouchableOpacity>

    }

    const teclado = () => {
        
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
                    {LinhaTeclado(Tecla, Tecla, Tecla)}
                </ThemedView>
            </ThemedView>
        </ThemedView>
    )
}

const styles = StyleSheet.create({});