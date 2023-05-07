import MoreVideosSlider from "../MoreVideos/MoreVideosSlider"


const MoreVideos = () => {
    return (
        <div className="mt-36">
            <h4 className="card_header mb-5">
                Move Videos
            </h4>
            <div className="border border-blue-500 border-md"></div>
            <MoreVideosSlider></MoreVideosSlider>
        </div>
    );
};

export default MoreVideos;