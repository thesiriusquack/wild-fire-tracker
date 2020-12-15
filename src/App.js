import Map from './components/Map.js';
import Loader from './components/Loader.js';
import Header from './components/Header.js';
import { useState, useEffect } from 'react';

function App() {
  
  const [eventData, setEventData] = useState([])
  
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
      const { events } = await res.json()
      
      setEventData(events)
      setLoading(false)
    }
    fetchEvents()
    console.log(eventData);
  }, [])

  return (
    <div className="App">
      <Header />
      { !loading ? <Map eventData={eventData} /> : <Loader />}
    </div>
  );
}

export default App;
