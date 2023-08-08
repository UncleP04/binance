"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import RegisterImage from "../../public/Images/register.png";
import { auth } from "./firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import PersonIcon from "@mui/icons-material/Person";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import "../styles/styles.css";
import Nav from "./nav";
import { NextRouter } from "next/router";

interface SigninComponentProps {
  router: NextRouter; // Define the router prop
}

const Signin: React.FC<SigninComponentProps>= ({ router }) => {
  const gooogleAuth = new GoogleAuthProvider();
  const [user, setUser] = useAuthState(auth);

  const signin = async () => {
    try {
      const result = await signInWithPopup(auth, gooogleAuth);
      if (result.user) {
        router.push("/referform");
        // setTimeout(() => {
        //   router.push({
        //     pathname: "/dashboard",
        //     query: {
        //       displayName: result.user.displayName,
        //       photoURL: result.user.photoURL,
        //     },
        //   }); // Redirect to dashboard page with query parameters after a delay
        // }, 3000);
      }
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div className="bg-dark h-[100vh]">
      <Nav />
      <section className="bg-dark register w-[100%] p-4 md:px-[10%] md:py-[5%] grid gap-10 grid-cols-1 md:grid-cols-2 justify-center items-center">
        <div className="md:px-[2%]">
          <h1 className="text-header hidden md:block font-semibold text-[1.5em] md:text-[2em] capitalize">
            Welcome to Binance!
          </h1>
          <form action="" className="py-4 w-[100%] lg:w-[400px] text-center">
            <div className="py-3 px-3 md:px-4 w-[100%] bg-primary text-dark rounded-md font-semibold capitalize hover:bg-primaryhv">
              <PersonIcon className="float-left" />
              <button className="text-center">
                Sign up with email or phone
              </button>
            </div>
            <p className="py-4 text-center text-text text-[20px]">or</p>
            <div className="py-3 my-2 px-4 w-[100%] bg-text text-header rounded-md text-center">
              <GoogleIcon className="float-left text-primary" />
              <button className="font-semibold capitalize">
                <Link href="" onClick={signin}>
                  Continue with Google
                </Link>
              </button>
            </div>
            {/* <div onClick={() => auth.signOut()}>
              {user ? (
                <div className="flex flex-col items-center gap-2 mt-4">
                  <p>Welcome, {user.displayName}</p>
                  {user.photoURL ? (
                    <Image
                      src={user.photoURL}
                      alt="user.png"
                      width={100}
                      height={100}
                      className="w-20 h-20 rounded-full"
                    />
                  ) : (
                    <div>No profile image available</div>
                  )}
                </div>
              ) : null}
            </div> */}
            <div className="py-3 my-4 px-4 w-[100%] bg-text text-header rounded-md text-center">
              <AppleIcon className="float-left text-primary" />
              <button className="font-semibold capitalize">
                <Link href="">Continue with Apple</Link>
              </button>
            </div>
            <div className="flex flex-col justify-start items-start gap-3 pt-4">
              <span className="text-text text-[13px] font-semibold">
                Already have an account?
                <Link
                  href=""
                  className="text-link text-[15px] hover:text-primary"
                >
                  Login
                </Link>
              </span>
              <span className="text-text text-[13px] font-semibold">
                Need an entity account?{" "}
                <Link
                  href=""
                  className="text-link text-[15px] hover:text-primary"
                >
                  Sign Up
                </Link>
              </span>
            </div>
          </form>
        </div>
        <div>
          <div className="md:p-[3%] py-4">
            <Image
              src={RegisterImage}
              alt="RegisterImage.png"
              width={700}
              height={300}
              className="w-[100%] h-[100%]"
            />
          </div>
          <div className="text-center">
            <h2 className="font-bold text-header text-start md:text-center py-4 md:text-text text-[20px]">
              Sign up to get 100 USDT trading fee rebate!
              <Link
                href=""
                className="w-[50px] p-1 text-primaryhv text-[15px] rounded-md bg-faq block md:hidden"
              >
                FAQS
              </Link>
            </h2>
            <span className="text-text font-semibold hidden md:block">
              Follow the registration steps to redeem your rewards and start
              your crypto journey with us!
              <Link href="" className="text-link hover:text-primary">
                FAQ
              </Link>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signin;
