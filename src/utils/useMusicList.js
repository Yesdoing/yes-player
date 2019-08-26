import { useState, useEffect } from 'react';
import axios from 'axios';
require('dotenv').config();

export default function useMusicList(keyword) {
  const [resolved, setResolved] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchByTerm, setSearchTerm] = useState(keyword);

  const fetchData = async () => {
    if(searchByTerm === "") return;
    setLoading(true);
    try {
       const { data: { items } } = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${searchByTerm}&type=video&key=${process.env.REACT_APP_API_KEY}`);
       
       const youtubeIdList = items.map(item => item.id.videoId).join(',');
       const { data: { items: results }} = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${youtubeIdList}&key=${process.env.REACT_APP_API_KEY}`);
       console.log(results);
       const data = results && results.length > 0 && results.map( item => ({
          id: item.id,
          ...item.snippet.localized,
          thumbnails: item.snippet.thumbnails.high.url,
          viewCount: item.statistics.viewCount,
          duration: item.contentDetails.duration,
          channelTitle: item.snippet.channelTitle
       }));
      setResolved(data);
    } catch (e) {
      console.log(e);
      setError("Ouccured Error");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [searchByTerm]);

  return [loading, resolved, error, setSearchTerm];
}

/*
    
import defaultAxios from "axios";
import { useState, useEffect } from "react";

export const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null
  });
  const [trigger, setTrigger] = useState(0);
  if (!opts.url) {
    return;
  }
  const refetch = () => {
    setState({
      ...state,
      loading: true
    });
    setTrigger(Date.now());
  };
  useEffect(() => {
    axiosInstance(opts)
      .then(data => {
        setState({
          ...state,
          loading: false,
          data
        });
      })
      .catch(error => {
        setState({ ...state, loading: false, error });
      });
  }, [trigger]);
  return { ...state, refetch };
};
*/