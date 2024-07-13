"use strict";

const padContractAddress = (ca) => {
  let str = ca.slice(6, 38);
  return ca.replace(str, "...");
};

let copyText = document.querySelector(".copybtn");
let paddedText = document.querySelector(".copy");
let copiedText = document.querySelector(".c");

let contractAddr = "0x501d423a828e62f9d331b3a4ee4a7efb1ea40228";

paddedText.textContent = padContractAddress(contractAddr);

copyText.addEventListener("click", () => {
  navigator.clipboard.writeText(copiedText.textContent);
  alert("Copied");
});
