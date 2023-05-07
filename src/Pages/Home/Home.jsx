import Banner from "./Banner";
import Business from "./Business";
import ClientFeedback from "./ClientFeedback";
import CustomerReview from "./CustomerReview";
import FirstChoice from "./FirstChoice";
import MoreVideos from "./MoreVideos/MoreVideos";
import OthersAgency from "./OthersAgency";
import SEOService from "./Service/SEOService";
import WebDesign from "./WebDesign";

const Home = () => {
  return (
    <div>
      <Banner />
      <ClientFeedback />
      <div className="max-w-[1200px] mx-auto">
        <CustomerReview />
        <MoreVideos />
        <SEOService />
        <OthersAgency />
      </div>
      <FirstChoice />
      <div className="max-w-[1200px] mx-auto">
        <WebDesign />
      </div>
      <Business />
    </div>
  );
};

export default Home;
