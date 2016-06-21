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
		default:
			if($input_val.length < $maxlength){
				$input.val($input_val + $number);
			}
			break;
	}
});