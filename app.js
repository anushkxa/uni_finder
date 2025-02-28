
let url="http://universities.hipolabs.com/search?name=";
let btnn=document.querySelector("button");
btnn.addEventListener("click",async()=>{
    let country =document.querySelector("input").value;
    let colArr=await getColleges(country);
    console.log(country);
    show(colArr);
});
async function getColleges(country){
    try{
        let res=await axios.get(url+country);
        return res.data;
    }catch(e){
        console.log("error");
    }
}
function show(colArr){
    let list=document.querySelector("ul");
    list.innerText="";
    for(col of colArr){
        let li=document.createElement("li");
        li.innerText=col.name;
        list.appendChild(li);
    }
}