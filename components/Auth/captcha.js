import InputFiled from './Common/input_filed';

const CaptchaTest = ({ styles, captchaText, setCaptchaText, random, setCaptchaErrorMsg, setIsDisabledcaptcha, captchaError, disabledCaptcha }) => {

  const handleChange = (e)=>{
    e.preventDefault()
    setCaptchaText(e.target.value)
    setIsDisabledcaptcha(true)
    setCaptchaErrorMsg("")
  }
  return (
    <>
      <div className={styles.captchCodeDiv}>
        <h6
      style={{youbkittouchcallout: "none",
      youbkituserSelect: "none",
      mozUserSelect: "none",
      msUserSelect: "none",
      userSelect: "none",
      cursor:"default",
     }}
        >
          {Math.ceil(random)}
        </h6>
      </div>
  
      <InputFiled 
        type_name="text"
        placeholder_name="Enter captcha"
        maxLength={6}
        input_name="captchaText"
        onChange={(e) => {handleChange(e)}}
        value={captchaText}

        />
      <span>{!disabledCaptcha && captchaError}</span>
    </>

  );
}
export default CaptchaTest;