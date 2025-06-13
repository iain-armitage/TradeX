
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white fixed left-0 top-0 p-4">
      <h2 className="text-2xl font-bold mb-6">TradeX</h2>
      <ul className="space-y-4">
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/contacts">Contacts</Link></li>
        <li><Link href="/quotes">Quotes</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/reports">Reports</Link></li>
        <li><Link href="/settings">Settings</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
