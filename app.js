"use strict";

const padContractAddress = (ca) => {
  let str = ca.slice(6, 38);
  return ca.replace(str, "...");
};

let copyText = document.querySelector(".copybtn");
let paddedText = document.querySelector(".copy");
let copiedText = document.querySelector(".c");

let contractAddr = "EQDBoHlhULFIy7yaA_6SXYtvf71_5ljNB0aic0eeAmH76RbV";

paddedText.textContent = padContractAddress(contractAddr);

copyText.addEventListener("click", () => {
  navigator.clipboard.writeText(copiedText.textContent);
  alert("Copied");
});
