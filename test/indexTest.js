const { expect } = require("chai");

describe("cats array", function() {
  let cats;

  beforeEach(function() {
    cats = ["Milo", "Otis", "Garfield"];
  });

  describe("destructivelyAppendCat(name)", function() {
    it("appends a cat to the end of the cats array", function() {
      destructivelyAppendCat("Ralph");
      expect(cats).to.have.members(["Milo", "Otis", "Garfield", "Ralph"]);
    });
  });

  describe("destructivelyPrependCat(name)", function() {
    it("prepends a cat to the beginning of the cats array", function() {
      destructivelyPrependCat("Bob");
      expect(cats[0]).to.equal("Bob");
      expect(cats).to.have.members(["Bob", "Milo", "Otis", "Garfield"]);
    });
  });

  describe("destructivelyRemoveLastCat()", function() {
    it("removes the last cat from the cats array", function() {
      destructivelyRemoveLastCat();
      expect(cats).to.have.members(["Milo", "Otis"]);
    });
  });

  describe("destructivelyRemoveFirstCat()", function() {
    it("removes the first cat from the cats array", function() {
      destructivelyRemoveFirstCat();
      expect(cats).to.have.members(["Otis", "Garfield"]);
    });
  });

  describe("appendCat(name)", function() {
    it("appends a cat to the cats array and returns a new array, leaving the cats array unchanged", function() {
      const newCats = appendCat("Broom");
      expect(newCats).to.have.members(["Milo", "Otis", "Garfield", "Broom"]);
      expect(cats).to.have.members(["Milo", "Otis", "Garfield"]);
    });
  });

  describe("prependCat(name)", function() {
    it("prepends a cat to the cats array and returns a new array, leaving the cats array unchanged", function() {
      const newCats = prependCat("Arnold");
      expect(newCats[0]).to.equal("Arnold");
      expect(cats).to.have.members(["Milo", "Otis", "Garfield"]);
    });
  });

  describe("removeLastCat()", function() {
    it("removes the last cat in the cats array and returns a new array, leaving the cats array unchanged", function() {
      const newCats = removeLastCat();
      expect(newCats).to.have.members(["Milo", "Otis"]);
      expect(cats).to.have.members(["Milo", "Otis", "Garfield"]);
    });
  });

  describe("removeFirstCat()", function() {
    it("removes the first cat from the cats array and returns a new array, leaving the cats array unchanged", function() {
      const newCats = removeFirstCat();
      expect(newCats).to.have.members(["Otis", "Garfield"]);
      expect(cats).to.have.members(["Milo", "Otis", "Garfield"]);
    });
  });
});
