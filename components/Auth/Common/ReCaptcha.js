import ReCAPTCHA from "react-google-recaptcha";
import React from "react";
const Captcha = ({ handleCaptch, setReference }) => {
  let registerRecaptcha = React.useRef();
  const onChange = (value) => {
    console.log("Captcha value:", value);
    handleCaptch(value);
    setReference(registerRecaptcha)
  };
  return (
    <ReCAPTCHA
      // ref={(el) => {
      // //  registerRecaptcha = el;
      // console.log("---EL----",el)
      // }}
      ref={registerRecaptcha}
      sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
      onChange={onChange}
    />
  );
};
export default Captcha;
