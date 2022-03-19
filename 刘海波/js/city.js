$.ajax({
  url: "../city.json",
  dataType: "json",
  success: function (res) {
    console.log(res.data);
    res = res.data;
    //1. 先渲染热门城市 hotCities
    var str1 = "";
    $.each(res.hotCities, function (idx, val) {
      str1 += `<li>${val.name}</li>`;
    });
    $("#hot").html(str1); //渲染的DOM对象

    var str2 = "";
    var i = 0;
    $.each(res.cities, function (key, val) {
      //   字母排序 锚链接 a标签的href属性的值等于a链接的标签的id值
      $("#sort").append(`<li><a href="#${key}">${key}</a></li>`);

      //  字母列表城市项
      //1.添加大概结构和城市拼音开头字母
      $("#cityList").append(`
        <div id="${key}"></div>
        <h2>${key}</h2>
        <ul class="hotcity-list hotCity bet clearfix">
        </ul>`);
      // 2.具体城市项 (添加具体li内容,给bet下面的ul添加li的内容)
      $.each(val, (index, value) => {
        console.log(value.name);
        $(".bet").eq(i).append(`<li>${value.name}</li>`);
      });
      i++;
      //20-29行代码双重循环，先循环20-23行代码，然后循环26-29行代码给ul下面的li添加具体城市
    });
    // bs插件
    let besroll = document.getElementById("besroll");
    let bs = new BScroll(besroll, {
      click: true,
    });
  },
});
// 境内和境外城市的切换效果
$('.tab-list').click(function () {
  var idx = $(this).index()
  console.log(idx);
  $('.city-list').qe(idx).show().siblings
  ().hide()
  $(this).addClass('active').siblings().
  removeClass('active')
})
// 城市列表项
