load("set.js");
var cis = new Set();
cis.add("Milos");
cis.add("Kristijan");
cis.add("Jelena");
cis.add("Radomir");
var dmp = new Set();
dmp.add("Radomir");
dmp.add("Katarina");
dmp.add("Jovan");
var it = new Set();
it = cis.union(dmp);
print(it.show());

