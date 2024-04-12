function SendMail() {
	var param = {
		from_name: document.getElementById('name').value,
		email_id: document.getElementById('email').value,
		message: document.getElementById('message').value,
	};


	emailjs.send("service_uilztta", "template_cybcxsg", params).then(function (res) {
		alert("Success! " + res.status);
	});
}
