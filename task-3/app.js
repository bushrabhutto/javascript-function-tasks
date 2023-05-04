//generating otp

function GenerateOTP() {
    var OTP = '';

    for (var i = 0; i < 6; i++) {
        OTP += Math.round((Math.random() * 10));
    }
    return OTP;
}

alert("the OTP is " + GenerateOTP());