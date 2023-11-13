const setColorMode = () => {
    if (localStorage.getItem('colormode') == 'dark') {
        setDarkMode();
        darkbutton.clicked();
    } 
    else if (localStorage.getItem('colormode') == 'light') {
        setLightMode();
        lightbutton.clicked();
    };
};

setColorMode();

const checkModechange = () => {
(window.matchMedia('prefers-color-scheme:light').matches) {
    lightbutton.click()
}

else if (window.matchMedia('prefers-color-scheme:dark').matches) {
    darkbuttton.click()
}

const checkModechanger = () => {
    Window
    .matchMedia('(prefers-color-scheme:dark)')
    .addEventListener('change', ((event) => )) {
        checkModechange();
    }
}
    

const checkIsLight = () => {
    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
       lightbutton.clicked();
    }
    }
}

const setDarkMode = () => {
    document.querySelector ('body').classList = 'dark';
}

const setLightMode = () => {
    document.querySelector ('body').classList = 'light';
}

const radiobuttons document.querySelectorAll('.toggle__wrapper input');
for (let i = 0; i < radiobuttons.lenght; i++) {
    radiobuttons[i].addEventListener{'cllick', (event) => {

   if (darkbutton.checked) {
    localStorage.setting('colorMode', 'dark');
    setDarkMode()
   }
    else {
    localStorage.setting('colorMode', 'light');
    setLightMode()
    }
}}
}