//challenge 1
var next = ' ';
var hashtag = '#';
for(var i = 1; i <= 7; i++){
  next = next + hashtag;
  console.log(next);
}
/* we need to have the hashtag (var 'hashtag') as 
well as another s but starting from 1 and ending in (including 7).*/

//Challenge 2
function IsItEven(number){
    if (number%2 == 0)
    {console.log("It's Even")}
    else
    {console.log("No, It's Odd")}
}
IsItEven(6)
IsItEven(7)
/* number divided by 2 should be 0, as exemplified by 
IsItEven(6). - so 7/2 = 3 remainder 1. This is where the % operator comes in!*/