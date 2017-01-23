'use strict';

angular.module('serviraceApp')


.service('youtubeServices', function youtubeServices($http, YOUTUBE, requestService) {

    return {
      
      getPlayLists: function(items) {

        var url = YOUTUBE.url + "playlists?part=snippet" + YOUTUBE.channelId + "&maxResults=" + items + YOUTUBE.apiKey;

        console.log(url);

        return $http.get(url).success(

            function(resp)
            {
              //console.log(resp);
              return resp;
            }
        );
      },

      getSelectPlayListVideos: function(id, items) {

        var url = YOUTUBE.url + "playlistItems?part=snippet" + "&playlistId=" + id + "&maxResults=" + items + YOUTUBE.apiKey;

        //https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLFjjfF0vHULYRlHnw8MCr3L4KUAGktyQ4&key=AIzaSyDjSQp1NtdHgtAZT2_3gQADTnmpeppYdk8

        console.log(url);

        return $http.get(url).success(

            function(resp)
            {
              //console.log(resp);
              return resp;
            }
        );
      },

      getUploadVideos: function() {

        var local = 'files/blogak.json';

        return $http.get(local).success(

            function(resp)
            {
              //console.log(resp);
              return resp;
            }
        );
      },

      getLastNumberVideos: function (items, channel) {
      	var channelId = YOUTUBE.runneaChannelId;
		if (channel === 2)
		{
			channelId = YOUTUBE.mugan86ChannelId;
		}
		else if (channel === 3)
		{
			channelId = YOUTUBE.entrenoDelDiaChannelId;
		}
        var url = YOUTUBE.url + "search?part=snippet" + channelId + "&maxResults=" + items + "&order=date" + YOUTUBE.apiKey;
        console.log(url);

        //https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCTh7-deUJBNv2tHRiMGcXxg&maxResults=50&order=date&key=AIzaSyDjSQp1NtdHgtAZT2_3gQADTnmpeppYdk8

        return requestService.GetRequest(url);
        
      },

      getMoreVideosIfExist: function(token, items, channel)
      {
		var channelId = YOUTUBE.runneaChannelId;
		if (channel === 2)
		{
			channelId = YOUTUBE.mugan86ChannelId;
		}
		else if (channel === 3)
		{
			channelId = YOUTUBE.entrenoDelDiaChannelId;
		}
      	var url = YOUTUBE.url + "search?part=snippet" + channelId + "&maxResults=" + items + "&pageToken=" + token + YOUTUBE.apiKey;
//      	return requestService.GetRequest(url);
      	//https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UCTOlN_wxzEUwQMLt8Cu--wg&maxResults=50&pageToken=CDIQAQ&key=AIzaSyDjSQp1NtdHgtAZT2_3gQADTnmpeppYdk8
      	return requestService.GetRequest(url);
      },

      getSelectVideo: function(id) {

        var url = YOUTUBE.url + "videos?part=snippet,contentDetails,statistics,status&id=" + id + YOUTUBE.apiKey;
        //https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics,status&id=ouDu6REA1ZU&key=AIzaSyDjSQp1NtdHgtAZT2_3gQADTnmpeppYdk8
        console.log(url);
        return $http.get(url).success(

            function(resp)
            {
              //console.log(resp);
              return resp;
            }
        );
      },

      //gehiago gehitu daitezke...
    };
  });