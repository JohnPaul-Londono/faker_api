const faker = require('@faker-js/faker');


class User{
    constructor(){
        this._id = Math.floor(Math.random()* 1000);
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email= faker.internet.email();
        this.password = faker.internet.password()
    }
}


module.exports = User;