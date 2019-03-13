$(function(){
    var $width = $('#width'),
      $height = $('#height'),
      $btnCal = $('#calculate'),
      $perimeter = $('#perimeter'),
      $area = $('#area');
  console.log('asdasdasd');

  $btnCal.click(function(){
        var w = $width.val();
            var h = $height.val();

                var p = 2 * ( w + h );
                    var a = w * h;
                        var r = new Rectangle(w,h);

                            $perimeter.val(p);
                                $area.val(a);
                                    $perimeter.val(r.perimeter());
                                            $area.val(r.area());

                                                console.log(w);
                                                    console.log(h);
                                                        console.log(p);
                                                            console.log(a);
                                                              
  });

});
