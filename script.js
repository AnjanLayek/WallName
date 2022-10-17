const input = document.getElementById("wall_id");
const col = document.getElementById("wall_color");
const walls = document.querySelectorAll("div");
console.log(walls.length);
document.querySelector("#apply").addEventListener("click",function(){
       for(let getid of walls){
         if(getid.id == input.value)
    document.getElementById(input.value).style.background = col.value;
    else
     document.getElementById(getid.id).style.background = "transparent";
}
})
document.querySelector("#reset").addEventListener('click',function(){
    for(let getid of walls){
     document.getElementById(getid.id).style.background="transparent";
   }
})