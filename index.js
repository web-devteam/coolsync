let temperature = 34
let priority = "low"
let date = new Date
date=date.toDateString()
let weathercode=4
date=date.slice(0, 3)
let time = new Date
time=time.toLocaleTimeString()
time=time.slice(0, 2)
let templimit = 0
let tempfactor = 0.5
const url = 'https://api.open-meteo.com/v1/forecast?latitude=10.5036&longitude=7.4337&current=temperature_2m';

fetch(url)
  .then(response => {
    if (!response.ok) {throw new Error(`HTTP error! Status: response.status`);
   
  } return response.json();}
  )
  .then(data => {
    const temp = data.current.temperature_2m;
    console.log(`Current temperature in Lagos:${temp}°C`);
    temperature=temp
    console.log(temperature)
  })
  .catch(error => {
    console.error('Error fetching weather data:', error);
  });
const url2 = 'https://api.open-meteo.com/v1/forecast?latitude=10.5036&longitude=7.4337&current_weather=true';

fetch(url2)
  .then(response => {
    if (!response.ok) {throw new Error(`HTTP error! Status: response.status`);
   
  } return response.json();}
  )
  .then(data => {
    const temp = data.current_weather.weathercode;
    weathercode=temp
    console.log(`Current weathercode in Lagos:${temp}°C`);

  })
  .catch(error => {
    console.error('Error fetching weather data:', error);
  });

document.getElementById("timer").addEventListener("click", ()=>{
document.getElementById("timescreen").style.display="flex"
document.getElementById("logscreen").style.display="none"
document.getElementById("trendscreen").style.display="none"
document.getElementById("weatherscreen").style.display="none"
})
document.getElementById("log").addEventListener("click", ()=>{
document.getElementById("timescreen").style.display="none"
document.getElementById("logscreen").style.display="flex"
document.getElementById("trendscreen").style.display="none"
document.getElementById("weatherscreen").style.display="none"
})

