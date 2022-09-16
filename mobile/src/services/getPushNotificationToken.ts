import * as Notifications from 'expo-notifications';

export async function getPushNotificationToken() {
  // o granted é para saber se o usuário permitiu ser notificado
  const { granted } = await Notifications.getPermissionsAsync();

  if (!granted) {
    await Notifications.requestPermissionsAsync();
  };

  if (granted) {
    const pushToken = await Notifications.getExpoPushTokenAsync();

    return pushToken.data;
  };
};