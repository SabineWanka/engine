const Employee = require("./Employee");

class Intern {
    constructor(name, id, school) {
        this.name = name;
        this.id = id;
        this.school = school;

    }

    getRole() {
        return "Intern"
    }

    getSchool() {
        return this.school;
    }
}
module.exports = Intern;