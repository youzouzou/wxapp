Page({
    data: {
        list: [
            {
                id: 'form',
                name: '表单',
                open: false,
                pages: ['form', 'list']
            },
            {
                id: 'toast',
                name: '操作提示',
                open: false,
                pages: ['toast']
            },
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
                id: 'tab',
                name: 'tab菜单',
                open: false,
                pages: ['lefttab', 'xscroll_top_bar']
            },
            {
                id: 'xscroll',
                name: '横向滚动',
                open: false,
                pages: ['xscroll']
            },
            {
                id: 'citypicker',
                name: '城市三级联选',
                open: false,
                pages: ['city_picker']
            },
            {
                id: 'loading',
                name: '加载动画',
                open: false,
                pages: ['loading']
            },
            {
                id: 'pictures',
                name: '图片翻页',
                open: false,
                pages: ['pictures']
            },
            {
                id: 'waterfall',
                name: '瀑布流',
                open: false,
                pages: ['waterfall']
            },
            {
                id: 'calendar',
                name: '自定义日历',
                open: false,
                pages: ['calendar']
            },
            {
                id: 'commodity_attr',
                name: '商品属性联动',
                open: false,
                pages: ['commodity_attr']
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
