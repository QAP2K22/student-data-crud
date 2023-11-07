import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateStudent from './screens/CreateStudent';
import InitialScreen from './screens/InitialScreen';
import EditStudent from './screens/EditStudent';

const Tab = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="initial-page" component={InitialScreen} options={{ title: 'Estudantes' }}/>
        <Tab.Screen name="create-student" component={CreateStudent} options={{ title: 'Adicionar estudante' }} />
        <Tab.Screen name="edit-student" component={EditStudent} options={{ title: 'Alterar estudante' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
