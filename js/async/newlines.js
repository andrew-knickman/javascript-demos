var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2]);
var lcount = 0;
var output = buffer.toString();
lcount = output.split(/\n/).length;
process.stdout.write("There are " + lcount + " new lines in test.txt");