document.getElementById("weather").addEventListener("click", ()=>{
document.getElementById("timescreen").style.display="none"
document.getElementById("logscreen").style.display="none"
document.getElementById("trendscreen").style.display="none"
document.getElementById("weatherscreen").style.display="flex"
if(temperature<=35){priority="low"
document.getElementById("config1").style.color="grey"
document.getElementById("config2").style.color="grey"
document.getElementById("config4").style.color="grey"
document.getElementById("config5").style.color="grey"
document.getElementsByClassName("donebtn").item(1).style.backgroundColor="rgb(176, 176, 176)"
document.getElementsByClassName("donebtn").item(2).style.backgroundColor="rgb(176, 176, 176)"
document.getElementsByClassName("donebtn").item(3).style.backgroundColor="rgb(176, 176, 176)"
document.getElementsByClassName("donebtn").item(4).style.backgroundColor="rgb(176, 176, 176)"
templimit=1
}
else if(temperature<=37){priority="mid"
document.getElementById("config1").style.color="grey"
document.getElementById("config5").style.color="grey"
document.getElementsByClassName("donebtn").item(4).style.backgroundColor="rgb(176, 176, 176)"
document.getElementsByClassName("donebtn").item(3).style.backgroundColor="rgb(176, 176, 176)"
templimit=3
}
else if(temperature<=40){priority="high"
templimit=5

}
document.getElementById("esttemp").innerHTML = Math.round(50+(temperature * tempfactor))+"°C estimated"
  document.getElementById("temp").innerHTML = temperature+"°C"
if(weathercode==0){document.getElementById("undertemp").innerHTML = "kaduna "+"Clear sky"}
else if(weathercode==1){document.getElementById("undertemp").innerHTML = "kaduna "+"Mainly clear"}
else if(weathercode==2){document.getElementById("undertemp").innerHTML = "kaduna "+"Partly cloudy"}
else if(weathercode==3){document.getElementById("undertemp").innerHTML = "kaduna "+"Overcast"}
else if(weathercode==45){document.getElementById("undertemp").innerHTML = "kaduna "+"Fog"}
else if(weathercode==48){document.getElementById("undertemp").innerHTML = "kaduna "+"Depositing rime fog"}
else if(weathercode==51){document.getElementById("undertemp").innerHTML = "kaduna "+"Light drizzle"}
else if(weathercode==53){document.getElementById("undertemp").innerHTML = "kaduna "+"Moderate drizzle"}
else if(weathercode==55){document.getElementById("undertemp").innerHTML = "kaduna "+"Dense drizzle"}
else if(weathercode==56){document.getElementById("undertemp").innerHTML = "kaduna "+"Light freezing drizzle"}
else if(weathercode==57){document.getElementById("undertemp").innerHTML = "kaduna "+"Dense freezing drizzle"}
else if(weathercode==61){document.getElementById("undertemp").innerHTML = "kaduna "+"Slight rain"}
else if(weathercode==63){document.getElementById("undertemp").innerHTML = "kaduna "+"Moderate rain"}
else if(weathercode==65){document.getElementById("undertemp").innerHTML = "kaduna "+"Heavy rain"}
else if(weathercode==66){document.getElementById("undertemp").innerHTML = "kaduna "+"Light freezing rain"}
else if(weathercode==67){document.getElementById("undertemp").innerHTML = "kaduna "+"Heavy freezing rain"}
else if(weathercode==71){document.getElementById("undertemp").innerHTML = "kaduna "+"Slight snow fall"}
else if(weathercode==73){document.getElementById("undertemp").innerHTML = "kaduna "+"Moderate snow fall"}
else if(weathercode==75){document.getElementById("undertemp").innerHTML = "kaduna "+"Heavy snow fall"}
else if(weathercode==77){document.getElementById("undertemp").innerHTML = "kaduna "+"Snow grains"}
else if(weathercode==80){document.getElementById("undertemp").innerHTML = "kaduna "+"Slight rain showers"}
else if(weathercode==81){document.getElementById("undertemp").innerHTML = "kaduna "+"Moderate rain showers"}
else if(weathercode==82){document.getElementById("undertemp").innerHTML = "kaduna "+"Violent rain showers"}
else if(weathercode==85){document.getElementById("undertemp").innerHTML = "kaduna "+"Slight snow showers"}
else if(weathercode==86){document.getElementById("undertemp").innerHTML = "kaduna "+"Heavy snow showers"}
else if(weathercode==95){document.getElementById("undertemp").innerHTML = "kaduna "+"Thunderstorm"}
else if(weathercode==96){document.getElementById("undertemp").innerHTML = "kaduna "+"Thunderstorm with slight hail"}
else if(weathercode==99){document.getElementById("undertemp").innerHTML = "kaduna "+"Thunderstorm with heavy hail"}
else{document.getElementById("undertemp").innerHTML = "unknown weather"}

if(Math.round(50+(temperature * tempfactor))>=70){notification("optimize for high temp today !")}

})
document.getElementById("settings").addEventListener("click", ()=>{
document.getElementById("timescreen").style.display="none"
document.getElementById("logscreen").style.display="none"
document.getElementById("trendscreen").style.display="none"
document.getElementById("weatherscreen").style.display="none"
})
let showmsg = false
document.getElementById("msgd").addEventListener("click", ()=>{
document.getElementById("icon").innerHTML=""
if(showmsg==false){document.getElementById("msgbx").style.display="flex";
showmsg=true
}
else{document.getElementById("msgbx").style.display="none";
showmsg=false
}
})

