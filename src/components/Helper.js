import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import home 


const Tab = createBottomTabNavigator();




const BottomTabStack = () => {
    return (
      <Tab.Navigator
        initialRouteName="home"
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          style: {
            backgroundColor: '#e0e0e0',
          },
          labelStyle: {
            textAlign: 'center',
            fontSize: 16,
          },
        }}>
        <Tab.Screen
          name="home"
          component={home}
          options={{
            tabBarLabel: 'Home Screen',
            /*tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="home"
                color={color}
                size={size}
              />
            ),*/
          }}
        />
        <Tab.Screen
          name="categories"
          component={categories}
          options={{
            tabBarLabel: 'Explore Screen',
            /*tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="settings"
                color={color}
                size={size}
              />
            ),*/
          }}
        />
       
          <Tab.Screen
          name="Wishlist"
          component={wishlist}
          options={{
            tabBarLabel: 'wishlist',
            /*tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="settings"
                color={color}
                size={size}
              />
            ),*/
          }}
        />
         <Tab.Screen
          name="Orders"
          component={orders}
          options={{
            tabBarLabel: 'orders',
            /*tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="settings"
                color={color}
                size={size}
              />
            ),*/
          }}
        />
          
        <Tab.Screen
          name="Account"
          component={account}
          options={{
            // tabBarLabel: 'account',
            /*tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="settings"
                color={color}
                size={size}
              />
            ),*/
          }}
        />
      </Tab.Navigator>
    );
  };
  