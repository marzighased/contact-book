let contactForm = document.getElementById('contact-form');
let contactList = document.getElementById('contact-list');

document.querySelector('form').addEventListener('submit', function(e) {
    let name = document.querySelector('#name').value;
    let phone = document.querySelector('#phone').value;
    let email = document.querySelector('#email').value;

    if (!name || !phone || !email) {
        alert('fill all the Fields.');
        return;
    }

    let newContact = document.createElement('li');
    newContact.textContent = name + '-' + phone + '-' + email;

    document.querySelector('#contact-list').appendChild(newContact);
    document.querySelector('form').reset();

});