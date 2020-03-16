/** Visitor Pattern
 *
 */
class Sayan {
  constructor(name, power) {
    this.name = name
    this.power = power

    this.getPowerLevel = () => this.power;
    this.setPowerLevel = (power) => this.power = power;
    this.acceptVisitor = (functionVisitor) =>  functionVisitor(this);
  }
}

const goku = new Sayan("Goku", 100);
console.log(goku.getPowerLevel()); //100

//Define a Visitor Function
const Empower = (sayan) => sayan.setPowerLevel(sayan.getPowerLevel() * 100);

//Substitute the new function to the Mage object
goku.acceptVisitor(Empower);

//Now check the new power!
console.log(goku.getPowerLevel()); //10000 It's Over 9000!