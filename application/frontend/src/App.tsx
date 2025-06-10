import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

interface User {
  id: number;
  name: string;
  email: string;
  created?: string;
}

interface HealthStatus {
  status: string;
  message: string;
  timestamp: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [health, setHealth] = useState<HealthStatus | null>(null);
  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const [loading, setLoading] = useState(false);

  const API_BASE = '/api';

  const fetchHealth = async () => {
    try {
      const response = await axios.get(`${API_BASE}/health`);
      setHealth(response.data);
    } catch (error) {
      console.error('Health check failed:', error);
    }
  };

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_BASE}/users`);
      setUsers(response.data);
    } catch (error) {
      console.error('Failed to fetch users:', error);
    } finally {
      setLoading(false);
    }
  };

  const addUser = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUser.name || !newUser.email) return;

    try {
      const response = await axios.post(`${API_BASE}/users`, newUser);
      setUsers([...users, response.data]);
      setNewUser({ name: '', email: '' });
    } catch (error) {
      console.error('Failed to add user:', error);
    }
  };

  useEffect(() => {
    fetchHealth();
    fetchUsers();
  }, []);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5', padding: '20px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', color: '#2563eb', marginBottom: '30px' }}>
          🚀 SecureDeploy Dashboard
        </h1>

        <div style={{ backgroundColor: 'white', borderRadius: '8px', padding: '20px', marginBottom: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <h2>System Health</h2>
          {health ? (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ 
                display: 'inline-block', 
                width: '12px', 
                height: '12px', 
                borderRadius: '50%', 
                backgroundColor: health.status === 'OK' ? '#10b981' : '#ef4444',
                marginRight: '8px'
              }}></span>
              <span>{health.message}</span>
              <span style={{ marginLeft: 'auto', fontSize: '14px', color: '#6b7280' }}>
                {new Date(health.timestamp).toLocaleString()}
              </span>
            </div>
          ) : (
            <div>Checking health...</div>
          )}
        </div>

        <div style={{ backgroundColor: 'white', borderRadius: '8px', padding: '20px', marginBottom: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <h2>Add New User</h2>
          <form onSubmit={addUser} style={{ display: 'flex', gap: '10px' }}>
            <input
              type="text"
              placeholder="Name"
              value={newUser.name}
              onChange={(e) => setNewUser({...newUser, name: e.target.value})}
              style={{ flex: 1, padding: '8px', border: '1px solid #d1d5db', borderRadius: '4px' }}
            />
            <input
              type="email"
              placeholder="Email"
              value={newUser.email}
              onChange={(e) => setNewUser({...newUser, email: e.target.value})}
              style={{ flex: 1, padding: '8px', border: '1px solid #d1d5db', borderRadius: '4px' }}
            />
            <button
              type="submit"
              style={{ 
                padding: '8px 16px', 
                backgroundColor: '#2563eb', 
                color: 'white', 
                border: 'none', 
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Add User
            </button>
          </form>
        </div>

        <div style={{ backgroundColor: 'white', borderRadius: '8px', padding: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <h2>Users</h2>
          {loading ? (
            <div style={{ textAlign: 'center', padding: '20px' }}>Loading users...</div>
          ) : (
            <div>
              {users.map((user) => (
                <div key={user.id} style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  padding: '12px', 
                  backgroundColor: '#f9fafb', 
                  borderRadius: '6px',
                  marginBottom: '8px'
                }}>
                  <div>
                    <div style={{ fontWeight: 'bold' }}>{user.name}</div>
                    <div style={{ fontSize: '14px', color: '#6b7280' }}>{user.email}</div>
                  </div>
                  <div style={{ fontSize: '14px', color: '#9ca3af' }}>ID: {user.id}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;