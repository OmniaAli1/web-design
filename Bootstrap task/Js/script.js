// window.addEventListener('scroll',function(e){
//     (this.document.documentElement.scrollTop>300)?
//     arrowup.style.display="block":
//     arrowup.style.display="none"


function startCounter(id, target, increment, interval) {
    var counter = document.getElementById(id);
    var i = 0;
    counter.innerText = i;

    var set = setInterval(() => { 
        counter.innerText = Math.round(i); 
        if (i >= target) {
            clearInterval(set);
        } else {
            i += increment;
        }
    }, interval);
}

function startAllCounters() {
    var interval = 10; 
    var duration = 5000;

    startCounter('counter1', 8000, 16, interval); 
    startCounter('counter2', 810, 1.62, interval);  
    startCounter('counter3', 2000, 4, interval);   
    startCounter('counter4', 20, 0.04, interval);  
}

window.addEventListener('scroll', function() {
    if (window.scrollY > 800) {
        startAllCounters();

        window.removeEventListener('scroll', arguments.callee);
    }
});


    
    // Listen for scroll event to start the counter
    // window.addEventListener('scroll', function() {
    //     if (window.scrollY > 100) {
    //         startCounter();
    //         // Remove the event listener to avoid repeated calls
    //         window.removeEventListener('scroll', arguments.callee);
    //     }
    // });
    









// $(document).ready(function(){
//     $(".owl-carousel").owlCarousel({
//         items: 2, 
//         loop: true,      
//         margin: 10,   
//         nav: true,          
//         autoplay: true,    
//         autoplayTimeout: 3000,
//         autoplayHoverPause: true 
//     });
//   });
  $(document).ready(function () {
    $(".owl-carousel").owlCarousel({
       
        margin: 20,
        loop: true,
        nav: true,
        navText: ["<i class='fa-solid fa-left-long bg-primary rounded-start-pill text-white me-3 p-2'></i>", "<i class='fa-solid fa-right-long bg-primary rounded-end-pill text-white p-2'></i>"],
        responsive: {
            // breakpoint from 0 up
            0: {
              items : 1
    },
            // breakpoint from 480 up
            480: {
              items:2
    },
            // breakpoint from 768 up
            768: {
               items: 2
    }
        }
    });
});






var form = document.getElementById('form1');

form.addEventListener('input', function(e) {
    if (e.target.id === 'name') {
        checkName(e.target);
    } else if (e.target.id === 'userEmail') {
        emailCheck(e.target);
    } else if (e.target.id === 'subject') {
        checkSubject(e.target);
    }
});

form.addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    var isValidName = checkName(document.getElementById('name'));
    var isValidEmail = emailCheck(document.getElementById('userEmail'));
    var isValidSubject = checkSubject(document.getElementById('subject'));
    
    if (isValidName && isValidEmail && isValidSubject) {
        alert('Form submitted successfully!');
        
    } else {
        alert('Please fill out the form correctly.');
    }
});

function emailCheck(input) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var inputValue = input.value;
    if (emailRegex.test(inputValue)) {
        input.nextElementSibling.innerText = "";
        return true; 
    } else {
        input.nextElementSibling.innerText = "Enter a valid email";
        return false;
    }
}


function checkName(input) {
    var nameValue = input.value;
    if (nameValue.length < 3) {
        input.nextElementSibling.innerText = "Please enter more than 3 characters";
        return false; 
    } else {
        input.nextElementSibling.innerText = "";
        return true; 
    }
}


function checkSubject(input) {
    var subjectValue = input.value.trim(); 
    if (subjectValue === "") {
        input.nextElementSibling.innerText = "Subject cannot be empty";
        return false; 
    } else {
        input.nextElementSibling.innerText = "";
        return true; 
    }
}




window.addEventListener('scroll', function () {
    console.log('scrolling');
    var arrowIcon = document.getElementById('arrow-icon');

    if (document.documentElement.scrollTop > 100) {
        arrowIcon.style.display = "block";
    } else {
        arrowIcon.style.display = "none";
    }
});


