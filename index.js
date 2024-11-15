// template_oga9up7
// service_22grnar

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector('.modal__overlay--loading')
  const success = document.querySelector('.modal__overlay--success')
  loading.classList += " modal__overlay--visible"
  emailjs
    .sendForm(
        'service_22grnar',
        'template_oga9up7',
        event.target,
        'KzN7EnOUwsPcf8Epc'
)
   .then(() => {
  
    loading.classList.remove("modal__overlay--visible");
    success.classList += " modal__overlay--visible"
    }) .catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert (
            "The email service is temporarily unavailable. Please contact me directly at Eli.franklinn@gmail.com"
        )
    })
}
let isModalOpen = false;
function toggleModal () {
    
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open")

    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}