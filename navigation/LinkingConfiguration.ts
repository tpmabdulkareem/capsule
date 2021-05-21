/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Splash:'/',
      Auth:'/login',
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: 'home',
            },
          },
          Follower: {
            screens: {
              FollowerScreen: 'network',
            },
          },
          AddVideo: {
            screens: {
              AddVideoScreen: 'add-video',
            },
          },
          Notification: {
            screens: {
              NotificationScreen: 'notification',
            },
          },
          Profile: {
            screens: {
              ProfileScreen: 'profile',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
