import React from "react";

export default function SigninContainer({ showSignin, handle }) {
  return (
    <>
      <div
        className="signin__ContainerBG"
        is-active={showSignin}
        onClick={handle}
      ></div>
    </>
  );
}
