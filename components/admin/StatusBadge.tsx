
import React from 'react';

type OrderStatus = 'Active' | 'Trial Started' | 'Payment Failed' | 'Cancelled' | 'Completed';

interface StatusBadgeProps {
  status: OrderStatus;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const statusClasses: Record<OrderStatus, string> = {
    'Active': 'bg-green-100 text-green-800',
    'Trial Started': 'bg-blue-100 text-blue-800',
    'Payment Failed': 'bg-red-100 text-red-800',
    'Cancelled': 'bg-slate-100 text-slate-800',
    'Completed': 'bg-emerald-100 text-emerald-800',
  };

  return (
    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${statusClasses[status] || 'bg-gray-100 text-gray-800'}`}>
      {status}
    </span>
  );
};

export default StatusBadge;
