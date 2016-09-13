
function Searchingone(){
	document.searchvalues.action = "outfriendssearch.do";
	document.searchvalues.submit();
}

function Subinform(val){
	alert(val+" : " + val["m_id"]);
	document.getElementById("testone").innerHTML=val["m_id"];
}

/* window.onload=function(){
	var t = "${choosekeyword.m_name}";
	//alert(t);
	
	document.getElementById("words").innerHTML='${choosekeyword.m_name}';
}
function dd(val){
	var t = val;
	
	if('${num}'=="2"){
		alert("${num}");
		document.getElementById("testone").innerHTML=val;
		//document.getElementById("test"+'${fsschfS.count }').innerHTML='${num}';
	}
} */
