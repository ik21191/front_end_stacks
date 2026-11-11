import { useState } from 'react'
import './App.css'

interface User {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  };
}

function AppApiCall() {
  // Example to fetch user data from an API
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false); // Starts as false now
  const [error, setError] = useState<string | null>(null);

  // 1. Define the handler function that will run when the button is clicked
  const handleFetchData = async () => {
    try {
      setLoading(true);
      setError(null); // Reset errors on a new click

      // Fetching from the local public folder for demonstration
      const response = await fetch("/users.json");

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data: User[] = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (

    <>
      <section style={{ padding: "20px" }}>
        <h2>User Directory</h2>

        {/* 2. Attach the function to the onClick event */}
        <button
          type="button"
          onClick={handleFetchData}
          disabled={loading}
          style={{ padding: "10px 20px", cursor: loading ? "not-allowed" : "pointer" }}
        >
          {loading ? "Fetching Data..." : "Load Users from API"}
        </button>

        {/* 3. Handle UI conditional rendering states */}
        {error && <p style={{ color: "red", marginTop: "15px" }}>Error: {error}</p>}

        {users.length > 0 && (
          <ul style={{ marginTop: "20px" }}>
            {users.map((user) => (
              <li key={user.id} style={{ marginBottom: "8px" }}>
                <strong>{user.name}</strong> — {user.email} ({user.company?.name})
              </li>
            ))}
          </ul>
        )}

        {!loading && users.length === 0 && !error && (
          <p style={{ marginTop: "15px", color: "#666" }}>No data loaded yet. Click the button above.</p>
        )}
      </section>

    </>
  )
}

export default AppApiCall
