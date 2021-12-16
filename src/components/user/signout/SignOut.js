import NavigationContainer from "../../navigation/NavigationContainer";

const SignOut = ({result}) => {
    return (
        <div>
            <p>{result}</p>
            <NavigationContainer />
        </div>
    );
}

export default SignOut;