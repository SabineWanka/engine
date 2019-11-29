const Employee = require("./Employee");

class Manager {
    constructor(name, id, title, email, officenumber) {
        this.name = name;
        this.id = id;
        this.title = title;
        this.email = email;
        this.officenumber = officenumber;
    }
    getRole() {
        return "Manager"
    }

    getOfficeNumber() {
        return this.officenumber;
    }
}
module.exports = Manager;