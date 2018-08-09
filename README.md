Usage
Requirements

Adding props to classes:

babel-plugin-transform-class-properties@6.24.1
babelrc: "plugins": ["transform-class-properties"]

example:
// utilizing: babel-plugin-transform-class-properties@6.24.1
// babelrc: "plugins": ["transform-class-properties"]
//  we do this because event handlers lose this binding, so this solves that by making them class properties
class OldSyntax {
    constructor() {
        this.name = "Topher";
        this.getGreeting = this.getGreeting.bind(this);
    }
    getGreeting() {
        return `Hi. My name is ${this.name}.`;
    }
}
const oldSyntax = new OldSyntax();
let getGreeting = oldSyntax.getGreeting;
console.log(getGreeting());

// --------
class NewSyntax {
    name = "Toph";
    getGreeting = () => {
        return `Hi. My name is ${this.name}.`;
    };
}
const newSyntax = new NewSyntax();
getGreeting = newSyntax.getGreeting;
console.log(getGreeting());
