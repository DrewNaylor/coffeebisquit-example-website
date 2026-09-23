---
layout: video-watch-page
title:  "Big Buck Bunny HLS test"
date:   2026-09-05 2:25:54 -0400
original-publish-date: 2016-06-08
categories: video
videoroot: big-buck-bunny-1080p-hls
videofilename: livestream
videofileformat: m3u8
thumbnailfilename: big-buck-bunny-thumbnail.png
channel-link: drewnaylor
show-comments: "false"
comment-thread: "01KZ78V80N4SHVEJ7JA1EX05AQ"
license: "CC-BY 3.0"
license-details-href: "https://peach.blender.org/about/"
is-hls: "true"
length: "0:11"
video-category: films
tags:
  - bunny
  - animals
video-id: "big-buck-bunny-hls-test"
privacy: "public"
thumbnail-alt-text: "A large, rotund, white rabbit standing in a field on a hill with green grass smiling happily at a pink butterfly on the left side of the screen with a tree in the background on the right and more hills way behind everything. It appears to be during the evening."
resolutions:
  1080p30:
     file: "livestream-1080p"
     ext: .m4s
  720p30:
     file: "livestream-720p"
     ext: .m4s
  480p30:
     file: "livestream-480p"
     default: true
     ext: .m4s
  360p30:
     file: "livestream-360p"
     ext: .m4s
---

Big Buck Bunny in HLS

I used this command to create the files from the 1080p .mov file after trimming it down in LosslessCut:

```
ffmpeg -i "./big_buck_bunny_1080p_h264-11seconds.mov" -map 0:v:0 -map 0:a:0 -map 0:v:0 -map 0:a:0 -map 0:v:0 -map 0:a:0 -map 0:v:0 -map 0:a:0 -c:v libx264 -crf 22 -c:a aac -ar 44100  -filter:v:0 scale=w=640:h=360  -maxrate:v:0 300k -b:a:0 100k  -filter:v:1 scale=w=854:h=480  -maxrate:v:1 600k -b:a:1 200k  -filter:v:2 scale=w=1280:h=720 -maxrate:v:2 1500k -b:a:2 500k  -filter:v:3 scale=w=1920:h=1080 -maxrate:v:3 3500k -b:a:3 1000k  -var_stream_map "v:0,a:0,name:360p v:1,a:1,name:480p v:2,a:2,name:720p v:3,a:3,name:1080p"  -preset fast -hls_list_size 10 -threads 0 -f hls  -hls_time 3 -hls_flags single_file -hls_playlist_type vod -hls_segment_type fmp4  -master_pl_name "livestream.m3u8" "livestream-%v.m3u8"
```

This command is a combination of these SO answers:
- https://stackoverflow.com/a/71985380 under CC BY-SA 4.0
- https://stackoverflow.com/a/45434032 under CC BY-SA 3.0
- https://stackoverflow.com/a/50296230 under CC BY-SA 4.0

Note that I had to add a fourth copy of `-map 0:v:0 -map 0:a:0` for the 1080p version. Using this command to transcode videos will require modification for each video according to resolution, aspect ratio, and frame rate.

For some reason, seeking the video a lot gives this in the Jekyll logs but I think it's fine:
```log
[2026-09-05 02:50:38] ERROR Errno::ECONNRESET: Connection reset by peer @ io_fillbuf - fd:6 
        /home/pneuma/.local/share/gem/ruby/3.4.0/gems/webrick-1.9.2/lib/webrick/httpserver.rb:82:in 'IO#eof?'
        /home/pneuma/.local/share/gem/ruby/3.4.0/gems/webrick-1.9.2/lib/webrick/httpserver.rb:82:in 'WEBrick::HTTPServer#run'
        /home/pneuma/.local/share/gem/ruby/3.4.0/gems/webrick-1.9.2/lib/webrick/server.rb:309:in 'block in WEBrick::GenericServer#start_thread'
```