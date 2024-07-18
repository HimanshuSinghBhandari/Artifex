import Sidebar from "../components/Navbar/sidebar";
import SearchBox from "../components/Searchbox/searchbox";
import UserProfileDropdown from "../components/User-Dashboard/user-dashboard";
import UserHeading from "../components/User-Dashboard/user-heading";

const Dashboard = () => {
  return (
    <div className='flex min-h-screen bg-gray-200'>
      <Sidebar />
      <div className='flex flex-col flex-grow'>
        <header className='p-4 flex items-center justify-between'>
          <div className='w-1/4'></div> {/* Empty div for spacing */}
          <div className='w-1/2 max-w-md'>
            <SearchBox />
          </div>
          <div className='w-1/4 flex justify-end'>
            <UserProfileDropdown />
          </div>
        </header>
        <main className='flex-grow p-6'>
          {/* Your main dashboard content goes here */}
          <UserHeading/>
          <h1 className='text-2xl font-bold mb-4'>Dashboard</h1>
          {/* Add more dashboard components or content as needed */}
        </main>
      </div>
    </div>
  )
}

export default Dashboard;