$(document).ready(function() {
	chrome.tabs.getSelected(null, function(tab) {	
	
		chrome.tabs.sendMessage(tab.id, {found: "ads"}, function(response) {		
			if(response.found=='ad') {
				window.found_ad = true;	
			}
			else {
				window.found_ad = false;					
			}
  		});
	});
	
	if(localStorage["type"] ) {
		$('#'+localStorage["type"]).addClass('selected');
	}
	else {
		$.get( "http://babyanimalblocker.com/image.php?get_type=true", function( data ) {
	 		$('#'+data).addClass('selected');
			localStorage["type"] = data;
			
		});
	}
	/*
	$('#dog').click(function() {
		$("#set").append("<img src='http://babyanimalblocker.com/image.php?&width=1&height=1&set_type=dog'>");		
		localStorage["type"] = 'dog';
		$('#dog').addClass('selected');
		$('#cat').removeClass('selected');
		
		reload_current_tab();	
		
	});*/
	$('#cat').click(function() {
		$("#set").append("<img src='http://babyanimalblocker.com/image.php?&width=1&height=1&set_type=cat'>");
		localStorage["type"] = 'cat';
		$('#cat').addClass('selected');
		$('#dog').removeClass('selected');
		reload_current_tab();
		
	});
	
	
	
});

function reload_current_tab() {

	chrome.tabs.getSelected(null, function(tab) {	
			
		 	if(window.found_ad) {
				var code = 'window.location.reload();';
				chrome.tabs.executeScript(tab.id, {code: code});
				
			}
		});
}	
