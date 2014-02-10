$(document).ready(function() {

		$(function(){
			$("#D2Content").accordion({heightStyle: "content", collapsible: true, active: false});
		});
		
		$('#ReportBtns a').click(function(){
		
			var link = $(this).attr('href');
			
			var toLoad = "<object class='PDFDoc' type='application/pdf' data='" + link + "'></object>";
			
			$('#ReportContentDiv').html(toLoad);
			
			return false;
		
		});
		
});	