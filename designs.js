function makeGrid() {
	
	// Select size input
	
	var canvas, cells, Height, Width, Rows;
	
	canvas = $('#pixelCanvas');
	Height = $('#inputHeight').val();
	Width = $('#inputWeight').val();
	
	canvas.children().remove();
	
	for (x = 0; x < Height; x++) {
		canvas.append('<tr></tr>');
	}
	
	Rows = $('tr');
	
	for (y = 0; y < Width; y++) {
		Rows.append('<td></td>');
	} 
	
	cell = canvas.find('td');
	
	
	cell.click(function(e) {
		e.preventDefault();
	
		var color;
		color = $("#colorPicker").val();
		$(this).attr('bgcolor', color);
	});
	
}


// When size is submitted by the user, call makeGrid()
var submitQuery;

submitQuery = $('input[type="submit"]')

submitQuery.click(function(event) {
  event.preventDefault();
  makeGrid();
});

