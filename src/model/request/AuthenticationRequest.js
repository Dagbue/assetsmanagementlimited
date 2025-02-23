class AuthenticationRequest {
  login = {
    email: null,
    password: null
  };

  createUser = {
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    referralCode: null,
    frontId: null,
    backId: null,
    totalDepositedAmount: null,
    totalProfits: null,
    totalLoanRequested: null,
    loanPrepaymentFee: null,
    loanPlan: null,
    loanStatus: null,
    phoneNumber: null,
    totalWithdrawals: null,
    btcBalance: null,
    displayPicture: null,
    walletAddress: null,
    walletName: null,
    twoFactorAuthenticationCode: null,
    userStatus: null,
    role: null,
    createdAt: null,
    updatedAt: null,
    country: null,
    address: null,
    otp: null
  };

  updateUser = {
    userId: null,
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    referralCode: null,
    frontId: null,
    backId: null,
    totalDepositedAmount: null,
    totalProfits: null,
    totalLoanRequested: null,
    loanPrepaymentFee: null,
    loanPlan: null,
    loanStatus: null,
    phoneNumber: null,
    totalWithdrawals: null,
    btcBalance: null,
    displayPicture: null,
    walletAddress: null,
    walletName: null,
    twoFactorAuthenticationCode: null,
    userStatus: null,
    role: null,
    country: null,
    address: null,
    otp: null
  };

  deleteUser = {
    userId: null,
  };

  resetPassword = {
    userId: null,
    newPassword: null
  };

  readUserById = {
    userId: null,
  };

  updateUserStatus = {
    userId: null,
    userStatus: null,
  };

  sendTwoFactor = {
    email: null,
  };

  resendOtp = {
    email: null,
  };


}

export default AuthenticationRequest;
