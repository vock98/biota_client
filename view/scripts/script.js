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


//  upload_finger_image
function input_finger( target_obj ){
	$(target_obj).trigger("click");
};

$("#input_finger_1").click(function(){
	input_finger("#input_finger_file_1");
});
$("#input_finger_2").click(function(){
	input_finger("#input_finger_file_2");
});
$("#input_finger_3").click(function(){
	input_finger("#input_finger_file_3");
});