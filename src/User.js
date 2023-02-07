class User {

present = false;

 constructor(title, firstName, lastName, town, country, age, email, picture) {
 this.title = title;
 this.firstName = firstName;
 this.lastName = lastName;
 this.town = town;
 this.country = country;
 this.age = age;
 this.email = email;
 this.picture = picture;
 }
 
 generateHTML() {
    const html = `<div class="user" data-present="false">
    <img src="${this.User.picture}">
    <div class="user--info">
            <h1>${this.User.title} ${this.User.firstName} ${this.User.lastName}</h1>
            <p>${this.User.age} years old</p>
            <p>${this.User.town}, ${this.User.country}</p>
    </div>
    <a href="mailto:${this.User.email}">
            <span class="mail">✉️</span>
    </a>
</div>`;
board.insertAdjacentHTML("afterbegin", html);
 }
}

export default User;