'use strict';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import calculator from './modules/calculator';
import feedBack from './modules/feedBack';
import ourCommand from './modules/ourCommand';
import sendForm from './modules/sendForm';
import slider from './modules/slider';
import tabs from './modules/tabs';
    
//Timer
setInterval(countTimer, 1000, '1 april 2021');
//Menu
toggleMenu();
//Popup
togglePopup();
//Tabs 
tabs();
//Слайдер
slider();
//Command
ourCommand();
//Calculator
calculator(100);
//Feedback
feedBack();
//Send-ajax-form  
sendForm(document.getElementById('form1'));
sendForm(document.getElementById('form3'));
sendForm(document.getElementById('form2'));
