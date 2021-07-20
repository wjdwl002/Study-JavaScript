var members = ['jiwon', 'jinpyo', 'kawon'];
var i =0; 
while(i<members.length){
    console.log('array loop : ', members[i]);
    i++;
}

var roles = {
    'princess':'jiwon',
    'boyfriend':'jinpyo',
    'sister':'kawon'
};
for (var name in roles){
    console.log('obejct => ', name, '/ value -> ', roles[name]);
}

