const fs = require("fs");
const path = require("path");

// 这里配置基本信息
const AlipayBaseConfig = {
  appId: "2016101900723285", // 应用 ID
  privateKey: fs.readFileSync(
    path.join(__dirname, "./pem/private_pem2048.txt"),
    "ascii"
  ), // 应用私钥
  alipayPublicKey:
    "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAl02RvUnc4ZkeyC+5ATCOm7zH58ZEgJHULikqlIX4DwOV+Uvbnlrb7s7TIb+e5b39F+WkqAoyNoIPRAbrqjK9G5PHZxdnEJHG0MB4uRRmfiHEybkCUPu8jPIlUfNFb8LQ1pXagqr3AQQC1cf+ja+tz6YehvawAFVnF7Fo7/XyhNsL20enFVMXCGv9Q9fEEP2YkETWGjWE/frGtAU1LTSuPiDnJvUKV/LG9El7ar0a4LRNlQjyhrMh848R90ZeTgotnQvu4oXXgFYb40OwxHTDZkAEBG+ZmUCsnIQSwPqHEGkaS/vconVGqhRaupKwmikiNVTS3Nr1q6tGPYuYaDW/mQIDAQAB", // 支付宝公钥
  gateway: "https://openapi.alipaydev.com/gateway.do", // 支付宝的应用网关
  charset: "utf-8",
  version: "1.0",
  signType: "RSA2"
};

// console.log("AlipayBaseConfig", AlipayBaseConfig);

module.exports = {
  AlipayBaseConfig: AlipayBaseConfig
};
