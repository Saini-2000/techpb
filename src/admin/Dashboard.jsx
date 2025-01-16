import React, { useContext, useEffect, useState } from 'react';
import { api_url } from '../config';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  useNavigate } from 'react-router-dom';
import { TokenContext } from '../adminroutes/AdminRoutes';

const Dashboard = () => {
  
  const base_url = api_url;
  const [stats, setStats] = useState({
    totalWorkAreas: 0,
    totalServices: 0,
    totalServiceItems: 0,
    totalReviews: 0,
    totalQueries: 0,
    queriesLast30Days: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {token} = useContext(TokenContext)
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(`${base_url}/api/dashboard`, {
           
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Include the token in the Authorization header
          },
        });
        
        
        
        if (!response.ok) {
          toast.error('Failed to fetch');
          
        }
        const data = await response.json();
       
        
        if(response.status ==  401 || response.status == 403){
            toast.error(data.message)
          }
        setStats(data);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <>
    
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      <DashboardCard title="Total Work Areas" value={stats.totalWorkAreas} />
      <DashboardCard title="Total Services" value={stats.totalServices} />
      <DashboardCard title="Total Service Items" value={stats.totalServiceItems} />
      <DashboardCard title="Total Reviews" value={stats.totalReviews} />
      <DashboardCard title="Total Queries" value={stats.totalQueries} />
      <DashboardCard title="Queries in Last 30 Days" value={stats.queriesLast30Days} />
    </div>
    </>
  );
};

const DashboardCard = ({ title, value }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center ">
      <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
      <p className="text-3xl font-bold text-gray-900">{value}</p>
    </div>
  );
};

export default Dashboard;

