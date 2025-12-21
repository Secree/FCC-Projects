import { useState, useEffect } from 'react';

export default function OTPGenerator() {
  const [otp, setOtp] = useState('')
  const [buttonPressed, setButtonPressed] = useState(false)
  const [countdown, setCountdown] = useState(5)
  const [otpGenBefore, setOtpGenBefore] = useState(false)

useEffect(() => {
  if (!buttonPressed) return 
  
  if (countdown == 0) {
    setButtonPressed(false)
    setOtp('')
    return
  }

  const timer = setInterval(() => {
    setCountdown((prev) => prev - 1)
  }, 1000)

  return () => clearInterval(timer);


}, [buttonPressed, countdown])

function generateOTP() {
  const random6Digit = Math.floor(100000 + Math.random() * 900000);

  return random6Digit
}

const handleGenerate = () => {
  setOtp(generateOTP)
  setCountdown(5)
  setButtonPressed(true)
  setOtpGenBefore(true)
}

return (

<div className="container">
  <h1 id="otp-title">OTP Generator</h1>

  <h2 id="otp-display">
  {otp ? otp : "Click 'Generate OTP' to get a code"}
  </h2>

  <p id="otp-timer" aria-live="polite" aria-atomic="true">
  {otpGenBefore ? (buttonPressed ? "Expires in: " + countdown + " seconds" : "OTP expired. Click the button to generate a new OTP.") : ""}


  </p>

<button id="generate-otp-button" onClick={handleGenerate} disabled={buttonPressed}>Generate OTP</button>

</div>
)

}

