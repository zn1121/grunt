$(function(){
    var $width = $('#width'),
      $height = $('#height'),
      $btnCal = $('#calculate'),
      $perimeter = $('#perimeter'),
      $area = $('#area');
  console.log('asdasdasd');

  $btnCal.click(function(){
        var w = Number($width.val());
            var h = Number($height.val());

                var p = 2 * ( w + h );
                    var a = w * h;

                        $perimeter.val(p);
                            $area.val(a);

                                console.log(w);
                                    console.log(h);
                                        console.log(p);
                                            console.log(a);
                                              
  });

});
