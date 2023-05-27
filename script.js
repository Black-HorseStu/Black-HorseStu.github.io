let lineOne, lineTwo, lineThree, lineFour, lineFive;
lineOne = document.querySelector(".text-1");
lineTwo = document.querySelector(".text-2");
lineThree = document.querySelector(".text-3");
lineFour = document.querySelector(".text-4");
lineFive = document.querySelector(".text-5");

let tl = anime.timeline({
  delay: 0,
  easing: "easeOutExpo",
  direction: "alternate",
  loop: true
});

tl.add(
  {
    duration: 700,
    targets: lineOne,
    translateX: -75,
    opacity: 0
  },
  400
);

tl.add({
  duration: 700,
  targets: lineOne,
  height: 175,
  opacity: 1
});
tl.add(
  {
    duration: 100,
    targets: lineTwo,
    translateX: -75,
    opacity: 0
  },
  "+=500"
);
tl.add({
  duration: 700,
  targets: lineTwo,
  width: 150,
  opacity: 1
});
tl.add({
  duration: 700,
  targets: lineThree,
  height: 200,
  opacity: 1
});
tl.add({
  duration: 100,
  targets: lineFour,
  translateX: 75,
  opacity: 0
});
tl.add({
  duration: 700,
  translateY: 45,
  translateX: 75,
  targets: lineFour,
  height: 100,
  opacity: 1
});
tl.add({
  duration: 100,
  targets: lineFive,
  translateX: 75,
  opacity: 0
});
tl.add({
  duration: 700,
  targets: lineFive,
  translateX: 75,
  translateY: -60,
  opacity: 1
});

setTimeout(() => {
  const box = document.getElementById('PageLoad');
  box.remove();
}, 12000);

function tos(id) {
  var divelement = document.getElementById(id);
  if(divelement.style.display === 'none')
    {
    divelement.style.display = 'block';
    }
  else
    {
    divelement.style.display = 'none';
    }
}

var string = "My name is Adham Y. ramadan.";
var str = string.split("");
var el = document.getElementById('str');
(function animate() {
str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
var running = setTimeout(animate, 150);
})();

var string2 = "I make video games independently and work as an artist. I developed excellent talents in graphics, pixel art environments and animation, logo design, and other areas through years of consistent work. I concentrate on drawing distinct and aesthetically pleasing logos and pixel art so that, over time, people will acknowledge me as the illustrator of such designs and artwork.";
var str2 = string2.split("");
var el2 = document.getElementById('str2');
(function animate() {
str2.length > 0 ? el2.innerHTML += str2.shift() : clearTimeout(running); 
var running = setTimeout(animate, 80);
})();

var string3 = " I was able to improve my artistic abilities Through critical self-analysis, dissecting techniques, and lessons.";
var str3 = string3.split("");
var el3 = document.getElementById('str3');
(function animate() {
str3.length > 0 ? el3.innerHTML += str3.shift() : clearTimeout(running); 
var running = setTimeout(animate, 100);
})();

var string4 = "I mainly use Aseprite for pixel art, as for designs i use Adobe illustrator and Adobe photoshop.";
var str4 = string4.split("");
var el4 = document.getElementById('str4');
(function animate() {
str4.length > 0 ? el4.innerHTML += str4.shift() : clearTimeout(running); 
var running = setTimeout(animate, 100);
})();

var string5 = "I experimented with a variety of game production software, but Gamemaker Studio 2, Unity, and Godot were the best for me in terms of developing specific game genres.";
var str5 = string5.split("");
var el5 = document.getElementById('str5');
(function animate() {
str5.length > 0 ? el5.innerHTML += str5.shift() : clearTimeout(running); 
var running = setTimeout(animate, 100);
})();

var string6 = "I used Html, Css and Javascript.";
var str6 = string6.split("");
var el6 = document.getElementById('str6');
(function animate() {
str6.length > 0 ? el6.innerHTML += str6.shift() : clearTimeout(running); 
var running = setTimeout(animate, 100);
})();


let first = document.getElementById('discord'),
    sec = document.getElementById('sec-contact'),
    third = document.getElementById('ko-fi');
    fourth = document.getElementById('email');
    fifth = document.getElementById('youtube');
    sixth = document.getElementById('itch-io');
    seventh = document.getElementById('gamedev');
    eighth = document.getElementById('twitter');
    ninth = document.getElementById('inprnt');
    tenth = document.getElementById('instagram');
    

first.onmouseover = () => {
  sec.style.background = '#452c63a4';
}

first.onmouseleave = () => {
  sec.style.background = '#666666a1';  
}

//////////////

third.onmouseover = () => {
  sec.style.background = 'rgba(54, 173, 228, 0.479)';
}

third.onmouseleave = () => {
  sec.style.background = '#666666a1';  
}

//////////////

fourth.onmouseover = () => {
  sec.style.background = '#87b4b680';
}

fourth.onmouseleave = () => {
  sec.style.background = '#666666a1';  
}

//////////////

fifth.onmouseover = () => {
  sec.style.background = '#6d23237e';
}

fifth.onmouseleave = () => {
  sec.style.background = '#666666a1';  
}

/////////////

sixth.onmouseover = () => {
  sec.style.background = '#276e31a4';
}

sixth.onmouseleave = () => {
  sec.style.background = '#666666a1';  
}

////////////

seventh.onmouseover = () => {
  sec.style.background = '#252525c9';
}

seventh.onmouseleave = () => {
  sec.style.background = '#666666a1';  
}

////////////

eighth.onmouseover = () => {
  sec.style.background = '#36668d7e';
}

eighth.onmouseleave = () => {
  sec.style.background = '#666666a1';  
}

////////////

ninth.onmouseover = () => {
  sec.style.background = '#113511c9';
}

ninth.onmouseleave = () => {
  sec.style.background = '#666666a1';  
}

///////////

tenth.onmouseover = () => {
  sec.style.background = '#6d2b627c';
}

tenth.onmouseleave = () => {
  sec.style.background = '#666666a1';  
}
