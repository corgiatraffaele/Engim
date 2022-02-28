var modal = document.getElementById('exampleModal')
modal.addEventListener('show.bs.modal',function(){
    let button = Event.relatedTarget;
    let email = button.dataset.message;
    let message = button.dataset.message;

    modal.querySelector('.modal-tile').textContent = "new message to" + recipient;
    modal.querySelector('.modal-body input').value = recipient;
    modal.querySelector('.modal-body textare').value = message;
});

 

/*exampleModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget
  // Extract info from data-bs-* attributes
  var recipient = button.getAttribute('data-bs-whatever')
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  var modalTitle = exampleModal.querySelector('.modal-title')
  var modalBodyInput = exampleModal.querySelector('.modal-body input')

  modalTitle.textContent = 'New message to ' + recipient
  modalBodyInput.value = recipient
})
*/