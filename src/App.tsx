import React from "react";
import "./App.css";
import AvatarView from "@sarge/avatar-view";

function App() {
  return (
    <div className="App">
      <AvatarView
        rotateAvatar
        eyeBlink
        headMovement
        style={{
          width: "400px",
          height: "400px",
          backgroundColor: "orange",
          borderRadius: "100%",
        }}
        url={
          "https://d1a370nemizbjq.cloudfront.net/264909db-a426-41ee-89f6-607b5e0ba6aa.glb"
        }
      />
    </div>
  );
}

export default App;
