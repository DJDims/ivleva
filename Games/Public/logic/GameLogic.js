const categoriesBase = document.getElementById("categoriesBase");
const categoriesThis = document.getElementById("categoriesThis");

function addCategoriesToGame(){
    const categoriesBaseOptions = getSelectValues(categoriesBase);
    console.log(categoriesBaseOptions);
	categoriesBaseOptions.forEach(element => {
		option = document.getElementById("categoryBase" + element.id);
		categoriesBase.parentNode.removeChild(option);
	});
}

function getSelectValues(select) {
    var result = [];
    var options = select.options;
    var opt;
  
    for (var i=0; i<options.length; i++) {
      opt = options[i];
	  
      if (opt.selected) {
		  obj = {value: opt.value, text: opt.text}
        result.push(obj);
      }
    }
    return result;
}
// function getSelectValues(select) {
//     var result = [];
//     var options = select && select.options;
//     var opt;
  
//     for (var i=0, iLen=options.length; i<iLen; i++) {
//       opt = options[i];
  
//       if (opt.selected) {
//         result.push(opt.value || opt.text);
//       }
//     }
//     return result;
// }