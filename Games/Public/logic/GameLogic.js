const companiesBase = document.getElementById("companiesBase");
const companiesThis = document.getElementById("companiesThis");
const categoriesBase = document.getElementById("categoriesBase");
const categoriesThis = document.getElementById("categoriesThis");
const platformsBase = document.getElementById("platformsBase");
const platformsThis = document.getElementById("platformsThis");
//companies-------------------------------------------------------------------
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
//companies-------------------------------------------------------------------

//categories-------------------------------------------------------------------
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
//categories-------------------------------------------------------------------

//platforms-------------------------------------------------------------------
function addPlatformsToGame() {
	const platformsBaseOptions = getSelectValues(platformsBase);
	
	platformsBaseOptions.forEach(element => {
		removeOptionFromSelect(element, platformsBase)
		addOptionToSelect(element, platformsThis)
	});
	setAllSelected(platformsThis)
}

function removePlatformsFromGame() {
	const platformsThisOptions = getSelectValues(platformsThis);
	
	platformsThisOptions.forEach(element => {
		removeOptionFromSelect(element, platformsThis)
		addOptionToSelect(element, platformsBase)
	});
	setAllSelected(platformsThis)
}
//platforms-------------------------------------------------------------------

function getSelectValues(select) {
	const result = [];
	const options = select.options;
	let opt;

	for (let i = 0; i < options.length; i++) {
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

function smbtForm() {
	setAllSelected(companiesThis)
	setAllSelected(categoriesThis)
	setAllSelected(platformsThis)
}