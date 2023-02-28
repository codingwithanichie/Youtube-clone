import { useState, useEffect } from "react";
import { Box, Typography } from '@mui/material'
import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";


const SearchFeed = () => {

// VIDEO STATE
  const [videos, setVideos] = useState([])

// THIS 'searchTerm' REPLACES THE SEARCHFEED LINK
  const { searchTerm } = useParams();


// FUNCTION TO RUN CATEGORY AND VIDEO STATE
  useEffect( () => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data) => setVideos(data.items))
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: 'auto',height: '90vh', flex: 2}}>
      <Typography variant="h4" fontWeight='bold' mb={2} sx={{ color: 'white'}}>
          Search Results for: <span style={{ color: '#f31503'}}>{searchTerm}</span> videos
      </Typography>
{/* VIDEO DISPLAY */}
      <Videos videos={videos} />
    </Box>
  )
}

export default SearchFeed;