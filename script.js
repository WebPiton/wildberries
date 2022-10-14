const form = document.querySelector("#form");
const btn = document.getElementById("buttonHeader");
const fields = document.querySelectorAll(".fields");

function scrollButtonClick() {
	form.scrollIntoView(true, { behavior: "smooth" });
}

btn.addEventListener("click", scrollButtonClick);

form.addEventListener("submit", async (e) => {
	e.preventDefault();
	const formData = new FormData(form);

	// if (formData.get('fullName'))
	// for (var i = 0; i < fields.length; i++) {
	// 	console.log(fields[i]);
	// 	if (!fields[i].value) {
	// 		console.log("field is blank", fields[i]);
	// 		var error = document.createElement("p");
	// 		error.className = "error";
	// 		error.style.color = "red";
	// 		// error.innerHTML = "Нео";
	// 		form[i].parentElement.insertBefore(error, form[i]);
	// 	}
	// }

	let response = await fetch("http://localhost:9999/feedback", {
		method: "POST",
		body: formData,
	});

	if (response.status === 200) {
		alert("Ок");
	}
});
