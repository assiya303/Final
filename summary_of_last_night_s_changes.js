change summary:

nba_games.csv:
1. added column "game_correct"



main.js:
1. line 40, added new line:
var gameCorrect = d3.select("#game_correct");

2. line 109, added new line:
game.game_correct = (row.game_correct);

3. line 298, added new line:
correctVal=d.gameCorrect;

4. line 315, changed existing line (removed color styling):
pointSpread.text("Spread Prediction: " + (spreadVal)+ " points");

5. line 316, added new line:
gameCorrect.text("Correct Prediction? " + (correctVal));



alluvial.js:
1. line 137, added line:
node.gameCorrect = game.game_correct;

2. line 160, added line:
node.gameCorrect = game.game_correct;


index.html:
1. line 30, added line:
<div id="game_correct" style="text-align:center;font-size:12px; margin-top:10px; font-family:Roboto; font-weight:bold">test</div>