let limit = 20
let overtime = 5
let overtmode = false
let pause = true
let reset = true
let inter2 = ""
let inter = ""
let packs = 0
let storagelvl = 0
let packsrt=0
let dblvl = 0
let session = false
let airflow = 0
let logcon = false
let logminarray = []
let logmaxarray = []
let logotherarray = []
let logavgarray = []
let logairarray = []
let logconarray = []
let logsessionarray = []
let logsessionno = 0
let sessionid = 0
let logpacks=0
if(date=="Mon" && localStorage.getItem("resetlogstored")!="yes"){
window.alert("reset")
localStorage.setItem("resetlogstored", "yes")
}
if(localStorage.getItem("logsessionno")!=null && localStorage.getItem("logsessionno")!=""){
logsessionno=Number(localStorage.getItem("logsessionno"))
}
if(localStorage.getItem("logpacks")!=null && localStorage.getItem("logpacks")!=""){
logpacks=Number(localStorage.getItem("logpacks"))
}
if(localStorage.getItem("logavgarray")!=null && localStorage.getItem("logavgarray")!=""){
logminarray=localStorage.getItem("logminarray").split(",")
logmaxarray=localStorage.getItem("logmaxarray").split(",")
logotherarray=localStorage.getItem("logotherarray").split(",")
logavgarray=localStorage.getItem("logavgarray").split(",")
logairarray=localStorage.getItem("logairarray").split(",")
logconarray=localStorage.getItem("logconarray").split(",")
logsessionarray=localStorage.getItem("logsessionarray").split(",")
}
window.addEventListener("load", ()=>{
if(logavgarray!=[] && logavgarray!=[""]){
for (let index = 0; index < logavgarray.length; index++) {
let create = document.createElement("div")
create.className="row"
document.getElementById("table").append(create)
let create1 = document.createElement("p")
create1.className="min"
create1.innerHTML=logminarray[index]
let create2 = document.createElement("p")
create2.className="max"
create2.innerHTML=logmaxarray[index]
let create3 = document.createElement("p")
create3.className="other"
create3.innerHTML=logotherarray[index]
let create4 = document.createElement("p")
create4.className="avg"
create4.innerHTML=logavgarray[index]
let create6 = document.createElement("p")
create6.className="air"
create6.innerHTML=logairarray[index]
let create7 = document.createElement("p")
create7.className="con"
if(logconarray[index]=="true"){
create7.innerHTML="configured"}
if(logsessionarray[index].slice(0, 4)=="true"){
create1.style.borderLeft="3px solid rgb(129, 129, 255)"
}

create.append(create1)
create.append(create2)
create.append(create3)
create.append(create4)
create.append(create6)
create.append(create7)
document.getElementById("table").append(create)
}
}
})

document.getElementById("trend").addEventListener("click", ()=>{
document.getElementById("timescreen").style.display="none"
document.getElementById("logscreen").style.display="none"
document.getElementById("trendscreen").style.display="flex"
document.getElementById("weatherscreen").style.display="none"
let add = 0
if(date=="Fri" || date=="Sat" ||date=="Sun" ){
let sum = 0
let sum2=0
let sum3=0
let sum4=0
let sum5=0
let sum6=0
let sum7 = 0
if(logsessionno>=10){sum7=1}
let sum8 = logpacks
for (let index = 0; index < logavgarray.length; index++) {
if(logavgarray[index]<=60){sum=sum+1}
else if(logavgarray[index]<85){sum2=sum2+1}
else{sum3=sum3+1}
if(logairarray[index]=="low"){sum4=sum4+1}
else if(logairarray[index]=="mid"){sum5=sum5+1}
else{sum6=sum6+1}
}
let result = Math.max(sum, sum2, sum3)
let result2 = Math.max(sum4, sum5, sum6)

if(result==sum && result2==sum4){document.getElementById("overview").innerHTML="(20) no stress ❄️"}
if(result==sum && result2==sum5){document.getElementById("overview").innerHTML="(30) no stress ❄️"}
if(result==sum && result2==sum6){document.getElementById("overview").innerHTML="(50) chilled week ❄️"}
if(result==sum2 && result2==sum4){document.getElementById("overview").innerHTML="(50) light breeze 💨"}
if(result==sum2 && result2==sum5){document.getElementById("overview").innerHTML="(60) little heat, no problem 😮‍💨"}
if(result==sum2 && result2==sum6){document.getElementById("overview").innerHTML="(70) its getting warm ♨️"}
if(result==sum3 && result2==sum4){document.getElementById("overview").innerHTML="(70) hot week, but still cooling ♨️"}
if(result==sum3 && result2==sum4 && sum7==1){document.getElementById("overview").innerHTML="(75) intense sessions , cooling off ♨️"}
if(result==sum3 && result2==sum5){document.getElementById("overview").innerHTML="(85) pressured 🔥"}
if(result==sum3 && result2==sum5 && sum7==1){document.getElementById("overview").innerHTML="(90) intense sessions 🔥"}
if(result==sum3 && result2==sum6){document.getElementById("overview").innerHTML="(100) been pushing limits ⚠️"}
if(result==sum3 && result2==sum6 && sum7==1){document.getElementById("overview").innerHTML="(100) extreme sessions ⚠️"}
if(logavgarray.length<5){document.getElementById("overview").innerHTML="insufficient data for weekend trend ⛓️‍💥"}
}
else{document.getElementById("overview").innerHTML="weekend trend unavailable ⛔"
}
document.getElementById("overview").style.animationName="fade"
setTimeout(() => {
document.getElementById("overview").style.animationName=""
}, 1000);
let thisinter = setInterval(()=>{
add=add+1
if(add==1){document.getElementById("overview").innerHTML="total ice packs used this week : "+logpacks}
else if(add==2){if(logavgarray.length<3){document.getElementById("overview").innerHTML="not enough data to estimate temp"}
else{let sum = 0
for (let index = 0; index < logavgarray.length; index++) {
sum=sum+Number(logavgarray[index])
}
document.getElementById("overview").innerHTML="average temperature this week : "+sum/logavgarray.length
}}
else if(add==3){document.getElementById("overview").innerHTML="you've had "+logsessionno+" sessions this week"; clearInterval(thisinter)}
document.getElementById("otext").innerHTML="weekly trend "+add+" out of 3"
document.getElementById("overview").style.animationName="fade"
setTimeout(() => {
document.getElementById("overview").style.animationName=""
}, 1000);
}, 2000)

})

