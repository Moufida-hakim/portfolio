import React from "react";
const informations = {
    email: 'moufida.hakim.23@gmail.com',
    phone: '+216 92 945 387',
    address: {
        country: 'tunisie',
        city: 'sfax',
        street: 'Avenue Mohamed Jammoussi',
        postalCode: 3000
    }
}
function Contact() {
    return (
        <div>
            <div className="contact-item">
                <i className='fa-regular fa-envelope'></i>
                <p className='contact-text'> {informations.email}</p>
            </div>
            <div className="contact-item">
                <i className="fa-solid fa-phone"></i>
                <p className='contact-text'> {informations.phone}</p>

            </div>
            <div> 
            <i class="fa-solid fa-location-dot"></i>
                <p> {informations.address.street} {informations.address.country} {informations.address.city}</p>
            </div>
        </div>
    )
}
export default Contact;