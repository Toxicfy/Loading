var imgs = [
  "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502790366919&di=10c4e9a4b1e709521d9221442da09a30&imgtype=0&src=http%3A%2F%2Fimg.bimg.126.net%2Fphoto%2FoM_UO94T-HaQIQLuhdULSA%3D%3D%2F5774177672242663144.jpg",
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502790366917&di=75c1a6b13d3399e0a7130163ff28a555&imgtype=0&src=http%3A%2F%2Fimage.tianjimedia.com%2FuploadImages%2F2011%2F286%2FE27LF6AIAG2W.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502791298389&di=43f3475699d8d7a630591af1fe5fd7d8&imgtype=jpg&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F314e251f95cad1c80fefc1e6763e6709c83d519e.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502790366670&di=da416a832a33a9dde0b14877bafe69d9&imgtype=0&src=http%3A%2F%2Ftupian.enterdesk.com%2F2012%2F1029%2Fzyz%2F03%2F14583115_1350966109847.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502790366667&di=1bf3a6b1c5757ecf25bd75bcd7dcaa06&imgtype=0&src=http%3A%2F%2Fwww.wallcoo.com%2Fnature%2FSummer_Fantasy_Landscapes%2Fwallpapers%2F1680x1050%2FSummer_Fantasy_landscape_by_photo_manipulation_34467184.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502790366661&di=d255d9e8435546ca4e648fdf068d0148&imgtype=0&src=http%3A%2F%2Fimg.tuku.cn%2Ffile_big%2F201503%2Fd8905515d1c046aeba51025f0ea842f0.jpg'
];

var index = 0,
  len = imgs.length,
  count = 0,
  $progress = $('.loading b');
$.each(imgs, function (i, src) {
  var imgObj = new Image();
  $(imgObj).on('load error', function () {
    console.log(Math.round((count + 1) / len * 100) + '%');
    $progress.html(Math.round((count + 1) / len * 100) + '%');

    if (count >= len - 1) {
      $('.loading').hide();
    }
    count++;
  })
  imgObj.src = src;
  $('body').append(imgObj);
})