import '../styles/styles.css';
import Person from "./modules/Person";

if (module.hot) {
  module.hot.accept()
}

class Adult extends Person {
  payTaxes() {
    console.log(this.name + " Needs to pay!");
  }
}

let john = new Person("John Doe", "red");
john.greet();

let jane = new Adult("Jane Smith", "modrá");
jane.greet();
jane.payTaxes();