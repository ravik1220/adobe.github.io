$(document).ready(function(){
	
	$.getJSON("https://api.myjson.com/bins/qzuzi", function(data){
		var fieldData = '';
		$.each(data, function(key, value){
			
			fieldData += '<div class="item '+value.name+' ">';
			fieldData += '<div class="col-sm-3">';
			fieldData += '<div class="content-block">';
			fieldData += '<ul>';
			fieldData += '<li data-position="6" id="image-wrapper"><img src="'+value.img_url+'"/></li>';
			fieldData += '<li data-position="2" class="ItemName">'+value.name+'</li>';
			fieldData += '<li data-position="3"><span class="priceValue">'+ "<i class='fa fa-inr'></i>"+ value.price+'</span><span class="linespace">'+ value.id +'</span><span class="priceDiscount">'+value.discount+ "% off" +'</span></li>';
			fieldData += '<li data-position="6"><button class="btn btn-primary cartbtn">Add to Cart</button></li>';
			fieldData += '</ul>';
			fieldData += '</div>';
			fieldData += '</div>';
			fieldData += '</div>';
		});
	 
		$('#fieldData').append(fieldData);
		$('#myBtnClose').css("display", "none");
		$("#myBtn").click(function(){
			$('#myBtnClose').css("display", "block");
			var str = $("#searchFiled").val();
			console.log(str);
			var mydata = data[0].name;
			var mydata1 = data[1].name;
			var mydata2 = data[2].name;
			var mydata3 = data[3].name;
			
			if(mydata == str) {
				$('.item').addClass('RRR');
				if($('.item').hasClass('Item1')){
					$('.Item1').addClass('PPP');
					$('.Item2').removeClass('PPP');
					$('.Item3').removeClass('PPP');
					$('.Item4').removeClass('PPP');
				}
			} else if(mydata1 == str) {
				$('.item').addClass('RRR');
				if($('.item').hasClass('Item2')){
					$('.Item1').removeClass('PPP');
					$('.Item3').removeClass('PPP');
					$('.Item4').removeClass('PPP');
					$('.Item2').addClass('PPP');
				}
			} else if(mydata2 == str) {
				$('.item').addClass('RRR');
				if($('.item').hasClass('Item3')){
					$('.Item1').removeClass('PPP');
					$('.Item2').removeClass('PPP');
					$('.Item4').removeClass('PPP');
					$('.Item3').addClass('PPP');
				}
			} else if(mydata3 == str) {
				$('.item').addClass('RRR');
				if($('.item').hasClass('Item4')){
					$('.Item1').removeClass('PPP');
					$('.Item2').removeClass('PPP');
					$('.Item3').removeClass('PPP');
					$('.Item4').addClass('PPP');
				}
			}
			
			else {
				$('.item').removeClass('RRR');
				
			}
		});
		$("#myBtnClose").click(function(){
			$('.item').removeClass('RRR');
			$("#searchFiled").val('');
		});



		$("#slider-data").click(function(){

			var dataList="";
			var valueofslider = $('.slider').val();
			var slider=parseInt(valueofslider);
			$("#pricedemo").html(slider);
			console.log(slider);
			$(".item").remove();

			$.each(data, function(key, value){

			if(value.price >= slider){
			
				dataList += '<div class="item '+value.name+' ">';
				dataList += '<div class="col-sm-3">';
				dataList += '<div class="content-block">';
				dataList += '<ul>';
				dataList += '<li data-position="6" id="image-wrapper"><img src="'+value.img_url+'"/></li>';
				dataList += '<li data-position="2" class="ItemName">'+value.name+'</li>';
				dataList += '<li data-position="3"><span class="priceValue">'+ "<i class='fa fa-inr'></i>"+ value.price+'</span><span 				class="linespace">'+ value.id +'</span><span class="priceDiscount">'+value.discount+ "% off" +'</span></li>';
				dataList += '</ul>';
				dataList += '</div>';
				dataList += '</div>';
				dataList += '</div>';
				 
				}
				
				
			});
			
			if(dataList =="" || dataList == null){
			$('#fieldData').html("<div>No data found</div>");
			} else {
				$('#fieldData').html(dataList);
			}

			

		});


		
		 
	});
	$( "#fieldData tr th button" ).click(function() {
		$( this ).toggleClass( "arrow-up" );
	});
	
	$('.cart_wrapper').css("display", "none")
		 
	$('.closeCart').click(function(){
		$('.cart_wrapper').css("display", "none")
	});
	$('.navbar-brand').click(function(){
		$('.cart_wrapper').css("display", "none")
	});
	$('.cart').click(function(){
		$('.cart_wrapper').css("display", "block")
	});
	$('#myModalFilter').click(function(){
		$('.slidecontainer').toggleClass("displayFilter");
		$('body').toggleClass("displayFilterbody");
	});
	$('#slider-dataClose').click(function(){
		$('body').removeClass("displayFilterbody");
		$('.slidecontainer').removeClass("displayFilter");
	});
	
	$('#slider-dataCloseSort').click(function(){
		$('body').removeClass("displayFilterbody");
		$('.sortoptions').removeClass("displaySoft");
	});
	
	$('#myModalSort').click(function(){
		$('.sortoptions').toggleClass("displaySoft");
		$('body').toggleClass("displayFilterbody");
	});
	
	$(".addCart").click(function() {
		alert('cart')
	});
	$(document).on("click",".cartbtn", function() {
        
		$(".item").removeClass("current");
		$(this).closest(".item").addClass("current");
		$(".current").clone().appendTo(".cart1");
		var itemvalue = parseInt($(".current .priceV").text());
		$('#priceItems').html(itemvalue);
		$('#successCart').css("display","block")
		setTimeout(function(){ 
		$('#successCart').css("display","none");
		var cartCount = $('.cart_wrapper .item').length;
		$('#cartCountValue').addClass('cartCountV');
		$('.cartCountV').html(cartCount);}, 1000);
		
		var Item1value = parseInt($(".cart_wrapper .cart1 .item:first-child .priceValue").text() || 0);
		var Item1Discount = parseInt($(".cart_wrapper .cart1 .item:first-child .priceDiscount").text() || 0);
		var Item1temp = Item1value * Item1Discount/100;
		var Item1Total = Item1value - Item1temp;
		
		var Item2value = parseInt($(".cart_wrapper .cart1 .item:nth-child(2) .priceValue").text() || 0);
		var Item2Discount = parseInt($(".cart_wrapper .cart1 .item:nth-child(2) .priceDiscount").text() || 0);
		var Item2temp = Item2value * Item2Discount/100;
		var  Item2Total = Item2value - Item2temp;

		var Item3value = parseInt($(".cart_wrapper .cart1 .item:nth-child(3) .priceValue").text() || 0);
		var Item3Discount = parseInt($(".cart_wrapper .cart1 .item:nth-child(3) .priceDiscount").text() || 0);
		var Item3temp = Item3value * Item3Discount/100;
		var  Item3Total = Item3value - Item3temp;

		var Item4value = parseInt($(".cart_wrapper .cart1 .item:nth-child(4) .priceValue").text() || 0);
		var Item4Discount = parseInt($(".cart_wrapper .cart1 .item:nth-child(4) .priceDiscount").text() || 0);
		var Item4temp = Item4value * Item4Discount/100;
		var  Item4Total = Item4value - Item4temp;

		var Item5value = parseInt($(".cart_wrapper .cart1 .item:nth-child(5) .priceValue").text() || 0);
		var Item5Discount = parseInt($(".cart_wrapper .cart1 .item:nth-child(5) .priceDiscount").text() || 0);
		var Item5temp = Item5value * Item5Discount/100;
		var  Item5Total = Item5value - Item5temp;

		var Item6value = parseInt($(".cart_wrapper .cart1 .item:nth-child(6) .priceValue").text() || 0);
		var Item6Discount = parseInt($(".cart_wrapper .cart1 .item:nth-child(6) .priceDiscount").text() || 0);
		var Item6temp = Item6value * Item6Discount/100;
		var  Item6Total = Item6value - Item6temp;


		var Item7value = parseInt($(".cart_wrapper .cart1 .item:nth-child(7) .priceValue").text() || 0);
		var Item7Discount = parseInt($(".cart_wrapper .cart1 .item:nth-child(7) .priceDiscount").text() || 0);
		var Item7temp = Item7value * Item7Discount/100;
		var  Item7Total = Item7value - Item7temp;


		var Item8value = parseInt($(".cart_wrapper .cart1 .item:nth-child(8) .priceValue").text() || 0);
		var Item8Discount = parseInt($(".cart_wrapper .cart1 .item:nth-child(8) .priceDiscount").text() || 0);
		var Item8temp = Item8value * Item5Discount/100;
		var  Item8Total = Item8value - Item5temp;

		
		
		var TotalItemDiscount = Item1Discount + Item2Discount + Item3Discount + Item4Discount + Item5Discount + Item6Discount + Item7Discount + Item8Discount; 
		var TotalItemValue = Item1value + Item2value + Item3value + Item4value + Item5value + Item6value + Item7value + Item8value ;
		var GrandTotal = Item1Total + Item2Total + Item3Total + Item4Total +Item5Total +Item6Total +Item7Total +Item8Total; 

		 
		  $("#priceItems").html(TotalItemValue);
		  $("#priceDiscountItems").html(TotalItemDiscount);
		  $("#priceDiscountTotal").html(GrandTotal);

	});
	 
	 
});
 