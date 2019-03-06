// pages/components/navBar.js
let sliderWidth = 0;
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        activeIndex: Number,
        labelPros:Object,
        tabs: {
            type: Array,
            value: [],
            observer(newVal, oldVal, changedPath) {
                let that = this;
                wx.getSystemInfo({
                    success: function (res) {
                        if(that.data.tabs.length <= 2){
                            sliderWidth =(100 / that.data.tabs.length) ;
                            that.setData({
                                width:'calc('+sliderWidth+'%'+')'
                            })
                        }else{
                            sliderWidth =(100 / 3);
                            that.setData({
                                width:sliderWidth+'%'
                            })
                        }
                        that.setData({
                            sliderLeft:(sliderWidth-18)/2,
                            sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
                        });
                    }
                });
                let arr = [];
                for (let key in that.data.labelPros) {
                    let value = that.data.labelPros[key];
                    arr = that.optionsHadd(key, value)
                }
                that.setData({
                    newList:arr
                })
            }
        }

    },

    /**
     * 组件的初始数据
     */
    data: {
        sliderLeft: 0,
        sliderOffset: 0,
        width:'auto',
        newList:[]
    },
    /**
     * 组件的方法列表
     */
    methods: {
        optionsHadd(key, value) {
            let that = this;
            let arr = that.data.tabs.map((v) => {
                v[key] = v[value];
                return v
            });
            return arr
        },
        tabClick(e) {
            let that = this;
            that.setData({
                sliderOffset: e.currentTarget.offsetLeft,
            });
            let params = {
                tab: e.currentTarget.dataset.tab,
                activeIndex: e.currentTarget.id
            };
            that.triggerEvent('tabevent', params)
        }
    }
});
