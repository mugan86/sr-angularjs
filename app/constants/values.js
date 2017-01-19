'use strict';

/**
 * @ngdoc function
 * @name translationsApp.constant:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the translationsApp
 */
angular.module('serviraceApp')

.constant('OPENWEATHER_APP_ID', '"&APPID=58dda22dc16b4ec458a95a0a7f2e921d"')
.constant('YOUTUBE_API_KEY', 'AIzaSyBDMOCm6nX5P1KiotGWinHvBN3sozVjhRQ')
;

/*
public static String getTrackHtmlFromWikiloc (int id)
	{
		return "<html>"
	            + "  <head>"
	            + "  </head>"
	            + "  <body>"
	            + " <iframe frameBorder=\"0\" src=\"http://es.wikiloc.com/wikiloc/spatialArtifacts.do?event=view&id="
	            + 	id+"&measures=on&title=on&near=off&images=off&maptype=S\" width=\"100%\" height=\"100%\"></iframe>"
	            + "  </body>"
	            + "</html>";
	}

	public static String getTrackHTMLFromIbilbideak (int id)
	{

        return "<iframe height=\"100%\" style=\"height:100%;width:100%;margin:0;\" frameBorder=\"0\" src=\"http://mugibili.euskadi.eus/mugibili/minimap.do?id="+id+"\"></iframe>"
        ;
		/*return "<html>"
	            + "  <head>"
	            + "  </head>"
	            + "  <body>"
	            + "		<iframe style=\"height:100%;width:100%;margin:0;\" frameBorder=\"0\" "+
							"src=\"http://ibilbideak.euskadi.net/ibilbideak/minimap.do?id="+id+"\"></iframe>"
	            +"  </body>"
			    + "</html>";
	}

    public static String getTrackHTMLFromGPSies ()
    {
        return "<html>"
                + "  <head>"
                + "  </head>"
                + "  <body>"
                +"          <iframe src=\"http://www.gpsies.com/mapOnly.do?fileId=nzdgcgtzcodionmq\" "+
                            "width=\"100%\" height=\"100%\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\"></iframe>"
                +"  </body>"
                + "</html>";
    }
*/