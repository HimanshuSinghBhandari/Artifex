import Sidebar from "../components/Navbar/sidebar";
import ContentGenerationPage from "../components/Contentgeneration/conetent-generation";

const ContentGeneration = () => {
  return (
    <div className='flex h-screen bg-gradient-to-b from-purple-200 via-purple-400 to-purple-200 overflow-hidden'>
      <Sidebar />
      <div className='flex flex-col flex-grow overflow-hidden'>
        
          <ContentGenerationPage />
        
      </div>
    </div>
  )
}

export default ContentGeneration;
