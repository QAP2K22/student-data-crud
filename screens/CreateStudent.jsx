import React from 'react'
import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'

const CreateStudent = ({ navigation, route }) => {
  const [name, setName] = useState('')
  const [registration, setRegistration] = useState('')
  const [schoolHour, setSchoolHour] = useState('')
  const [course, setCourse] = useState('')
  const { returnData, student: newStudent } = route.params


  function saveStudent() {

    if (name === '' || registration === '' || schoolHour === '' || course === '') {
    } else {

      const newStudent = {
        name: name,
        registration: registration,
        schoolHour: schoolHour,
        course: course
      }

      returnData(newStudent)

      navigation.goBack()
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          label={'Nome'}
          mode='outlined'
          value={name}
          onChangeText={text => setName(text)}
        />

        <TextInput
          style={styles.input}
          label={'Matricula'}
          mode='outlined'
          value={registration}
          onChangeText={text => setRegistration(text)}
        />

        <TextInput
          style={styles.input}
          label={'Turno'}
          mode='outlined'
          value={schoolHour}
          onChangeText={text => setSchoolHour(text)}
        />

        <TextInput
          style={styles.input}
          label={'Curso'}
          mode='outlined'
          value={course}
          onChangeText={text => setCourse(text)}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          mode='contained-tonal'
          onPress={() => navigation.goBack()}
        >
          Voltar
        </Button>

        <Button
          style={styles.button}
          mode='contained'
          onPress={() => saveStudent()}
        >
          Salvar
        </Button>
      </View>
    </View>
  )
}

export default CreateStudent


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontWeight: 'bold',
    margin: 10
  },
  inputContainer: {
    width: '90%',
    flex: 1
  },
  input: {
    margin: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '90%',
    gap: 10,
    marginBottom: 10
  },
  button: {
    flex: 1
  }
})