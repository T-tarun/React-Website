import React from 'react'
import ReactDOM from 'react-dom';
import Appf from './Appf';
import './index.css';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
       <>
       <BrowserRouter>
       <Appf/>
       </BrowserRouter>
       </>
       ,document.getElementById('root')
);