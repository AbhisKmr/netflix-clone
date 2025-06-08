import React, { useState } from "react";

import styled from "styled-components";
import BackgroundImage from "../components/BankgroundImage";
import Header from "../components/Header";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const handleSignin = async () => {
    try {
      const { email, password } = formValue;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Login failed:", errorCode, errorMessage);
      alert("Login failed: " + errorCode);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) {
      navigate("/");
    }
  });

  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header login />
        <div className="body flex column a-center j-center">
          <div className="text flex column">
            <h1>Unlimited movies,TV Show and more</h1>
            <h4>Watch anywhere. Cancel anytime.</h4>
            <h6>
              Ready to watch? Enter you email to create or restart your
              membership
            </h6>
          </div>
          <div className="form">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={formValue.email}
              onChange={(e) =>
                setFormValue({
                  ...formValue,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formValue.password}
              onChange={(e) =>
                setFormValue({
                  ...formValue,
                  [e.target.name]: e.target.value,
                })
              }
            />
            {/* <button>Get Started</button> */}
          </div>
          <button onClick={handleSignin}>Sign Up</button>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: 15vh 85vh;
  }
  .body {
    gap: 1rem;
    .text {
      gap: 1rem;
      text-align: center;
      font-size: 2rem;
      h1 : {
        padding: 0 25rem;
      }
    }
    .form {
      display: grid;
      width: 30%;
      input {
        color: black;
        padding: 1.5rem;
        font-size: 1.2rem;
        border: 1px solid black;
        &:focus {
          outline: none;
        }
      }
    }
    button {
      width: 30%;
      padding: 1.5rem 1rem;
      background-color: #e50914;
      border: none;
      cursor: pointer;
      color: white;
      border-radius: 0.2rem;
      font-weight: bolder;
      font-size: 1.05rem;
    }
  }
`;
