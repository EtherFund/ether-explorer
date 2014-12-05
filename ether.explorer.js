/*
- ether.explorer.js v0.1
- Ethereum Blockchain Explorer
- http://ether.fund/tool/explorer
- (c) 2014 J.R. Bédard (jrbedard.com)
*/


// Init
$(function() {
	
	// block loading spinner...
	$("#blockTable tbody").append("<tr><td id='loadingBlocks' style='text-align:center;' colspan=6><i class='fa fa-cog fa-spin fa-2x'></i> Loading...</td></tr>");
	
	getBlocks();
});


function getBlocks() {
	var args = {};
	args.start = 0;
	args.range = 10;
	
	// get blocks
	etherface.block('list', args, function(blocks) {
		// todo: stop animation;
		//console.log(blocks);
		updateBlockTable(blocks);
		
		$(".timeago").timeago();
		$(".tooltip").tooltip({});
	});
}


function updateBlockTable(blocks) {
	var table = $("#peerTable tbody");
	table.html("");

	console.log(blocks);
	if(!blocks){return;}

	$.each(blocks, function(b) {
		
		
	});
}


