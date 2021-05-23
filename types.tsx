/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Auth: undefined;
  Root: undefined;
  NotFound: undefined;
  Splash: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Follower: undefined;
  AddVideo: undefined;
  Notification: undefined;
  Profile: undefined;
};

export type HomeParamList = {
  HomeScreen: undefined;
  PlayVideo: undefined;
};

export type FollowerParamList = {
  FollowerScreen: undefined;
  PlayVideo: undefined;
};

export type AddVideoParamList = {
  AddVideoScreen: undefined;
  PlayVideo: undefined;
};

export type NotificationParamList = {
  NotificationScreen: undefined;
};

export type ProfileParamList = {
  ProfileScreen: undefined;
  PlayVideo: undefined;
};