document.getElementById("start").addEventListener("click", ()=>{
if(pause==true){pause=false}
else{pause=true}
if(reset==true){
let bypass = false
let bypass2 = false
let min = 0
let sec = 0
let hour = 0
inter = setInterval(() => {if(pause==false){
if(overtmode==false){
if(bypass==false){min=limit
min=min-1
sec=60; bypass=true}
document.getElementById("min").innerHTML=min
sec=sec-1
document.getElementById("sec").innerHTML=sec
if(sec<10){document.getElementById("sec").innerHTML="0"+sec}
if(sec==0){min=min-1
sec=60
document.getElementById("min").innerHTML=min
if(min<10){document.getElementById("min").innerHTML="0"+min}}
if(min==-1){overtmode=true
console.log("overmode")
document.getElementById("play").src="notification-pluck-off-269290.mp3"
document.getElementById("play").play()
document.getElementById("refillbtn").style.backgroundColor="rgb(27, 234, 155)"
}
storagelvl=(packs*25)+(25/(limit/(limit-min)))
document.getElementById("storetxt").innerHTML="liquid storage state : "+parseInt(storagelvl)+"% used"
dblvl = 100/(limit/(min))
document.getElementById("waterlvl").style.backgroundImage="linear-gradient(rgb(255, 255, 255) "+dblvl+"%, rgba(16, 225, 232, 0.854) 50%)"
}

if(overtmode==true){

if(bypass2==false){sec=0
setTimeout(()=>{notification("refill ice pack !")}, 1000)
min=0; bypass2=true}
document.getElementById("min").innerHTML="0"+min
sec=sec+1
document.getElementById("sec").innerHTML=sec
if(sec<10){document.getElementById("sec").innerHTML="0"+sec}
if(sec==60){
sec=0
min=min+1
document.getElementById("sec").innerHTML=sec
if(sec<10){document.getElementById("sec").innerHTML="0"+sec}
document.getElementById("min").innerHTML=min
if(min<10){document.getElementById("min").innerHTML="0"+min}
if(min==overtime && sec==0){
setTimeout(()=>{notification("overtime detected !!")}, 1000)
document.getElementById("play").src="notification-alert-269289.mp3"
document.getElementById("play").play()
document.getElementById("refillbtn").style.backgroundColor="rgb(255, 49, 38)"
document.getElementById("sec").style.color="rgb(255, 49, 38)"
}
if(min==60){
min=0
sec=0
hour=hour+1
document.getElementById("sec").innerHTML=sec
if(sec<10){document.getElementById("sec").innerHTML="0"+sec}
document.getElementById("min").innerHTML=min
if(min<10){document.getElementById("min").innerHTML="0"+min}
document.getElementById("hour").innerHTML=hour
if(hour<10){document.getElementById("hour").innerHTML="0"+hour}
}
}}


}}, 1000);}
reset=false
})


