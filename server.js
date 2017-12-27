//var CronJob = require('cron').CronJob;
//var c=0;
//new CronJob('* * * * * *', function() {
  //console.log('on');
//}, null, true, 'America/Los_Angeles');

require('dotenv').config();
const Snoowrap = require('snoowrap');
const Snoostorm = require('snoostorm');
// Build Snoowrap and Snoostorm clients
const r = new Snoowrap({
    userAgent: 'reddit-bot-example-node',
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    username: process.env.REDDIT_USER,
    password: process.env.REDDIT_PASS
});
const client = new Snoostorm(r);
// Configure options for stream: subreddit & results per query
const streamOpts = {
    subreddit: 'nbastreams',
    results: 25
};
var submissionStream = client.SubmissionStream(streamOpts);
//r.getSubreddit('soccerleagues').submitLink({title: 'Game Thread: Dallas Mavericks @ San Antonio Spurs (20:30:00 ET)',url: 'https://i.imgur.com/n5iOc72.gifv'});
var index;
//var group = { '0': { a: 'test81', b: 'ccccccccccccccccccccccccccccccccccccccc' }, '1': { a: 'd' }, '-1': { a: '2' }};
var group = {'0': { a: 'Game Thread: Boston Celtics @ Charlotte Hornets (19:00:00 ET)', b: '**HD** [HOME : Fox Sports Southeast - Charlotte](http://rjh.fun/play.html?league=NBA&date=2017-12-27&pk=0021700506&cdn=charlotte-hornets) | [AWAY](http://rjh.fun/play.html?league=NBA&date=2017-12-27&pk=0021700506&cdn=boston-celtics) | ads : no | mobile : yes' },'1': { a: 'Game Thread: Dallas Mavericks @ Indiana Pacers (19:00:00 ET)', b: '**HD** [HOME : Fox Sports Indiana](http://rjh.fun/play.html?league=NBA&date=2017-12-27&pk=0021700507&cdn=indiana-pacers) | [AWAY](http://rjh.fun/play.html?league=NBA&date=2017-12-27&pk=0021700507&cdn=dallas-mavericks) | ads : no | mobile : yes' },'2': { a: 'Game Thread: Washington Wizards @ Atlanta Hawks (19:30:00 ET)', b: '**HD** [HOME : Fox Sports Southeast - Atlanta](http://rjh.fun/play.html?league=NBA&date=2017-12-27&pk=0021700508&cdn=atlanta-hawks) | [AWAY](http://rjh.fun/play.html?league=NBA&date=2017-12-27&pk=0021700508&cdn=washington-wizards) | ads : no | mobile : yes' },'3': { a: 'Game Thread: New York Knicks @ Chicago Bulls (20:00:00 ET)', b: '**HD** [HOME : NBCSCH](http://rjh.fun/play.html?league=NBA&date=2017-12-27&pk=0021700509&cdn=chicago-bulls) | [AWAY](http://rjh.fun/play.html?league=NBA&date=2017-12-27&pk=0021700509&cdn=new-york-knicks) | ads : no | mobile : yes' },'4': { a: 'Game Thread: Denver Nuggets @ Minnesota Timberwolves (20:00:00 ET)', b: '**HD** [HOME : Fox Sports North](http://rjh.fun/play.html?league=NBA&date=2017-12-27&pk=0021700510&cdn=minnesota-timberwolves) | [AWAY](http://rjh.fun/play.html?league=NBA&date=2017-12-27&pk=0021700510&cdn=denver-nuggets) | ads : no | mobile : yes' },'5': { a: 'Game Thread: Brooklyn Nets @ New Orleans Pelicans (20:00:00 ET)', b: '**HD** [HOME : Fox Sports New Orleans](http://rjh.fun/play.html?league=NBA&date=2017-12-27&pk=0021700511&cdn=new-orleans-pelicans) | [AWAY](http://rjh.fun/play.html?league=NBA&date=2017-12-27&pk=0021700511&cdn=brooklyn-nets) | ads : no | mobile : yes' },'6': { a: 'Game Thread: Toronto Raptors @ Oklahoma City Thunder (20:00:00 ET)', b: '**HD** [HOME : NBA TV](http://rjh.fun/play.html?league=NBA&date=2017-12-27&pk=0021700512&cdn=oklahoma-city-thunder) | [AWAY](http://rjh.fun/play.html?league=NBA&date=2017-12-27&pk=0021700512&cdn=toronto-raptors) | ads : no | mobile : yes' },'7': { a: 'Game Thread: Cleveland Cavaliers @ Sacramento Kings (22:00:00 ET)', b: '**HD** [HOME : NBCSCA](http://rjh.fun/play.html?league=NBA&date=2017-12-27&pk=0021700513&cdn=sacramento-kings) | [AWAY](http://rjh.fun/play.html?league=NBA&date=2017-12-27&pk=0021700513&cdn=cleveland-cavaliers) | ads : no | mobile : yes' },'8': { a: 'Game Thread: Utah Jazz @ Golden State Warriors (22:30:00 ET)', b: '**HD** [HOME : NBA TV](http://rjh.fun/play.html?league=NBA&date=2017-12-27&pk=0021700514&cdn=golden-state-warriors) | [AWAY](http://rjh.fun/play.html?league=NBA&date=2017-12-27&pk=0021700514&cdn=utah-jazz) | ads : no | mobile : yes' },'9': { a: 'Game Thread: Memphis Grizzlies @ Los Angeles Lakers (22:30:00 ET)', b: '**HD** [HOME : SpecSN/SpecD](http://rjh.fun/play.html?league=NBA&date=2017-12-27&pk=0021700515&cdn=los-angeles-lakers) | [AWAY](http://rjh.fun/play.html?league=NBA&date=2017-12-27&pk=0021700515&cdn=memphis-grizzlies) | ads : no | mobile : yes' }, '-1': { a: '10' }};

