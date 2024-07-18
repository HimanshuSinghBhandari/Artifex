import { useState } from "react";
import Sidebar from "../components/Navbar/sidebar";
import SearchBox from "../components/Searchbox/searchbox";
import UserProfileDropdown from "../components/User-Dashboard/user-dashboard";
import UserHeading from "../components/User-Dashboard/user-heading";
import CardGrid from "../components/User-Dashboard/Card/user-card-grid";
import BillingSection from "../components/User-Dashboard/Billing/billing-section";

const Dashboard = () => {

    const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <div className='flex h-screen bg-gray-200 overflow-hidden'>
      <Sidebar />
      <div className='flex flex-col flex-grow overflow-hidden'>
        <header className='p-4 flex items-center justify-between'>
          <div className='w-1/4'></div> {/* Empty div for spacing */}
          <div className='w-1/2 max-w-md'>
            <SearchBox onSearch={handleSearch} />
          </div>
          <div className='w-1/4 flex justify-end'>
            <UserProfileDropdown />
          </div>
        </header>
        <main className='flex-grow p-6 overflow-y-auto'>
          <UserHeading />
          <div className='mt-8'>
          <CardGrid searchTerm={searchTerm} />
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard;