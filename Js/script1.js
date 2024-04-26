// document.title = 'Intro to the DOM';

// const h1 = document.querySelector('#heading-1'); // id
// 
 // class
// const h2 = document.querySelector('h2'); // element name
// const ul = document.getElementById('todo-list'); // ids only
// const lis = document.querySelectorAll('li'); // returns all matching elements


// const visitedLinks = document.querySelectorAll('nav > a');

// const footer = ul.nextElementSibling;

// console.log(footer);

// console.log(h1.innerText);
// console.log(ul);
// console.log(navbar);
// console.log(h2);
// console.log(lis);

// console.log(visitedLinks);


// // NodeList
// visitedLinks.forEach(el => console.log(el));
// console.log(visitedLinks.length);

// // Array
// const visitedLinksArr = Array.from(visitedLinks);
// visitedLinksArr.map(el => console.log(el));





// Assigning app to be a method to get all id named app all on page
const app = document.getElementById('app');

const ul = document.createElement('ul');
const li = document.createElement('li');
li.textContent = 'Learn the DOM';
const li1 = document.createElement('li');
li1.textContent = 'Learn HTML';
const li2 = document.createElement('li');
li2.textContent = 'Learn JS';

const todos = ['Learn JS', 'Learn Html', 'Learn The Dom'];

const ol = document.body.appendChild(document.createElement('div')).appendChild(document.createElement('ol')); // Acessing the body on HTML and creating a div and ol plus appending the div under body and apending ol under div
// Looping the array adding index in array to li to 
for (let i = 0; i < todos.length; i++) {
    const li = document.createElement("li")
    li.textContent = todos[i]
    ol.appendChild(li);
    
  }

// Order manners when appending elements
ul.appendChild(li); // add to the end
//   ul.appendChild(li1);
 ul.prepend(li1); // adds to the beginning
ul.insertBefore(li2,ul.firstChild.nextSibling); // insert before selected
app.appendChild(ul);

// console.log(li);
// console.dir(li);

console.log(app);

const comments = document.querySelector('#comments');
const commentsUl = document.createElement('ul');


const userComments = ['amazing!', 'great work!', 'super!'];

for (let i = 0; i < userComments.length; i++) {
    const li = document.createElement('li');
    li.textContent = userComments[i];
    commentsUl.appendChild(li);
    console.log(userComments[i]);
}

 comments.appendChild(commentsUl);

 console.log(commentsUl.firstChild);

//  
//  while(commentsUl.firstChild) {
//      commentsUl.removeChild(commentsUl.firstChild);
//  }

console.log(commentsUl.firstChild);


// ========== Replacing Child Elements ==============
const newComment = document.createElement('li');
newComment.textContent = 'Hello!';
console.log(newComment);

commentsUl.replaceChild(newComment, commentsUl.firstChild);


// ========= innerHTML vs textContent ========================
const liWithHTML = document.createElement('li');
liWithHTML.innerHTML = '<b>This Amazing!</b>';

console.log(liWithHTML);
commentsUl.appendChild(liWithHTML)

console.dir(commentsUl)
commentsUl.style.backgroundColor = 'royalblue';
commentsUl.style.padding = '15px';
commentsUl.style.color = '#fff';



// ==== Attributes =====================================
const img = document.createElement('img');
// set attribute
img.setAttribute('src', 'https://images.unsplash.com/photo-1713283365745-a727fb26c52f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8');

img.setAttribute('alt', 'not my home');

// check if attribute exist
console.log(img.hasAttribute('alt'));

document.body.appendChild(img);

// ===
const a = document.createElement('a');

// SET Attribute
a.setAttribute('href', 'https://www.unsplash.com');
a.setAttribute('target', '_blank');
a.textContent = 'See more photos';

console.log(a.hasAttribute('src'));

// GET Attribute
const url = a.getAttribute('href');
console.log(url);

document.body.appendChild(a);

// ============= ClassList =========================

document.body.classList.add('container');
document.body.classList.remove('container');
document.body.classList.toggle('container');
console.log(document.body.classList.contains('wrapper'));
// ===
document.body.classList.replace('container', 'wrapper');

console.log(document.body.classList);