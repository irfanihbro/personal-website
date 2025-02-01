export function animation(){

  // section-heading entry animation
  const sectionHeading = document.querySelectorAll('section .heading');

  const headingObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
          const heading = entry.target;
        if(entry.isIntersecting){
          heading.style.animation = 'sec-heading-entry 1s ease forwards';
        }
      })
    },
    {
      rootMargin: '-50px'
    }
  );

  sectionHeading.forEach(heading => {
    headingObserver.observe(heading);
  });


  // more-about-me entry animation
  const moreAboutMe = document.querySelector('.more-about-me');
  const aboutMeObserver = new IntersectionObserver(entry => {
    if(entry[0].isIntersecting){
      moreAboutMe.style.animation = 'profile-about-entry 1.6s ease forwards'
    }
  });

  aboutMeObserver.observe(moreAboutMe)
  

  // years of doing entry animation
  const yearsOfDoing = document.querySelector('.years-of-doing');
  const yearsDoingObserver = new IntersectionObserver( entry => {
      if(entry[0].isIntersecting){
        yearsOfDoing.style.animation = 'years-doing-entry 1.8s ease forwards'
      }
    },
    {
      rootMargin: '-50px'
    }
  );

  yearsDoingObserver.observe(yearsOfDoing);


  // skill button entry animation
  const skillBtns = document.querySelectorAll('#skills-section button');
  const skillBtnsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        const button = entry.target;

        if(entry.isIntersecting){
          button.style.animation = 'skill-button-entry 1s ease forwards'
        }
      })
    }
  );

  skillBtns.forEach(button => {
    skillBtnsObserver.observe(button)
  });


  // skills entry animation
  const skills = document.querySelectorAll('.skills-container .skill');
  const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const skill = entry.target;
      if(entry.isIntersecting){
        skill.style.animation = ' cards-entry 1s ease forwards';
      }
    })
  },
  {
    rootMargin: '-70px'
  }
);

  skills.forEach(skill => {
    skillsObserver.observe(skill)
  });


  // projects entry animation
  const projects = document.querySelectorAll('#projects-section .project-card');
  const projectCardObserver =  new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const projectCard = entry.target;

      if(entry.isIntersecting){
        projectCard.style.animation = ' cards-entry 1s ease forwards';
      }
    })
  },
  {
    rootMargin: '-70px'
  }
  );

  projects.forEach(project => {
    projectCardObserver.observe(project)
  })

  // contact input entry animation
  const contactInputs = document.querySelectorAll('#contact-section .input');
  const inputObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const input = entry.target;
      if(entry.isIntersecting){
        input.style.animation = 'contact-input-entry 1s ease forwards'
      }
    })
  },
  {
    rootMargin: '-100px'
  }
);
  
  contactInputs.forEach(input => {
    inputObserver.observe(input)
  })




}