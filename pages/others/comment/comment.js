Page({
  data: {
    windowHeight: 'auto',
    commentList: [
      {
        commodityIcon: '/images/example0.png',
        commodityId: 1
      },
      {
        commodityIcon: '/images/example0.png',
        commodityId: 2
      },
      {
        commodityIcon: '/images/example0.png',
        commodityId: 3
      }
    ]
  },
  onShow: function () {
    // 页面显示
    var vm = this
    var commentList = vm.data.commentList;
    // 初始化评论选项为好评
    for (var i = 0, len = commentList.length; i < len; i++) {
      commentList[i].commentType = 'GOOD';
    }
    vm.setData({
      commentList: commentList
    });
  },
  selectCommentType: function (e) {
    console.log('选中的是第几条评论的哪一种类型', e.currentTarget.dataset);
    var commentList = this.data.commentList;
    var index = parseInt(e.currentTarget.dataset.index);
    commentList[index].commentType = e.currentTarget.dataset.type;
    this.setData({
      'commentList': commentList
    });
  },
  saveContent: function (e) {
    console.log('保存评论到列表', e.detail.value, e.currentTarget.dataset.index);
    var vm = this;
    var commentList = vm.data.commentList;
    var index = e.currentTarget.dataset.index;
    commentList[index].content = e.detail.value;
    vm.setData({
      commentList: commentList
    });
  },
  submitComment: function (e) {
    var vm = this;
    console.log('查看表单e', e.detail.value);
    var commentList = [];
    for (var i = 0, len = vm.data.commentList.length; i < len; i++) {
      commentList.push({
        commodityId: vm.data.commentList[i].commodityId,
        content: e.detail.value['content_' + i],
        score: vm.data.commentList[i].commentType
      });
    }
    console.log('提交评价参数', {
      comments: commentList
    });
  }
})