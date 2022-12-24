class User {

    constructor(data) {
        this.data = data
    }

    edit(data) {
        Object.assign(this.data, data)
    }

    get() {
        return this.data
    }
}


// let user1 = new User({
//     id: 1,
//     name: 'Roma',
//     email: 'roma@mail.ru',
//     address: 'address,Minsk',
//     phone: '+375 29 313 58 39'
// })

// user1.edit({name: 'Pasha'})
// console.log(user1.get())
// console.log(user1)

class Contacts {

    constructor() {
        this.data = []
        // this.localStorage = null
    }

    add(data) {
        if (!data.name || !data.phone) return
        let user = new User(data)
        let id = this.randomIdGeneration()
        user.data.id = id
        this.data.push(user)
        return this
    }

    randomIdGeneration() {
        let id = Math.floor(Math.random() * 100) + 1
        let flag = false;
        this.data.forEach((elem) => {
            if (!flag) flag = id === elem.data.id;
        });
        if (flag) return this.randomIdGeneration()
        return id
    }

    edit(id, obj) {
        this.data.forEach((elem) => {
            if (elem.data.id == id) elem.edit(obj)
        })
        return this
    }

    remove(id) {
        let index
        this.data.forEach((elem, indexElem) => {
            if (elem.data.id == id) index = indexElem
        })
        this.data.splice(index, 1)
        return this
    }

    get storage() {
        return localStorage.getItem('contacts')
    }

    set storage(contacts) {
        let contactsBuffer = JSON.stringify(contacts)
        localStorage.setItem('contacts', contactsBuffer)
    }

    async getData() {
        if (this.storage != null && this.storage.length > 2) return
        let url = 'https://jsonplaceholder.typicode.com/users'
        let self = this

        await fetch(url).then(function(responce) {
            return responce.json()
        }).then(function(textData){
            let dataArr = []
            textData.forEach(function(contact) {
                let dataObj = {
                    name: contact.name,
                    phone: contact.phone,
                    email: contact.email
                }
                dataArr.push(dataObj)
            })
            self.storage = dataArr
        })
    }

}

let contacts = new Contacts()


class ContactsUI extends Contacts {

    constructor() {
        super()
        this.root = null
        this.container = null
        this.init()
    }

    init() {

        this.root = document.querySelector('.root');

        let formContainer = document.createElement('div');
        formContainer.classList.add('form-container');
        let form = document.createElement('form')
        let inputName = document.createElement('input');
        inputName.setAttribute('type', 'text');
        inputName.setAttribute('placeholder', 'введите имя')
        let inputPhone = document.createElement('input');
        inputPhone.setAttribute('type', 'tel');
        inputPhone.setAttribute('placeholder', 'введите телефон')
        let inputAddress = document.createElement('input');
        inputAddress.setAttribute('type', 'text');
        inputAddress.setAttribute('placeholder', 'введите адрес')
        let inputEmail = document.createElement('input');
        inputEmail.setAttribute('type', 'email');
        inputEmail.setAttribute('placeholder', 'введите почту')
        let buttonAdd = document.createElement('button');
        buttonAdd.setAttribute('type', 'submit');
        buttonAdd.innerHTML = 'add';

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (!inputName.value.length > 0 || !inputPhone.value.length > 0) return;

            let data = {
                name: inputName.value,
                phone: inputPhone.value,
                address: inputAddress.value,
                email: inputEmail.value
            };

            this.add(data);

            inputName.value = '';
            inputPhone.value = '';
            inputAddress.value = ''
            inputEmail.value = '';

            this.render();
        });

        this.container = document.createElement('div');
        this.container.classList.add('container');

        form.append(inputName, inputPhone, inputAddress, inputEmail, buttonAdd);
        formContainer.append(form);
        this.root.append(formContainer, this.container);

        if (this.storage && this.storage.length > 0 ) {
            let contacts = localStorage.getItem('contacts')
            contacts = JSON.parse(contacts)
            self = this
            contacts.forEach(function(contact) {
                self.add(contact)
            })
            this.render()
            this.getData()
        }
    }

    render() {
        this.container.innerHTML = '';
        let self = this;

        this.data.forEach(function (contact) {
            let elem = document.createElement('div')
            elem.classList.add('contact')
            
            let name = document.createElement('div')
            name.classList.add('name', 'left')
            name.innerHTML = 'Имя:'
            let nameContent = document.createElement('div')
            nameContent.classList.add('name-content')
            nameContent.innerText = contact.data.name;

            let phone = document.createElement('div')
            phone.classList.add('phone', 'left')
            phone.innerHTML = 'Телефон:'
            let phoneContent = document.createElement('div')
            phoneContent.classList.add('phone-content')
            phoneContent.innerText = contact.data.phone;

            let email = document.createElement('div')
            email.classList.add('email', 'left')
            email.innerHTML = 'почта:'
            let emailContent = document.createElement('div')
            emailContent.classList.add('email-content')
            emailContent.innerText = contact.data.email;
            if (contact.data.email === undefined) emailContent.innerText = 'Не указали'

            let address = document.createElement('div')
            address.classList.add('address', 'left')
            address.innerHTML = 'Адресс:'
            let addressContent = document.createElement('div')
            addressContent.classList.add('name-content')
            addressContent.innerText = contact.data.address;
            if (contact.data.address === undefined) addressContent.innerText = 'Не указали'

            let buttonRemove = document.createElement('button')
            buttonRemove.innerHTML = 'remove'
            buttonRemove.addEventListener('click', () => self.remove(contact.data.id));

            let buttonEdit = document.createElement('button');
            buttonEdit.innerHTML = 'Edit';
            buttonEdit.addEventListener('click', () => {
                nameContent.contentEditable = true;
                phoneContent.contentEditable = true;
                emailContent.contentEditable = true;
                addressContent.contentEditable = true;

            });

            nameContent.addEventListener('keydown', e => self.onEdit(e, contact.data.id, nameContent, phoneContent, emailContent, addressContent));

            phoneContent.addEventListener('keydown', e => self.onEdit(e, contact.data.id, nameContent, phoneContent, emailContent, addressContent));

            emailContent.addEventListener('keydown', e => self.onEdit(e, contact.data.id, nameContent, phoneContent, emailContent, addressContent));

            addressContent.addEventListener('keydown', e => self.onEdit(e, contact.data.id, nameContent, phoneContent, emailContent, addressContent));

            elem.append(name, nameContent, phone, phoneContent, email, emailContent, address, addressContent, buttonRemove, buttonEdit);
            self.container.append(elem);
            
        });
        this.storage = this.data
    }

    remove(id) {
        super.remove(id);
        this.render();
    }

    onEdit(e, id, name, phone, email, address) {
        if (e.altKey && e.code === 'Enter') {
            let data = {
                name: name.innerText,
                phone: phone.innerText,
                email: email.innerText,
                address: address.innerText,
            };

            name.contentEditable = false;
            phone.contentEditable = false;
            email.contentEditable = false;
            address.contentEditable = false;

            this.edit(id, data)
            this.render()
        }
    }
}

let contactsUI = new ContactsUI()

console.log(contactsUI)
// contactsUI.storage = [{name:'roma', phone: '+375 29 313 58 39'}, {name: 'Lena', phone: '+375 29 662 12 11'}]

