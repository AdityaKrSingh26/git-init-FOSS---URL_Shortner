import React, { useState, useEffect } from 'react';
import ResultTable from './ResultTable';
import copyIcon from '../Assets/copy.svg';
import toast from 'react-hot-toast';
import axios from 'axios';
import "./Global.css"
import ThemeToggleButton from './ThemeToggleButton';

function Home() {
  const [longUrl, setLongUrl] = useState('');
  const [shortId, setShortId] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [analyticsData, setAnalyticsData] = useState(null);
  const [ipInfo, setIpInfo] = useState(null);
  const [loading, setLoading] = useState(false); // Add loading state

  useEffect(() => {
    if (shortId) {
      toast.success('Short URL generated successfully')
      setShortUrl(`url-jbe7.onrender.com/${shortId}`);
      handleGetAnalytics();
      handleGetIpInfo();
    }
  }, [shortId]);

  async function copyRoomId() {
    try {
      await navigator.clipboard.writeText(shortUrl);
      toast.success('Short URL copied to your clipboard');
    } catch (err) {
      toast.error('Could not copy the Short URL');
      console.error(err);
    }
  }

  const handleGenerateShortUrl = async () => {
    setLoading(true); // Set loading to true when submitting
    try {
      console.log("Long URL : ", longUrl);
      const response = await axios.post('https://url-jbe7.onrender.com/api/v1/url', { url: longUrl });
      console.log("Generate URL: ", response.data);
      setShortId(response.data.id);
    } catch (error) {
      toast.error('Error generating short URL');
      console.error('Error generating short URL:', error);
    } finally {
      setLoading(false); // Set loading to false when request is complete
    }
  };

  const handleGetAnalytics = async () => {
    try {
      const response = await axios.get(`https://url-jbe7.onrender.com/api/v1/url/analytics/${shortId}`);
      console.log("Handle analytics : ", response.data);
      setAnalyticsData(response.data);
    } catch (error) {
      console.error('Error fetching analytics data:', error);
    }
  };

  const handleGetIpInfo = async () => {
    try {
      const response = await axios.get(`https://url-jbe7.onrender.com/api/v1/ip/getInfo/${shortId}`);
      console.log("GET IP Info: ", response.data);
      setIpInfo(response.data);
    } catch (error) {
      console.error('Error fetching IP information:', error);
    }
  };

  return (
    <div>
      <ThemeToggleButton />
      <div className="home-wrapper">
        <div className="heading-text">
          <h1>Short links, Magical results</h1>
          <h3>Your loooong links will be shortened by a click!</h3>
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            name="url"
            id="url"
            className='input'
            placeholder='Enter your link here'
            value={longUrl} onChange={(e) => setLongUrl(e.target.value)}
          />
          {loading ? ( // Show loading indicator if loading is true
            <div>Loading...</div>
          ) : (
            (!ipInfo) && (
              <button
                type="submit"
                className='submit-btn'
                onClick={handleGenerateShortUrl}
              >
                Submit
              </button>
            )
          )}

          {(shortId && ipInfo) && (
            <div className="after-submit">
              <div className="short-url">
                <p className="text-area">{shortUrl}</p>
                <button className='copy-btn' onClick={copyRoomId}>
                  <img src={copyIcon} alt="Copy icon" />
                </button>
              </div>
              <div className="result-wrapper">
                <ResultTable ipInfo={ipInfo} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
