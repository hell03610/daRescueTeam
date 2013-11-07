
var readTweets = function(feed){
    var raw = feed.querySelectorAll('.tweet');
    var tweets = [];
    for(var i=0;i < raw.length; i++){
        var tuit = {
            text: raw[i].querySelector('.e-entry-title').textContent,
            when: new Date(raw[i].querySelector('time').getAttribute('datetime')),
            link: raw[i].querySelector('.u-url').getAttribute('href')
        };
        tweets.push(tuit);
    }

    return tweets;
}

var getTweetMarkup = function(tweet){

    var when = '';
    if (!isNaN(tweet.when.getTime())) {
        when = tweet.when.toDateString();
    }

    var markup = DIV({'class':'pure-u-1-3'},
            DIV({'class':'l-box'},
              P({'class':'tweet'}, 
                I({'class':'icon-quote-left'}),
                tweet.text,
                I({'class':'icon-quote-right'})
                ),
              DIV({'class':'pure-u-1-2 when'}, when),
              DIV({'class':'pure-u-1-2 link'}, 
                A({'href':tweet.link, 'target':'_blank'},
                    I({'class':'icon-twitter'}),
                    "View"
                    )
                )
            )
        );

    return markup;
}

setTimeout(function(){
    var feed = document.querySelector('#twitter-widget-0').contentDocument.querySelector('.h-feed');
    var tweets = readTweets(feed);
    var maxtweets = (tweets.length > 6)?6:tweets.length;
    
    var timeline = document.querySelector('#timeline');
    
    timeline.innerHTML = '';
    for(var i=0;i<maxtweets;i++){
        var tweet = tweets[i];
        var markup = getTweetMarkup(tweet);
        timeline.appendChild(markup);
    }
}, 5000);

!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");