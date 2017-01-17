import dataAPI from '../..//utils/utils.js'

Page({
  data: {
    provinceList: dataAPI.provinceList
  },
  setProvice: function (e) {
    var index = parseInt(e.currentTarget.dataset.index) ? parseInt(e.currentTarget.dataset.index) : 0;
    console.log('选择省', index, this.data.provinceList[index]);
    // 缓存选中的省
    wx.setStorageSync('province', this.data.provinceList[index]);
    wx.navigateTo({
      url: '../city_multi_page_city/city_multi_page_city',
      success: function (res) {
        // success
        console.log('成功跳转到城市列表');
      },
      fail: function () {
        // fail
        console.log('跳转到城市列表失败');
      },
      complete: function () {
        // complete
      }
    })
  }
})