// components/loadmore/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        hasMore: {
            type: Boolean,
            value: false
        },
        // 加载中的显示文本
        loadingText: {
            type: String,
            value: '加载中...'
        },
        // 加载失败的显示文本
        failText: {
            type: String,
            value: '加载失败, 请点击重试!'
        },
        // 没有更多后的显示文本, 默认没有则隐藏加载更多控件
        finishText: {
            type: String,
            value: ''
        },
        // 列表渲染延时, 默认为 500 ms, 我在开发工具中测试列表渲染速度时快时慢, 可根据实际使用中界面复杂度自行调整
        // ps 如果能监听setData() 渲染结束的话则可以不需要延时
        listRenderingDelay: {
            type: Number,
            value: 500
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        showThis: false,
        text: '',
        showIcon: false,
        isLoading: false
    },

    /**
     * 组件的方法列表
     */
    methods: {

        //加载更多的入口方法, 直接在page中使用时请在onReachBottom() 方法中调用这个方法, 并实现loadMoreListener方法去获取数据
        loadMore() {
            let that = this;
            if(!that.properties.hasMore){
                console.log('load more finish');
                that.setData({
                    showIcon: false,
                    showThis:true,
                    text: '~ 没有更多数据了 ~'
                });
                return
            }
            if(that.data.isLoading) {
                console.log('loading ...');
                return
            }
            that.setData({
                isLoading: true
            });
            that.triggerEvent('loadMoreListener')
        },
        //加载完成, 传入hasMore 父组件传入当前page和totalPage 判断 hasmore
        loadMoreComplete(page,totalPage) {
            let hasMore = page < totalPage && totalPage != 1
            let text = '', showThis = false, showIcon = false;

            if (hasMore) {
                showIcon = true;
                showThis = true;
                text = this.properties.loadingText
            } else if (this.properties.finishText.length>0) {
                text = this.properties.finishText;
                showThis = true
            }
            this.setData({
                hasMore: hasMore,
                text: text,
                showIcon: showIcon,
                showThis: showThis
            });
            //界面渲染延迟, 避免列表还未渲染完成就再次触发 loadMore 方法
            setTimeout(function(){
                this.setData({
                    isLoading: false
                })
            }.bind(this), this.properties.listRenderingDelay)
        },
        // 加载失败
        loadMoreFail() {
            this.setData({
                showIcon: false,
                text: this.properties.failText
            });

            //界面渲染延迟, 避免列表还未渲染完成就再次触发 loadMore 方法
            setTimeout(function(){
                this.setData({
                    isLoading: false
                })
            }.bind(this), this.properties.listRenderingDelay)
        },
    }
});
