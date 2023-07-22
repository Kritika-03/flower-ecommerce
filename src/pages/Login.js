import LoginImage from "../assets/login.svg";

export const Login =() =>{
    return(
        <div style={styles.container}>
            <div style={styles.loginContainer}>
                <div style={styles.loginForm}>
                    <h1 style={{ textAlign:"center", fontSize:"40px", }}>Login</h1>
                    <div style={styles.loginInput}>
                        <input style={styles.input} 
                        type="text"
                        placeholder="Username"
                        />
                        <input style={styles.input}
                        type="password"
                        placeholder="Password"
                        />
                        <button style={styles.button}>Log In</button>
                        <div>
                            <div style={{ textAlign:"center", marginTop:"30px"}}>
                                Don't have an account?
                            </div>
                            <div>
                                <button style={styles.button}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={styles.loginImageContainer}>
                    <img src={LoginImage} alt="plant icon" style={styles.image}/>
                </div>
            </div>
        </div>
    );
}
const styles={
    container:{
        display: "flex",
        flex:1,
        height: "97vh",
        alignItems: "center",
        justifyContent: "center",
    },
    loginContainer:{
        display:"flex",
        // flex:1,
        // backgroundColor:"pink",
        justifyContent:"center",
        alignItems:"center",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        borderRadius: 10,
    },
    loginForm:{
        backgroundColor:"white",
        // flexDirection:"column",
        width:"70%",
        height: "50vh",
        borderRadius: 10,
    },
    loginInput:{
        display:"flex",
        flexDirection:"column",
        padding: "20px",
    },
    input:{
        marginBottom:"20px",
        padding:"10px",
        fontSize:"16px",
        borderRadius:5,
    },
    button:{
        backgroundColor: "#2ea44f",
        border: "1px solid rgba(27, 31, 35, .15)",
        borderRadius: "6px",
        // display: inline-block;
        fontSize: "16px",
        fontWeight: 600,
        lineHeight: "20px",
        padding: "6px 16px",
        textAlign: "center",
        width:"100%",
        marginTop:"10px",
        color: "white",
    // vertical-align: middle;
    },
    loginImageContainer:{
        // flex:1,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        margin:5,
        // backgroundColor:"blue",
    },
    image:{
        width:"100%",
        height:"90%",
    },
};