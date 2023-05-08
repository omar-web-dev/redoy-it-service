import MoreVideosSlider from "../MoreVideos/MoreVideosSlider";

const MoreVideos = () => {
  return (
    <div className="mt-36 md:mt-20">
      <h4 className="card_header mb-5 px-3">Move Videos</h4>
      <div className="border border-blue-500 border-md"></div>
      {/* desktop slider */}
      <div className="hidden md:block">
        <MoreVideosSlider />
      </div>
      {/* mobile slider */}
      <div className="md:hidden">
        <MoreVideosSlider />
      </div>
    </div>
  );
};

export default MoreVideos;
