const ffmpeg = require("ffmpeg");

try {
  var process = new ffmpeg("./videos/example.avi");
  process.then(
    async (video) => {
      video
        .setVideoStartTime("00:00:05")
        .setVideoDuration("10")
        .save("./resized/example-video.avi", (error) => {
          if (error) {
            console.error(error);
          }
        });

      // Video metadata
      console.log(video.metadata);
      // FFmpeg configuration
      console.log(video.info_configuration);
    },
    function (err) {
      console.log("Error: " + err);
    }
  );
} catch (e) {
  console.log(e.code);
  console.log(e.msg);
}
