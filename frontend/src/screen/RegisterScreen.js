import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import background from "../assets/singup.jpg";

export default function RegisterScreen(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [healthy, setHealthy] = useState("");
  const [weight, setWeight] = useState("");
  const [proteine, setProteine] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;

  const [showResults, setShowResults] = React.useState(false);
  const onClick = () => setShowResults(true);

  /*const onClickHealthy = () => {
    healthy = document.getElementById("healthy").checked;
  };
  const onClickWeight = () => {
    weight = document.getElementById("weight").checked;
  };
  const onClickProteine = () => {
    proteine = document.getElementById("proteine").checked;
  };*/

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password and confirm password are not match");
    } else {
      let healthy = document.getElementById("healthy").checked;
      let weight = document.getElementById("weight").checked;
      let proteine = document.getElementById("proteine").checked;
      console.log("healty", document.getElementById("healthy").checked);
      console.log("weight", document.getElementById("weight").checked);
      console.log("protine", document.getElementById("proteine").checked);
      dispatch(register(name, email, password, healthy, weight, proteine));
    }
  };

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);
  return (
    <div
      style={{
        background: "#f8f9fa",
        height: "auto",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <img src={background} width="60%" height="10%" alt="object" />

      <form
        className="form"
        onSubmit={submitHandler}
        style={{
          right: 150,
          bottom: 0,
          width: "40%",
          top: 120,
        }}
      >
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
        <div>
          <label>
            do you want personalise your experience with us by answering our
            question?
          </label>
          <input type="checkbox" onClick={onClick} />
          {showResults ? (
            <div className="extra">
              <div>
                <label>You are more intersted in :</label>
                <div>
                  {" "}
                  <input
                    type="checkbox"
                    value="healthy"
                    id="healthy"
                    onClick={(e) => setHealthy(e.target.checked)}
                  />{" "}
                  <label htmlFor="healthy">Eating healthy</label>
                </div>
                <div>
                  {" "}
                  <input
                    type="checkbox"
                    value="sugarfree"
                    id="weight"
                    onClick={(e) => setWeight(e.target.checked)}
                  />{" "}
                  <label htmlFor="weight">Losing weight</label>
                </div>
                <div>
                  {" "}
                  <input
                    type="checkbox"
                    value="proteins"
                    id="proteine"
                    onClick={(e) => setProteine(e.target.checked)}
                  />{" "}
                  <label htmlFor="proteine">Gaining musles</label>
                </div>
              </div>
            </div>
          ) : null}
        </div>

        <div>
          <label />

          <button className="primary" type="submit">
            Register
          </button>
        </div>

        <div>
          <label />
          <div>
            Already have an account?{" "}
            <Link to={`/signin?redirect=${redirect}`}>Sign-In</Link>
          </div>
        </div>
      </form>
    </div>
  );
}
