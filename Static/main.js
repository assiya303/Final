/**
 Copyright (c) 2015 BrightPoint Consulting, Inc.

 Permission is hereby granted, free of charge, to any person
 obtaining a copy of this software and associated documentation
 files (the "Software"), to deal in the Software without
 restriction, including without limitation the rights to use,
 copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the
 Software is furnished to do so, subject to the following
 conditions:

 The above copyright notice and this permission notice shall be
 included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 OTHER DEALINGS IN THE SOFTWARE.
 */
main = function main() {
    var linkFillOpacity = 0;
    var linkStrokeOpacity = 0;
    var rectFillOpacity = 0.4;
    var fadeOpacity = .1;
    var rectStrokeOpacity = 0;
    var textFillOpacity = 1;
    var chartTop = 200;

    var gameTip = d3.select("#game");
    var gameWinner = d3.select("#winner");
    var gameWinnerName = d3.select("#game_winner_name");
    var gameWinnerImg = d3.select("#game_winner_img");
    var gameWinnerProb = d3.select("#game_winner_prob");
    var pointSpread = d3.select("#point_spread");
    var gameCorrect = d3.select("#game_correct");

    var gameLoser = d3.select("#loser");
    var gameLoserName = d3.select("#game_loser_name");
    var gameLoserImg = d3.select("#game_loser_img");
    var gameLoserProb = d3.select("#game_loser_prob");


    var availWidth = window.innerWidth - 30;

    var margin = {top: 10, right: 50, bottom: 10, left: 50},
        width = Math.max(availWidth, 800) - margin.left - margin.right,
        height = 1440 - margin.top - margin.bottom;

    var formatNumber = d3.format(",.0f"),    // 1 decimal place
        format = function (d) {
            return formatNumber(d) + " " + units;
        },
        color = d3.scale.category20();

// append the svg canvas to the page
    var svg = d3.select("#chart").append("svg").style("overflow", "visible")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom);


    var gTop = svg.append("g")
        .attr("transform",
        "translate(" + margin.left + "," + (margin.top) + ")");


    var g = svg.append("g")
        .attr("transform",
        "translate(" + margin.left + "," + (margin.top + chartTop) + ")");

// Set the alluvial diagram properties
    var alluvial = d3.alluvial()
        .nodeWidth(8)
        .nodePadding(30)
        .size([width, height - chartTop-10]);

    var path = alluvial.link();

