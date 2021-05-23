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
      Splash: '/',
      Auth: '/login',
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: 'home',
              PlayVideo: 'play-video',
            },
          },
          Follower: {
            screens: {
              FollowerScreen: 'network',
              PlayVideo: 'play-video',
            },
          },
          AddVideo: {
            screens: {
              AddVideoScreen: 'add-video',
              PlayVideo: 'play-video',
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
              PlayVideo: 'play-video',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
