import video from "../data/video.js";
import VideoFrame from "./VideoFrame";

function App() {
  console.log("Here's your data:", video);

  return (
    <>
    <VideoFrame video={video} />
    </>
  );
}

export default App;
