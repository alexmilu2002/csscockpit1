const ranges = document.querySelectorAll('[type="range"]');

const updateRange = range => {
	// the name of the custom property is the name of the input
	const rangeName = range.name;
	// the value of the custom property is the value of the input
	const rangeValue = range.value;
	// a custom property is set on the HTML element
	document.documentElement.style.setProperty("--"+rangeName, rangeValue);
}

ranges.forEach(range => {
	// the custom property is set initially after loading the document
	updateRange(range);
	
	// the custom property is updated when the input is changed
	range.oninput = () => {
		updateRange(range)
	};
});

const deksel = document.querySelector("label > div");

deksel.addEventListener("click", function(e){
  e.preventDefault();
  deksel.style.transform = "translate(30%, 0%) rotateY(75deg)";
});
