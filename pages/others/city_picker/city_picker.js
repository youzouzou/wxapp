Page({
  data: {
    addressList: [
      {
        "addressId": 1,
        "accountId": 1,
        "recipientName": "测试用户",
        "phoneNumber": "18888888888",
        "province": "广东省",
        "city": "深圳市",
        "district": "龙岗区",
        "detailAddress": "和成世纪",
        "addressType": "COMMON"
      },
      {
        "addressId": 1,
        "accountId": 1,
        "recipientName": "测试用户",
        "phoneNumber": "18888888888",
        "province": "广东省",
        "city": "深圳市",
        "district": "龙岗区",
        "detailAddress": "和成世纪",
        "addressType": "COMMON"
      },
      {
        "addressId": 1,
        "accountId": 1,
        "recipientName": "测试用户",
        "phoneNumber": "18888888888",
        "province": "广东省",
        "city": "深圳市",
        "district": "龙岗区",
        "detailAddress": "和成世纪",
        "addressType": "COMMON"
      }
    ]
  },
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value);
    var addressList = this.data.addressList, values = e.detail.value;
    for (var i = 0, lenI = addressList.length; i < lenI; ++i) {
      addressList[i].checked = false;
    }
    console.log(e.currentTarget.dataset.index);
    var index = parseInt(e.currentTarget.dataset.index) ? parseInt(e.currentTarget.dataset.index) : 0;
    addressList[index].checked = true;
    this.setData({
      addressList: addressList
    });
  },
  deleteAddress: function (e) {
    var vm = this
    console.log('要删除的id', e.currentTarget.dataset.id);
  }
});