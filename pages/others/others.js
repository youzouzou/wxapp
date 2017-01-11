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
            },
            {
                id: 'richcontent',
                name: '富文本解析',
                open: false,
                pages: ['richcontent']
            },
            {
                id: 'lefttab',
                name: '左侧菜单',
                open: false,
                pages: ['lefttab']
            },
            {
                id: 'xscroll',
                name: '横向滚动',
                open: false,
                pages: ['xscroll']
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
