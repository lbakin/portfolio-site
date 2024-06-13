// pages/index.js
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="bg-cover bg-center text-white min-h-screen" style={{ backgroundImage: 'url(/images/Welcome.png)' }}>
        <div className="flex flex-col justify-center items-center h-full bg-gray-900 bg-opacity-50 ">
          <h1 className="text-4xl font-bold text-white">Welcome to the Nature Trail</h1>
          <p className="text-xl">Start your journey through my professional landscape.</p>
        </div>
      </div>
    </Layout>
  );
}
