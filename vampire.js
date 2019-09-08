class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberOfPeople = 0;
    let currentVampire = this;

    // climb "up" the tree (using iteration), counting nodes, until no boss is found
    while (currentVampire.creator) {
      currentVampire = currentVampire.creator;
      numberOfPeople++;
    }

    return numberOfPeople;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    return (this.numberOfVampiresFromOriginal > vampire.numberOfVampiresFromOriginal ? false : true);
  }

  /** Tree traversal methods **/

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    if (this.name === name) {
      return this;
    } else {
      if (this.offspring) {

        for (let child of this.offspring) {
          let vamp = child.vampireWithName(name);
          if (vamp) {
            return vamp;
          }
        }
        // this.offspring.forEach(child => {
        //   let vamp = child.vampireWithName(name);
        //   if (vamp) {
        //     return vamp;
        //   }
        // });
      } else {
        return null;
      }
    }
    return null;

  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    let total = 0; // 1

    // Use depth first traversal to calculate the total employees
    for (const child of this.offspring) {
      total++;
      total += child.totalDescendents;
    }
    return total;
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    let millenialVamps = []; // 1

    if (this.yearConverted > 1980) {
      millenialVamps.push(this); // 2
    }

    for (const child of this.offspring) {
      const childBornAfter = child.allMillennialVampires; // 3
      millenialVamps = millenialVamps.concat(childBornAfter);
    }

    return millenialVamps;
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {
    if (this === vampire) {
      return this;
    } else if (this.creator === vampire) {
      return vampire;
    } else if (vampire.creator === this) {
      return this;
    } else if (this.isMoreSeniorThan(vampire)) {
      return vampire.creator.closestCommonAncestor(this);
    } else if (vampire.isMoreSeniorThan(this)) {
      return this.creator.closestCommonAncestor(vampire);
    }


  }
}


module.exports = Vampire;




















