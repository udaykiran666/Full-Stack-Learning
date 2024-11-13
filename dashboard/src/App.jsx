import { useState } from 'react';
import { RevenueCard } from './components/RevenueCard';
import { SideBar } from './components/SideBar';
import { OverviewCard } from './components/OverviewCard';

function App() {
  const [count, setCount] = useState(0);

  return (

    <div className="flex h-screen overflow-hidden">
      <div className="w-64">
        <SideBar />
      </div>
      <div className="flex-1 p-8 bg-white-100 overflow-y-auto">
          <div className="grid mt-auto mb-7">
            <OverviewCard />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <RevenueCard title="Next Payout" amount="2,312.23" orderCount={23} additionalText="Next payout date: Today, 04:00 PM"/>
            <RevenueCard title="Amount Pending" amount="92,312.20" orderCount={13}/>
            <RevenueCard title="Amount Processed" amount="23,92,312.19"/>
          </div>
        </div>
      </div>
  );
}

export default App;
