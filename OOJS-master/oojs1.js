

var artist = {
  name : "Leonardo da Vinci",
  quote: function () {
    return "Simplicity is the ultimate sophistication. --- " + this.name;
  },
  works: {
    work1: "Mona Lisa",
    work2: "The Last Supper",
    work3: "The Vitruvian Man",
    work4: "Lady with an Ermine"
  }
};

console.log(artist.quote());
document.write("one of the most famous pieces in art history is " + artist.works.work2);


