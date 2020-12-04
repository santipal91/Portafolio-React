import React from 'react'

const Forms = () => {
    return (
        <div className="login-box">
            <h2>Contact</h2>
            <form>
                <div className="user-box">
                    <input type="text" name="" required=""></input>
                    <label>Name</label>
                </div>
                <div className="user-box">
                    <input type="text" name="" required=""></input>
                    <label>Email</label>
                </div>
                <div className="user-box">
                    <input type="text" name="" required=""></input>
                    <label>Message</label>
                </div>
                <a href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Send
                </a>
            </form>
        </div>
    )
}

export default Forms
