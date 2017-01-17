import dataAPI from '../..//utils/utils.js'

Page({
  data: {
    provinceList: dataAPI.provinceList,
    provinceShowStatus: true,
    cityShowStatus: false,
    districtShowStatus: false,
    cityList: [],
    districtList: []
  },
  setProvice: function (e) {
    var index = parseInt(e.currentTarget.dataset.index) ? parseInt(e.currentTarget.dataset.index) : 0;
    console.log('选择省', index, this.data.provinceList[index]);
    wx.setStorageSync('addressProvice', this.data.provinceList[index])
    this.setData({
      provinceShowStatus: false,
      cityShowStatus: true,
      districtShowStatus: false,
      cityList: this.data.provinceList[index].children
    });
  },
  setCity: function (e) {
    var index = parseInt(e.currentTarget.dataset.index) ? parseInt(e.currentTarget.dataset.index) : 0;
    console.log('选择市', index, this.data.cityList[index]);
    wx.setStorageSync('addressCity', this.data.cityList[index])
    this.setData({
      provinceShowStatus: false,
      cityShowStatus: false,
      districtShowStatus: true,
      districtList: this.data.cityList[index].children
    });
  },
  setDistrict: function (e) {
    var index = parseInt(e.currentTarget.dataset.index) ? parseInt(e.currentTarget.dataset.index) : 0;
    console.log('选择区', index, this.data.districtList[index]);
    wx.setStorageSync('addressDistrict', this.data.districtList[index])
    var addressDetail = {};
    console.log('修改前缓存地址省市区', addressDetail);
    addressDetail.province = wx.getStorageSync('addressProvice').label;
    addressDetail.city = wx.getStorageSync('addressCity').label;
    addressDetail.district = wx.getStorageSync('addressDistrict').label;
    console.log('修改后缓存地址省市区', addressDetail);
    wx.setStorageSync('address', addressDetail);
    this.setData({
      provinceShowStatus: false,
      cityShowStatus: false,
      districtShowStatus: true
    });
    wx.showToast({
      title: addressDetail.province + addressDetail.city + addressDetail.district,
      icon: 'success',
      duration: 3000
    })
  }
})