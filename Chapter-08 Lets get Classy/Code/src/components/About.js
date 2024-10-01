import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return(
        <div>
            <h2>About Us</h2>
            <h3>This is Namaste React course</h3>
            {/* <User name = {"Kirti Sahu (function)"} email= {"ABC@gmail.com"}/> */}

            <UserClass name= {"Kirti Sahu Class"} email ={"XYZ@gmail.com"}/>
        </div>
    )
}

export default About;