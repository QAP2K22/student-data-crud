import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button } from 'react-native-paper'
import ScreenData from '../Components/ScreenData'
import { useState } from 'react'

const InitialScreen = ({ navigation }) => {
  const [students, setStudents] = useState([])

  function deleteStudent(data) {
    const novaListaPessoa = students.filter(p => p.name !== data)
    console.log(novaListaPessoa)
    setStudents(novaListaPessoa)
  }

  function setNewStudent(returnData) {
    console.log(returnData)
    const studentsList = students
    studentsList.push(returnData)
    setStudents(studentsList)
  }
  return (
    <View style={styles.container}>
      {students.map((key, item) => (
        <ScreenData name={item.name} registration={item.registration} schoolHour={item.schoolHour} course={item.course} navigation={navigation} deleteStudent={(e) => deleteStudent(e)} />
      ))}

      <Button mode="contained" onPress={() => navigation.push("create-student", { returnData: setNewStudent })} style={styles.button}>
        Adicionar
      </Button>
    </View>
  )
}

export default InitialScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    top: 15
  },

  button: {
    width: "90%",
    position: 'absolute',
    bottom: 0,
    marginBottom: 30
  }
});