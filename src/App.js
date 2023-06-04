import NotificationSender from "./NotificationSender";
import { messaging } from "./firebase";
import toast, { Toaster } from 'react-hot-toast';
import { onMessage } from "firebase/messaging";

function App() {

  onMessage(messaging, (payload) => {
    console.log("Received notification:", payload);
    toast.success(payload.notification.body)
  });

  return (
    <div className="App">
      <h1>React Firebase Cloud Messaging</h1>
      <NotificationSender />
      <Toaster />
    </div>
  );
}

export default App;
