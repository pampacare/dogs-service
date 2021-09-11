import * as firebaseNotifications from '../services/firebase-config'

export const sendPushNotifications = (title: string, body: string, token: any): void => {
  firebaseNotifications.firebaseApp.messaging().send(
    {
      notification: {
        title: title,
        body: body
      },
      data: {
        title: title,
        body: body
      },
      token: token

    }
  ).catch((error: any) => {
    console.log(error)
  })
}
