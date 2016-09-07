function titlize(str){
  let strArray = str.split(" ")
  let titlizedArray = strArray.map(function(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  })
  return titlizedArray.join(" ")
}

export default titlize
