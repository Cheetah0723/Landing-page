import React from "react";
import { Link } from "react-router-dom";

export default function SigninContainer({ showSignin, handle }) {
  return (
    <>
      <div
        className="signin__ContainerBG"
        is-active={showSignin}
        onClick={handle}
      ></div>
      <div className="signin__Container" is-active={showSignin}>
        <div className="signin__closeIconContainer">
          <svg
            width="16px"
            height="16px"
            viewBox="0 0 48 48"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handle}
          >
            <g
              id="icons-48-system-close-"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <rect id="shape" x="0" y="0" width="48" height="48"></rect>
              <path
                d="M44.9024631,41.9131035 L26.9816749,24 L44.9024631,6.08689652 C45.727952,5.26140765 45.727952,3.92302577 44.9024631,3.09753691 C44.0769742,2.27204804 42.7385923,2.27204804 41.9131035,3.09753691 L24,21.0183251 L6.08689652,3.09753691 C5.26140765,2.27204806 3.92302578,2.27204807 3.09753693,3.09753693 C2.27204807,3.92302578 2.27204806,5.26140765 3.09753691,6.08689652 L21.0183251,24 L3.09753691,41.9131035 C2.27204804,42.7385923 2.27204804,44.0769742 3.09753691,44.9024631 C3.92302577,45.727952 5.26140765,45.727952 6.08689652,44.9024631 L24,26.9816749 L41.9131035,44.9024631 C42.7385923,45.727952 44.0769742,45.727952 44.9024631,44.9024631 C45.727952,44.0769742 45.727952,42.7385923 44.9024631,41.9131035 Z"
                id="system-:-close-"
                fill="currentColor"
                fill-rule="nonzero"
              ></path>
            </g>
          </svg>
        </div>
        <div className="signin__head">
          <div className="signin__head-header">
            <div className="signin__head-header-wrapper">სისტემაში შესვლა</div>
          </div>
          <div className="signin__head-content">
            <div className="signin__head-content-wrapper">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="signin__head-form"
              >
                <div className="signin__head-form-content">
                  <div class="form__div">
                    <input
                      type="text"
                      autoCapitalize="off"
                      autoComplete="off"
                      autoCorrect="off"
                      class="form__input"
                      placeholder=" "
                    />
                    <label for="" class="form__label">
                      მომხმარებლის სახელი
                    </label>
                  </div>
                  <div class="form__div">
                    <input
                      type="password"
                      class="form__input"
                      autoCapitalize="off"
                      autoComplete="off"
                      autoCorrect="off"
                      placeholder=" "
                    />
                    <label for="" class="form__label">
                      პაროლი
                    </label>
                  </div>
                  <Link className="form__resetDATA">
                    დაგავიწყდა მონაცემები?
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
