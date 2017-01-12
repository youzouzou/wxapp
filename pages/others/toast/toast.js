// pages/others/toast/toast.js
Page({
  data: {
    toastModalStatus: false,//弹框
    toastColor: '',// 图标背景颜色
    toastFontColor: ''// 图标颜色
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  showToast: function () {
    var vm = this;
    vm.data.count = parseInt(vm.data.count) ? parseInt(vm.data.count) : 3000;
    vm.data.toastColor = vm.data.toastColor ? vm.data.toastColor : '#f6a623';
    vm.data.toastFontColor = vm.data.toastFontColor ? vm.data.toastFontColor : '#fff';
    vm.setData({
      toastModalStatus: true,
      toastColor: vm.data.toastColor,
      toastFontColor: vm.data.toastFontColor
    });
    setTimeout(function () {
      vm.setData({
        toastModalStatus: false,
        toastColor: '',
        toastFontColor: ''
      });
    }, vm.data.count);
  },
  warning: function () {
    this.setData({
      count: 1500,
      toastType: '警告！',
      toastText: '您的智商余额已不足！请及时充值！'
    });
    this.showToast();
  },
  danger: function () {
    this.setData({
      count: 1500,
      toastType: '危险！',
      toastText: '什么鬼什么鬼什么鬼',
      toastColor: '#ff0000',
      toastFontColor: '#fff'
    });
    this.showToast();
  }
})