// 4. Create a generic class called `Container` that stores a value of any type.
// Add methods to `getValue` and `setValue`.
// Initialize it with "Initial Value", update it to "Updated Value", and log the new value.

class Container <T>{
  private value:T;

  constructor(value:T) {
    this.value = value;
  }

  getValue = () => this.value;

  setValue = (value:T) => {
    this.value = value;
  };
}

const stringContainer = new Container <string>("Initial Value");
stringContainer.setValue("Updated Value");
console.log(stringContainer.getValue()); // Expected output: "Updated Value"