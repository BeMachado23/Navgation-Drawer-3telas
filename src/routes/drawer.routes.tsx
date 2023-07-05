import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';
const { Screen, Navigator } = createDrawerNavigator();

import { ScreenA } from '../screens/ScreenA';
import { ScreenB } from '../screens/ScreenB';
import { ScreenC } from '../screens/ScreenC';

export function DrawerRoutes (){
    return(
        <Navigator>
            
            <Screen
                name='Home'
                options={{
                    drawerLabel: 'Home',
                    drawerIcon: () => <MaterialIcons name="home" size={22} />
                    
                }}
                component={ScreenA}
            />
            <Screen
                name='Achievement'
                options={{
                    drawerLabel: 'Achievement',
                    drawerIcon: () => <AntDesign name="Trophy" size={24} />
                }}
                component={ScreenB}
            />
            <Screen
                name='Qr Code'
                options={{
                    drawerLabel: 'Qr Code',
                    drawerIcon: () => <AntDesign name="qrcode" size={22} />
                    
                }}
                component={ScreenC}
            />
        </Navigator>
    )
} 