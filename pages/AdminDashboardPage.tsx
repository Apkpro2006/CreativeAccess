
import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import StatusBadge from '../components/admin/StatusBadge';

type OrderStatus = 'Active' | 'Trial Started' | 'Payment Failed' | 'Cancelled' | 'Completed';

interface Order {
  id: string;
  email: string;
  plan: string;
  price: number;
  status: OrderStatus;
  date: string;
}

const mockOrders: Order[] = [
  { id: 'ORD12345', email: 'liam@example.com', plan: 'Canva Pro - 1 Year', price: 49.99, status: 'Active', date: '2023-10-26' },
  { id: 'ORD12346', email: 'noah@example.com', plan: 'Canva Pro - 1 Year', price: 49.99, status: 'Trial Started', date: '2023-10-25' },
  { id: 'ORD12347', email: 'olivia@example.com', plan: 'Canva Pro - 1 Year', price: 49.99, status: 'Payment Failed', date: '2023-10-24' },
  { id: 'ORD12348', email: 'emma@example.com', plan: 'Canva Pro - 1 Year', price: 49.99, status: 'Cancelled', date: '2023-10-23' },
  { id: 'ORD12349', email: 'ava@example.com', plan: 'Canva Pro - 1 Year', price: 49.99, status: 'Completed', date: '2023-10-22' },
  { id: 'ORD12350', email: 'isabella@example.com', plan: 'Canva Pro - 1 Year', price: 49.99, status: 'Active', date: '2023-10-21' },
];

const AdminDashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState<Order[]>(mockOrders);
  const [searchTerm, setSearchTerm] = useState('');
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const showNotification = (message: string, type: 'success' | 'error' = 'success') => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const handleResendInvite = (orderId: string) => {
    console.log(`Resending invite for order: ${orderId}`);
    // API call to resend invite would go here
    showNotification(`Invite resent for order ${orderId}.`);
  };
  
  const handleMarkAsCompleted = (orderId: string) => {
    setOrders(prevOrders => prevOrders.map(order => 
      order.id === orderId ? { ...order, status: 'Completed' } : order
    ));
    showNotification(`Order ${orderId} marked as completed.`);
  };

  const handleLogout = () => {
    // Clear auth token in a real app
    navigate('/admin/login');
  };

  const filteredOrders = useMemo(() =>
    orders.filter(order =>
      order.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.id.toLowerCase().includes(searchTerm.toLowerCase())
    ), [orders, searchTerm]);

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <h1 className="text-3xl font-bold text-slate-900">Admin Dashboard</h1>
          <button onClick={handleLogout} className="text-sm text-slate-600 hover:text-primary transition-colors mt-2 sm:mt-0">Logout</button>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search by Order ID or Email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full max-w-sm px-4 py-2 border border-slate-300 rounded-md focus:ring-primary focus:border-primary transition"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-slate-500">
              <thead className="text-xs text-slate-700 uppercase bg-slate-50">
                <tr>
                  <th scope="col" className="px-6 py-3">Order ID</th>
                  <th scope="col" className="px-6 py-3">Customer Email</th>
                  <th scope="col" className="px-6 py-3">Plan</th>
                  <th scope="col" className="px-6 py-3">Price</th>
                  <th scope="col" className="px-6 py-3">Status</th>
                  <th scope="col" className="px-6 py-3">Date</th>
                  <th scope="col" className="px-6 py-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="bg-white border-b hover:bg-slate-50">
                    <th scope="row" className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap">{order.id}</th>
                    <td className="px-6 py-4">{order.email}</td>
                    <td className="px-6 py-4">{order.plan}</td>
                    <td className="px-6 py-4">${order.price.toFixed(2)}</td>
                    <td className="px-6 py-4"><StatusBadge status={order.status} /></td>
                    <td className="px-6 py-4">{order.date}</td>
                    <td className="px-6 py-4 space-x-2 text-center whitespace-nowrap">
                      <button onClick={() => handleResendInvite(order.id)} className="font-medium text-white bg-primary hover:bg-blue-700 py-1 px-3 rounded-md shadow-sm transition-colors text-xs">Resend Invite</button>
                      <button onClick={() => handleMarkAsCompleted(order.id)} className="font-medium text-white bg-green-600 hover:bg-green-700 py-1 px-3 rounded-md shadow-sm transition-colors text-xs disabled:bg-slate-300" disabled={order.status === 'Completed'}>Mark as Completed</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
             {filteredOrders.length === 0 && <p className="text-center text-slate-500 py-8">No orders found.</p>}
          </div>
        </div>
      </div>
      {notification && (
        <div className={`fixed bottom-5 right-5 px-6 py-3 rounded-lg shadow-xl text-white ${notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
          {notification.message}
        </div>
      )}
    </div>
  );
};

export default AdminDashboardPage;