//var url = "https://s3.amazonaws.com/final-assets/nba_teams.json"
// load the data
    //d3.request(url, function (error, data) {
        //console.log(data)
        var games = [];
        var teams = {
            "teams":[
           {
             "key": "ATL",
             "city": "Atlanta",
             "name": "Hawks",
             "color": "#e13a3e"
           },
           {
             "key": "BOS",
             "city": "Boston",
             "name": "Celtics",
             "color": "#008348"
           },
           {
             "key": "BKN",
             "city": "Brooklyn",
             "name": "Nets",
             "color": "#222"
           },
           {
             "key": "CHA",
             "city": "Charlotte",
             "name": "Hornets",
             "color": "#00848e"
           },
           {
             "key": "CHI",
             "city": "Chicago",
             "name": "Bulls",
             "color": "#dc3545"
           },
           {
             "key": "CLE",
             "city": "Cleveland",
             "name": "Cavaliers",
             "color": "#860037"
           },
           {
             "key": "DAL",
             "city": "Dallas",
             "name": "Mavericks",
             "color": "#0053bc"
           },
           {
             "key": "DEN",
             "city": "Denver",
             "name": "Nuggets",
             "color": "#fec524"
           },
           {
             "key": "DET",
             "city": "Detroit",
             "name": "Pistons",
             "color": "#ed174c"
           },
           {
             "key": "GSW",
             "city": "Oakland",
             "name": "Warriors",
             "color": "#fc3"
           },
           {
             "key": "HOU",
             "city": "Houston",
             "name": "Rockets",
             "color": "#dd2b35"
           },
           {
             "key": "IND",
             "city": "Indianapolis",
             "name": "Pacers",
             "color": "#fec23e"
           },
           {
             "key": "LAC",
             "city": "Los Angeles",
             "name": "Clippers",
             "color": "#ed174c"
           },
           {
             "key": "LAL",
             "city": "Los Angeles",
             "name": "Lakers",
             "color": "#552582"
           },
           {
             "key": "MEM",
             "city": "Memphis",
             "name": "Grizzlies",
             "color": "#bed4e9"
           },
           {
             "key": "MIA",
             "city": "Miami",
             "name": "Heat",
             "color": "#99002a"
           },
           {
             "key": "MIL",
             "city": "Milwaukee",
             "name": "Bucks",
             "color": "#00471b"
           },
           {
             "key": "MIN",
             "city": "Minneapolis",
             "name": "Timberwolves",
             "color": "#005083"
           },
           {
             "key": "NOP",
             "city": "New Orleans",
             "name": "Pelicans",
             "color": "#0C2340"
           },
           {
             "key": "NYK",
             "city": "New York",
             "name": "Knicks",
             "color": "#fa672b"
           },
           {
             "key": "OKC",
             "city": "Oklahoma City",
             "name": "Thunder",
             "color": "#002d62"
           },
           {
             "key": "ORL",
             "city": "Orlando",
             "name": "Magic",
             "color": "#007dc5"
           },
           {
             "key": "PHI",
             "city": "Philadelphia",
             "name": "76ers",
             "color": "#ed174c"
           },
           {
             "key": "PHX",
             "city": "Phoenix",
             "name": "Suns",
             "color": "#e56020"
           },
           {
             "key": "POR",
             "city": "Portland",
             "name": "Trail Blazers",
             "color": "#e43a3e"
           },
           {
             "key": "SAC",
             "city": "Sacramento",
             "name": "Kings",
             "color": "#724c9f"
           },
           {
             "key": "SAS",
             "city": "San Antonio",
             "name": "Spurs",
             "color": "#666"
           },
           {
             "key": "TOR",
             "city": "Toronto",
             "name": "Raptors",
             "color": "#ce1141"
           },
           {
             "key": "UTA",
             "city": "Salt Lake City",
             "name": "Utah Jazz",
             "color": "#f89f1f"
           },
           {
             "key": "WAS",
             "city": "Washington, D.C.",
             "name": "Wizards",
             "color": "#cf142b"
           }
          ]}

        //data.teams.forEach(function (team) {
        teams.teams.forEach(function (team) {
            teams.teams[team.key] = team;
            console.log(teams.teams[team.key])
        });

        //d3.csv("https://s3.amazonaws.com/final-assets/nba_games.csv", function (csv) {

        games = [
            {
              "round": 0,
              "away": "MIN",
              "away_prob": 0.25,
              "home_prob": 0.75,
              "home": "HOU",
              "awayWL": "Loser",
              "homeWL": "Winner",
              "point_spread": 3.895,
              "game_correct": "No",
              "": ""
            },
            {
              "round": 0,
              "away": "SAS",
              "away_prob": 0.25,
              "home_prob": 0.75,
              "home": "GSW",
              "awayWL": "Loser",
              "homeWL": "Winner",
              "point_spread": 3.677,
              "game_correct": "Yes",
              "": ""
            },
            {
              "round": 0,
              "away": "NOP",
              "away_prob": 0.75,
              "home_prob": 0.25,
              "home": "POR",
              "awayWL": "Winner",
              "homeWL": "Loser",
              "point_spread": 2.040,
              "game_correct": "Yes",
              "": ""
            },
            {
              "round": 0,
              "away": "UTA",
              "away_prob": 0.75,
              "home_prob": 0.25,
              "home": "OKC",
              "awayWL": "Winner",
              "homeWL": "Loser",
              "point_spread": 0.437,
              "game_correct": "No",
              "": ""
            },
            {
              "round": 0,
              "away": "WAS",
              "away_prob": 0.25,
              "home_prob": 0.75,
              "home": "TOR",
              "awayWL": "Loser",
              "homeWL": "Winner",
              "point_spread": 1.576,
              "game_correct": "Yes",
              "": ""
            },
            {
              "round": 0,
              "away": "MIL",
              "away_prob": 0.25,
              "home_prob": 0.75,
              "home": "BOS",
              "awayWL": "Loser",
              "homeWL": "Winner",
              "point_spread": 0.290,
              "game_correct": "No",
              "": ""
            },
            {
              "round": 0,
              "away": "MIA",
              "away_prob": 0.25,
              "home_prob": 0.75,
              "home": "PHI",
              "awayWL": "Loser",
              "homeWL": "Winner",
              "point_spread": 2.110,
              "game_correct": "Yes",
              "": ""
            },
            {
              "round": 0,
              "away": "IND",
              "away_prob": 0.25,
              "home_prob": 0.75,
              "home": "CLE",
              "awayWL": "Loser",
              "homeWL": "Winner",
              "point_spread": 0.067,
              "game_correct": "Yes",
              "": ""
            },
            {
              "round": 1,
              "away": "UTA",
              "away_prob": 0.25,
              "home_prob": 0.75,
              "home": "HOU",
              "awayWL": "Loser",
              "homeWL": "Winner",
              "point_spread": 0.404,
              "game_correct": "Yes",
              "": ""
            },
            {
              "round": 1,
              "away": "NOP",
              "away_prob": 0.25,
              "home_prob": 0.75,
              "home": "GSW",
              "awayWL": "Loser",
              "homeWL": "Winner",
              "point_spread": 2.731,
              "game_correct": "Yes",
              "": ""
            },
            {
              "round": 1,
              "away": "CLE",
              "away_prob": 0.75,
              "home_prob": 0.25,
              "home": "TOR",
              "awayWL": "Winner",
              "homeWL": "Loser",
              "point_spread": 0.079,
              "game_correct": "Yes",
              "": ""
            },
            {
              "round": 1,
              "away": "PHI",
              "away_prob": 0.25,
              "home_prob": 0.75,
              "home": "BOS",
              "awayWL": "Loser",
              "homeWL": "Winner",
              "point_spread": 1.132,
              "game_correct": "No",
              "": ""
            },
            {
              "round": 2,
              "away": "GSW",
              "away_prob": 0.75,
              "home_prob": 0.25,
              "home": "HOU",
              "awayWL": "Winner",
              "homeWL": "Loser",
              "point_spread": 5.627,
              "game_correct": "Yes",
              "": ""
            },
            {
              "round": 2,
              "away": "CLE",
              "away_prob": 0.75,
              "home_prob": 0.25,
              "home": "BOS",
              "awayWL": "Winner",
              "homeWL": "Loser",
              "point_spread": 2.401,
              "game_correct": "No",
              "": ""
            },
            {
              "round": 3,
              "away": "CLE",
              "away_prob": 0.25,
              "home_prob": 0.75,
              "home": "GSW",
              "awayWL": "Loser",
              "homeWL": "Winner",
              "point_spread": 3.455,
              "game_correct": "Yes",
              "": ""
            }
          ];
            

            alluvial.data(games)
                .layout();


            var links = alluvial.links();
            var nodes = alluvial.nodes();
            var roundOffsets = alluvial.hOffsets();

            var rounds = gTop.selectAll(".topLabel")
                .data(roundOffsets)
                .enter();

            rounds.append("text")
                .style("fill", "#3e4444")
                .style("font-weight", 400)
                .style("text-anchor", "middle")
                .attr("class", "roundLabel")
                .attr("y", 5 - margin.top)
                .attr("x", function (d) {
                    return d;
                })
                .text("Round");

            rounds.append("text")
                .style("fill", "#3e4444")
                .style("font-weight", 400)
                .style("text-anchor", "middle")
                .attr("class", "roundLabel")
                .attr("y", 20 - margin.top)
                .attr("x", function (d) {
                    return d;
                })
                .text(function (d, i) {
                    return (i + 1);
                });

            var link = g.append("g").selectAll(".link")
                .data(links)
                .enter().append("path")
                .attr("class", function (d) {
                    return "link " + d.key
                })
                .attr("d", path)
                .style("fill", function (d) {
                    return getTeamColor(d.key)
                })
                .style("fill-opacity", linkFillOpacity)
                .style("stroke", function (d) {
                    return getTeamColor(d.key)
                })
                .style("stroke-width", .5)
                .style("stroke-opacity", linkStrokeOpacity);
            // .on("mouseover",function (d) { link_onMouseOver(d.source) })
            // .on("mouseout",function (d) { link_onMouseOut(d.source) });


            var node = g.append("g").selectAll(".node")
                .data(nodes)
                .enter().append("g")
                .attr("class", "node")
                .attr("transform", function (d) {
                    return "translate(" + d.x + "," + d.y + ")";
                });

            node.append("rect")
                .attr("class", function (d) {
                    return "game " + d.key + " " + d.gameKey
                })
                .attr("height", function (d) {
                    return d.dy;
                })
                .attr("width", alluvial.nodeWidth())
                .style("fill", function (d) {
                    return getTeamColor(d.key)
                })
                .style("fill-opacity", function (d) {
                    return (d.value < 0.5) ? rectFillOpacity : .8
                })
                .style("stroke", function (d) {
                    return getTeamColor(d.key)
                })
                .style("stroke-opacity", rectStrokeOpacity)
                .on("mouseover", function (d) {
                    link_onMouseOver(d)
                })
                .on("mouseout", function (d) {
                    link_onMouseOut(d)
                });

            node.append("text")
                .attr("x", -6)
                .attr("class", function (d) {
                    return "game " + d.gameKey + " " + d.key
                })
                .attr("y", function (d) {
                    return d.dy / 2;
                })
                .attr("dy", ".35em")
                .style("font-weight", function (d) {
                    return (d.value < 0.5) ? 200 : 700
                })
                .style("fill-opacity", textFillOpacity)
                .attr("text-anchor", "end")
                .style("font-size", "12px")
                .style("fill", function (d) {
                    return getTeamColor(d.key)
                })
                .attr("transform", null)
                .text(function (d) {
                    return d.key
                })
                .on("mouseover", function (d) {
                    link_onMouseOver(d)
                })
                .on("mouseout", function (d) {
                    link_onMouseOut(d)
                });


            function link_onMouseOver(d) {

                d3.selectAll("path." + d.key)
                    .transition()
                    .style("fill-opacity", .3);

                g.selectAll("rect")
                    .filter(function () {
                        return ((this.__data__.key != d.key))
                    })
                    .transition()
                    .style("fill-opacity", fadeOpacity);

                g.selectAll("rect")
                    .filter(function () {
                        return ((this.__data__.opponent == d.key))
                    })
                    .transition()
                    .style("fill-opacity", .25);


                var thisGames = g.selectAll("text." + d.key).data();

                g.selectAll("text")
                    .filter(function () {
                        return (this.__data__.key != d.key && this.__data__.opponent != d.key)
                    })
                    .transition()
                    .style("fill-opacity", fadeOpacity);

                var top = 110

                gameTip.style("top", function () {
                    var r = ((d.value > .49) ? d.y + margin.top + 140 : d.y + margin.top + 140 - (20 - d.dy))
                    // if (r < 70) r =  top;
                    return r + "px"
                })
                    .style("left", function () {
                        return Math.min(width-130,Math.max(d.x -37,200)) + "px";
                    });

                
                //  if (gameTip.style("top") == top + "px") {
                //  gameLoser.style("right",0).style("top","0px");
                //  gameTip.style("left", (d.x-50) + "px")
                //  console.log("here it is")
                //  }
                 

                gameTip.transition().style("opacity", 1);

                var winner, loser;
                var winVal, loseVal;
                var spreadVal;
                var correctVal;

                if (d.value != "L") {
                    winner = teams.teams[d.key];
                    loser = teams.teams[d.opponent];
                    //winVal = d.value;
                    winVal = d.wL;
                    //winVal = "Winner";
                    //loseVal = d.opponentValue;
                    loseVal = d.opponentWL;
                    //loseVal = "Loser";
                    spreadVal = d.pointSpread;
                    correctVal=d.gameCorrect;
                // }
                // else {
                //     winner = teams[d.opponent];
                //     loser = teams[d.key];
                    //winVal = d.opponentValue;
                    //winVal = "Loser";
                    //winVal = "Winner";
                    //loseVal = d.value;
                    //loseVal = "Winner";
                    //loseVal = "Loser";
                }
                

                gameWinnerName.text(winner.name).style("color", winner.color);
                gameWinnerProb.text((winVal)).style("color", winner.color);
                
                gameWinnerImg.attr("src", "https://s3.amazonaws.com/final-assets/" + winner.key + ".png");
                //gameWinnerImg.attr("src", "https://s3.console.aws.amazon.com/s3/buckets/final-assets/" + winner.key + ".png");
                pointSpread.text("Spread Prediction: " + (spreadVal)+ " points");
                gameCorrect.text("Correct Prediction? " + (correctVal));

                gameLoserName.text(loser.name).style("color", loser.color);
                gameLoserProb.text((loseVal)).style("color", loser.color);
                gameLoserImg.attr("src", "https://s3.amazonaws.com/final-assets/" + loser.key + ".png");

                gTop.selectAll(".roundLabel")
                    .transition()
                    .style("font-weight", function (dd, i) {
                        return (i == d.round || i == d.round + 4) ? "bold" : "normal"
                    })
                    .style("font-size", function (dd, i) {
                        return (i == d.round || i == d.round + 4) ? "16px" : "12px"
                    });


            }

            function link_onMouseOut(d) {

                d3.selectAll("path")
                    .transition()
                    .style("fill-opacity", linkFillOpacity);

                g.selectAll("rect")
                    .transition()
                    .style("fill-opacity", function (d) {
                        return (d.value < 0.5) ? rectFillOpacity : .8
                    });

                g.selectAll("text")
                    .transition()
                    .style("fill-opacity", textFillOpacity);

                gTop.selectAll(".headerLabel").transition().style("opacity", 0);

                gTop.selectAll(".roundLabel")
                    .transition()
                    .style("font-weight", "normal")
                    .style("font-size", "12px");


                gameTip.transition().style("opacity", 0);


            }


            function getLinkOpacity(d) {
                if (d.wins == 0)
                    return .05;
                else
                    return d.wins / 5;
            }


            function getTeamColor(key) {

                return teams.teams[key].color;
            }


        ;

    //});
}();

