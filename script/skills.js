export function skillFunctionality(){

  const skills = [
    //--------add skill here--------//
    {
      icon:'images/icons/html.png',
      name: 'HTML',
      type: 'tech-stack'
    },

    {
      icon:'images/icons/CSS.png',
      name: 'CSS',
      type: 'tech-stack'
    },

    {
      icon:'images/icons/bootstrap.png',
      name: 'Bootstrap',
      type: 'tech-stack'
    },

    {
      icon:'images/icons/material-ui.png',
      name: 'Material UI',
      type: 'tech-stack'
    },

    {
      icon:'images/icons/vite.png',
      name: 'Vite',
      type: 'tech-stack'
    },

    {
      icon:'images/icons/tailwind.png',
      name: 'Tailwind CSS',
      type: 'tech-stack'
    },

    {
      icon:'images/icons/Python.png',
      name: 'Python',
      type: 'tech-stack'
    },

    {
      icon:'images/icons/golang.png',
      name: 'Golang',
      type: 'tech-stack'
    },

    {
      icon:'images/icons/c-sharp.png',
      name: 'C#',
      type: 'tech-stack'
    },

    {
      icon:'images/icons/rust.png',
      name: 'Rust',
      type: 'tech-stack'
    },

    {
      icon:'images/icons/nextjs.png',
      name: 'Next.js',
      type: 'tech-stack'
    },

    {
      icon:'images/icons/solidjs.png',
      name: 'Solid.js',
      type: 'tech-stack'
    },

    {
      icon:'images/icons/Cpp.png',
      name: 'C++',
      type: 'tech-stack'
    },
    
    {
      icon:'images/icons/JavaScript.png',
      name: 'JAVASCRIPT',
      type: 'tech-stack'
    },

    {
      icon:'images/icons/typescript.png',
      name: 'TypeScript',
      type: 'tech-stack'
    },

    {
      icon:'images/icons/React.png',
      name: 'REACT',
      type: 'tech-stack'
    },

    {
      icon:'images/icons/vuejs.png',
      name: 'Vue.js',
      type: 'tech-stack'
    },

    {
      icon:'images/icons/lua.png',
      name: 'Lua',
      type: 'tech-stack'
    },

    {
      icon:'images/icons/tf.png',
      name: 'TensorFlow',
      type: 'tech-stack'
    },

    {
      icon:'images/icons/ruby.png',
      name: 'Ruby',
      type: 'tech-stack'
    },

    {
      icon:'images/icons/rubyonrails.png',
      name: 'Ruby on Rails',
      type: 'tech-stack'
    },

    {
      icon:'images/icons/webpack.png',
      name: 'Webpack',
      type: 'tech-stack'
    },

    {
      icon:'images/icons/laravel.png',
      name: 'Laravel',
      type: 'tech-stack'
    },

    {
      icon:'images/icons/mongodb.png',
      name: 'MongoDB',
      type: 'tech-stack'
    },

    {
      icon:'images/icons/django.png',
      name: 'Django',
      type: 'tech-stack'
    },

    {
      icon:'images/icons/php.png',
      name: 'PHP',
      type: 'tech-stack'
    },

    {
      icon:'images/icons/angular.png',
      name: 'Angular',
      type: 'tech-stack'
    },

    {
      icon:'images/icons/fastapi.png',
      name: 'FASTAPI',
      type: 'tech-stack'
    },

    {
      icon:'images/icons/flask.png',
      name: 'Flask',
      type: 'tech-stack'
    },

    {
      icon:'images/icons/opencv.png',
      name: 'OpenCV',
      type: 'tech-stack'
    },

    { icon: 'images/icons/vim.png', name: 'Vim', type: 'tool' },
    { icon: 'images/icons/vmw.png', name: 'VMware', type: 'tool' },
    { icon: 'images/icons/linux.png', name: 'Linux', type: 'tool' },
    { icon: 'images/icons/openwrt.png', name: 'OpenWrt', type: 'tool' },
    { icon: 'images/icons/powershell.png', name: 'PowerShell', type: 'tool' },
    { icon: 'images/icons/proxmox.png', name: 'Proxmox', type: 'tool' },
    { icon: 'images/icons/ubuntu.png', name: 'Ubuntu', type: 'tool' },
    { icon: 'images/icons/virtualbox.png', name: 'VirtualBox', type: 'tool' },
    { icon: 'images/icons/debian.png', name: 'Debian', type: 'tool' },
    { icon: 'images/icons/endeavour.png', name: 'Endeavour OS', type: 'tool' },
    { icon: 'images/icons/bash.png', name: 'Bash', type: 'tool' },
    { icon: 'images/icons/kali.png', name: 'Kali Linux', type: 'tool' },
    { icon: 'images/icons/linux.png', name: 'Linux', type: 'tool' },
    { icon: 'images/icons/Termux.png', name: 'Termux', type: 'tool' },
    { icon: 'images/icons/Acode.png', name: 'Acode', type: 'tool' },

    {
      icon:'images/icons/vsc.png',
      name: 'VS CODE',
      type: 'tool'
    },
    {
      icon:'images/icons/Git.png',
      name: 'GIT',
      type: 'tool'
    },
    {
      icon:'images/icons/github.png',
      name: 'GITHUB',
      type: 'tool'
    },

  ];


  let techstacksHTML = '';
  let toolsHTML = '';

  skills.forEach(skill => {
    const skillType = skill.type;

    if (skillType === 'tech-stack'){
      techstacksHTML += `
        <div class="tech-stack skill">
          <img class="icon" src="${skill.icon}" alt="skill-icon">
          <p>${skill.name}</p>
        </div>
      `
    }
    if(skillType === 'tool'){
      toolsHTML += `
      <div class="tool skill">
        <img class="icon" src="${skill.icon}" alt="skill-icon">
        <p>${skill.name}</p>
      </div>
    `
    }
  });

  document.querySelector('.skills-container.tech-stack-skills').innerHTML = techstacksHTML;
  document.querySelector('.skills-container.tools-skills').innerHTML = toolsHTML;



  // button functionality
  const techstackBtn = document.querySelector('.tech-stacks-btn');
  const toolsBtn = document.querySelector('.tools-btn');
  const techstackSkill = document.querySelector('.tech-stack-skills');
  const toolsSkill = document.querySelector('.tools-skills');

  techstackBtn.addEventListener('click', ()=>{
    toolsBtn.classList.remove('selected');
    techstackBtn.classList.add('selected');
    techstackSkill.style.display =  'grid';
    toolsSkill.style.display =  'none';

  });


  toolsBtn.addEventListener('click', ()=>{
    toolsBtn.classList.add('selected');
    techstackBtn.classList.remove('selected');
    techstackSkill.style.display =  'none';
    toolsSkill.style.display =  'grid';
    
  });
} 