document.getElementById("refillbtn").addEventListener("click", ()=>{
reset=true
overtmode=false
packs=packs+1
packsrt=packsrt+1
logpacks=logpacks+1
localStorage.setItem("logpacks", logpacks)
storagelvl=packs*25
document.getElementById("storetxt").innerHTML="liquid storage state : "+storagelvl+"% used"
if(storagelvl>=75){notification("change storage full !!")}
document.getElementById("packstxt").innerHTML="packs used : "+packsrt
clearInterval(inter)
clearInterval(inter2)
document.getElementById("hour").innerHTML="00"
document.getElementById("min").innerHTML="00"
document.getElementById("sec").innerHTML="00"
document.getElementById("refillbtn").style.backgroundColor="rgb(255, 255, 255)"
pause=true
})
document.getElementById("storetxt").addEventListener("dblclick", ()=>{
packs=0
document.getElementById("storetxt").innerHTML="liquid storage state : 0"+"% used"
})
let switcha = false
document.getElementById("add").addEventListener("click", ()=>{
if(switcha==false){document.getElementById("table").style.display="none"
document.getElementById("addpage").style.display="flex"
document.getElementById("add").innerHTML="<"; switcha=true}
else{
document.getElementById("table").style.display="flex"
document.getElementById("addpage").style.display="none"
document.getElementById("add").innerHTML="+"; switcha=false
document.getElementById("highair").style.backgroundColor="rgb(45, 45, 53)"
document.getElementById("midair").style.backgroundColor="rgb(45, 45, 53)"
document.getElementById("lowair").style.backgroundColor="rgb(45, 45, 53)"
document.getElementById("mintxt").value=""
document.getElementById("maxtxt").value=""
document.getElementById("othertxt").value=""
document.getElementById("result").innerHTML=""
}
})
document.getElementById("cali").addEventListener("click", ()=>{
if(document.getElementById("mintxt").value!="" && document.getElementById("maxtxt").value!="" && parseInt(document.getElementById("mintxt").value)!=NaN && parseInt(document.getElementById("maxtxt").value)!=NaN){
let min = parseInt(document.getElementById("mintxt").value)
let max = parseInt(document.getElementById("maxtxt").value)
let others = []
if(document.getElementById("othertxt").value!=""){
others=document.getElementById("othertxt").value.split(",")
}
console.log(others)
let result = 0

if(others!=[]){
for (let index = 0; index < others.length; index++) {
result=result+parseInt(others[index])}
result = result+min+max
result=result/(2+others.length)
console.log(result)
}
else{result = min+max
result=result/2
console.log(result)
}

if(result<=50){document.getElementById("result").innerHTML="average temperature "+parseInt(result)+"°c chill light load"; logcon=false}
else if(result<=60){document.getElementById("result").innerHTML="average temperature "+parseInt(result)+"°c chill moderate load"; logcon=false}
else if(result<=70 && airflow==3){document.getElementById("result").innerHTML="average temperature "+parseInt(result)+"°c hot high fan temp"; logcon=false}
else if(result<=70){document.getElementById("result").innerHTML="average temperature "+parseInt(result)+"°c mild heat mod/heavy load"; logcon=false}

else if(result<=80 && airflow==2 && session==true){document.getElementById("result").innerHTML="average temperature "+parseInt(result)+"°c high temp (recommended) "; logcon=false ; configure()}
else if(result<=80 && airflow==2){document.getElementById("result").innerHTML="average temperature "+parseInt(result)+"°c high temp might increase"; logcon=false}
else if(result<=80 && airflow==3){document.getElementById("result").innerHTML="average temperature "+parseInt(result)+"°c high temp might increase (recommended) "; logcon=false; configure()}
else if(result<=80){document.getElementById("result").innerHTML="average temperature "+parseInt(result)+"°c hot"; logcon=false}

else if(result<=90 && airflow==2){document.getElementById("result").innerHTML="average temperature "+parseInt(result)+"°c very high temp (recommended) ";logcon=false; configure2() }
else if(result<=90 && airflow==3 && session==true){document.getElementById("result").innerHTML="average temperature "+parseInt(result)+"°c overheating (recommended) stop session"; logcon=false; notification("stop session !!")}
else if(result<=90 && airflow==3){document.getElementById("result").innerHTML="average temperature "+parseInt(result)+"°c overheating (recommended) ";logcon=false; configure2(); }
else if(result<=90 && session==true){document.getElementById("result").innerHTML="average temperature "+parseInt(result)+"°c very high temp (recommended) ";logcon=false; configure2(); }
else if(result<=90){document.getElementById("result").innerHTML="average temperature "+parseInt(result)+"°c very high temp (recommended) "; logcon=false; configure(); }

else{document.getElementById("result").innerHTML="average temperature "+parseInt(result)+"°c overheating!! (recommended) stop session"; logcon=false; notification("stop session !!")}
logminarray[logminarray.length]=min
localStorage.setItem("logminarray", logminarray)
logmaxarray[logmaxarray.length]=max
localStorage.setItem("logmaxarray", logmaxarray)
logavgarray[logavgarray.length]=Math.round(result)
if(Math.round(result)>=90){notification("logs high temp !")}
localStorage.setItem("logavgarray", logavgarray)
logconarray[logconarray.length]=logcon
localStorage.setItem("logconarray", logconarray)
if(airflow==1){logairarray[logairarray.length]="low"}
else if(airflow==2){logairarray[logairarray.length]="mid"}
else if(airflow==3){logairarray[logairarray.length]="high"}
else{logairarray[logairarray.length]="null"}
localStorage.setItem("logairarray", logairarray)
if(others.length==0){logotherarray[logotherarray.length]="00/00/00"}
else if(others.length==1){logotherarray[logotherarray.length]=others[0]+"/00/00"}
else if(others.length==2){logotherarray[logotherarray.length]=others[0]+"/"+others[1]+"/00"}
else if(others.length==3){logotherarray[logotherarray.length]=others[0]+"/"+others[1]+"/"+others[2]}
else{logotherarray[logotherarray.length]=others[0]+"/"+others[1]+"/"+others[2]}
localStorage.setItem("logotherarray", logotherarray)
if(session==true){logsessionarray[logsessionarray.length]="true"+sessionid}
else{logsessionarray[logsessionarray.length]="false"}
localStorage.setItem("logsessionarray", logsessionarray)
console.log(logminarray)
console.log(logmaxarray)
console.log(logavgarray)
console.log(logairarray)
console.log(logotherarray)
console.log(logsessionarray)
let create = document.createElement("div")
create.className="row"
document.getElementById("table").append(create)
let create1 = document.createElement("p")
create1.className="min"
create1.innerHTML=logminarray[logminarray.length-1]
let create2 = document.createElement("p")
create2.className="max"
create2.innerHTML=logmaxarray[logmaxarray.length-1]
let create3 = document.createElement("p")
create3.className="other"
create3.innerHTML=logotherarray[logotherarray.length-1]
let create4 = document.createElement("p")
create4.className="avg"
create4.innerHTML=logavgarray[logavgarray.length-1]
let create6 = document.createElement("p")
create6.className="air"
create6.innerHTML=logairarray[logairarray.length-1]

create.append(create1)
create.append(create2)
create.append(create3)
create.append(create4)
create.append(create6)
}
else{document.getElementById("result").innerHTML="error"}
})
document.getElementById("lowair").addEventListener("click", ()=>{
airflow=1
document.getElementById("lowair").style.backgroundColor="rgb(116, 116, 116)"
document.getElementById("midair").style.backgroundColor="rgb(45, 45, 53)"
document.getElementById("highair").style.backgroundColor="rgb(45, 45, 53)"
})
document.getElementById("midair").addEventListener("click", ()=>{
airflow=2
document.getElementById("midair").style.backgroundColor="rgb(116, 116, 116)"
document.getElementById("lowair").style.backgroundColor="rgb(45, 45, 53)"
document.getElementById("highair").style.backgroundColor="rgb(45, 45, 53)"
})
document.getElementById("highair").addEventListener("click", ()=>{
airflow=3
document.getElementById("highair").style.backgroundColor="rgb(116, 116, 116)"
document.getElementById("midair").style.backgroundColor="rgb(45, 45, 53)"
document.getElementById("lowair").style.backgroundColor="rgb(45, 45, 53)"
})

