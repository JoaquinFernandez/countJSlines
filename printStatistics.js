var SQUARE_VALUE=2000,TITLE="Number of JS lines";
var request = function(url, cb){
  var req=new XMLHttpRequest(); req.open("GET",url);
  req.onreadystatechange=function(){if(req.readyState>3)cb(req.responseText)};
  req.send()};
var graphicSquares = function(linesOfJS) {
  var numberOfSquares=linesOfJS/SQUARE_VALUE,graph='&nbsp;&nbsp;';
  while(numberOfSquares-- > 0){graph=graph.concat('&#9632;');}return graph;};
request('http://jf-api-server.herokuapp.com/api/v1/sites',function(r){
  var el = JSON.parse(r).sites;
  document.write("<table><tr><td>Site</td><td>"+TITLE+"</td><tr></tr></tr>");
  for (var i=0;i<10;i++) { if (el[i].total_lines === 0)  continue;
    document.write('<td>'+el[i].url+'</td>');
    document.write('<td>'+graphicSquares(el[i].total_lines)+'</td></tr>');
  }; 
  document.write('<caption align="bottom">&#9632; = '+SQUARE_VALUE);
  document.write('</caption></table>');
});