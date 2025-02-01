export function topNav(){
  const topNav = document.querySelector('nav.top-nav');

  const topnavHeight = topNav.offsetHeight
  document.documentElement.style.setProperty("--scroll-padding", `${topnavHeight + 30}px` );


  const section = document.querySelectorAll('.section-container section');
  const allNav = document.querySelectorAll('nav.top-nav li');
  
  const sectionObserver = new IntersectionObserver(
    (entries)=>{
      entries.forEach(entry => {
        if(entry.isIntersecting){
          allNav.forEach(nav => {
            const navClass = nav.classList[1];
            const sectionClass =  entry.target.classList[1];
            const navIcon = nav.childNodes[1].childNodes[2];

            if(sectionClass === navClass){
              navIcon.classList.add('active');
            } else {
              navIcon.classList.remove('active');
            }        
          });
        }
      });
      
    },
    {
      rootMargin: '-100px'
    }
  );

  section.forEach(section => {
    sectionObserver.observe(section)
  })


  


}

