import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="p-4">
        <h1 className="text-2xl font-bold">Welcome to TradeX Dashboard</h1>
        <p>This is the starting point of your Next.js + Tailwind app.</p>
      </div>
    </Layout>
  );
}
import Sidebar from './Sidebar';
import Topbar from './Topbar';

export default function Layout({ children }) {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Topbar />
        <main className="p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
