// pages/others/xscroll_top_bar/xscroll_top_bar.js
Page({
  data: {
    activeIndex: 0,
    menus: [
      {
        'menuId': 1,
        'menu': '菜单'
      },
      {
        'menuId': 1,
        'menu': '菜单'
      },
      {
        'menuId': 1,
        'menu': '菜单'
      },
      {
        'menuId': 1,
        'menu': '菜单'
      },
      {
        'menuId': 1,
        'menu': '菜单'
      }
    ]
  },

  onShow: function () {
    // 页面显示
    var span = wx.getSystemInfoSync().windowWidth / this.data.menus.length + 'px';
    this.setData({
      itemWidth: this.data.menus.length <= 5 ? span : '160rpx'
    });
  },
  tabChange: function (e) {
    var index = e.currentTarget.dataset.index;
    this.setData({
      activeIndex: index
    });
  }
})