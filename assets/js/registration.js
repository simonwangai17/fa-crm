document.addEventListener('DOMContentLoaded', function () {
    const steps = document.querySelectorAll('.step-container');
    const btnNext = document.querySelectorAll('.btn-next');
    const btnPrevious = document.querySelectorAll('.btn-previous');

    btnNext.forEach(btn => {
        btn.addEventListener('click', function () {
            const currentStep = this.closest('.step-container');
            const nextStepId = this.getAttribute('data-next');
            currentStep.style.display = 'none';
            document.getElementById(nextStepId).style.display = 'block';
        });
    });

    btnPrevious.forEach(btn => {
        btn.addEventListener('click', function () {
            const currentStep = this.closest('.step-container');
            const previousStepId = this.getAttribute('data-previous');
            currentStep.style.display = 'none';
            document.getElementById(previousStepId).style.display = 'block';
        });
    });

    routePlanIcons.forEach(icon => {
        icon.classList.remove('active');
        if (icon.getAttribute('data-step') === nextStepId) {
            icon.classList.add('active');
        }
    });

});

document.addEventListener('DOMContentLoaded', function (){
    function checkRequiredFields(){
        const firstName = document.getElementById('first-name').value;
        const secondname = document.getElementById('second-name').value;
        const thirdName = document.getElementById('third-name').value;
        const email = document.getElementById('email').value;
        const idNumber = document.getElementById('id-number').value;
        const dob = document.getElementById('dob').value;

        if (firstName === '' || secondName === '' || thirdName === '' || email === '' || idNumber === '' || dob === ''){
            return false;
        }
        return true;
    }

    const nextButton = document.querySelector('.bnt-next');
    nextButton.addEventListener('click', function (e) {
        if (!checkRequiredFields()) {
            e.preventDefault();
            alert('Please fill out all required fields');
        }
    });
});


document.getElementById('validateBtn').addEventListener('click', function(){
    //make AJax request
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/validate-payment', true);
    xhr.setRequestHeader('Content-Tyoe', 'application/json');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE){
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                document.getElementById('validateResult').innerText = response.message;
            } else{
                document.getElementById('validateResult').innerText = 'Payment Not Received';
            }
        }
    };
    xhr.send(JSON.stringify({}));
});

document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');
    const registerBtn = document.getElementById('registerBtn');
    const getNumberBtn = document.getElementById('getNumberBtn');
    const numberDisplay = document.getElementById('numberDisplay');
    const registeredNumber = document.getElementById('registeredNumber');
  
    let phoneNumber = ''; // Placeholder for registered phone number
  
    registerBtn.addEventListener('click', function() {
      // Perform registration logic here (e.g., send data to backend, store in database)
      // Simulating a successful registration
      phoneNumber = '+1234567890'; // Placeholder for registered phone number
      alert('Registration successful!');
      getNumberBtn.style.display = 'inline-block';
    });
  
    getNumberBtn.addEventListener('click', function() {
      // Display the registered phone number
      registeredNumber.textContent = phoneNumber;
      numberDisplay.style.display = 'block';
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registrationForm');
    const registerBtn = document.querySelector('.btn-submit');
    const getNumberBtn = document.getElementById('getNumberBtn');
    const numberDisplay = document.getElementById('numberDisplay');
    const registeredNumber = document.getElementById('registeredNumber');

    // Event listener for register button
    registerBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent form submission (you can remove this if you don't want form submission)
        // Perform registration logic here (e.g., send data to backend, store in database)
        // Simulating a successful registration
        alert('Registration successful! Click OK to get your registered number.');
        // After the user clicks OK, display "Get Number" button
        getNumberBtn.style.display = 'inline-block';
    });

    // Event listener for get number button
    getNumberBtn.addEventListener('click', function() {
        // Retrieve and display registered number (you should replace this with actual logic)
        const phoneNumber = "+1234567890"; // Placeholder for registered phone number
        registeredNumber.textContent = phoneNumber;
        numberDisplay.style.display = 'block'; // Display registered number
    });
});
