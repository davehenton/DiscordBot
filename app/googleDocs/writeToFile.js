var fs = require('fs');

// fs.access('D:/NodeProjects/Discord-Bot/tmp/test', fs.constants.R_OK | fs.constants.W_OK, (err) => {
//   console.log(err ? 'no access!' : 'can read/write');
// });
//
// fs.appendFile('D:/NodeProjects/Discord-Bot/tmp/test', ' \n neue daten', (err) => {
//   if (err) throw err;
//   console.log('The "data to append" was appended to file!');
// });

functions = {

  writeToFile: function(path,data){

    fs.appendFile(path,data, (err) => {
      if (err){
        console.log(err);
      }
    });
  }

}

module.exports = functions;
