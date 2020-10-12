//Credit https://github.com/tc39/proposal-pipeline-operator#introduction

function doubleSay(str: string) {
  return str + ", " + str;
}
function capitalize(str: string) {
  return str[0].toUpperCase() + str.substring(1);
}
function exclaim(str: string) {
  return str + "!";
}


let result = "hello"
  |> doubleSay
  |> capitalize
  |> exclaim