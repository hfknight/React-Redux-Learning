import React from 'react';

const VideoItem = ({video, onVideoSelect}) => {
  const imgSrc = video.snippet.thumbnails.default.url;
  return (
    <li className='list-group-item' onClick={() => onVideoSelect(video)}>
      <div className='video-list media'>
        <div className='media-left'>
          <img className='media-object' src={imgSrc} />
        </div>
        <div className='media-body'>
          <div className='media-heading'>{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;