function configure() {
let create = document.createElement("a")
create.innerHTML="configure"
create.style.color="rgb(30, 146, 255)"
create.style.cursor="pointer"
create.style.textDecoration="solid"
create.style.textDecorationLine="underline"
create.style.textDecorationColor="rgb(30, 146, 255)"
document.getElementById("result").append(create)
create.addEventListener("click", ()=>{
limit=15
overtime=5
logcon=true
logconarray[logconarray.length-1]=logcon
localStorage.setItem("logconarray", logconarray)
console.log(logconarray)
let create7 = document.createElement("p")
create7.className="con"
create7.innerHTML="configured"
document.getElementsByClassName("row").item(logconarray.length-1).append(create7)
window.alert("tracking has been reconfigured ")
})
}
function configure2() {
let create = document.createElement("a")
create.innerHTML="configure"
create.style.color="rgb(30, 146, 255)"
create.style.textDecoration="solid"
create.style.cursor="pointer"
create.style.textDecorationLine="underline"
create.style.textDecorationColor="rgb(30, 146, 255)"
document.getElementById("result").append(create)
create.addEventListener("click", ()=>{
limit=10
overtime=2
logcon=true
logconarray[logconarray.length-1]=logcon
localStorage.setItem("logconarray", logconarray)
console.log(logconarray)
let create7 = document.createElement("p")
create7.className="con"
create7.innerHTML="configured"
document.getElementsByClassName("row").item(logconarray.length-1).append(create7)
window.alert("tracking has been reconfigured ")
})
}
let tempadd = 0
for (let index = 0; index < 5; index++) {
document.getElementsByClassName("donebtn").item(index).addEventListener("click", ()=>{
if(document.getElementsByClassName("donebtn").item(index).style.backgroundColor!="rgb(176, 176, 176)"){
if(index==0){document.getElementsByClassName("donebtn").item(index).style.textDecoration="line-through"
document.getElementById("config3").style.textDecorationColor="grey"
}
else if(index==1){document.getElementsByClassName("donebtn").item(index).style.textDecoration="line-through"
document.getElementById("config4").style.textDecorationColor="grey"
}
else if(index==2){document.getElementsByClassName("donebtn").item(index).style.textDecoration="line-through"
document.getElementById("config2").style.textDecorationColor="grey"
}
else if(index==3){document.getElementsByClassName("donebtn").item(index).style.textDecoration="line-through"
document.getElementById("config1").style.textDecorationColor="grey"
}
else if(index==4){document.getElementsByClassName("donebtn").item(index).style.textDecoration="line-through"
document.getElementById("config5").style.textDecoration="grey"
}
}
tempadd=tempadd+1
if(tempfactor>0.25){
tempfactor=tempfactor-0.05*(5/templimit)
}

if((tempadd/templimit)*100<=25){document.getElementById("esttemp").innerHTML="optimizing"}
else if((tempadd/templimit)*100<=50){document.getElementById("esttemp").innerHTML="keep going"}
else if((tempadd/templimit)*100<=75){document.getElementById("esttemp").innerHTML="half way there"}
else if((tempadd/templimit)*100<100){document.getElementById("esttemp").innerHTML="almost there"}
else if((tempadd/templimit)*100==100){document.getElementById("esttemp").innerHTML="optimized"}

document.getElementById("esttemp").style.animationName="fade"
setTimeout(()=>{document.getElementById("esttemp").style.animationName=""}, 500)
setTimeout(()=>{document.getElementById("esttemp").style.animationName="fade"
document.getElementById("esttemp").innerHTML=Math.round(50+(temperature * tempfactor))+"°C estimated"
setTimeout(()=>{document.getElementById("esttemp").style.animationName=""}, 500)}, 1000)



let sinter = setInterval(()=>{
 if(document.getElementById("progress").value<(tempadd/templimit)*100){
document.getElementById("progress").value=parseInt(document.getElementById("progress").value)+1
}
else{clearInterval(sinter)}
}, 20)
})
}

  
dragElement(document.getElementById("movebtn"));
let elmnt = document.getElementById("movebtn")
function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      document.getElementById("movebtn").onmousedown = dragMouseDown;
    
  
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
let startsession = false
let sesinter = null
let sessiontime = 0
let sessioninc = 1
let sessionhr = 0
let sessionmin = 0
document.getElementById("movebtn").addEventListener("click", ()=>{

if(startsession==false){

sessionmin=0
sessiontime=0
sessionhr=0
document.getElementById("movebtn").style.backgroundColor="rgba(255, 29, 29, 0.69)"
document.getElementById("start").click()
session=true
sesinter = setInterval(()=>{
sessiontime=sessiontime+1
if(sessiontime/60<1){
if(sessiontime<10 && sessionmin<10){document.getElementById("runtime").innerHTML="0"+sessionmin+": 0"+sessiontime}
else if(sessiontime<10){document.getElementById("runtime").innerHTML=sessionmin+": 0"+sessiontime}
else if(sessionmin<10){document.getElementById("runtime").innerHTML="0"+sessionmin+": "+sessiontime}
else {document.getElementById("runtime").innerHTML=+sessionmin+": "+sessiontime}
if (sessionhr>0) {  
if(sessionhr<10 && sessionmin<10){document.getElementById("runtime").innerHTML="0"+sessionhr+": 0"+sessionmin}
else if(sessionmin<10){document.getElementById("runtime").innerHTML=sessionhr+": 0"+sessionmin}
else if(sessionhr<10){document.getElementById("runtime").innerHTML="0"+sessionhr+": "+sessionmin}
else {document.getElementById("runtime").innerHTML=+sessionhr+": "+sessionmin}
}
}
else{sessionmin=sessionmin+1; sessiontime=0}
if(sessionmin>59){sessionhr=sessionhr+1
if(sessionhr==2){notification("extended session !")}
sessionmin=0
}

}, 1000)
startsession=true}
else{session=false
if(pause==false){document.getElementById("start").click()}
clearInterval(sesinter)
document.getElementById("movebtn").style.backgroundColor="rgba(159, 159, 159, 0.64)"  
startsession=false
document.getElementById("runtime").innerHTML="00:00"
if(sessionmin>=10 || sessionhr>=1){
notification("session stopped")
logsessionno=logsessionno+1
localStorage.setItem("logsessionno", logsessionno)
}
else{notification("session was to short !")}
}
})

