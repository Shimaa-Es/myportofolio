const root = document.documentElement;
const themeButton = document.getElementById('theme-button');

const themes = {
  light: {
    '--primary-color': ' #9955e8', 
    '--secondary-color':' #7bffaf',
    '--second-text-color':' #7bffaf',
     '--dark-color':' #171023',
   '--light-dark-color':' #413a4f',
   '--light-color':' #f5f6f6',
    '--for-bg-section':' #E5D9F2',
    '--dark-for-dark':' #171023'
  },
  dark: {
    '--primary-color': ' #9955e8', 
    '--secondary-color':'rgb(58, 114, 81)',
    '--second-text-color':' #7bffaf',
     '--dark-color':' #f5f6f6',
   '--light-dark-color':' #413a4f',
   '--light-color':' #171023',
    '--for-bg-section':' #bebcc4',
    '--dark-for-dark':' #171023'
  },
  // Add more themes here
};

let currentTheme = 'light'; 

themeButton.addEventListener('click', () => {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light'; 

  const currentThemeVars = themes[currentTheme];
  for (const [key, value] of Object.entries(currentThemeVars)) {
    root.style.setProperty(key,value);
  }
});

/*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});
