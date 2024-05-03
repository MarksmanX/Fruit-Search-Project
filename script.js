const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const searchContainer = document.querySelector('.suggestions');
searchContainer.classList.add('no-suggestions');


const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	if (str.trim() !== "") {
		for (let i = 0; i < fruit.length; i ++) {
			if (fruit[i].toLowerCase().includes(str)) {
				results.push(fruit[i]);
			}
		}
	}
	showSuggestions(results, inputBox)
}

function searchHandler(e) {
	str = e.target.value.toLowerCase();
	inputBox = e.target;
	search(str);
	if (e.target.value === "") {suggestions.innerHTML = ''};
}

function showSuggestions(results, inputBox) {
	suggestions.innerHTML = '';

	if (results.length === 0) {
        searchContainer.classList.add('no-suggestions');
		searchContainer.classList.remove('has-suggestions');
        return;
    }

	//Add results to the dropdown
	results.forEach(fruit => {
        const suggestion = document.createElement('li');
        suggestion.textContent = fruit;
		suggestion.addEventListener('click', (e) => {
			useSuggestion(e);
		});
        suggestions.appendChild(suggestion);
    });

	// Add the has-suggestions class to the search container
    searchContainer.classList.add('has-suggestions');
	searchContainer.classList.remove('no-suggestions');
}

function useSuggestion(e) {
	inputBox.value = e.target.textContent;
	searchContainer.classList.add('no-suggestions');
	searchContainer.classList.remove('has-suggestions');
	suggestions.innerHTML = '';
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);