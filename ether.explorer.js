/*
- ether.explorer.js v0.1
- Ethereum Blockchain Explorer
- http://ether.fund/explorer
- (c) 2014 J.R. Bédard (jrbedard.com)
*/

// Init
$(function() {
  
});


function getBlocks() {
  // block loading spinner...
  $("#blockTable tbody").append("<tr><td id='loadingBlocks' style='text-align:center;' colspan=6><i class='fa fa-cog fa-spin fa-2x'></i> Loading...</td></tr>");
  
  var args = {start:0, range:10};
  args.start = 0;
  args.range = 10;
  
  // list blocks
  etherface.block('list', args, function(blocks) {
    // todo: stop animation;
    //console.log(blocks);
    updateBlockTable(blocks);
    
    $(".timeago").timeago();
    $(".tooltip").tooltip({});
  });
}

function getBlock() {
  var args = {};
  
  // get block
  etherface.block('get', args, function(block) {
    updateBlockPage(block);
    
    $(".timeago").timeago();
    $(".tooltip").tooltip({});
  });
}



function updateBlockTable(blocks) {
  var table = $("#blockTable tbody");
  table.html("");

  console.log(blocks);
  if(!blocks){ return; }

  $.each(blocks, function(b) {
    var block = blocks[b];
    //console.log(block);
    
    var line = "<tr>";
    
    line += "<td><a href='/block/"+block.index+"'>"+block.index+"</a></td>";
    
    line += "<td><abbr class='timeago' title='"+block.timestamp+"'>"+block.timestamp+'</abbr></td>';
    
    line += "<td>"+block.transactions+"</td>";
    
    line += "<td>"+block.gasUsed+"</td>";
    
    line += "<td></td>";
    
    line += "<td></td>";
    
    line += '</tr>';
    table.append(line);
  });
}


function updateBlockPage(block) {
  var table = $("#blockTable tbody");
  console.log(block);
  if(!block){ return; }
  
  table.find("#index").html(block.index);
  
  table.find("#hash").html(block.hash);
  
  table.find("#prevHash").html(block.prevHash);
  
  table.find("#nextHash").html(block.nextHash);
  
  table.find("#transactions").html(block.transactions);
  
  table.find("#unclesHash").html(block.unclesHash);
  
  table.find("#nonce").html(block.nonce);
  
  table.find("#txTreeRoot").html(block.txTreeRoot);
  
  table.find("#timestamp").html(block.timestamp);
  
  table.find("#gasLimit").html(block.gasLimit);
  
  table.find("#gasUsed").html(block.gasUsed);
  
  table.find("#miner").html("<a href='/acc/"+block.minter+"'>"+block.minter+"</a>");
  
  table.find("#difficulty").html(block.difficulty);
  
  table.find("#extraData").html(block.extraData);
  
  
  $("#blockBloomFilter").text(block.bloomFilter);
  
  $("#blockRaw").text(block.raw);
}


function getAccount() {
  
}





