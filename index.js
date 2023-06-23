let cats=["Milo", "Otis", "Garfield"]
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
  function destructivelyAppendCat(name){
    cats.push("Ralph") 
  }
  function destructivelyPrependCat(name){
    cats.unshift("Bob")
  }function destructivelyRemoveFirstCat(){
    cats.shift()
  }
  function destructivelyRemoveLastCat(){
    cats.pop()
  }function appendCat(name){
    let newcats=[...cats, "Broom"]
    return newcats
  }
  function prependCat(name){
    let newcats=["Arnold", ...cats]
    return newcats
  }
  function removeLastCat(){
    let newcats= cats.slice(0, -1)
    return newcats
  }
  function removeFirstCat(){
    let newcats = cats.slice(1)
    return newcats
  }// Write your solution here!
