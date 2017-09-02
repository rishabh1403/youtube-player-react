import React from 'react';
import VideoListItem from './video_list_item';
const VideoList = (props) => {
    const videos = props.videos;
    const videoItem = videos.map(item => {
        return <VideoListItem onVideoClick={props.onVideoSelect.bind(this)} key={item.etag} video={item} />
    })
    return (
        <ul className="col-md-4 list-group">
            {videoItem}
        </ul>
    )
}

export default VideoList;