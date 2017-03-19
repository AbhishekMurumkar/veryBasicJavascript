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

xhr.open("POST", "rss.json.min.txt", true);
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        var status = xhr.status;

        if ((status >= 200 & status < 300) status === 304) {
            var rss = JSON.parse(xhr.responseText);
            alert(xhr.responseText);
        }
    }
};
xhr.send(null);



















