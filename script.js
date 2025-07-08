let mnt=document.getElementById("month");
let dt=document.getElementById("date");
let yr=document.getElementById("year");

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    nw=new Date();
    
    mnt1=months[nw.getMonth()];
    nt1=nw.getDate();
    yr1=nw.getFullYear();

    mnt.innerHTML=mnt1;
    dt.innerHTML=nt1;
    yr.innerHTML=yr1;

    /*Form valid*/

     document.getElementById("registerForm").addEventListener("submit", function(event) {
      event.preventDefault(); 

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();

      if (name && email) {
        alert("Thank you, your spot has been reserved successfully__🎉.");
        this.reset();
      } else {
        alert("Please fill The form.");
      }
    });