$(function() {
  console.log('hello');
  var $width=$('#width'),$height=$("#height"),$btnCal=$('#calcute'),$perimeter=$('#perimeter'),$area=$('#area');
  $btnCal.click(function(){
    var w=Number($width.val()),
       h=Number($height.val());
  var p=2*(w+h),
    a=w*h;
    console.log(p,a);
    $perimeter.val(p);
    $area.val(a);
  })
})
