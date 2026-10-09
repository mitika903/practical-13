import React from 'react';
import UserDashboard from './components/UserDashboard';

function App() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#080817] px-4 py-10 sm:px-8">
      <div className="pointer-events-none absolute left-[10%] top-[10%] h-72 w-72 rounded-full bg-violet-700/20 blur-[120px]"></div>

      <div className="pointer-events-none absolute bottom-[5%] right-[5%] h-80 w-80 rounded-full bg-cyan-600/15 blur-[130px]"></div>

      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:40px_40px]"></div>

      <div className="relative z-10 w-full">
        <UserDashboard />
      </div>
    </div>
  );
}

export default App;