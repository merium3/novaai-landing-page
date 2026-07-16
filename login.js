/*=========================
      SELECT ELEMENTS
=========================*/

const form = document.querySelector("form");

const email = document.querySelector('input[type="email"]');

const password = document.querySelector('input[type="password"]');

const loginBtn = document.querySelector(".login-btn");


/*=========================
      LOGIN
=========================*/

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    if(email.value==="" || password.value===""){

        showToast("Please fill all fields.","error");

        return;

    }

    if(!validateEmail(email.value)){

        showToast("Invalid Email Address.","error");

        return;

    }

    loginBtn.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i> Logging In...';

    loginBtn.disabled=true;

    setTimeout(()=>{

        showToast("Login Successful 🎉","success");

        loginBtn.innerHTML="Success";

        loginBtn.style.background="#22C55E";

        setTimeout(()=>{

            window.location.href="index.html";

        },1000);

    },2000);

});


/*=========================
      EMAIL VALIDATION
=========================*/

function validateEmail(email){

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

}


/*=========================
      TOAST
=========================*/

function showToast(message,type){

    const toast=document.createElement("div");

    toast.className=`toast ${type}`;

    toast.innerHTML=message;

    document.body.appendChild(toast);

    setTimeout(()=>{

        toast.classList.add("show");

    },100);

    setTimeout(()=>{

        toast.classList.remove("show");

        setTimeout(()=>{

            toast.remove();

        },500);

    },2500);

}
/*=========================
      SHOW PASSWORD
=========================*/

const toggle=document.getElementById("togglePassword");

const pass=document.getElementById("password");

toggle.addEventListener("click",()=>{

    if(pass.type==="password"){

        pass.type="text";

        toggle.innerHTML='<i class="fa-solid fa-eye-slash"></i>';

    }

    else{

        pass.type="password";

        toggle.innerHTML='<i class="fa-solid fa-eye"></i>';

    }

});