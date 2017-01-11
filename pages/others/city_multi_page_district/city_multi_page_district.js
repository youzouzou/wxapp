// pages/others/city_multi_page_city/city_multi_page_city.js
Page({
  data: {
    districtList: []
  },
  onShow: function () {
    // 页面显示
    this.setData({
      districtList: wx.getStorageSync('city').children
    })
  },
  setDistrict: function (e) {
    var vm = this;
    var index = parseInt(e.currentTarget.dataset.index) ? parseInt(e.currentTarget.dataset.index) : 0;
    console.log('选择区', wx.getStorageSync('province').label, wx.getStorageSync('city').label, vm.data.districtList[index].label);
    // 缓存选中的地址
    wx.setStorageSync('address', wx.getStorageSync('province').label, wx.getStorageSync('city').label, vm.data.districtList[index].label);
    wx.showToast({
      title: wx.getStorageSync('province').label + wx.getStorageSync('city').label + vm.data.districtList[index].label,
      icon: 'success',
      duration: 3000
    })
  }
})