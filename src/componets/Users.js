
export default function Users({usr}) {
    const saveSession = ()=>{
        sessionStorage.setItem('id',usr.id)
    }
    return (
        <div className="col-lg-3 col-md-6">
            <div className="card">
                <div className="el-card-item">
                    <div className="el-card-avatar el-overlay-1"> <img src={`https://bootdey.com/img/Content/avatar/avatar${usr.id}.png`} alt="user" />
                        <div className="el-overlay">
                            <ul className="list-style-none el-info">
                                <li className="el-item" onClick={saveSession}><a className="btn default btn-outline image-popup-vertical-fit el-link" href="/user"><i className="fa fa-search" aria-hidden="true"></i></a></li>                            </ul>
                        </div>
                    </div>
                    <div className="el-card-content">
                        <h4 className="m-b-0">{usr.name}</h4> <span className="text-muted">{usr.company.name}</span>
                    </div>
                </div>
            </div>
        </div>
    )

}