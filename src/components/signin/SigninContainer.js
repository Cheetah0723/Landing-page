import React from "react";

export default function SigninContainer({ showSignin }) {
  return (
    <>
      <div className="signin__ContainerBG" is-active={showSignin}></div>
    </>
  );
}
