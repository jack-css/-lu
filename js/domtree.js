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
	var height_inner = window.innerHeight
	var width_inner = window.innerWidth

	var width = 0.28 * width_inner,
		height = 0.82 * height_inner,
		quantity = 250,
		types = ['text', 'select', 'progress', 'meter', 'button', 'radio', 'checkbox'],
		greetings = ['万事顺遂', '学业进步', '美丽动人', '心想事成', '工作顺利', '金榜题名', '桃李满天下', '得心应手', '日月皆春', '一帆风顺', '圣诞快乐'];
	var poems = ['古来青史谁不见，今见功名胜古人', '长风破浪会有时，直挂云帆济沧海。', '明年此日青云上，却笑人间举子忙。', '莫见长安行乐处， 空令岁月易蹉跎。']
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

		var elemenWidth = 30 + ((y / height) * width / 2),
			elemenHeight = 26;
		if (elemenWidth > 190) {
			greeting = poems[Math.floor(Math.random() * poems.length)];
		}
		else if (elemenWidth < 100)
			greeting = greetings[Math.floor(Math.random() * greetings.length)];
		else {
			var num, num2;
			var num = Math.floor(Math.random() * greetings.length);
			if (num < greetings.length - 1)
				num2 = num + 1;
			else
				num2 = num - 1;
			greeting = [greetings[num] + ',' + greetings[num2]];

		}

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
	// name rotate 
	const rotatingText = document.querySelector('.private_name');

	// 初始旋转角度
	let rotationAngle = 0;

	// 设置每隔一段时间执行的函数
	const rotateInterval = setInterval(() => {
		// 更新旋转角度
		rotationAngle += 5; // 每次旋转10度，可以根据需要调整

		// 应用旋转效果
		rotatingText.style.transform = `rotateY(${rotationAngle}deg)`;
	}, 50); // 每隔0.1秒执行一次，可以根据需要调整
	resize();
})()
