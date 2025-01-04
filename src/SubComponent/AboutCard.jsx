import React from 'react'

const AboutCard = (props) => {
    return (
        <div>
            <div class="card mt-3 mb-2">
                <div class="card-header bg-success text-light fw-">
                    {props.quotes}
                </div>
                <div class="card-body">
                    <blockquote class="blockquote mb-0">
                        <p>{props.paragraph}</p>
                        <footer class="blockquote-footer">{props.subhead}</footer>
                    </blockquote>
                </div>
            </div>
        </div>
    )
}

export default AboutCard
