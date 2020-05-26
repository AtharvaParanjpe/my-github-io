import React, { Component } from 'react'
import './userCard.css'
import profileImage from '../../img/profileCopy.jpg'


function UserCard() {
    return (
        <div className="card">
            <img className="profileImage" src={profileImage} alt="Atharva" />
            <h3>Atharva Paranjpe</h3>
            <p className="title">Student, Machine Learning Enthusiast</p>
            <p>Rutgers University</p>
            <div className="linkClass">
                <a href="https://github.com/AtharvaParanjpe"><i className="fa fa-github"></i></a>
                <a href="https://www.linkedin.com/in/atharva-paranjpe/"><i className="fa fa-linkedin"></i></a>
                <a href="https://www.facebook.com/atharva.paranjpe.1/"><i className="fa fa-facebook"></i></a>

            </div>
            <p>
                <button>
                    Contact
                </button>
            </p>
        </div>
    );
}

export default UserCard