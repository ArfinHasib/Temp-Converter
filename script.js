const tempLoad = () => {
	let fa = document.getElementById("fa");
	fa.innerHTML = "&#xf2cb";
	fa.style.color = "#ffa41b";

	setTimeout(() => {
		fa.innerHTML = "&#xf2ca";
		fa.style.color = "#ffa41b";
	}, 1000);

	setTimeout(() => {
		fa.innerHTML = "&#xf2c9";
	}, 2000);

	setTimeout(() => {
		fa.innerHTML = "&#xf2c8";
	}, 3000);

	setTimeout(() => {
		fa.innerHTML = "&#xf2c7";
		fa.style.color = "#ff5151";
	}, 4000);
};

setInterval(() => {
	fa.style.color = "#ffa41b";
	tempLoad();
}, 5000);

tempLoad();

// Calculate the temp
const calculateTemp = () => {
	const numberTemp = document.getElementById("temp").value;

	const tempSelected = document.querySelector("#temp_diff");
	const valeTemp = temp_diff.options[tempSelected.selectedIndex].value;

	// Convert temperature from Farenheit to Celsius
	const calToFah = (cel) => {
		let farenheit = cel * (9 / 5) + 32;
		return farenheit;
	};

	// Convert temperature from Celsius to Farenheit
	const fahToCel = (fahr) => {
		let celsius = ((fahr - 32) * 5) / 9;
		return celsius;
	};

	let result;
	if (valeTemp == "cel") {
		result = calToFah(numberTemp);
		document.getElementById(
			"resultContainer"
		).innerHTML = `= ${result.toFixed(2)} °Farenheit`;
	} else {
		result = fahToCel(numberTemp);
		document.getElementById(
			"resultContainer"
		).innerHTML = `= ${result.toFixed(2)} °Celsius`;
	}
};
