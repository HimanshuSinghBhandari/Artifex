import Sidebar from "../components/Navbar/sidebar";
import BillingSection from "../components/User-Dashboard/Billing/billing-section";

const Billing = () => {
  return (
    <div className='flex h-screen bg-gray-200 overflow-hidden'>
      <Sidebar />
      <div className='flex flex-col flex-grow overflow-hidden'>
        <main className='flex-grow overflow-y-auto flex items-center justify-center'>
          <BillingSection />
        </main>
      </div>
    </div>
  )
}

export default Billing;
