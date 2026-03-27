import React from 'react'

function CreateTicket() {
    return (
        <div className='container'>
            <div className='row p-5 mt-4 '>
                <h1>
            To create a Ticket Select A relevant topic
                </h1>
            <div className='col-4 p-4'>
                <h4>
                     <i class="fa-solid fa-circle-plus"></i>
                     Account Opening
                </h4>
                <a href='' className='fs-6' style={{textDecoration:"none", lineHeight:"2"}}>Online Account Opening</a> <br/>
                <a href='' className='fs-6' style={{textDecoration:"none", lineHeight:"2"}}>Offline Account Opening</a> <br/>
                <a href='' className='fs-6' style={{textDecoration:"none", lineHeight:"2"}}>Opening</a> <br/>
                <a href='' className='fs-6' style={{textDecoration:"none", lineHeight:"2"}}>Company PartenerShip</a> <br/>
                <a href='' className='fs-6' style={{textDecoration:"none", lineHeight:"2"}}>Charges</a><br/>
                <a href='' className='fs-6' style={{textDecoration:"none", lineHeight:"2"}}></a><br/>
            </div>

            <div className='col-4 p-4'>
                 <h4>
                     <i class="fa-solid fa-circle-user"></i>
                     Your Zerodha Account
                </h4>
                <a href='' className='fs-6' style={{textDecoration:"none", lineHeight:"2"}}>Login Crendials</a><br/>
                <a href='' className='fs-6' style={{textDecoration:"none", lineHeight:"2"}}>Account Modification</a><br/>
                <a href='' className='fs-6' style={{textDecoration:"none", lineHeight:"2"}}>Bank Details</a><br/>
                <a href='' className='fs-6' style={{textDecoration:"none", lineHeight:"2"}}>Your Profile</a><br/>
                <a href='' className='fs-6' style={{textDecoration:"none", lineHeight:"2"}}>Charges</a><br/>
            </div>

            <div className='col-4 p-4'>
                 <h4>
                   <i class="fa-solid fa-chart-line"></i>
                     Your Zerodha Account
                </h4>
                <a href='' className='fs-6' style={{textDecoration:"none", lineHeight:"2"}}>Online Account Opening</a><br/>
                <a href='' className='fs-6' style={{textDecoration:"none", lineHeight:"2"}}>Offline Account Opening</a><br/>
                <a href='' className='fs-6' style={{textDecoration:"none", lineHeight:"2"}}>Opening</a><br/>
                <a href='' className='fs-6' style={{textDecoration:"none", lineHeight:"2"}}>Company PartenerShip</a><br/>
                <a href='' className='fs-6' style={{textDecoration:"none", lineHeight:"2"}}>Charges</a><br/>
                <a href='' className='fs-6' style={{textDecoration:"none", lineHeight:"2"}}></a><br/>
            </div>

            </div>
        </div>
     );
}

export default CreateTicket;