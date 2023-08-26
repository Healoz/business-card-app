

export default function Info() {
    return (
        <div className="info">
            <img src={require('./Images/laura-img2.png')} className="profile-img" alt="Photo of Laura Smith"></img>
            <div className="info-content content-container">
                <h2>Laura Smith</h2>
                <h4>Frontend Developer</h4>
                <p>laurasmith.website</p>
                <div className="buttons">
                    <button className="primary-btn"><i className="fa fa-envelope"></i>Email</button>
                    <button className="secondary-btn"><i className="fa-brands fa-linkedin"></i>Linkedin</button>
                </div>
            </div>
        </div>
        
    )
}