submissionStream.on("submission", function(post) {
for (index = 0; index < group[-1].a; ++index) {
    if (post.title == group[index].a){
  post.reply(group[index].b);
  console.log(group[index].b);
  }}
});

const streamOptsnhl = {
    subreddit: 'NHLStreams',
    results: 25
};

var submissionStreamnhl = client.SubmissionStream(streamOptsnhl);

//r.getSubreddit('soccerleagues').submitLink({title: 'Game Thread: Dallas Mavericks @ San Antonio Spurs (20:30:00 ET)',url: 'https://i.imgur.com/n5iOc72.gifv'});


var index;
//var group = { '0': { a: 'test81', b: 'ccccccccccccccccccccccccccccccccccccccc' }, '1': { a: 'd' }, '-1': { a: '2' }};
//var group = { '0': { a: 'Game Thread: Portland Trail Blazers @ Charlotte Hornets (19:00:00 ET)', b: '**HD** [HOME](http://rjh.fun/play.html?league=NBA&date=2017-12-16&pk=0021700429&cdn=charlotte-hornets) | [AWAY](http://rjh.fun/play.html?league=NBA&date=2017-12-16&pk=0021700429&cdn=portland-trail-blazers) | ads : no | chrome : yes' }, '1' : { a : 'Game Thread: Utah Jazz @ Cleveland Cavaliers (19:30:00 ET)' , b : '**HD** [HOME](http://rjh.fun/play.html?league=NBA&date=2017-12-16&pk=0021700430&cdn=cleveland-cavaliers) | [AWAY](http://rjh.fun/play.html?league=NBA&date=2017-12-16&pk=0021700430&cdn=utah-jazz) | ads : no | chrome : yes' }, '2' : { a : 'Game Thread: Oklahoma City Thunder @ New York Knicks (19:30:00 ET)' , b : '**HD** [HOME](http://rjh.fun/play.html?league=NBA&date=2017-12-16&pk=0021700431&cdn=new-york-knicks) | [AWAY](http://rjh.fun/play.html?league=NBA&date=2017-12-16&pk=0021700431&cdn=oklahoma-city-thunder) | ads : no | chrome : yes' }, '3' : { a : 'Game Thread: Los Angeles Clippers @ Miami Heat (20:00:00 ET)' , b : '**HD** [HOME](http://rjh.fun/play.html?league=NBA&date=2017-12-16&pk=0021700432&cdn=miami-heat) | [AWAY](http://rjh.fun/play.html?league=NBA&date=2017-12-16&pk=0021700432&cdn=la-clippers) | ads : no | chrome : yes' }, '4' : { a : 'Game Thread: Milwaukee Bucks @ Houston Rockets (20:00:00 ET)' , b : '**HD** [HOME](http://rjh.fun/play.html?league=NBA&date=2017-12-16&pk=0021700433&cdn=houston-rockets) | [AWAY](http://rjh.fun/play.html?league=NBA&date=2017-12-16&pk=0021700433&cdn=milwaukee-bucks) | ads : no | chrome : yes' }, '5' : { a : 'Game Thread: Phoenix Suns @ Minnesota Timberwolves (20:00:00 ET)' , b : '**HD** [HOME](http://rjh.fun/play.html?league=NBA&date=2017-12-16&pk=0021700434&cdn=minnesota-timberwolves) | [AWAY](http://rjh.fun/play.html?league=NBA&date=2017-12-16&pk=0021700434&cdn=phoenix-suns) | ads : no | chrome : yes' }, '6' : { a : 'Game Thread: Dallas Mavericks @ San Antonio Spurs (20:30:00 ET)' , b : '**HD** [HOME](http://rjh.fun/play.html?league=NBA&date=2017-12-16&pk=0021700435&cdn=san-antonio-spurs) | [AWAY](http://rjh.fun/play.html?league=NBA&date=2017-12-16&pk=0021700435&cdn=dallas-mavericks) | ads : no | chrome : yes' }, '7' : { a : 'Game Thread: Boston Celtics @ Memphis Grizzlies (21:00:00 ET)' , b : '**HD** [HOME](http://rjh.fun/play.html?league=NBA&date=2017-12-16&pk=0021700436&cdn=memphis-grizzlies) | [AWAY](http://rjh.fun/play.html?league=NBA&date=2017-12-16&pk=0021700436&cdn=boston-celtics) | ads : no | chrome : yes' }, '-1': { a: '8' }};
  submissionStreamnhl.on("submission", function(post) {
//for (index = 0; index < group[-1].a; ++index) {
    if (post.title == "Game Thread: Wild at Blackhawks 7:00 PM ET"){
  post.reply("**HD** [Home](http://rjh.fun/play.html?league=NHL&date=2017-12-17&id=55247103&pk=2017020508) | [AWAY](http://rjh.fun/play.html?league=NHL&date=2017-12-17&id=55247203&pk=2017020508) | ads : no | mobile : yes");
  console.log("done nhl");
  }
  //}
});

