$(function () {

	console.log("I'm here and I'm loaded!")

	//#&& (controller.action_name == 'new' || controller.action_name == 'edit'
	UD_FIELDS = [
		{'boolean_1':'Boolean 1'},
		{'boolean_2':'Boolean 2'},
		{'boolean_3':'Boolean 3'},
		{'integer_1':'Integer 1'},
		{'integer_2':'Integer 2'}, 
		{'integer_3':'Integer 3'},
		{'real_1':'Real 1'},
		{'real_2':'Real 2'},
		{'real_3':'Real 3'},
		{'date_1':'Date 1'}, 
		{'date_2':'Date 2'},
		{'date_3':'Date 3'},
		{'string_1':'String 1'}, 
		{'string_2':'String 2'},
		{'string_3':'String 3'},
		{'string_4':'String 4'},
		{'text_1':'Text 1'},
		{'text_2':'Text 2'},
		{'text_3':'Text 3'},
		{'text_4':'Text 4'},
		{'text_5':'Text 5'},
		{'enum_1':'Controlled Value 1'},
		{'enum_2':'Controlled Value 2'},
		{'enum_3':'Controlled Value 3'},
		{'enum_4':'Controlled Value 4'}
	];
	
	ACCESSION_UDFS = [
		'boolean_1',
		'boolean_2',
		'text_1'
	];

	RESOURCE_UDFS = [
	  'string_1'
	];


	function hideUserDefinedFields(){
		console.log("You are attempting to hide the user defined fields.")
		for(i=0; i < UD_FIELDS.length; i++){
			$.each(UD_FIELDS[i], function(key, value){
				field_id = '#'+TYPE+'_user_defined__'+key+'_';

				if($(field_id).length > 0){

					var control_parent = $(field_id).parent().parent();
					control_parent = ( ($($(field_id).parent().parent().children('label')[0]).length > 0) ? control_parent : control_parent.parent() );

					var custom_udfs = ( (TYPE == 'accession') ? ACCESSION_UDFS : (TYPE=='resource') ? RESOURCE_UDFS : []);

					if( $($(control_parent).children('label')[0]).html() == value || custom_udfs.indexOf(key) == -1){
						$(control_parent).hide()	
					}
				}
			})
		}
	}

	if( $('#'+TYPE+'_user_defined_').children('div').children('ul').children().length > 0){
		hideUserDefinedFields();
	}

	$('.btn.btn-small.pull-right').mouseup(function(){
		console.log("You clicked a button")
		if($(this).html() == "Add User Defined Fields"){
			setTimeout(function(){
				hideUserDefinedFields();
			}, 100);
		}
	})
	
	



});