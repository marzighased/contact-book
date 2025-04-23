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

    window.addEventListener('DOMContentLoaded', function() {
        let contacts = JSON.parse(localStorage.getItem('contacts')) || [];

        contacts.forEach(function(contact) {
            let li = document.createElement('li');
            li.textContent = contact.name + '-' + contact.phone + '-' + contact.email;

            let deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.style.marginLeft = '10px';
            deleteBtn.style.backgroundColor = '#ff4d4d';
            deleteBtn.style.color = 'white';
            deleteBtn.style.border = 'none';
            deleteBtn.style.borderRadius = '8px';
            deleteBtn.style.cursor = 'pointer';

            deleteBtn.addEventListener('click', function() {
                li.remove();
        
                let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
                contacts = contacts.filter(c => c.name !== name || c.phone !== phone || c.email !== email);
                localStorage.setItem('contacts', JSON.stringify(contacts));
            });
                
            li.appendChild(deleteBtn);
            document.querySelector('#contact-list').appendChild(li);
        });
    }

    
    

    let contact = {name, phone, email};
    let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    contacts.push(contact);
    document.querySelector('form').reset();



});