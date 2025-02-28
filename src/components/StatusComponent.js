import React, { useEffect, useState } from 'react';

const StatusComponent = () => {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch('/status');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setStatus(data);
      } catch (error) {
        console.error("Error fetching status:", error.message);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchStatus();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Status</h1>
      <pre>{JSON.stringify(status, null, 2)}</pre>
    </div>
  );
};

export default StatusComponent;
