/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createStackNavigator,
  StackHeaderLeftButtonProps,
} from '@react-navigation/stack';
import * as React from 'react';
import { View } from '../components/Themed';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import AddVideoScreen from '../screens/AddVideoScreen';
import FollowersScreen from '../screens/FollowersScreen';
import HomeScreen from '../screens/HomeScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {
  AddVideoParamList,
  BottomTabParamList,
  FollowerParamList,
  HomeParamList,
  NotificationParamList,
  ProfileParamList,
} from '../types';

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialIcons>['name'];
  color: string;
}) {
  return <MaterialIcons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Home Stack
const HomeTabStack = createStackNavigator<HomeParamList>();

function HomeTabNavigator() {
  return (
    <HomeTabStack.Navigator>
      <HomeTabStack.Screen name="HomeScreen" component={HomeScreen} />
    </HomeTabStack.Navigator>
  );
}

// Network/Community Stack
const FollowerTabStack = createStackNavigator<FollowerParamList>();

function FollowerTabNavigator() {
  return (
    <FollowerTabStack.Navigator>
      <FollowerTabStack.Screen
        name="FollowerScreen"
        component={FollowersScreen}
        options={{ headerTitle: 'Follower' }}
      />
    </FollowerTabStack.Navigator>
  );
}

// Notification Stack
const NotificationTabStack = createStackNavigator<NotificationParamList>();

function NotificationTabNavigator() {
  return (
    <NotificationTabStack.Navigator>
      <NotificationTabStack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{ headerTitle: 'Notification' }}
      />
    </NotificationTabStack.Navigator>
  );
}

// Add Videos Stack
const AddVideoTabStack = createStackNavigator<AddVideoParamList>();

function AddVideoTabNavigator() {
  return (
    <AddVideoTabStack.Navigator>
      <AddVideoTabStack.Screen
        name="AddVideoScreen"
        component={AddVideoScreen}
        options={{ headerTitle: 'AddVideo' }}
      />
    </AddVideoTabStack.Navigator>
  );
}

// Profile Stack
const ProfileTabStack = createStackNavigator<ProfileParamList>();

function ProfileTabNavigator() {
  return (
    <ProfileTabStack.Navigator>
      <ProfileTabStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerTitle: 'Profile' }}
      />
    </ProfileTabStack.Navigator>
  );
}

// Bottom Tab
const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        inactiveTintColor: Colors[colorScheme].tint,
        activeTintColor: Colors[colorScheme].inactiveTint,
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          tabBarLabel: '',
        }}
      />
      <BottomTab.Screen
        name="Follower"
        component={FollowerTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="people" color={color} />,
          tabBarLabel: '',
        }}
      />
      <BottomTab.Screen
        name="AddVideo"
        component={AddVideoTabNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="add-circle" color={color} />
          ),
          tabBarLabel: '',
        }}
      />
      <BottomTab.Screen
        name="Notification"
        component={NotificationTabNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="notifications" color={color} />
          ),
          tabBarLabel: '',
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="person" color={color} />,
          tabBarLabel: '',
        }}
      />
    </BottomTab.Navigator>
  );
}
