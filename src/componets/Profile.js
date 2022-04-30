import '../css/Profile.css'

export default function Profile({ user }) {
    const { id, name, phone, email, website, address, company } = user;
    const { street, suite, city, zipcode } = address;
    const { catchPhrase, bs } = company;
    return (
        <section className="section about-section gray-bg" id="about">
            <div className="container">
                <div className="row align-items-center flex-row-reverse">
                    <div className="col-lg-6">
                        <div className="about-text go-to">
                            <h3 className="dark-color">About Me</h3>
                            <h6 className="theme-color lead">{catchPhrase}</h6>
                            <p>Work on <mark>{company.name}</mark> {bs}</p>
                            <div className="row about-list">
                                <div className="col-md-6">
                                    <div className="media">
                                        <label>Name</label>
                                        <p>{name}</p>
                                    </div>
                                    <div className="media">
                                        <label>Address</label>
                                        <p>{street} {suite} {city} {zipcode}</p>
                                    </div>
                                    <div className="media">
                                        <label>E-mail</label>
                                        <p>{email}</p>
                                    </div>
                                </div>
                                <div className="col-md-6">

                                    <div className="media">
                                        <label>Phone</label>
                                        <p>{phone}</p>
                                    </div>
                                    <div className="media">
                                        <label>Rainbow</label>
                                        <p>{website}</p>
                                    </div>
                                    <div className="media">
                                        <label>Freelance</label>
                                        <p>Available</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-avatar">
                            <img src={`https://bootdey.com/img/Content/avatar/avatar${id}.png`} title="" alt="" />
                        </div>
                    </div>
                </div>
                <div className="counter">
                    <div className="row">
                        <div className="col col-lg">
                            <div className="count-data text-center">
                            <h6 className="count h2" data-to="150" data-speed="150">post</h6>
                                <button type="button" className="btn btn-light" onClick={()=>{window.location.href='/post'}}>CLICK</button>
                            </div>
                        </div>
                        <div className="col col-lg">
                            <div className="count-data text-center">
                                <h6 className="count h2" data-to="150" data-speed="150">todo</h6>
                                <button type="button" className="btn btn-light">CLICK</button>
                            </div>
                        </div>
                        <div className="col col-lg">
                            <div className="count-data text-center">
                                <h6 className="count h2" data-to="850" data-speed="850">album</h6>
                                <button type="button" className="btn btn-light">CLICK</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}