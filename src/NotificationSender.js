import { messaging } from "./firebase";
import { getToken } from "firebase/messaging";

const sendNotification = async () => {
  try {
    const currentToken = await getToken(messaging);
    console.log(currentToken);
    const notification = {
      to: currentToken,
      notification: {
        title: "New Notification",
        body: "Hello, this is a test notification",
      },
    };

    const response = await fetch("https://fcm.googleapis.com/fcm/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "key=AAAAuh_qzMg:APA91bEWkziY23VIPXoPay8iUaJJtxAC2pfKMx9uve1GnG59-l2478o5QLc3bd_h1uXC0Ftt52crDUO5i8eiE2V-IaeG281_5uanVQkS7SHP0KzBqLQL0cicSVLt_DJpQR0sWt0r2t-a",
      },
      body: JSON.stringify(notification),
    });

    if (response.ok) {
      console.log("Notification sent successfully!");
    } else {
      console.log("Failed to send notification:", response);
    }
  } catch (error) {
    console.log("Error sending notification:", error);
  }
};

const NotificationSender = () => {
  return (
    <button onClick={sendNotification}>Send Notification</button>
  );
};

export default NotificationSender;
