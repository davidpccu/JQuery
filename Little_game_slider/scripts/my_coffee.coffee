lightning = ->
	$('#container .lightning').fadeIn(250).fadeOut(250)
	setTimeout 'lightning()', 2000

$(document).ready ->
	lightning()
	headIndex = 0
	eyesIndex = 0
	noseIndex = 0
	mouthIndex = 0	

	$('#head').click ->
		if headIndex < 9
			$(this).animate {left: '-=367px'}, 500
			headIndex += 1
		else
			headIndex = 0
			$(this).animate {left: 0}, 500
		return	

	$('#eyes').click ->
		if eyesIndex < 9
			$(this).animate {left: '-=367px'}, 500
			eyesIndex += 1
		else
			eyesIndex = 0
			$(this).animate {left: 0}, 500
		return	

	$('#nose').click ->
		if noseIndex < 9
			$(this).animate {left: '-=367px'}, 500
			noseIndex += 1
		else
			noseIndex = 0
			$(this).animate {left: 0}, 500
		return

	$('#mouth').click ->
		if mouthIndex < 9
			$(this).animate {left: '-=367px'}, 500
			mouthIndex += 1
		else
			mouthIndex = 0
			$(this).animate {left: 0}, 500
		return	
	return