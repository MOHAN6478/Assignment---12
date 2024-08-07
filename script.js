const Form = document.getElementById("form");

const newpassword = document.getElementById("newpass");
const confirmpassword = document.getElementById("confirmpass");

newpasserror = document.getElementById("newPasswordErrMsg");
samepasserror = document.getElementById("confirmPasswordErrMsg");

comparepassword = (npass, cpass) => {
  if (npass === "") {
    newpasserror.textContent = "*required";
  }

  if (cpass === "") {
    samepasserror.textContent = "*required";
  }

  if (npass === cpass) {
    console.log("correct");
  } else {
    console.log("Incorrect");
  }
};

saveFromdata = (npass, cpass) => {
  const firebaseConfig = {
    apiKey: "AIzaSyDHxrbGzNeDGvdK524BblD0dNT8DyodsAw",
    authDomain: "forms-a03bb.firebaseapp.com",
    databaseURL:"https://forms-a03bb-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "forms-a03bb",
    storageBucket: "forms-a03bb.appspot.com",
    messagingSenderId: "1040483909626",
    appId: "1:1040483909626:web:22975959d5aaa1cea8ee43",
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.database().ref("ReqForm");

  db.push({
       npass: npass,
       cpass: cpass,
  });
  Form.reset();
};

Form.addEventListener("submit", (m) => {
  m.preventDefault();

  //compare to password  same or Not same

  Newpass = newpassword.value;
  Conpass = confirmpassword.value;

  comparepassword(Newpass, Conpass);

  saveFromdata(Newpass, Conpass);
});
