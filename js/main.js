console.log("...js running");
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
});

// const blogwritercontenttext = document.getElementById('blog-writer-content');
// const readmorehover = document.getElementById('readmore-hover');



var blogwritercontenttext = document.getElementsByClassName('blog-writer-content-text')[0];
var readmorehover = document.getElementsByClassName('readmore-hover')[0];
// console.log(blogwritercontenttext);
// console.log(readmorehover); 
blogwritercontenttext.addEventListener('mouseover', () => {
readmorehover.classList.toggle('active') 
});

blogwritercontenttext.addEventListener('mouseout', () => {
  readmorehover.classList.toggle('active') 
  });
