function myFunction() {
  var results = YouTube.Search.list("id,snippet",{q :"猫　絵本" , maxResults: 5});
  
  var list = [];
  
  for(var i in results.items) {
    var item = results.items[i];
    list.push([item.snippet.title,'https://youtube.com/embed/'+(item.id.videoId),item.snippet.thumbnails.high.url]);
  }

  ss = SpreadsheetApp.getActive();
  sheet = ss.getSheetByName('cat');
  range = sheet.getRange(2, 1, list.length, list[0].length);
  range.setValues(list);  
}
