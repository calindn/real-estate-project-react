import React from 'react'

export default function Newsletter() {
    return (
        <div className='newsletter-c'>
            <p>Abonare la newsletter</p>
            <form>
                <label htmlFor='newsletter-email-input' id='input-label' />
                <input id='newsletter-email-input' placeholder='adresa de email' type='text' />
                <button>ABONARE</button>
            </form>
        </div>
    )
}
