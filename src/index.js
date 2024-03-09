console.log('hello,world!');

const sumFile = require('./sum2');
import {sum3} from'./sum3';
import style from './css/index.scss';

console.log(sumFile.sum(1,2));
console.log(sum3(1, 2, 3));

let title = document.querySelector('#demo');
title.innerHTML = `wynik: ${sumFile.sum(1,2)}`;