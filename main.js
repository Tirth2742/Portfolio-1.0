// copy contact
let emailcontact = document.querySelector('.contactemail');
let phonecontact = document.querySelector('.contactphone');
emailcontact.addEventListener('click',copycontact);
phonecontact.addEventListener('click',copycontact);
const tooltip = document.getElementById('tooltip');
function copycontact(e){
    e.preventDefault();
    const c = e.target.innerText;
    navigator.clipboard.writeText(c);
    tooltip.style.display = 'block';
    tooltip.style.left = (e.clientX +10) + 'px'; // Adjust the offset from the cursor horizontally
    tooltip.style.top = (e.clientY +10) + 'px'; // Adjust the offset from the cursor vertically
    setTimeout(function() {
        tooltip.style.display = 'none';
      }, 2000);
}


// contact form script
const scriptURL = 'https://script.google.com/macros/s/AKfycbxKfH5z5NIWPg1ZzYvM6dt6ie9mktGgRdkEQz9jMVu76GRXXWpaGW8eTtZ0ohruKyAljQ/exec'
const form = document.querySelector('.form');
const msg = document.querySelector('#msg');
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
          form.reset();
          msg.innerText = "Message sent successfully";
        setTimeout(function(){
            msg.innerText ="";
        },3000)
      })
      .catch(error => console.error('Error!', error.message))
})