import Firebasetoken from "./firebasetoken";

const firebasestate = (props) =>{
    return(
    <Firebasetoken.Provider value={"token"}>
        {props.children}
    </Firebasetoken.Provider>
    );
}

export default firebasestate