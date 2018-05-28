import React from 'react';
import ReactDOM from 'react-dom';
// if you are using Webpack > 3 then you only need to install babel-preset-env, since this preset accounts for es2015, es2016 and es2017.
// console.log(validator.isEmail('test@hotmail.c'));
const template = <p>this is jsx from webpack</p>;
ReactDOM.render(template, document.getElementById('app'));