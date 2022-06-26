<!-- jQuery -->
<script src="../js/jquery.js"></script>

<!-- Bootstrap Core JavaScript -->
<script src="../js/bootstrap.min.js"></script>

<!--dataTables-->
<script src="https://cdn.datatables.net/1.10.10/js/jquery.dataTables.min.js"></script>

/* Formatting function for row details */
function format ( d ) {
    // `d` is the original data object for the row
    return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+
        '<tr>'+
            '<td>Year:</td>'+
            '<td>'+d.year+'</td>'+
        '</tr>'+
		'<tr>'+
            '<td>Format:</td>'+
            '<td>'+d.format+'</td>'+
        '</tr>'+
		'<tr>'+
            '<td>Summary Report:</td>'+
            '<td>'+'<a class="report" href = "' + d.reportURL  + '" onclick="ga(\'send\', \'event\', \'Summaries\', \'Download Summary\', \'' + d.dataset + '\');">' + d.reportFormat + '</a>' + " " + d.reportInfo + '</td>'+
        '</tr>'+
        '<tr>'+
            '<td>Dataset:</td>'+
        '<td>' + '<a class="dataset" href = "' + d.url + '" onclick="ga(\'send\', \'event\', \'Datasets\', \'Download Dataset\', \'' + d.dataset + '\');">' + d.download + '</a>' + '</td>'+
        '</tr>'+
        '<tr>'+
            '<td class="row-align">Description:</td>'+ 
            '<td class="row-align">'+d.description+'</td>'+
        '</tr>'+
    '</table>';
}
 
$(document).ready(function() {
    var table = $('#covdata').DataTable( {
	    
		responsive: true,
        "ajax": "objects.js",
        "columns": [
            {
             "className":      'details-control',
             "orderable":      false,
             "data":           null,
             "defaultContent": ''
            },
            { "data": "dataset" },
            { "data": "division" },
			{ "data": "year"},
			{ "data": "format", "visible" : false }         
        ],
		
		 "order":[[2, 'asc'], [1, 'asc'], [3, 'desc']], 
		
		"language": {
            "lengthMenu": "Display _MENU_ files per page",
            "zeroRecords": "Nothing found matching the selection - sorry",
            "info": "Showing  _START_-_END_  of _TOTAL_ files",
            "infoEmpty": "No files available",
            "infoFiltered": "(filtered from _MAX_ total files)"		
        },		
    } );
	
	//Add event listeners for filtering
     //$('#type-dropdown').on('change', function () {
                   // table.columns(2).search( this.value ).draw();
                //} ); 
	//Filtering on a hidden column here
	$('#format-dropdown').on('change', function () {
                    table.columns(4).search( this.value ).draw();				
                } );			
	//$('#department-dropdown').on('change', function () {
                   // table.columns(3).search( this.value ).draw();
               // } );
	$('#division-dropdown').on('change', function () {
                    table.columns(2).search( this.value ).draw();
                } );			
    $('#year-dropdown').on('change', function () {
                    table.columns(3).search( this.value ).draw();
                } );       
				
    // Add event listener for opening and closing row details
    $('#covdata tbody').on('click', 'td.details-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row( tr );
 
        if ( row.child.isShown() ) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        }
        else {
            // Open this row
            row.child( format(row.data()) ).show();
            tr.addClass('shown');
        }
    } );
});
