const register = require("./register");
const verifyEmail = require("./verifyEmail");
const login = require("./login");
const logout = require("./logout");
const getCurrentUser = require("./getCurrentUser");
const updateSubscription = require("./updateSubscription");
const updateAvatar = require("./updateAvatar");
const resendVerifyEmail = require("./resendVerifyEmail");

module.exports = {
	register,
	verifyEmail,
	login,
	logout,
	getCurrentUser,
	updateSubscription,
	updateAvatar,
	resendVerifyEmail,
};
