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
    
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {




    // const check = (young, old) => {
    //   while (old.creator === young.creator) {
    //     young = young.creator;
    //   }
    //   let sameLevelCreator = old.creator;
    //   if (young.creator === old.creator)
    //     return old.creator;
    //   else {


    //   }


    // };


    // if (this.creator === vampire.creator) {
    //   return this.creator;
    // } else {
    //   let a = this.numberOfVampiresFromOriginal; // 8
    //   let b = vampire.numberOfVampiresFromOriginal; // 7
    //   return (a > b) ? check(this, vampire) : check(vampire, this);

    // }







  }



}


module.exports = Vampire;