function notification(msg) {
document.getElementById("icon").innerHTML="❗"
let create = document.createElement("p")
create.className="msg"
create.innerHTML=msg
let create1 = document.createElement("span")
create1.innerHTML="x"
create.append(create1)
create1.addEventListener("click", ()=>{create.style.display="none"})
document.getElementById("msgbx").append(create)
document.getElementById("play").src="notification-2-269292.mp3"
document.getElementById("play").play()
}
setInterval(()=>{
document.getElementById("tempd").style.backgroundImage="linear-gradient(rgb(255, 255, 255) "+(100-Math.round(50+(temperature * tempfactor)))+"%, rgba(54, 54, 54, 0.9) 50%)"
if(Number(time)<6){document.getElementById("weatherd").src="asset/bedtime_24dp_000000_FILL0_wght400_GRAD0_opsz24.png"}
else if(Number(time)<12){document.getElementById("weatherd").src="asset/sunny_24dp_000000_FILL0_wght400_GRAD0_opsz24.png"}
else if(Number(time)<19){document.getElementById("weatherd").src="asset/cloud_24dp_000000_FILL0_wght400_GRAD0_opsz24.png"}
else if(Number(time)<23){document.getElementById("weatherd").src="asset/bedtime_24dp_000000_FILL0_wght400_GRAD0_opsz24.png"}
}, 5000)
