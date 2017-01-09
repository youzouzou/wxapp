Page({
    data: {
        list: [
            {
                id: 'marquee',
                name: '文字跑马灯',
                open: false,
                pages: ['marquee']
            },
            {
                id: 'drawer',
                name: '抽屉层',
                open: false,
                pages: ['drawer']
            },
            {
                id: 'comment',
                name: '订单评价',
                open: false,
                pages: ['comment']
            }
        ]
    },
    kindToggle: function (e) {
        var id = e.currentTarget.id, list = this.data.list;
        for (var i = 0, len = list.length; i < len; ++i) {
            if (list[i].id == id) {
                list[i].open = !list[i].open
            } else {
                list[i].open = false
            }
        }
        this.setData({
            list: list
        });
    }
});
