// pages/others/drawer/drawer.js
Page({
  // showModal: function () {
  //   // 显示遮罩层
  //   var animation = wx.createAnimation({
  //     duration: 200,
  //     timingFunction: "linear",
  //     delay: 0
  //   })
  //   this.animation = animation
  //   animation.translateY(300).step()
  //   this.setData({
  //     animationData: animation.export(),
  //     showModalStatus: true
  //   })
  //   setTimeout(function () {
  //     animation.translateY(0).step()
  //     this.setData({
  //       animationData: animation
  //     })
  //   }.bind(this), 200)
  // },
  // hideModal: function () {
  //   // 隐藏遮罩层
  //   var animation = wx.createAnimation({
  //     duration: 200,
  //     timingFunction: "linear",
  //     delay: 0
  //   })
  //   this.animation = animation
  //   animation.translateY(300).step()
  //   this.setData({
  //     animationData: animation.export(),
  //   })
  //   setTimeout(function () {
  //     animation.translateY(0).step()
  //     this.setData({
  //       animationData: animation.export(),
  //       showModalStatus: false
  //     })
  //   }.bind(this), 200)
  // },
  // showModal和hideModal函数可以合并为一个函数，需要在组件中设置状态值
  setModalStatus: function (e) {
    console.log("设置显示状态，1显示0不显示", e.currentTarget.dataset.status);
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export()
    })
    if (e.currentTarget.dataset.status == 1) {
      this.setData(
        {
          showModalStatus: true
        }
      );
    }
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation
      })
      if (e.currentTarget.dataset.status == 0) {
        this.setData(
          {
            showModalStatus: false
          }
        );
      }
    }.bind(this), 200)
  }
})