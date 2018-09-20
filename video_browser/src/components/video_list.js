import React from 'react';
import VideoItem from './video_list_item';

const VideoList = props => {
  const videoItems = props.videos.map(v => (
    <VideoItem onVideoSelect={props.onVideoSelect} key={v.etag} video={v} />
  ));
  return (
    <ul className='col-md-4 list-group text-secondary'>
      {videoItems}
    </ul>
  );
};

export default VideoList;