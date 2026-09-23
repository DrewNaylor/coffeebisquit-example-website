---
layout: video-watch-page
title:  "How to Install and Configure DSpellCheck in Notepad++ (Hunspell works again, see desc.)"
date:   2026-07-04 10:30:54 -0400
original-publish-date: 2021-01-06
categories: video
videoroot: e70b5e51-6981-42fc-8f62-b7701ea70dd7
videofilename: 9d261c66-147d-4acf-aa95-4a2280dc8249-master
videofileformat: m3u8
thumbnailfilename: dspellcheck-thumbnail.png
channel-link: drewnaylor
show-comments: "true"
comment-thread: "01KZ78V80N4SHVEJ7JA1EX05AQ"
license: "CC-BY-NC-SA"
is-hls: "true"
length: "1:00"
video-category: tech
primary-language: "English"
tags:
  - notepadplusplus
  - notepad++
  - dspellcheck
  - spell checking
  - windows
  - computers
video-id: "e70b5e51-6981-42fc-8f62-b7701ea70dd7"
privacy: "public"
thumbnail-alt-text: "DSpellCheck configuration window on top of NotepadPlusPlus window on Windows 10"
resolutions:
  1080p30:
     file: "07633162-6da6-4fe9-85f6-772ef55d1cfe-1080"
     ext: -fragmented.mp4
  720p30:
     file: "b7475aba-c450-4633-a6bf-1679cedb20f8-720"
     ext: -fragmented.mp4
  480p30:
     file: "1217cb20-676c-4960-ade3-204e198bda1b-480"
     default: true
     ext: -fragmented.mp4
  360p30:
     file: "f68cd949-206c-4682-ac88-bd1801a0c5f7-360"
     ext: -fragmented.mp4
captions:
  en:
      file: "41c5599a-f711-4c47-aada-84669e0005d9-en.vtt"
---

Testing a video that's in HLS.

Something I noticed is that with PeerTube's subtitle files, they load from the server under the "lazy-static" folder instead of a local path so you would
have to download and modify each video's subtitle files to point to a local copy of the subtitle file. However, I have changed my code to not use those m3u8 subtitle files but I might go back to that with HLS.js when I change my resolution-changing code to tell HLS.js to switch the quality level directly instead of me changing which m3u8 file is loaded. I'll still have to keep the version that loads caption files directly for non-HLS videos, though.

0:00 Beginning<br>
0:15 Random thing<br>
0:23 Another thing<br>
1:00 Ending<br>
10:00:00 Testing hours only<br>
10:43:12 Hour test<br>