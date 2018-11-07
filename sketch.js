

	var myRec = new p5.SpeechRec('en-US', parseResult); // new P5.SpeechRec object
	myRec.continuous = true; // do continuous recognition
	myRec.interimResults = true;


  var pip;

	function setup()
	{
		// graphics stuff:
		createCanvas(1100, 600);
    frameRate(50);
      pip = createSprite(100, 100);
      pip.addAnimation('left', '1.png', '2.png', '3.png', '4.png', '5.png');
      pip.addAnimation('right','1r.png', '2r.png', '3r.png', '4r.png', '5r.png' );
      pip.addAnimation('stop','6.png' );


		myRec.start(); // start

    //platform black

      platform = createSprite(100, 200);
      platform.addAnimation('normal', 'platform.png');
      platform_a = createSprite(260, 430);
      platform_a.addAnimation('normal', 'platform.png');
      platform_b = createSprite(350, 110);
      platform_b.addAnimation('normal', 'platform.png');
      platform_c = createSprite(540, 320);
      platform_c.addAnimation('normal', 'platform.png');
      platform_d = createSprite(800, 180);
      platform_d.addAnimation('normal', 'platform.png');

      //platform canvas
      platform1 = createSprite(550, 0);
      platform1.addAnimation('normal', 'platform_1_orizzontale.png');
      platform2 = createSprite(0,400);
      platform2.addAnimation('normal', 'platform_verticale.png');
      platform3 = createSprite(550, 599);
      platform3.addAnimation('normal', 'platform_1_orizzontale.png');
      platform4 = createSprite(1099,400);
      platform4.addAnimation('normal', 'platform_verticale.png');

    // home
    home = createSprite(904,510);
    home.addAnimation('normal', 'home.png');
    grottacin = createSprite(904,412);
    grottacin.addAnimation('normal', 'grottacin.png');

		// instructions

		instruction = createSprite (130, 415);
		instruction.addAnimation('normal', 'indicazioni.png');
	}

	function draw()
	{
      background(220);

    pip.collide(platform);
    pip.collide(platform_a);
    pip.collide(platform_b);
    pip.collide(platform_c);
    pip.collide(platform_d);
    pip.collide(platform1);
    pip.collide(platform2);
    pip.collide(platform3);
    pip.collide(platform4);

    pip.overlap(home, sleep);
    pip.overlap(grottacin, sleep);


  function sleep() {
    pip.changeAnimation('stop');
    pip.animation.rewind();
    pip.setSpeed(0, 0);
    background(255, 214, 69);
  }

    drawSprites()

	}

	function parseResult() {
			var mostrecentword = myRec.resultString.split(' ').pop();

	    if(mostrecentword.indexOf("left")!==-1) {
	    pip.changeAnimation('left');
	    pip.setSpeed(-1.5, 0);
	    }

	    else if (mostrecentword.indexOf("right")!==-1)
	    {
	    pip.changeAnimation('right');
	    pip.animation.rewind();
	    pip.setSpeed(1.5, 0);
	    }


	    else if (mostrecentword.indexOf("down")!==-1)
	    {
	    pip.changeAnimation('right');
	    pip.animation.rewind();
	    pip.setSpeed(1.5, 100);
	    }


	    else if (mostrecentword.indexOf("up")!==-1)
	    {
	    pip.changeAnimation('right');
	    pip.animation.rewind();
	    pip.setSpeed(1.5, -100);
	    }


	    else if (mostrecentword.indexOf("stop")!==-1)
	    {
	    pip.changeAnimation('stop');
	    pip.animation.rewind();
	    pip.setSpeed(0, 0);
	    }
	}
