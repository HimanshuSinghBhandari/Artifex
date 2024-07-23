import FrontMain from "../components/front/fron-main";
import FrontImage from "../components/front/front-image/front-image";
import FrontMarquee from "../components/front/front-marque/front-marque";
import FrontDiv from "../components/front/front-div/front-div";
import FeaturesSection from "../components/front/front-featurecard/featurecardsection";
import LogoWithOrbitingIcons from "../components/LogOrbiting/logo-circle";
import LaunchingSoonCard from "../components/front/front-featurecard/launchingcard";

const Front = () => {
  return (
    <div className="bg-gradient-to-br from-purple-700 to-indigo-900 min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col justify-center items-center mt-6 space-y-1">
        <FrontMain/>
        <FrontImage/>
        <FrontMarquee/>
        <FrontDiv/>
        <FeaturesSection />
        <div className="my-16"> {/* Added margin top and bottom */}
          <LogoWithOrbitingIcons/>
        </div>
        <div className="mb-16 mt-12"> {/* Added margin bottom */}
          <LaunchingSoonCard/>
        </div>
      </div>
    </div>
  );
};

export default Front;