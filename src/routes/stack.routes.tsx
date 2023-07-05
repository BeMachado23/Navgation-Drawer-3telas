import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator } = createNativeStackNavigator();

import { ScreenA } from '../screens/ScreenA';
import { ScreenB } from '../screens/ScreenB';

export function StackRoutes (){
    return(
        <Navigator>
            <Screen
                name='screenA'
                options={{
                    title: 'Home',
                    headerShown: false,
                }}
                component={ScreenA}
            />
            <Screen
                name='screenB'
                options={{
                    title: 'Tela B',
                    headerTitleAlign: 'center',
                    headerStyle:{
                        backgroundColor: 'navy'
                    }
                    
                }}
                component={ScreenB}
            />
        </Navigator>
    )
} 