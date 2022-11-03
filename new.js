function parentFunction(outerValue){
  function childFunction(innerValue){
      console.log(outerValue,innerValue)
  }
  return childFunction

}

let exicute_parent = parentFunction("subhransu");
exicute_parent("gudu");