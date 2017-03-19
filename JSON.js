/*
var rss = {
    channel: {
        title: "Sample",
        description: "This is from the feed.",
        link: "http://www.yahoo.com",
        copyright: "Copyright 2012 ME",
        lastBuildDate: "Nov 4, 1995",
        items: [{
            title: "An Item",
            description: "The news is great",
            link: "http://www.google.com",
            pubDate: "Dec 23, 2012"
        }]
    }
};
*/
//minimize the code rss.json.min.txt
{
    "channel": {
        "title": "Sample",
        "description": "This is from the feed.",
        "link": "http://www.yahoo.com",
        "copyright": "Copyright 2012 ME",
        "lastBuildDate": "Nov 4, 1995",
        "items": [
        {
            "title": "An Item",
            "description": "The news is great",
            "link": "http://www.google.com",
            "pubDate": "Dec 23, 2012"
        }
        ]
    }
}
//create script.js
var xhr = new XMLHttpRequest();
xhr.open("GET", "rss.json.min.txt", true);
xhr.onreadystatechange = function(){
     



















