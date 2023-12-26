
// scrolling behavior
// Smooth scrolling animation for all anchor links
$(document).ready(function(){
    // Add smooth scrolling to all anchor links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

// show portfolio work detail on hover
showDetail();

function showDetail(){
  const previews = document.getElementsByClassName('item');
  Array.from(previews).forEach((e, i) => {
    const detail = e.children[1];
    e.addEventListener('mouseover', () => {
      detail.style.opacity = 1;
    })
    e.addEventListener('mouseleave', () => {
      detail.style.opacity = 0;
    })
  })
}

// lightbox
let slideIndex = 1;
showSlide(slideIndex);

function openLightbox() {
  document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
};

function changeSlide(n) {
  showSlide(slideIndex += n);
};

function toSlide(n) {
  showSlide(slideIndex = n);
};

function showSlide(n) {
  const slides = document.getElementsByClassName('slide');
  let dots = document.getElementsByClassName('dot');

  if (n > slides.length) {
    slideIndex = 1;	
  };
  
  if (n < 1) {
    slideIndex = slides.length;
  };

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  };
  
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  };
  
  slides[slideIndex - 1].style.display = 'flex';
  dots[slideIndex - 1].className += ' active';
};

// click background to quit for mobile
function mobile(media) {
  if (media.matches) { 
    $(".modal").on('click', function(event) {
      closeLightbox();
    })
  }
}

const media = window.matchMedia("(max-width: 1000px)")

mobile(media)



