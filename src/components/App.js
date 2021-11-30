import video from "../data/video.js";

import Votes from "./Votes.js";
import CommentCard from "./CommentCard.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <div>
        <iframe
          width="919"
          height="525"
          src={video.embedUrl}
          frameBorder="0"
          allowFullScreen
          title={video.title}
        />
        <h1>{video.title}</h1>
        <p>{video.views} Views | Uploaded {video.createdAt}</p>
      </div>
      <Votes 
        upvotes={video.upvotes}
        downvotes={video.downvotes}
      />
      <br />
      <CommentCard 
        comments={video.comments}
      />
    </div>
  );
}

export default App;
