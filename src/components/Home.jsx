import React from 'react'
import '../App.css';
import './Home.css';
import Products from './Products';

export default function Home() {
    return (
        <div>
            <div className='homeback'>
            <p className='homep1'>NEW SEASON ARRIVALS</p>
            <p className='homep2'>CHECK OUT ALL THE TRENDS</p>
            
        </div>

        <Products/>
        </div>
        
    )
}
