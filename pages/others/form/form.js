// pages/others/form/form.js
Page({
  data: {
    count: 60,
    list: [
      { text: '这里填写内容' },
      { text: '这里填写内容' },
      { text: '这里填写内容' },
      { text: '这里填写内容' },
      { text: '这里填写内容' },
      { text: '这里填写内容' }
    ],
    list2: [
      { text: '这里填写内容2' },
      { text: '这里填写内容2' },
      { text: '这里填写内容2' },
      { text: '这里填写内容2' },
      { text: '这里填写内容2' },
      { text: '这里填写内容2' }
    ]
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
  savePhoneNumber: function (e) {
    console.log(e.detail.value)
    this.setData({
      phoneNumber: e.detail.value
    });
  },
  getValidCode: function () {
    if (this.data.phoneNumber && this.data.count == 60) {
      this.tick()
    } else if (!this.data.phoneNumber) {
      wx.showToast({
        title: '请填写电话号码',
        icon: 'loading',
        duration: 1000
      })
    }
  },
  tick: function () {
    var vm = this
    if (vm.data.count > 0) {
      vm.setData({
        count: vm.data.count - 1
      });
      setTimeout(function () {
        return vm.tick()
      }, 1000)
    } else {
      vm.setData({
        count: 60
      });
    }
  },
  delete: function (e) {
    console.log('删除', e);
    var index = e.currentTarget.dataset.index;
    this.data.list[index].scrollLeft = 0;
    this.data.list.splice(index, 1);
    this.setData({
      list: this.data.list
    });
  },
  delete2: function (e) {
    console.log('删除', e);
    var index = e.currentTarget.dataset.index;
    this.data.list2[index].scrollLeft = 0;
    this.data.list2.splice(index, 1);
    this.setData({
      list2: this.data.list2
    });
  },
  cancel: function (e) {
    console.log('取消', e);
    var index = e.currentTarget.dataset.index;
    this.data.list[index].scrollLeft = 0;
    this.setData({
      list: this.data.list
    });
  }
})