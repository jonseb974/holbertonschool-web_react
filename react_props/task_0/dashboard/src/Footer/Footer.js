import React from 'react';
import { getFullYear, getFooterCopy } from './utils';
import './Footer.css';


export default function Footer(props) {
  return (
    <footer className='App-footer'>
      <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>
    </footer>
  )
}
