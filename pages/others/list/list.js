// pages/others/list/list.js
Page({
  data: {
    list: [
      { text: '这里填写内容' },
      { text: '这里填写内容' },
      { text: '这里填写内容' },
      { text: '这里填写内容' },
      { text: '这里填写内容' },
      { text: '这里填写内容' }
    ],
    allStatus: false
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
  check: function (e) {
    var index = e.currentTarget.dataset.index;
    this.data.list[index].selectStatus = true;
    this.setData({
      list: this.data.list
    });
  },
  uncheck: function (e) {
    var index = e.currentTarget.dataset.index;
    this.data.list[index].selectStatus = false;
    this.setData({
      list: this.data.list
    });
  },
  selectAll: function () {
    var vm = this;
    var list = vm.data.list;
    for (var i = 0; i < list.length; i++) {
      if (!list[i].selectStatus) {
        vm.setData({
          allStatus: true
        });
        break;
      }
    }
    if (i >= list.length) {
      vm.setData({
        allStatus: false
      });
    }

    for (var i = 0; i < list.length; i++) {
      list[i].selectStatus = vm.data.allStatus;
    }

    vm.setData({
      list: list
    });

  }
})