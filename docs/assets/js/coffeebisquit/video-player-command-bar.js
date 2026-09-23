// We have to add an event listener to the checkboxes:
// https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/checkbox#javascript
// TODO: put all my video player command bar JS into one JS "script" element to reduce duplicated stuff and
// make it easier to move it to a .js file that we just import here.
// Also the JS stuff has to be after the HTML elements are defined or this won't work.
const checkboxLoopVideo = document.querySelector("#checkbox-loop-video");
const checkboxTheaterMode = document.querySelector("#checkbox-theater-mode");
const videoPlayer = document.querySelector("#video-player-control");

// Loop toggle; see: https://stackoverflow.com/a/26710054 under CC BY-SA 3.0
// TODO: Remember to hook up the Firefox video element context menu to this
// so that the current state is reflected in the command bar.
checkboxLoopVideo.addEventListener("change", () => {
    if (checkboxLoopVideo.checked) {
        videoPlayer.loop = true;
    } else {
        videoPlayer.loop = false;
    }
});

// Theater mode toggle.
checkboxTheaterMode.addEventListener("change", () => {
    console.log(videoPlayer.width);
    if (checkboxTheaterMode.checked) {
        // We have to set its height attribute: https://stackoverflow.com/a/14869485 under CC BY-SA 4.0.
        videoPlayer.setAttribute("width", "100%");
    } else {
        // We have to set its height attribute: https://stackoverflow.com/a/14869485 under CC BY-SA 4.0.
        // TODO: Figure out how to get the command bar to be the width of the video even when not using "float right" in theater mode and
        // set the default video width to 60%.
        videoPlayer.setAttribute("width", "55%");
    }
});

// Video speed playback script; see: https://stackoverflow.com/a/26710054 under CC BY-SA 3.0
function videoSpeedChange(value)
{
    var videoPlayer = document.getElementById("video-player-control");
    // It's "playbackRate", not "speed"; https://stackoverflow.com/a/39795551 under CC BY-SA 3.0.
    videoPlayer.playbackRate = value;
}

// Video resolution change script; see: https://stackoverflow.com/a/26710054 under CC BY-SA 3.0
function videoResolutionChange(value, videofilename, videoroot, baseurl)
{
    var videoPlayer = document.getElementById("video-player-control");
    
    // Get the video player's current time.
    // Turns out it's "currentTime", not "time":
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/video
    // Mentioned on that MDN page but it doesn't have a thing that's directly
    // to "currentTime".
    var currentTime = videoPlayer.currentTime;
    // Checking if it's paused is more reliable than checking if
    // it's playing. I got the "paused" thing from the MDN thing above, too.
    var isPaused = videoPlayer.paused;
    // Get current video speed setting to re-apply it.
    var currentVideoSpeedSetting = videoPlayer.playbackRate;
    
    // Create a new hls thing to re-attach the video player to.
    // Maybe this isn't necessary but it probably is since the hls.js documentation
    // says it gives you a global "HLs()" item to use.
    // TODO/BUG: Figure out why when changing the resolution, the captions don't show up. I
    //           wonder if it's because the separate m3u8 files don't have a thing specifying
    //           that they use a certain caption file.
    //           Maybe that will require manually loading the caption file, I don't know
    //           and I don't like that. Ideally there would be a way to pick a different m3u8 file
    //           and keep the captions somehow.
    // The rendering tracks natively has to not be enabled here, too, just like in video-player.html.
    var hls = new Hls({ 
        renderTextTracksNatively: false  
    });
    // Set the hls.js source to a different resolution.
    // Copying from the existing hls.js script tag block.
    // TODO: Add support for non-hls.js video file resolution changing.
    if (value == "auto")
    {
        hls.loadSource(baseurl + '/storage/video-storage/' + videoroot + '/' + videofilename + '.m3u8');
    } else {
        hls.loadSource(baseurl + '/storage/video-storage/' + videoroot + '/' + value + '.m3u8');
    }
    
    console.log(videoPlayer.src)
    
    hls.attachMedia(videoPlayer);
    
    // Reset the video player's time.
    videoPlayer.currentTime = currentTime;
    if (!isPaused)
    {
        // Only keep playing the video if it wasn't paused.
        videoPlayer.play();
    }
    
    // Re-apply video speed setting.
    videoPlayer.playbackRate = currentVideoSpeedSetting;
    
    // Re-apply loop status.
    // Actually I don't know if that is necessary.
    // TODO: Implement that if it's necessary.
}
