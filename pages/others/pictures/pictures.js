// pages/others/pictures/pictures.js
Page({
  data: {
    activePic: '/images/example0.png',
    activePic2: '/images/example0.png',
    activeIndex: 0,
    activeIndex2: 0,
    imgs: [
      {
        url: '/images/example0.png'
      },
      {
        url: '/images/example1.png'
      },
      {
        url: '/images/example2.png'
      },
      {
        url: '/images/example3.png'
      }
    ],
    imgs2: [
      {
        url: '/images/example0.png'
      },
      {
        url: '/images/example1.png'
      },
      {
        url: '/images/example2.png'
      },
      {
        url: '/images/example3.png'
      }
    ]
  },
  pre: function () {
    // 上一页
    var vm = this;
    if (vm.data.activeIndex > 0) {
      vm.animateOut();
      setTimeout(function () {
        vm.setData({
          activePic: vm.data.imgs[vm.data.activeIndex - 1].url,
          activeIndex: vm.data.activeIndex - 1
        });
        vm.animateIn();
      }, 500);
    }
  },
  next: function () {
    // 下一页
    var vm = this;
    if (vm.data.activeIndex < vm.data.imgs.length - 1) {
      vm.animateOut();
      setTimeout(function () {
        vm.setData({
          activePic: vm.data.imgs[vm.data.activeIndex + 1].url,
          activeIndex: vm.data.activeIndex + 1
        });
        vm.animateIn();
      }, 500);
    }
  },
  onShow: function () {
    this.setData({
      length: this.data.imgs.length
    });
  },
  animateIn: function () {
    // 图片显示动画
    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease',
    })
    this.animation = animation
    animation.scale(0, 0).rotate(360).step()
    this.setData({
      animationData: animation.export()
    })

    setTimeout(function () {
      animation.scale(1, 1).rotate(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 500)
  },
  animateOut: function () {
    // 图片隐藏动画
    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease',
    })

    this.animation = animation
    animation.scale(0, 0).rotate(360).step()
    this.setData({
      animationData: animation.export()
    });
  },
  pre2: function () {
    // 上一页
    var vm = this;
    if (vm.data.activeIndex2 > 0) {
      vm.animateOut2();
      setTimeout(function () {
        vm.setData({
          activePic2: vm.data.imgs2[vm.data.activeIndex2 - 1].url,
          activeIndex2: vm.data.activeIndex2 - 1
        });
        vm.animateIn2();
      }, 500);
    }
  },
  next2: function () {
    // 下一页
    var vm = this;
    if (vm.data.activeIndex2 < vm.data.imgs2.length - 1) {
      vm.animateOut2();
      setTimeout(function () {
        vm.setData({
          activePic2: vm.data.imgs2[vm.data.activeIndex2 + 1].url,
          activeIndex2: vm.data.activeIndex2 + 1
        });
        vm.animateIn2();
      }, 500);
    }
  },
  onShow2: function () {
    this.setData({
      length: this.data.imgs2.length
    });
  },
  animateIn2: function () {
    // 图片显示动画
    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease',
    })
    this.animation = animation
    animation.opacity(0).step()
    this.setData({
      animationData2: animation.export()
    })

    setTimeout(function () {
      animation.opacity(1).step()
      this.setData({
        animationData2: animation.export()
      })
    }.bind(this), 300)
  },
  animateOut2: function () {
    // 图片隐藏动画
    var animation = wx.createAnimation({
      duration: 300,
      timingFunction: 'ease',
    })

    this.animation = animation
    animation.opacity(0).step()
    this.setData({
      animationData2: animation.export()
    });
  },
})