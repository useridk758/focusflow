const languages = [
{
name:"ꞌAreꞌare",
native:"Areare",
location:"Solomon Islands"
},
{
name:"ʼAuhelawa",
native:"Kurada",
location:"Papua New Guinea"
},
{
name:"ʼOle",
native:"ʼOlekha",
location:"Bhutan"
},
{
name:"A-Hmao",
native:"ad Hmaob lul",
location:"China"
},
{
name:"Aari",
native:"አፋን፡ኣሪ፡",
location:"Ethiopia"
},
{
name:"Abau",
native:"Abau",
location:"Papua New Guinea"
},
{
name:"Abaza",
native:"Aбаза бызшва",
location:"Russia"
},
{
name:"Abellen",
native:"Ayta Abellen",
location:"Philippines"
},
{
name:"Abkhaz",
native:"Aҧсуа бызшәа",
location:"Abkhazia / Georgia"
},
{
name:"Abui",
native:"Abui",
location:"Indonesia"
},
{
name:"Acehnese",
native:"Bahsa Acèh",
location:"Indonesia"
},
{
name:"Acholi",
native:"Lwo",
location:"Uganda"
},
{
name:"Adyghe",
native:"Адыгабзэ",
location:"Russia"
},
{
name:"Afrikaans",
native:"Afrikaans",
location:"South Africa"
},
{
name:"Ainu",
native:"アイヌ イタク",
location:"Japan"
},
{
name:"Albanian",
native:"Shqip",
location:"Albania"
},
{
name:"American Sign Language",
native:"ASL",
location:"United States"
},
{
name:"Amharic",
native:"አማርኛ",
location:"Ethiopia"
},
{
name:"Ancient Greek",
native:"Ἑλληνική",
location:"Mediterranean"
},
{
name:"Arabic",
native:"العربية",
location:"Middle East"
},
{
name:"Aramaic",
native:"ܐܪܡܝܐ",
location:"Middle East"
},
{
name:"Armenian",
native:"Հայերեն",
location:"Armenia"
},
{
name:"Assamese",
native:"অসমীয়া",
location:"India"
},
{
name:"Avar",
native:"авар мацӏ",
location:"Russia"
},
{
name:"Aymara",
native:"Aymar Aru",
location:"Bolivia"
}
];

// render cards
const grid =
document.getElementById(
"languageGrid"
);

function renderLanguages(
items
){
grid.innerHTML="";

items.forEach(lang=>{
grid.innerHTML += `
<div class="glass language-card">
<h3>${lang.name}</h3>
<p>${lang.native}</p>
<small>${lang.location}</small>
</div>
`;
});
}

renderLanguages(languages);

// search
document
.getElementById(
"searchInput"
)
.addEventListener(
"input",
e=>{

const q =
e.target.value
.toLowerCase();

const filtered =
languages.filter(
lang=>
lang.name
.toLowerCase()
.includes(q)
);

renderLanguages(
filtered
);
});

// smooth animations
const observer =
new IntersectionObserver(
entries=>{
entries.forEach(
entry=>{
if(
entry.isIntersecting
){
entry.target
.classList
.add("show");
}
});
});

document
.querySelectorAll(
".fade-up"
)
.forEach(el=>
observer.observe(el)
);

// timer
let time = 1500;
let timer;

function updateTimer(){
const min =
Math.floor(time/60);

const sec =
time % 60;

document
.getElementById(
"timer"
).textContent =
`${min}:${sec
.toString()
.padStart(2,"0")}`;
}

function startTimer(){
clearInterval(timer);

timer =
setInterval(()=>{
if(time>0){
time--;
updateTimer();
}
},1000);
}

function resetTimer(){
clearInterval(timer);
time=1500;
updateTimer();
}

updateTimer();

// tasks
function addTask(){
const input =
document.getElementById(
"taskInput"
);

if(!input.value)
return;

const li =
document
.createElement("li");

li.textContent =
input.value;

li.onclick=
()=>li.remove();

document
.getElementById(
"taskList"
)
.appendChild(li);

input.value="";
}

// streak
let streak =
localStorage.getItem(
"streak"
)||0;

document
.getElementById(
"streakDisplay"
).textContent =
`${streak} Days`;

function increaseStreak(){
streak++;

localStorage.setItem(
"streak",
streak
);

document
.getElementById(
"streakDisplay"
).textContent =
`${streak} Days`;
}

function scrollToLanguages(){
document
.getElementById(
"languages"
)
.scrollIntoView();
}
