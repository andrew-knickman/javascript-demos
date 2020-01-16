var fs = require('fs');
var buffer = fs.readFile(process.argv[2], function(error, output)
    {if(error) {throw error;}
    var lcount = output.toString().split(/\n/).length;
    process.stdout.write("There are " + lcount + " new lines in test.txt.");
});
