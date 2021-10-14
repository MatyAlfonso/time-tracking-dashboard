import React from 'react';
import img from '../styles/images/image-jeremy.png';

export const UserCard = ({ onClick, moment }) => {

    return (
        <>
            <div className="user-card__main">
                <img src={img} alt="user" />
                <h2>Report for</h2>
                <h1>Jeremy Robson</h1>
            </div>
            <div className="user-card__secondary">
                <p
                    style={{ color: (moment === 'daily') ? 'hsl(0, 0%, 93%)' : 'hsl(236, 100%, 87%)' }}
                    onClick={() => onClick('daily')}
                >
                    Daily
                </p>
                <p
                    style={{ color: (moment === 'weekly') ? 'hsl(0, 0%, 93%)' : 'hsl(236, 100%, 87%)' }}
                    onClick={() => onClick('weekly')}
                >
                    Weekly
                </p>
                <p
                    style={{ color: (moment === 'monthly') ? 'hsl(0, 0%, 93%)' : 'hsl(236, 100%, 87%)' }}
                    onClick={() => onClick('monthly')}
                >
                    Monthly
                </p>
            </div>
        </>
    )
}
