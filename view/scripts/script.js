// employee-id-input
$("#number_btn li").click(function(){
	var $number    = $(this).data("number"),
		$input     = $("#employee"),
		$input_val = $input.val(),
		$maxlength = $input.prop("maxlength");

	switch($number){
		case 11:
			$input.val("");
			break;
		case 12:
			event.preventDefault();
			alert("script.js > case12")
			break;
		default:
			if($input_val.length < $maxlength){
				$input.val($input_val + $number);
			}
			break;
	}
});

// search table text
$('#search_box').keyup(function() {
	var searchText;
		searchText = $('#search_box').val();
		console.log(searchText.length);
	if(searchText.length > 0){
		showResults(searchText);
	} else {
		$('tbody tr').show();
	}
});

var showResults = function(searchText) {
	$('#search_cont tbody tr').hide();
	$('#search_cont tbody tr:Contains(' + searchText + ')').show();
};

// tr view-type toggle
$("#btn-view-type button").click(function(){
	var $this      = $(this),
		$view_type = $this.data("btn-type");

	$this.toggleClass("btn_default");
	$('#search_cont tbody tr[data-view-type="' + $view_type + '"]').toggleClass("hidden");
});