function twoSum(collection,n) {
    var i;
    var j;
    for (i =0;i<collection.length;i++){
        for (j=i+1;j<collection.length;j++){
            if (collection[i]+collection[j]===n){
                return (i+1)+""+(j+1);
            }
        }
    }
}
console.log(twoSum([2,7,11,5],9));