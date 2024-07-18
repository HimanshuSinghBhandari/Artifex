import Sidebar from "../components/Navbar/sidebar";
import CompanyDocument from "../components/Document/document-artifex";

const Document = () => {
  return (
    <div className='flex h-screen bg-gray-200 overflow-hidden'>
      <Sidebar />
      <div className='flex flex-col flex-grow overflow-hidden'>
        <main className='flex-grow overflow-y-auto flex items-center justify-center'>
          <CompanyDocument />
        </main>
      </div>
    </div>
  )
}

export default Document;