const streamOptsnfl = {
    subreddit: 'nflstreams',
    results: 25
};

var submissionStreamnfl = client.SubmissionStream(streamOptsnfl);


var indexc;
var groups = {'0': {a: 'Game Thread: Jacksonville Jaguars (10-4) vs San Francisco 49ers (4-10) (01:00pm ET)',
                    b: '**HD** [Adaptative @4500kbps](http://rjh.fun/play.html?league=NFL&pk=2017122409&date=2017-12-24&cdn=san-francisco-49ers-vs-jacksonville-jaguars) | mobile : yes | ads : no' },
              '1': {a: 'Game Thread: New York Giants (2-12) vs Arizona Cardinals (6-8) (01:00pm ET)',
                    b: '**HD** [Adaptative @4500kbps](http://rjh.fun/play.html?league=NFL&pk=2017122410&date=2017-12-24&cdn=arizona-cardinals-vs-new-york-giants) | mobile : yes | ads : no' },
              '2': { a: 'Game Thread: Seattle Seahawks (8-6) vs Dallas Cowboys (8-6) (01:00pm ET)', b: '**HD** [Adaptative @4500kbps](http://rjh.fun/play.html?league=NFL&pk=2017122411&date=2017-12-24&cdn=dallas-cowboys-vs-seattle-seahawks) | mobile : yes | ads : no' },'3': { a: 'Game Thread: Tampa Bay Buccaneers (4-11) vs Carolina Panthers (11-4) (01:00pm ET)', b: '**HD** [Adaptative @4500kbps](http://rjh.fun/play.html?league=NFL&pk=2017122400&date=2017-12-24&cdn=carolina-panthers-vs-tampa-bay-buccaneers) | mobile : yes | ads : no' },'4': { a: 'Game Thread: Cleveland Browns (0-15) vs Chicago Bears (5-10) (01:00pm ET)', b: '**HD** [Adaptative @4500kbps](http://rjh.fun/play.html?league=NFL&pk=2017122401&date=2017-12-24&cdn=chicago-bears-vs-cleveland-browns) | mobile : yes | ads : no' },'5': { a: 'Game Thread: Detroit Lions (8-7) vs Cincinnati Bengals (6-9) (01:00pm ET)', b: '**HD** [Adaptative @4500kbps](http://rjh.fun/play.html?league=NFL&pk=2017122402&date=2017-12-24&cdn=cincinnati-bengals-vs-detroit-lions) | mobile : yes | ads : no' },'6': { a: 'Game Thread: Miami Dolphins (6-9) vs Kansas City Chiefs (9-6) (01:00pm ET)', b: '**HD** [Adaptative @4500kbps](http://rjh.fun/play.html?league=NFL&pk=2017122403&date=2017-12-24&cdn=kansas-city-chiefs-vs-miami-dolphins) | mobile : yes | ads : no' },'7': { a: 'Game Thread: Buffalo Bills (8-7) vs New England Patriots (12-3) (01:00pm ET)', b: '**HD** [Adaptative @4500kbps](http://rjh.fun/play.html?league=NFL&pk=2017122404&date=2017-12-24&cdn=new-england-patriots-vs-buffalo-bills) | mobile : yes | ads : no' },'8': { a: 'Game Thread: Atlanta Falcons (9-6) vs New Orleans Saints (11-4) (01:00pm ET)', b: '**HD** [Adaptative @4500kbps](http://rjh.fun/play.html?league=NFL&pk=2017122405&date=2017-12-24&cdn=new-orleans-saints-vs-atlanta-falcons) | mobile : yes | ads : no' },'9': { a: 'Game Thread: Los Angeles Chargers (8-7) vs New York Jets (5-10) (01:00pm ET)', b: '**HD** [Adaptative @4500kbps](http://rjh.fun/play.html?league=NFL&pk=2017122406&date=2017-12-24&cdn=new-york-jets-vs-los-angeles-chargers) | mobile : yes | ads : no' },'10': { a: 'Game Thread: Los Angeles Rams (11-4) vs Tennessee Titans (8-7) (01:00pm ET)', b: '**HD** [Adaptative @4500kbps](http://rjh.fun/play.html?league=NFL&pk=2017122407&date=2017-12-24&cdn=tennessee-titans-vs-los-angeles-rams) | mobile : yes | ads : no' },'11': { a: 'Game Thread: Denver Broncos (5-10) vs Washington Redskins (7-8) (01:00pm ET)', b: '**HD** [Adaptative @4500kbps](http://rjh.fun/play.html?league=NFL&pk=2017122408&date=2017-12-24&cdn=washington-redskins-vs-denver-broncos) | mobile : yes | ads : no' },'12': { a: 'Game Thread: Pittsburgh Steelers (11-3) vs Houston Texans (4-10) (01:00pm ET)', b: '**HD** [Adaptative @4500kbps](http://rjh.fun/play.html?league=NFL&pk=2017122500&date=2017-12-25&cdn=houston-texans-vs-pittsburgh-steelers) | mobile : yes | ads : no' },'13': { a: 'Game Thread: Oakland Raiders (6-8) vs Philadelphia Eagles (12-2) (01:00pm ET)', b: '**HD** [Adaptative @4500kbps](http://rjh.fun/play.html?league=NFL&pk=2017122501&date=2017-12-25&cdn=philadelphia-eagles-vs-oakland-raiders) | mobile : yes | ads : no' },'14': { a: 'Game Thread: Indianapolis Colts (3-12) vs Baltimore Ravens (9-6) (01:00pm ET)', b: '**HD** [Adaptative @4500kbps](http://rjh.fun/play.html?league=NFL&pk=2017122300&date=2017-12-23&cdn=baltimore-ravens-vs-indianapolis-colts) | mobile : yes | ads : no' },'15': { a: 'Game Thread: Minnesota Vikings (12-3) vs Green Bay Packers (7-8) (01:00pm ET)', b: '**HD** [Adaptative @4500kbps](http://rjh.fun/play.html?league=NFL&pk=2017122301&date=2017-12-23&cdn=green-bay-packers-vs-minnesota-vikings) | mobile : yes | ads : no' },
              '-1': {a:'16'}};
    submissionStreamnfl.on("submission", function(post) {
for (indexc = 0; indexc < groups[-1].a; ++indexc) {
    if (post.title == group[indexc].a){
  post.reply(groups[indexc].b);
  console.log(groups[indexc].b);
  }}
});

  var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('we are on the road'); //write a response to the client
  res.end(); //end the response
}).listen(3000);

