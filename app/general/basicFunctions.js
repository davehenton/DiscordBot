
functions = {
  getTime: function() {

   date = new Date();
   var time = date.toLocaleTimeString();

   return time;
  }

}


module.exports = functions;
