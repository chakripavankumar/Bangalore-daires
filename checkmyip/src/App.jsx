import  { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [ip, setIp] = useState('');

  useEffect(() => {
    const fetchIp = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/ip');
        setIp(response.data.ip);
      } catch (error) {
        console.error('Error fetching the IP address:', error);
      }
    };

    fetchIp();
  }, []);

  return (
    <div>
      <h1>My IP Address: {ip}</h1>
    </div>
  );
}

export default App;
