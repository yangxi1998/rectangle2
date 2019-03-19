$(function() {
  var $width=$('#width'),$height=$('#height'),$btnCal=$('#calcute'),$perimeter=$('#perimeter'),$area=$('#area');
  $btnCal.click(function(){
    var w=Number($width.val()),
        h=Number($height.val());
   /* var p=2*(w+h),
        a=w*h;*/
    var r=new Rectangle(w,h); 
    $perimeter.val(r.perimeter());
    $area.val(r.area());
  });
});
