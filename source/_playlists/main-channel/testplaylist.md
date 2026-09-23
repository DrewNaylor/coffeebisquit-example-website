---
layout: playlist-contents-page
channel-link: drewnaylor
title: "Test Playlist"
thumbnail: "e70b5e51-6981-42fc-8f62-b7701ea70dd7"
video-list:
  - "big-buck-bunny-test"
  - "e70b5e51-6981-42fc-8f62-b7701ea70dd7"
  - "big-buck-bunny-test-item2"
  - "big-buck-bunny-test"
  - "e70b5e51-6981-42fc-8f62-b7701ea70dd7"
  - "big-buck-bunny-test-item2"
  - "big-buck-bunny-test"
  - "e70b5e51-6981-42fc-8f62-b7701ea70dd7"
  - "big-buck-bunny-test-item2"
  - "big-buck-bunny-test"
  - "e70b5e51-6981-42fc-8f62-b7701ea70dd7"
  - "big-buck-bunny-test-item2"
slug: "main/testplaylist-identifier"
---
This is a test playlist that will show various items on the website.<br>
For now it's just Big Buck Bunny but I added my "configure dspellcheck" video to it, too.<br>
Here is a link; unfortunately, there's no `target=_blank` for Kramdown's auto-linking so I made
an include thing that takes the link you give it and makes it an external link: {% include extlink.html url="https://drew-naylor.com" %} <br>
<br>
The videos to the side are listed in the `video-list` array above the description and everything. Putting them here was confusing but it seems to work.
<br>
<br>
In order to have a predictable path for each playlist, you can use the `slug` property and Jekyll will automatically transform it. Slashes
will be automatically replaced with dashes, for example. This property is also used for the playlist sidebar on the video page.