import moment from "moment";
const momentInput = document.querySelector("#momentInput");
const momentBtn = document.querySelector("#momentBtn");
const momentP = document.querySelector("#date");

momentBtn.onclick = () => {
  momentP.innerHTML = moment(momentInput.value).diff(moment(), 'Days') + ` days`;
};
