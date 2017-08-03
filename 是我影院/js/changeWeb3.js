function fresh3(){
    var a =document.getElementById("abstract").getElementsByClassName("movie_option");
    a[0].getElementsByTagName("span")[0].innerHTML=data[2].name;
    a[1].getElementsByTagName("span")[0].innerHTML=data[2].director;
    a[2].getElementsByTagName("span")[0].innerHTML=data[2].actors;
    a[3].getElementsByTagName("span")[0].innerHTML=data[2].year;
    a[4].getElementsByTagName("span")[0].innerHTML=data[2].area;
    a[5].getElementsByTagName("span")[0].innerHTML=data[2].kind;
    var b = document.getElementById("movie_image").getElementsByTagName("img");
    b[0].src=data[2].poster;
    var c = document.getElementById("movie_image").getElementsByTagName("span");
    c[0].innerHTML=data[2].grade;
    var d = document.getElementById("storyAbstract")
    d.innerHTML=data[2].brief;
    var e = document.getElementById("commentlist").getElementsByTagName("p");
    e[0].innerHTML=data[2].comment1;
    e[1].innerHTML=data[2].comment2;
    e[2].innerHTML=data[2].comment3;
    e[3].innerHTML=data[2].comment4;
    var f = document.getElementById("pic1").getElementsByTagName("img");
    f[0].src=data[2].nextSmallPic;
    var g = document.getElementById("pic1Title").getElementsByTagName("p");
    g[1].innerHTML=data[2].nextSmallTitle;
}