import React, { useState, useEffect } from "react";

function YoutubeVideos() {
	const [video, setVideo] = useState([]);

	useEffect(() => {
		fetch(
			"https://www.googleapis.com/youtube/v3/search?key=AIzaSyBv_MveWxmNKF-fAAEDIy3qAIWtt0-YM1M&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=9"
		)
			.then((response) => response.json())
			.then((data) => setVideo(data.items));
	}, []);
  console.log(video)
	return (
		<div className="allVideosWrapper">
			<div className="container">
				<div className="row h-100 align-items-center justify-content-center text-center">
					<div className="col-12">
						<div className="title-wraper bold video-title-wrapper">
							Latest Videos
						</div>
					</div>
					{video.map((singleVideo, i) => (
						<div key={i} className="col-sm-12 col-md-4">
							<div className="singleVideoWrapper">
								<div className="videoThumbnail">
									<a
										href={`https://www.youtube.com/watch?v=${singleVideo.id.videoId}`}
										target="_blank"
									>
										<img src={singleVideo.snippet.thumbnails.high.url} />
									</a>
								</div>
								<div className="videoInfoWrapper">
									<div className="videoTitle">
										<a
											href={`https://www.youtube.com/watch?v=${singleVideo.id.videoId}`}
											target="_blank"
										>
											{singleVideo.snippet.title}
										</a>
									</div>
									<div className="videoDesc">
										{singleVideo.snippet.description}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default YoutubeVideos;
