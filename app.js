const navSlide = ()=>{
    const burger = document.querySelector('.hamburger');
    const nav =document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')
    
    burger.addEventListener('click',()=>{
        //toggle nav
        nav.classList.toggle('nav-active');

        //animate links
         navLinks.forEach((links,index)=>{
             if(links.style.animation){
                    links.style.animation='';
                }
             else{
                    links.style.animation = `navfade 0.5s ease forwards ${index/5+0.5}s`
                }
            });
            //burger animation
            burger.classList.toggle('toggle');
    });
   

}
navSlide();