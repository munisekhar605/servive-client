import './SignupModel.css';
function SignupModel({cancel}){
  
    return(<div className="signup-from-container">
        <form  className="signup-from-container-item">
            <label className="signup-from-label">Create New Account</label><br></br>
            <input className="signup-from-input-item" type="text" placeholder="Enter Your Name"></input><br></br>
            <input className="signup-from-input-item" type="text" placeholder="Enter Email"></input><br></br>
            <input className="signup-from-input-item" type="text" placeholder="Enter Phone Number"></input><br></br>
            <input className="signup-from-input-item" type="password" placeholder="Enter Password"></input><br></br>
            <button className="signup-from-button-item" >Submit</button><button onClick={cancel} className="signup-from-button-item">Cancel</button>
        </form>
    </div>
    )
}
export default SignupModel;