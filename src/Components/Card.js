import React from 'react'

export const Card = ({ title, time, lastWeek, decoration, color }) => {
    return (
        <div className="card__container">
            <div className="card__decoration" style={{ backgroundColor: color }}>
                <img src={decoration} alt="background" />
            </div>
            <div className="card__main">
                <h2>{title}</h2>
                <a href="/">
                    <svg
                        width="21"
                        height="5"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                            fill="#BBC0FF"
                            fillRule="evenodd"
                        />
                    </svg>
                </a>
                <h1>{time}hrs</h1>
                <p>Last week - {lastWeek}hrs</p>
            </div>
        </div>
    )
}
