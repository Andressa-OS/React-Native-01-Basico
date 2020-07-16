import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

const Calculos = () => {
    const [n1, setN1] = useState('');
    const [n2, setN2] = useState('');
    const [resultado, setResultado] = useState('Informe os dois números!');

    const _somar = () => {
        if(!n1 == '' && !n2 == '') {
            setResultado(Number(n1) + Number(n2));
        }else{
            setResultado('Preenchimento do campo é obrigatório!');
        }
    }

    const _limpar = () => {
        setN1('');
        setN2('');
        setResultado('Informe os dois números!');
    }

    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>Somar</Text>

            <TextInput
            style={styles.campo}
            placeholder="Digite o 1º número"
            onChangeText={n1 => setN1(n1)}
            value={String(n1)}
            />
            
            <TextInput
            style={styles.campo}
            placeholder="Digite o 2º número"
            onChangeText={n2 => setN2(n2)}
            value={String(n2)}
            />

            <Text style={styles.botaoTexto}>Resultado: </Text>
            <Text style={styles.campo}>{resultado}</Text>

            <TouchableOpacity style={styles.botaoContainer} onPress={_somar}>
                <Text style={styles.botaoTexto}>Calcular </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoContainer} onPress={_limpar}>
                <Text style={styles.botaoTexto}>Limpar</Text>
            </TouchableOpacity>

        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1E90FF',
        width: 300,
        borderRadius: 5,
        padding: 10,
        margin: 10
    },
    titulo: {
        fontSize: 16,
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    campo: {
        backgroundColor: '#ADD8E6',
        fontSize: 14,
        height: 35,
        marginBottom: 5,
        marginTop: 5,
        borderRadius: 5,
        textAlign: 'center',
    },
    botaoContainer: {
        marginBottom: 5,
        marginTop: 5,
        borderRadius: 5,
        height: 40,
        borderWidth: 2,
        borderColor: '#FFFFFF',
        backgroundColor: '#00BFFF',
        justifyContent:'center',
        alignItems:'center',
    },
    botaoTexto: {
        fontSize: 16,
        color: '#FFFFFF',
        textAlign: 'center',
    },
});

export default Calculos;