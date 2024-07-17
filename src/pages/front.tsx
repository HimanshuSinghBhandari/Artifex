import Navbar from "../components/Navbar/navbar"
import FrontMain from "../components/front/fron-main"

const Front = () => {
  return (
    <div className=" bg-gradient-to-br from-purple-700 to-indigo-900 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex justify-center items-center mt-6">
        <FrontMain />
      </div>
    </div>
  )
}

export default Front
