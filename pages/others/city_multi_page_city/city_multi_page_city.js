// pages/others/city_multi_page_city/city_multi_page_city.js
Page({
  data: {
    cityList: []
  },
  onShow: function () {
    // 页面显示
    this.setData({
      cityList: wx.getStorageSync('province').children
    })
  },
  setCity: function (e) {
    var index = parseInt(e.currentTarget.dataset.index) ? parseInt(e.currentTarget.dataset.index) : 0;
    console.log('选择市', index, this.data.cityList[index]);
    // 缓存选中的市
    wx.setStorageSync('city', this.data.cityList[index]);
    wx.navigateTo({
      url: '../city_multi_page_district/city_multi_page_district',
      success: function (res) {
        // success
        console.log('成功跳转到区列表');
      },
      fail: function () {
        // fail
        console.log('跳转到区列表失败');
      },
      complete: function () {
        // complete
      }
    })
  }
})