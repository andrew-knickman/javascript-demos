var numparams = process.argv.length;
var sum = 0;
for(var i = 2; i < numparams; i++)
{
    //convert arguments beyond 2 to number value
    sum += Number(process.argv[i]);
}
process.stdout.write("Sum: " + sum);