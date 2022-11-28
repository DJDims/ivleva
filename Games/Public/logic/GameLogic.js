const companiesBase = document.getElementById("companiesBase");
const companiesThis = document.getElementById("companiesThis");
const categoriesBase = document.getElementById("categoriesBase");
const categoriesThis = document.getElementById("categoriesThis");

function addCompaniesToGame() {
	const companiesBaseOptions = getSelectValues(companiesBase);

	companiesBaseOptions.forEach(element => {
		removeOptionFromSelect(element, companiesBase)
		addOptionToSelect(element, companiesThis)
	});
	setAllSelected(companiesThis)
}

function removeCompaniesFromGame() {
	const companiesThisOptions = getSelectValues(companiesThis);

	companiesThisOptions.forEach(element => {
		removeOptionFromSelect(element, companiesThis)
		addOptionToSelect(element, companiesBase)
	});
	setAllSelected(companiesThis)
}

function addCategoriesToGame() {
	const categoriesBaseOptions = getSelectValues(categoriesBase);

	categoriesBaseOptions.forEach(element => {
		removeOptionFromSelect(element, categoriesBase)
		addOptionToSelect(element, categoriesThis)
	});
	setAllSelected(categoriesThis)
}

function removeCategoriesFromGame() {
	const categoriesThisOptions = getSelectValues(categoriesThis);

	categoriesThisOptions.forEach(element => {
		removeOptionFromSelect(element, categoriesThis)
		addOptionToSelect(element, categoriesBase)
	});
	setAllSelected(categoriesThis)
}

function getSelectValues(select) {
	var result = [];
	var options = select.options;
	var opt;

	for (var i = 0; i < options.length; i++) {
		opt = options[i];

		if (opt.selected) {
			result.push(opt);
		}
	}
	return result;
}

function removeOptionFromSelect(option, select) {
	select.removeChild(option);
}

function addOptionToSelect(option, select) {
	select.appendChild(option);
}

function setAllSelected(select) {
	const options = select.options;
	for (let i = 0; i < options.length; i++) {
		console.log(options[i].id)
		options[i].selected = 'selected';
	}
}