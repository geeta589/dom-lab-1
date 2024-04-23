
//=======Part 1: Getting Started =======

const mainE1= document.querySelector("main");
mainE1.style.background= 'var(--main-bg)';
mainE1.innerHTML="<h1>DOM Manipulation</h1>";
mainE1.classList.add("flex-ctr");
document.body.appendChild(mainE1);

console.log(mainE1);

//===========Part 2: Creating a Menu Bar=========
const topMenuEl= document.getElementById("top-menu");
topMenuEl.style.height="100%"
topMenuEl.style.backgroundColor="var(--top-menu-bg)";
topMenuEl.style.padding="10px";
topMenuEl.classList.add("flex-around");

console.log(topMenuEl);
//======== Adding Menu Buttons ======

var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];
  
  menuLinks.forEach(link => {
    const menuLink = document.createElement("a");
    menuLink.href=link.href;
    menuLink.textContent=link.text;
    topMenuEl.appendChild(menuLink)
  } )

//   for (let menu of menuLinks)
//   {
//     let a = topMenuEl.innerHTML='<a></a>';
//         topMenuEl.add(a);
//   }
