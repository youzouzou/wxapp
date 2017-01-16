// pages/others/pictures/pictures.js
Page({
  data: {
    activePic: '/images/example0.png',
    activeIndex: 0,
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
    ]
  },
  onShow: function () {
    this.setData({
      length: this.data.imgs.length,
      imgs2: this.data.imgs,
      imgs3: this.data.imgs,
      imgs4: this.data.imgs,
      imgs5: this.data.imgs,
      activePic2: this.data.activePic,
      activePic3: this.data.activePic,
      activePic4: this.data.activePic,
      activePic5: this.data.activePic,
      activeIndex2: this.data.activeIndex,
      activeIndex3: this.data.activeIndex,
      activeIndex4: this.data.activeIndex,
      activeIndex5: this.data.activeIndex,
    });
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
  pre3: function () {
    // 上一页
    var vm = this;
    if (vm.data.activeIndex3 > 0) {
      vm.animateOut3();
      setTimeout(function () {
        vm.setData({
          activePic3: vm.data.imgs3[vm.data.activeIndex3 - 1].url,
          activeIndex3: vm.data.activeIndex3 - 1
        });
        vm.animateIn3();
      }, 500);
    }
  },
  next3: function () {
    // 下一页
    var vm = this;
    if (vm.data.activeIndex3 < vm.data.imgs3.length - 1) {
      vm.animateOut3();
      setTimeout(function () {
        vm.setData({
          activePic3: vm.data.imgs3[vm.data.activeIndex3 + 1].url,
          activeIndex3: vm.data.activeIndex3 + 1
        });
        vm.animateIn3();
      }, 500);
    }
  },
  animateIn3: function () {
    // 图片显示动画
    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease',
    })
    this.animation = animation
    animation.translateX(400).step()
    this.setData({
      animationData3: animation.export()
    })

    setTimeout(function () {
      animation.translateX(0).step()
      this.setData({
        animationData3: animation.export()
      })
    }.bind(this), 300)
  },
  animateOut3: function () {
    // 图片隐藏动画
    var animation = wx.createAnimation({
      duration: 300,
      timingFunction: 'ease',
    })

    this.animation = animation
    animation.translateX(400).step()
    this.setData({
      animationData3: animation.export()
    });
  },
  pre4: function () {
    // 上一页
    var vm = this;
    if (vm.data.activeIndex4 > 0) {
      vm.animateOut4();
      setTimeout(function () {
        vm.setData({
          activePic4: vm.data.imgs4[vm.data.activeIndex4 - 1].url,
          activeIndex4: vm.data.activeIndex4 - 1
        });
        vm.animateIn4();
      }, 500);
    }
  },
  next4: function () {
    // 下一页
    var vm = this;
    if (vm.data.activeIndex4 < vm.data.imgs4.length - 1) {
      vm.animateOut4();
      setTimeout(function () {
        vm.setData({
          activePic4: vm.data.imgs4[vm.data.activeIndex4 + 1].url,
          activeIndex4: vm.data.activeIndex4 + 1
        });
        vm.animateIn4();
      }, 500);
    }
  },
  animateIn4: function () {
    // 图片显示动画
    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease',
    })
    this.animation = animation
    animation.rotateY(90).step()
    this.setData({
      animationData4: animation.export()
    })

    setTimeout(function () {
      animation.rotateY(0).step()
      this.setData({
        animationData4: animation.export()
      })
    }.bind(this), 300)
  },
  animateOut4: function () {
    // 图片隐藏动画
    var animation = wx.createAnimation({
      duration: 300,
      timingFunction: 'ease',
    })

    this.animation = animation
    animation.rotateY(90).step()
    this.setData({
      animationData4: animation.export()
    });
  },
  pre5: function () {
    // 上一页
    var vm = this;
    if (vm.data.activeIndex5 > 0) {
      vm.animateOut5();
      setTimeout(function () {
        vm.setData({
          activePic5: vm.data.imgs5[vm.data.activeIndex5 - 1].url,
          activeIndex5: vm.data.activeIndex5 - 1
        });
        vm.animateIn5();
      }, 100);
    }
  },
  next5: function () {
    // 下一页
    var vm = this;
    if (vm.data.activeIndex5 < vm.data.imgs5.length - 1) {
      vm.animateOut5();
      setTimeout(function () {
        vm.setData({
          activePic5: vm.data.imgs5[vm.data.activeIndex5 + 1].url,
          activeIndex5: vm.data.activeIndex5 + 1
        });
        vm.animateIn5();
      }, 100);
    }
  },
  animateIn5: function () {
    // 图片显示动画
    var animation = wx.createAnimation({
      duration: 250,
      timingFunction: 'ease',
    })
    this.animation = animation
    animation.scale(2, 0.8).step()
    this.setData({
      animationData5: animation.export()
    })
    setTimeout(function () {
      animation.scale(0.8, 1).step()
      this.setData({
        animationData5: animation.export()
      })
    }.bind(this), 100)

    setTimeout(function () {
      animation.scale(1, 0.8).step()
      this.setData({
        animationData5: animation.export()
      })
    }.bind(this), 350)

    setTimeout(function () {
      animation.scale(1, 1).step()
      this.setData({
        animationData5: animation.export()
      })
    }.bind(this), 350)
  },
  animateOut5: function () {
    // 图片隐藏动画
    var animation = wx.createAnimation({
      duration: 100,
      timingFunction: 'ease',
    })

    this.animation = animation
    animation.scale(0, 0).step()
    this.setData({
      animationData5: animation.export()
    });
  },
})