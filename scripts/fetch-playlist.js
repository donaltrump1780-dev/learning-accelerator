// Fetch YouTube playlist information
const https = require('https');

const playlistId = 'PLQRyiBCWmqp5twpd8Izmaxu5XRkxd5yC-';
const playlistUrl = `https://www.youtube.com/playlist?list=${playlistId}`;

https.get(playlistUrl, (res) => {
  let data = '';
  
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    // Extract video information from the page HTML
    const videoMatches = data.matchAll(/"videoId":"([^"]+)"/g);
    const titleMatches = data.matchAll(/"title":{"runs":\[{"text":"([^"]+)"/g);
    const durationMatches = data.matchAll(/"lengthText":{"simpleText":"([^"]+)"/g);
    
    const videoIds = [...videoMatches].map(m => m[1]);
    const titles = [...titleMatches].map(m => m[1]);
    const durations = [...durationMatches].map(m => m[1]);
    
    // Get first 20 videos
    const videos = [];
    for (let i = 0; i < Math.min(20, videoIds.length); i++) {
      videos.push({
        index: i + 1,
        videoId: videoIds[i],
        title: titles[i] || 'Unknown',
        duration: durations[i] || 'Unknown',
        url: `https://www.youtube.com/watch?v=${videoIds[i]}`
      });
    }
    
    console.log(JSON.stringify(videos, null, 2));
  });
}).on('error', (err) => {
  console.error('Error:', err.message);
});
