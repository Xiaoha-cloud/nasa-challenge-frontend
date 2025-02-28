import { useEffect, useState } from 'react';
import axios from 'axios';

const useISSData = () => {
    const [issLocation, setIssLocation] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchISSLocation = async () => {
        try {
            const response = await axios.get('http://api.open-notify.org/iss-now.json');
            setIssLocation(response.data.iss_position);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchISSLocation();
        const interval = setInterval(fetchISSLocation, 5000); // Fetch every 5 seconds
        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return { issLocation, loading, error };
};

export default useISSData;