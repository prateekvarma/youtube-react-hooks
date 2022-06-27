import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('metallica'); //destructures out the list of videos, and the function to search videos - from useVideos.js custom hook.

  useEffect(() => {
    //This essentially set's the first video as the selected video, from each new list of rendered videos.
    setSelectedVideo(videos[0]);
  }, [videos])

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              onVideoSelect={onVideoSelect} //this is a prop
              videos={videos}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
