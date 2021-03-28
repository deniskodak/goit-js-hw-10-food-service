import { bodyRef, inputRef } from './domElements';


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function bodyDefaultTheme() {
    if (localStorage.getItem('theme') == Theme.DARK) {
        darkTheme(Theme);
    }
    else {
        lightTheme(Theme);
    }
}

bodyDefaultTheme();

function darkTheme({ LIGHT, DARK }) {
    bodyRef.classList.add(`${DARK}`);
    bodyRef.classList.remove(`${LIGHT}`);
    inputRef.setAttribute('checked', 'true');
    localStorage.setItem('theme', `${DARK}`);
}
function lightTheme({ LIGHT, DARK }) {
    bodyRef.classList.add(`${LIGHT}`);
    bodyRef.classList.remove(`${DARK}`);

    inputRef.removeAttribute("checked");
    localStorage.setItem('theme', `${LIGHT}`);
}

function themeToggle() {
    if (inputRef.hasAttribute('checked')) {
        console.log('Privet');
        return lightTheme(Theme);
    }
    if (!inputRef.hasAttribute('checked')) {
        console.log("POKA");
        return darkTheme(Theme);
    }
}

inputRef.addEventListener('change', themeToggle);

