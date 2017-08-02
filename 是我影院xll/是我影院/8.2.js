function huiwen(number) {
    var a=number.toString();
    if (a.length%2===0){
        for(var i=0;i<a.length/2;i++){
            if (a[i]!==a[a.length-1-i]){
                return "fuck you!"
            }
        }
    }
}
console.log(huiwen(22));