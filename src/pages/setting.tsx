import Sidebar from "../components/Navbar/sidebar";
import Settings from "../components/Setting/setting-sec";

const SettingSec = () => {
  return (
    <div className='flex h-screen bg-gray-200 overflow-hidden'>
      <Sidebar />
      <div className='flex flex-col flex-grow overflow-hidden'>
        <main className='flex-grow overflow-y-auto flex items-center justify-center'>
          <Settings />
        </main>
      </div>
    </div>
  )
}

export default SettingSec;
