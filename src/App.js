
import './App.css';
import { initNotification } from './services/firebase_Services';
function App() {
  return (
    <div className="App">
      <h1>Progressive web app</h1>
      <button onClick={initNotification}>
        configuration push notification
      </button>
    </div>
  );
}

export default App;
