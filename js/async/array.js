var w = ["Ravens", "stadium", "is", "Orioles", "stadium"];
var x = ["Baltimore", "Downtown", "located", "near"];
var y = ["located", "Downtown", "near", "Fells Point", "Fed Hill", "Canton"];
var z = ["Towson", "Stevenson", "UMBC", "University", "Loyola", "University", "Morgan State", "Frostburg"];
var arr = [];

//ILLEGAL STATEMENTS:
//arr.push(y[1])
//x[0] = z.pop()
//arr.push("Downtown")

//Concat can only be used TWICE
//Push can only be used ONCE
//ONE PARAMETER when using concat or push

w.pop(); w.pop(); //Ravens, stadium, is
x.pop(); x.pop(); x.pop(); //Baltimore,
y.pop(); y.pop(); y.pop(); //located, Downtown, near
z.pop(); //Towson,...,Morgan State

x = x.concat(w); //Baltimore, Ravens, stadium, is
y.push(z.pop()); //located, Downtown, near, Morgan State
w = w.concat(y); //Baltimore, Ravens, stadium, is, located, Downtown, near, Morgan State
arr = w;

// Should contain: ['Baltimore', 'Ravens', 'stadium', 'is', 'located', 'Downtown', 'near', 'Morgan State']
console.log(arr);