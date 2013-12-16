$(document).ready(function() {
		
	$('#MainContent').load('home.html');	
	
	$('#MenuBar a').click(function(){
		
		var toLoad = $(this).attr('href') + '#MainContent';		
		$('#MainContent').hide('slow', loadContent);
		
		function showNewContent() {
			$('#MainContent').show('normal');
		}
		
		function loadContent(){
			$('#MainContent').load(toLoad, '', showNewContent);
		}
		
		return false;
		
	});
	
});