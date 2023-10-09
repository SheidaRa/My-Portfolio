import React from 'react'

const WorkCard = ({ experience, place, date,  image = 'images/placeholder.jpg' }) => {
    return (
        <div className='work-card'>
            <div className='work-img'>
                <img src={image} />
            </div>
            <h3>{experience}</h3>
            <h4>{place}</h4>
            <h4>{date}</h4>

        </div>
    )
}

export default WorkCard