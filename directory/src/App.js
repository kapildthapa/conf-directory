import { useEffect, useState } from 'react';
import ConferenceRoomWifiQR from './components/assets/ConferenceRoomWifiQR.jpg';

function App() {
  const [clockState, setClockState] = useState();
    const [dateState, setDateState] = useState();

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClockState(date.toLocaleTimeString());
        }, 1000);
    }, []);

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setDateState(date.toLocaleDateString());
        }, 1000);
    }, []);

  return (
    <div>
      <h1 className="text-5xl center text-red-700 my-20">Welcome to the 1828 L Conference Center and Tenant Lounge</h1>
      <img src={ConferenceRoomWifiQR} className="m-auto mt-12" alt="QR Code" height="300px" width="300px" />
      <div className="center mt-12">
        <div className="text-5xl center text-red-700 m-5">{dateState}</div>
        <div className="text-5xl center text-red-700 m-5">{clockState}</div>
      </div>
    </div>
  );
}

export default App;
