import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Card, Text } from 'react-native-paper'

const ScreenData = ({ key, name = "Pedro", registration = "21488548", schoolHour = "Noturno", course = "Engenharia de Software", navigation, deleteStudent }) => {
  return (
    <Card style={styles.card} key={key}>
      <Card.Content style={styles.cardStyle}>
        <View style={styles.left}>
          <Text variant="titleLarge">{name} - {registration}</Text>
        </View>
        <View style={styles.right}>
          <Text variant="bodyMedium">{course}</Text>
          <Text variant="bodyMedium">{schoolHour}</Text>
        </View>
      </Card.Content>
      <View style={styles.buttonPosition}>
        <Button style={styles.button} mode="outlined" onPress={() => navigation.push("edit-student", { student: student = { name: name, registration: registration, schoolHour: schoolHour, course: course } })}>
          Editar
        </Button>
        <Button style={styles.button} mode="contained" onPress={() => deleteStudent(name)}>
          Excluir
        </Button>
      </View>
    </Card>
  )
}

export default ScreenData


const styles = StyleSheet.create({

  card: {
    width: "90%",
    height: "28%",
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 10
  },

  cardStyle: {
    backgroundColor: "#9370DB",
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
  },

  left: {
    marginLeft: 10
  },
  right: {
    marginRight: 100
  },
  buttonPosition: {
    flexDirection: 'row',
    justifyContent: "flex-end",
    marginTop: 40,
    marginRight: 10,
  },
  button: {
    marginLeft: 5,
    width: "30%",
  }
});