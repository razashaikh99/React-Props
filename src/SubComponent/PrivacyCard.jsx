import React from 'react'

const PrivacyCard = (props) => {
    return (
        <div className='container mt-4'>
            <div class="alert alert-success" role="alert">
                <h4 class="alert-heading text-success fw-bold">{props.head} </h4>
                <p>{props.paragraph}</p>
            </div>
        </div>
    )
}

export default PrivacyCard
