(function () {

	var supports3DTransforms = document.body.style['perspectiveProperty'] !== undefined ||
		document.body.style['WebkitPerspective'] !== undefined ||
		document.body.style['MozPerspective'] !== undefined ||
		document.body.style['msPerspective'] !== undefined ||
		document.body.style['OPerspective'] !== undefined;

	if (!supports3DTransforms) {
		alert('Your browser doesn\'t support CSS3 3D transforms :/');
	}

	function transform(element, value) {
		element.style.WebkitTransform = value;
		element.style.MozTransform = value;
		element.style.msTransform = value;
		element.style.OTransform = value;
		element.style.transform = value;
	}

	var width = 400,
		height = 600,
		quantity = 250,
		types = ['text', 'select', 'progress', 'meter', 'button', 'radio', 'checkbox'],
		greetings = ['万事顺遂', '吉祥如意', '学业进步', '事业有成', '爱情美满', '出入平安', '美丽动人', '心想事成', '工作顺利', '金榜题名', '腰缠万贯', '桃李满天下', '身体健康', '平安喜乐', '得心应手', '日月皆春', '一帆风顺', '圣诞快乐'];

	var tree = document.querySelector('.tree'),
		treeRotation = 0;

	tree.style.width = width + 'px';
	tree.style.height = height + 'px';

	window.addEventListener('resize', resize, false);

	// The tree
	for (var i = 0; i < quantity; i++) {
		var element = null,
			type = types[Math.floor(Math.random() * types.length)],
			greeting = greetings[Math.floor(Math.random() * greetings.length)];

		var x = width / 2,
			y = Math.round(Math.random() * height);

		var rx = 0,
			ry = Math.random() * 360,
			rz = -Math.random() * 15;

		var elemenWidth = 5 + ((y / height) * width / 2),
			elemenHeight = 26;

		switch (type) {
			case 'button':
				element = document.createElement('button');
				element.textContent = greeting;
				element.style.width = elemenWidth + 'px';
				element.style.height = elemenHeight + 'px';
				break;
			case 'progress':
				element = document.createElement('progress');
				element.style.width = elemenWidth + 'px';
				element.style.height = elemenHeight + 'px';
				if (Math.random() > 0.5) {
					element.setAttribute('max', '100');
					element.setAttribute('value', Math.round(Math.random() * 100));
				}
				break;
			case 'select':
				element = document.createElement('select');
				element.setAttribute('selected', greeting);
				element.innerHTML = '<option>' + greetings.join('</option><option>') + '</option>';
				element.style.width = elemenWidth + 'px';
				element.style.height = elemenHeight + 'px';
				break;
			case 'meter':
				element = document.createElement('meter');
				element.setAttribute('min', '0');
				element.setAttribute('max', '100');
				element.setAttribute('value', Math.round(Math.random() * 100));
				element.style.width = elemenWidth + 'px';
				element.style.height = elemenHeight + 'px';
				break;
			case 'radio':
				element = document.createElement('input');
				element.setAttribute('type', 'radio');
				if (Math.random() > 0.5) element.setAttribute('checked', '');
				break;
			case 'checkbox':
				element = document.createElement('input');
				element.setAttribute('type', 'checkbox');
				if (Math.random() > 0.5) element.setAttribute('checked', '');
				break;
			case 'text':
			default:
				element = document.createElement('input');
				element.setAttribute('type', 'text');
				element.setAttribute('value', greeting);
				element.style.width = elemenWidth + 'px';
				element.style.height = elemenHeight + 'px';
		}

		transform(element, 'translate3d(' + x + 'px, ' + y + 'px, 0px) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg) rotateZ(' + rz + 'deg)');

		tree.appendChild(element);
	}
	// name rotion
	// The snow
	for (var i = 0; i < 200; i++) {
		var element = document.createElement('input');
		var name = document.getElementsByClassName("name")
		element.setAttribute('type', 'radio');
		//name.setAttribute('type', 'radio')
		var spread = width * 2;

		var x = Math.round(Math.random() * spread) - (spread / 4),
			y = Math.round(Math.random() * height),
			z = Math.round(Math.random() * spread) - (spread / 2);

		var rx = 0,
			ry = Math.random() * 360,
			rz = 0;

		if (Math.random() > 0.5) element.setAttribute('checked', '');

		transform(element, 'translate3d(' + x + 'px, ' + y + 'px, ' + z + 'px) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg) rotateZ(' + rz + 'deg)');
		//transform(name, 'translate3d(' + x + 'px, ' + y + 'px, ' + z + 'px) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg) rotateZ(' + rz + 'deg)');
		tree.appendChild(element);
		//tree.appendChild(name);

	}

	function resize() {
		tree.style.top = ((window.innerHeight - height - 100) / 2) + 'px';
	}

	resize();

})()
