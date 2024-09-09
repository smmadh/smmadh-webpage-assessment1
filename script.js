document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('volunteer-form');
    form.noValidate = true;
    form.addEventListener('submit', function(event) {
        
        event.preventDefault();

        
        var isValid = true;
        var inputs = this.querySelectorAll('input[required], select[required]');
        
        inputs.forEach(function(input) {
            if (!input.value) {
                isValid = false;
                input.style.border = '2px solid red';
            } else {
                input.style.border = '';
            }
        });

        var terms = this.querySelector('#terms');
        if (!terms.checked) {
            isValid = false;
            terms.style.outline = '2px solid red';
        } else {
            terms.style.outline = '';
        }

        if (isValid) {
           
            console.log('Form is valid! Submitting...');
           
        } else {
            console.log('Form is invalid. Check required fields.');
        }
    });
});



let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}