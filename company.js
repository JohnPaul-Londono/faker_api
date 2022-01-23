const faker = require('@faker-js/faker');

class Kompany{
    constructor(){
        this._id = Math.floor(Math.random()* 100);
        this.name = faker.company.companyName();
        this.address = faker.address.streetAddress();
        this.city = faker.address.city();
        this.state = faker.address.state();
        this.zipCode = faker.address.zipCode();
    }
}

module.exports = Kompany;