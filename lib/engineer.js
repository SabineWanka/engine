class Engineer {
    constructor(name, id, title, email, github) {
        this.name = name;
        this.id = id;
        this.title = title;
        this.email = email;
        this.github = github;

    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;