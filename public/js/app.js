const cityName=document.getElementById("cityName");
const submitbtn=document.getElementById("submitbtn");
const city_name=document.getElementById("city_name");
const temp_real_val=document.getElementById("temp_real_val");
// const boxes=document.getElementsByClassName("datahide");
const datahide=document.querySelector(".middlelayer");
const getinfo=async(event)=>{
event.preventDefault();
let cityval=cityName.value;
if(cityval==""){
city_name.innerText=`Please write city name`;
// boxes[0].classList.add("datahide");
datahide.classList.add("datahide");   
}
else{

    try{
        
        let url =`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=e7b98f8ad6d6b3749797c841ccac66b6`
        const response=await fetch(url);
        const data=await response.json();
        //  jo data hame mil rha tha vo sjson mai mail rha tha respnse.json se completly javascript object mai convert ho jayega vo so that a very good thing 
        const arrdata=[data];
        city_name.innerText=`${arrdata[0].name},${arrdata[0].sys.country}`;
        temp_real_val.innerText=arrdata[0].main.temp;
        // boxes[0].classList.add("datahide");   
        datahide.classList.remove("datahide");
    }
    catch{
        datahide.classList.add("datahide");
        city_name.innerText=`Please Enter city name properly`;
    
    }

}


}


submitbtn.addEventListener("click",getinfo);
