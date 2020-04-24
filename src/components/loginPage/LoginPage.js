import React from 'react';
import {compose, lifecycle, withHandlers, withPropsOnChange, withState} from 'recompose'
import {ChangeOnChange} from "../../helpers/inputHelpers";
import {authLogin, isTeacher} from "../../services/AuthService";
import {Redirect} from "react-router";

const SignUpContainer = props => (
    <div id='signUpContainer'>
        <SignUpHeader title={props.title}/>
        <SignUpForm {...props}/>
    </div>
)

const SignUpHeader = props => (
    <div id='signUpHeader'>
        <div id='signUpHeaderTitle'>
            {props.title}
        </div>
    </div>
);

const FormInput = props => (
    <div className='signUpRow'>
        <input type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onChange}/>
    </div>
);

const FormCheckBox = props => (
    <div className='signUpRow'>
        <input id={props.id} type='checkbox'/>
        <label htmlFor={props.id}>{props.label}</label>
    </div>
);

const FormButton = props => (
    <div className='signUpRow'>
        <button type='button' disabled={props.disabled} onClick={props.onSubmit}>{props.title}</button>
    </div>
);

const SignUpForm = props => (
    <div id='signUpFormContainer'>
        <form id="signUpForm">
            <FormInput type="text" placeholder="email" value={props.username} onChange={ChangeOnChange(props.setUsername)}/>
            <FormInput type="password" placeholder="password" value={props.password} onChange={ChangeOnChange(props.setPassword)}/>
            <FormCheckBox id="terms" label="I agree to the terms and conditions"/>
            <FormButton title="Sign Up" disabled={props.disabled} onSubmit={props.onSubmit}/>
        </form>
    </div>
);

const enhance = compose(
	withState("username", "setUsername", ""),
	withState("password", "setPassword", ""),
	withState("isAuthenticated", "setAuth", ''),
	withPropsOnChange(['username', 'password'], ({username, password}) => {
	    return {
	        disabled: !(!!username && !!password)
        }
    }),
	withHandlers({
		onSubmit: (props) => async () => {
		    const {setAuth, username, password} = props;
            await authLogin({username, password});
            setAuth(isTeacher())


		}
	}),
);
const LoginPage = ({isAuthenticated, ...rest}) => {
    return isAuthenticated ? (<Redirect to={"/classes"}/>) : (<SignUpContainer title={"Moodyz"} {...rest}/>)
}



export default enhance(LoginPage)