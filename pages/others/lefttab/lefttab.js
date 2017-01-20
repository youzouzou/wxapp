// pages/others/lefttab/lefttab.js
Page({
  data: {
    activeIndex: 0,
    content: '菜單一',
    tabs: [
      {
        id: 1,
        tabName: '菜單一'
      }, {
        id: 2,
        tabName: '菜單二'
      }, {
        id: 3,
        tabName: '菜單三'
      }, {
        id: 4,
        tabName: '菜單四'
      }, {
        id: 5,
        tabName: '菜單五'
      }, {
        id: 6,
        tabName: '菜單六'
      }, {
        id: 7,
        tabName: '菜單七'
      }, {
        id: 8,
        tabName: '菜單八'
      }, {
        id: 9,
        tabName: '菜單九'
      }, {
        id: 1,
        tabName: '菜單一'
      }, {
        id: 2,
        tabName: '菜單二'
      }, {
        id: 3,
        tabName: '菜單三'
      }, {
        id: 4,
        tabName: '菜單四'
      }, {
        id: 5,
        tabName: '菜單五'
      }, {
        id: 6,
        tabName: '菜單六'
      }, {
        id: 7,
        tabName: '菜單七'
      }, {
        id: 8,
        tabName: '菜單八'
      }, {
        id: 9,
        tabName: '菜單九'
      }, {
        id: 1,
        tabName: '菜單一'
      }, {
        id: 2,
        tabName: '菜單二'
      }, {
        id: 3,
        tabName: '菜單三'
      }, {
        id: 4,
        tabName: '菜單四'
      }, {
        id: 5,
        tabName: '菜單五'
      }, {
        id: 6,
        tabName: '菜單六'
      }, {
        id: 7,
        tabName: '菜單七'
      }, {
        id: 8,
        tabName: '菜單八'
      }, {
        id: 9,
        tabName: '菜單九'
      }
    ],
    contentList: [
      { text: '菜单:' },
      { text: '菜单:' },
      { text: '菜单:' },
      { text: '菜单:' },
      { text: '菜单:' },
      { text: '菜单:' },
      { text: '菜单:' },
      { text: '菜单:' },
      { text: '菜单:' },
      { text: '菜单:' },
      { text: '菜单:' },
      { text: '菜单:' },
      { text: '菜单:' },
      { text: '菜单:' },
      { text: '菜单:' },
      { text: '菜单:' }      
    ]
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var vm = this;
    wx.getSystemInfo({
      success: (res) => {
        vm.setData({
          deviceWidth: res.windowWidth,
          deviceHeight: res.windowHeight
        });
      }
    });
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
  changeTab: function (e) {
    this.setData({
      activeIndex: e.currentTarget.dataset.index,
      content: e.currentTarget.dataset.name
    })
  },
  getMore: function () {
    this.setData({
      contentList: this.data.contentList.concat([
        { text: '菜单:' },
        { text: '菜单:' },
        { text: '菜单:' },
        { text: '菜单:' },
        { text: '菜单:' }
      ])
    });
  }
})