import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import background from '../assets/singup.jpg'

export default function RegisterScreen(props) {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [isOpen, setIsOpen] = useState(false)
  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;

  const [showResults, setShowResults] = React.useState(false)
  const onClick = () => setShowResults(true)

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Password and confirm password are not match');
    } else {
      dispatch(register(name, email, password));
    }
  };
  
 
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);
  return (
    <div style={{background:"#f8f9fa",height:"auto"}} >
      <img src={background} width="50%" height="50%" />
     
     <form className="form" onSubmit={submitHandler} style={{ position:"sticky",width:"50%", right:0, bottom:-200}}>
        <div>
          <h1>Create Account</h1>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter name"
            required
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Enter confirm password"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>
        </div>
        <label>do you want personalise your experience with us by answering more questions?</label>
        <input type="checkbox"  onClick={onClick} />
      { showResults ? <Results /> : null }
        <div>
          <label />
          
          <button className="primary" type="submit">
            Register
          </button>
        </div>
        
        <div>
          <label />
          <div>
            Already have an account?{' '}
            <Link to={`/signin?redirect=${redirect}`}>Sign-In</Link>
          </div>
        </div>
        
      </form>
   
    </div>

  );
}
const Results = () => (
  <div  className="extra" >

    <div>
   
          <label htmlFor="height">height</label>
          <input
            type="number"
            id="height"
            placeholder="Enter height"
            
            //onChange={(e) => setHeight(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="weight">weight</label>
          <input
            type="number"
            id="weight"
            placeholder="Enter weight"
            
            //onChange={(e) => setWeigth(e.target.value)}
          ></input>
          
        </div>

        
  </div>
)

