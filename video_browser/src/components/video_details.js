import React from 'react';

const VideoDetail = ({video}) => {
  if(!video) {
    return <div>Loading Video ...</div>;
  }

  const videoId = video.id.videoId;
  const vUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className='video-detail col-md-8'>
      <div className='embed-responsive embed-responsive-16by9'>
        <iframe className='embed-responsive-item' src={vUrl}></iframe>
      </div>
      <div className='details text-info'>
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;