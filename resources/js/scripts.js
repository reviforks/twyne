$(function() {
	
	$('#openid_identifier').focus();

	function split(val) {
		return val.split(/,\s*/);
	}
	
	function extractLast(term) {
		return split(term).pop();
	}
	
	$("#tags").autocomplete({
		minLength: 0,
		source: function(request, response) {
			// delegate back to autocomplete, but extract the last term
			response($.ui.autocomplete.filter(tags, extractLast(request.term)));
		},
		focus: function() {
			// prevent value inserted on focus
			return false;
		},
		select: function(event, ui) {
			var terms = split( this.value );
			// remove the current input
			terms.pop();
			// add the selected item
			terms.push( ui.item.value );
			// add placeholder to get the comma-and-space at the end
			terms.push("");
			this.value = terms.join(", ");
			return false;
		}
	});
	
});
