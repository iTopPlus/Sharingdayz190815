
var sound = new Howl({
    src: ['./test01.webm'],
    html5: true,
    volume: 0.0
  });

  test01.addEventListener('click', function() {
    sound.play();
  });
  test02.addEventListener('click', function() {
    sound.pause();
  })
  test05.addEventListener('click', function() {
    sound.stop();
  })
  test06.addEventListener('click', function() {
    sound.fade(0, 1, 5000);
  })
  test03.addEventListener('click', function() {
    var vol = sound.volume();
		vol += 0.1;
		if (vol > 1) {
			vol = 1;
		}
		sound.volume(vol);
  });
  test04.addEventListener('click', function() {
    var vol = sound.volume();
		vol -= 0.1;
		if (vol < 0.1) {
			vol = 1;
		}
		sound.volume(vol);
  });