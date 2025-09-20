

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

// modal
document.addEventListener('DOMContentLoaded', function () {
    // Get the modal and the image element inside the modal
    const galleryModal = document.getElementById('galleryModal');
    const modalImage = document.getElementById('modalImage');

    // Add an event listener to the modal to catch clicks on gallery items
    galleryModal.addEventListener('show.bs.modal', function (event) {
        // Button that triggered the modal
        const button = event.relatedTarget; 

        // Extract image source from data-img-src attribute
        const imgSrc = button.getAttribute('data-img-src');

        // Update the modal's image source
        modalImage.setAttribute('src', imgSrc);
    });
});
