function affirmbtn(href){
		$("input").blur(function(){
			for(var i =0;i<$("input").length;i++){
				if(!$("input").eq(i).val()){
					break;
				}
				else{
					$("button").css("background-color","#007AFF")
					$("button").click(function(){
						location.href=href;
					})	
				}
			}
		})
}


