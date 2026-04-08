import React from 'react'
import {Link} from 'react-router-dom'


function Hero() {
    return (
       <div className='container p-1' >

        <div className='row text-center'>
           <img src='media/images/homeHero.png'  alt='heroImage' className='mb-4 w-5' />


        <h1 className='mt-2'>
        Invest In everything
        </h1>

        <p>
            Online Platform to invest on stocks, derivates, mutual Funds and other Platforms

        </p>
<Link  to="/signup">
        <button style={{width:"20%", margin:"0 auto"}}  className='btn btn-primary p-3 fs-5 mb-5' >Sign Up</button>
        </Link>

</div>

       </div>
     );
}

export default Hero;