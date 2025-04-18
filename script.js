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

    

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.style.marginLeft = '10px';
    deleteBtn.style.backgroundColor = '#ff4d4d';
    deleteBtn.style.color = 'white';
    deleteBtn.style.border = 'none';
    deleteBtn.style.borderRadius = '8px';
    deleteBtn.style.cursor = 'pointer';

    deleteBtn.addEventListener('click', function() {
        newContact.remove();
    });

    newContact.appendChild(deleteBtn);
    document.querySelector('#contact-list').appendChild(newContact);
    document.querySelector('form').reset();



});