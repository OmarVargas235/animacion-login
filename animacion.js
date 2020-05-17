(function () {
	let botonUp = document.querySelector('#signUp'),
		cardUno = document.querySelector('.cardUno'),
		cardDos = document.querySelector('.cardDos'),
		contendorDosExtra = document.createElement('div');

	const moverAnimacion = () => {
		let templeteWelcomeback = `
				<h2>Welcome, Back!</h2>
				<p>To keep connected with us please login <br> with your personal info</p>
				<button id="signUpDos">SIGN UP</button>
			`,
			templeteFormularioSignIn = `
				<h2>Sign In</h2>

				<div class="iconos">
					<div class="icono">
						<i class="fab fa-facebook-f"></i>
					</div>

					<div class="icono">
						<i class="fab fa-google-plus-g"></i>
					</div>

					<div class="icono">
						<i class="fab fa-linkedin-in"></i>
					</div>
				</div>

				<p>or use your account</p>

				<form class="formulario">
					<input type="text" placeholder="Name">
					<input type="email" placeholder="Email">
				</form>

				<p>Forget your password?</p>
				<button>SIGN IN</button>	
			`,
			templeteFormularioCreateAcconunt = `
				<h2>Create Account</h2>

				<div class="iconos">
					<div class="icono">
						<i class="fab fa-facebook-f"></i>
					</div>

					<div class="icono">
						<i class="fab fa-google-plus-g"></i>
					</div>

					<div class="icono">
						<i class="fab fa-linkedin-in"></i>
					</div>
				</div>

				<p>or use your email for registration</p>

				<form class="formulario">
					<input type="text" placeholder="Name">
					<input type="email" placeholder="Email">
					<input type="password" placeholder="Password">
				</form>

				<button>SIGN IN</button>	
			`;

		contendorDosExtra.classList.add('contendor-card-dos-extra');
		cardUno.classList.toggle('card-uno-mover');
		cardDos.classList.toggle('card-dos-mover');

		contendorDosExtra.innerHTML = templeteWelcomeback;
		cardDos.append(contendorDosExtra);

		botonUp = document.querySelector('#signUpDos');

		setTimeout(() => contendorDosExtra.classList.toggle('posicionar-card-dos'), 100);
		setTimeout(() => cardDos.classList.toggle('cambiarDegradado'), 1000);

		cardUno.getAttribute('class').split(' ')[1] === 'card-uno-mover'
		? setTimeout(() => cardUno.innerHTML = templeteFormularioCreateAcconunt, 400)
		: setTimeout(() => cardUno.innerHTML = templeteFormularioSignIn, 400);
		
		botonUp.addEventListener('click', moverAnimacion);
	}

	botonUp.addEventListener('click', moverAnimacion);
}());