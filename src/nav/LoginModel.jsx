import './LoginModel.css'
function LoginModel({cancel}){
    return(
    <div className="login-from-container">
        <form  className="login-from-container-item">
            <label className='login-from-label'>Login Your Account</label><br></br>
            <input className="login-from-input-item" type="text" placeholder="Enter Phone Number"></input><br></br>
            <input className="login-from-input-item" type="password" placeholder="Enter Password"></input><br></br>
            <button className="login-from-button-item" >Submit</button><button onClick={cancel} className="login-from-button-item">Cancel</button>
        </form>
    </div>
    )
}
export default LoginModel;