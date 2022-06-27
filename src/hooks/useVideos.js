import { useState, useEffect } from "react";
import youtube from '../apis/youtube'

//Below is a custom Hook : They take an input, and give an output.
const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm);
      }, [defaultSearchTerm]);

      const search = async (term) => {
        const response = await youtube.get("/search", {
          params: {
            q: term,
          },
        });
    
        setVideos(response.data.items);
      };

      return [videos, search]
};

export default useVideos;