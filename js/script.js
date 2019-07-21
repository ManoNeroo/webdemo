$(document).ready(function(){
	$('.swiper-wrapper>li,.menu-subbig').mouseover(function(){
		var index= $(this).attr('index');
		$('.menu-subbig').eq(index).attr('style','opacity:1;visibility:visible;-moz-transition:.3s ease-in;-o-transition:.3s ease-in;-webkit-transition:.3s ease-in;-ms-transition:.3s ease-in;transition:.3s ease-in;-moz-transform:translateY(-19px);-o-transform:translateY(-19px);-ms-transform:translateY(-19px);-webkit-transform:translateY(-19px);transform:translateY(-19px)');
	})
	$('.swiper-wrapper>li,.menu-subbig').mouseout(function(){
		$('.menu-subbig').attr('style','opacity:0;visibility:hidden');
	})
	$('.mb-mnopen').click(function(){
		$('.mb-mn').addClass('active');
		$('.overlay').show();
		$('body').css("overflow","hidden");
	})
	$('.mb-mniccl').click(function(){
		$('.mb-mn').removeClass('active');
		$('.overlay').hide();
		$('body').css("overflow","visible");
	})
	$('.overlay').click(function(){
		$(this).hide();
		$('.mb-mn').removeClass('active');
		$('body').css("overflow","visible");
	})
	$('#view-more1').click(function(){
		$('.pro-collage:first').css('max-height','inherit');
		$(this).hide();
		$('#view-all1').show();
	});
	$('#view-more2').click(function(){
		$('.pro-collage:last').css('max-height','inherit');
		$(this).hide();
		$('#view-all2').show();
	});
	$(".txtthuonghieu").keyup(function(){
		var t=$(this).val();
		if(t=="")return $("ul.listfilter[data-query='hang-san-xuat'] li").show(),!1;$("ul.listfilter[data-query='hang-san-xuat'] li").hide();
		$("ul.listfilter[data-query='hang-san-xuat'] li").each(function(){
			$(this).attr("data-search").indexOf(t)>=0&&$(this).show();
		});
	});
	$('.readmore').on('click',function(){
		$('.area_article').addClass('active');
		$(this).hide();
	})
	
	var gl_prevScore=0;
	$('.lStar i').click(function(){
		var n,t;
		$(".ipt").removeClass("hide");
		$('.lStar i').removeClass('icmst');
		$('.lStar i').addClass('icmst0');
		n= $(this).attr('id');
		n= parseInt(n.replace("s",""));
		for(t=1 ; t<=n; t++){
			$('.lStar #s'+t).removeClass('icmst0').addClass('icmst');
		}
		$(this).attr("id")=="s1"?$(".rsStar").html("Không thích"):$(this).attr("id")=="s2"?$(".rsStar").html("Tạm được"):$(this).attr("id")=="s3"?$(".rsStar").html("Bình thường"):$(this).attr("id")=="s4"?$(".rsStar").html("Rất tốt"):$(this).attr("id")=="s5"&&$(".rsStar").html("Tuyệt vời"),
		gl_prevScore=n;
	})
	$(".lStar i").hover(function(){
		var n,t;
		$(".lStar i").removeClass("icmst").addClass("icmst0");
		$(this).attr("id")=="s1"?$(".rsStar").html("Không thích"):$(this).attr("id")=="s2"?$(".rsStar").html("Tạm được"):$(this).attr("id")=="s3"?$(".rsStar").html("Bình thường"):$(this).attr("id")=="s4"?$(".rsStar").html("Rất tốt"):$(this).attr("id")=="s5"&&$(".rsStar").html("Tuyệt vời"),
            $(".rsStar").removeClass("hide"),
		n=$(this).attr("id");
		n=parseInt(n.replace("s",""))
		for(t=1;t<=n;t++){
			$("#s"+t).removeClass("icmst0").addClass("icmst");
		}
	})
	$(".lStar").hover(function(){},function(){
		if(gl_prevScore==0){
			$(".lStar i").removeClass("icmst").addClass("icmst0");
			$(".rsStar").addClass("hide");
		}else if(gl_prevScore>0){
			$("#s"+gl_prevScore).click();
		}
	});
});