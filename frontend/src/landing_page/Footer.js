import React from 'react'

function Footer() {
    return (

        <div className='container  mt-5 mb-10 p-5'>

            <div className='row'
            style={{fontSize:"120%"}}>
                <div className='col'>

                    <img src='media/images/logo2.png' style={{width:"100px"}}/>

                    <p>
                        &copy; 2026 , Not Tradex Broking Ltd. All rights reserved
                    </p>

                </div>
                <div className='col  footer '>
                    <p>Company </p>

                    <a href = "">About</a>
                    <br/>
                    <a href = "">Products</a>
                    <br/>
                    <a href = "">Pricing</a><br/>
                    <a href = "">Referal Programme</a><br/>
                    <a href = "">Carrers</a><br/>
                    <a href = "">TradeX.tech</a><br/>
                    <a href = "">Press & Media</a><br/>
                </div>
                <div className='col footer'>
                      <p>Support</p>
                       <a href = "">Contact</a><br/>
                    <a href = "">Support Portal</a><br/>
                    <a href = "">Blog</a><br/>
                    <a href = "">List Of Charges</a><br/>
                    <a href = "">Download & resources</a><br/>
                </div>
                <div className='col footer'>
                      <p>Account </p>
                       <a href = "">Open Account </a><br/>
                    <a href = "">Fund Transfer </a><br/>
                    <a href = "">60 Days Challenge</a><br/>

                </div>
            </div>
            <br/>
           


        </div>

     );
}

export default Footer;