
import Layout from '../components/Layout';

export default function Dashboard() {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <div className="bg-white p-4 shadow rounded-lg">
          <h3 className="text-lg font-semibold">Quotes Submitted</h3>
          <p className="text-3xl mt-2">24</p>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h3 className="text-lg font-semibold">Projects In Progress</h3>
          <p className="text-3xl mt-2">8</p>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h3 className="text-lg font-semibold">Tasks Due This Week</h3>
          <p className="text-3xl mt-2">14</p>
        </div>
      </div>
    </Layout>
  );
}
