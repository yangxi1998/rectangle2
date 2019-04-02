$(function() {
  var $width=$('#width'),$height=$('#height'),$btnCal=$('#calcute'),$perimeter=$('#perimeter'),$area=$('#area'),$widthValidation=$('#width-validation'),$heightValidation=$('#height-validation');
  
  // $width.focusout(function(){
  //    var w=$width.val();

  //    if(w===''){//字段级校验
  //      $widthValidation.html('宽度不能为空！');
  //      $width.select();
  //      return;
  //    }else{
  //      $widthValidation.val('');
  //    }
  //    if(Number(w)<0){
  //      $widthValidation.val('宽度不能为负');
  //      $width.select();
  //      return;
  //    }else{
  //      $widthValidation.val('');
  //    }
  //    if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-])?\d+)?$/.test(w)){
  //       $widthValidation.val('宽度不是合法数字！');
  //       $width.select();
  //       return;
  //    }
  //  });

  $width.focusout(function(){
    var result=valid($width.val());//eslint-disable-line no-undef

    if(!result.isOk){
      $widthValidation.html('宽度'+result.reason);
    }else{
      $widthValidation.val('');
    }
  });
   
  //  $height.focusout(function(){
  //    var h=$height;

  //    if(h===''){
  //      $heightValidation.html('高度不能为空！');
  //      $height.select();
  //      return;
  //    }else{
  //      $heightValidation.val('');
  //    }
  //    if(Number(h)<0){
  //      $heightValidation.html('高度不能为负！');
  //      $height.select();
  //      return;
  //    }else{
  //      $heightValidation.val('');
  //    }

  //   if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-])?\d+)?$/.test(w)){
  //       $widthValidation.val('高度不是合法数字！');
  //        $width.select();
  //       return;
  //    }
  //  });
  //   });
  $height.focusout(function(){
    var result=valid($height.val());//eslint-disable-line no-undef

    if(!result.isOk){
      $heightValidation.html('高度'+result.reason);
    }else{
      $heightValidation.val('');
    }
  }); 
  $btnCal.click(function(){
    var w=Number($width.val()),
        h=Number($height.val());
    var validWidth=valid(w);//eslint-disable-line no-undef
    var validHeight=valid(h);//eslint-disable-line no-undef
    if(!validWidth.isOk){
      $widthValidation.html('宽度'+result.reason);//eslint-disable-line no-undef
    }else{
      $widthValidation.html('');
    }
    if(!validHeight.isOk){
      $heightValidation.html('宽度'+result.reason);//eslint-disable-line no-undef
    }else{
      $heightValidation.html('');
    }
  
    //    if(w===''){  //集中验证
    //    $widthValidation.html('宽度不能为空！');
    //     $width.select();
    //    return;
    //   }else{
    //    $widthValidation.val('');
    //  }
    //  if(h===''){
    //    $heightValidation.html('高度不能为空！');
    //    $width.select();
    //    return;
    //  }else{
    //    $heightValidation.val('');
    //  }
    //  if(Number(w)<0){
    //     $widthValidation.val('宽度不能为负');
    //    $width.select();
    //    return;
    //  }else{
    //    $widthValidation.val('');
    //  }
    //  if(Number(h)<0){
    //    $heightValidation.html('高度不能为负！');
    //    $height.select();
    //    return;
    //  }else{
    //    $heightValidation.val('');
    //  }


    //  if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-])?\d+)?$/.test(w)){
    //     $widthValidation.val('宽度不是合法数字！');
    //     $width.select();
    //     return;
    //  }
    //   if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-])?\d+)?$/.test(w)){
    //     $widthValidation.val('高度不是合法数字！');
    //     $width.select();
    //     return;
    //   }
    //  });
   
    //  });
  
    //});

    var r=new Rectangle(w,h);//eslint-disable-line no-undef
    $perimeter.val(r.perimeter());
    $area.val(r.area());
  });
});

