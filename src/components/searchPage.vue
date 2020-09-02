<template>
    <div class="titleDiv">
            <!-- 两端对齐 -->
        <van-row type="flex" justify="space-between">
            <van-col span="21">
                <!-- 搜索框 -->
                    <van-field
                        @input="inputValueFn"
                        @keyup.enter="searchEnterFn"
                        class="searchDiv"
                        v-model="input_v"
                        placeholder="请输入搜索内容"
                        >
                        <!-- 左侧放大镜图标 -->
                        <template v-slot:left-icon>
                            <van-icon name="search" class="searchIconLeft"/>
                        </template>

                        <!-- 清空搜索框 -->
                        <template #button>
                            <van-icon v-show="isClose" name="close" @click="clearSearch_vFn"/>
                        </template>
                    </van-field>
            </van-col>
            <van-col span="3">
                 <van-button class="cancelBtn" type="primary" size="mini" @click="goBackFn">取消</van-button>
            </van-col>
        </van-row>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name:'searchPage',
        created(){
            // axios.get('http://localhost:3344/xxx')
            //     .then(_d => {
            //         console.log(_d.data)
            //     })
        },
        data() {
            return {
                msg:'第二个搜索页面',
                input_v:'',
                isClose:false
            }
        },
        watch: {
            // 监听清除按钮是否显示
            input_v(){
                if(this.input_v){
                    this.isClose = true;
                }else{
                    this.isClose = false;
                }
            }  
        },
        methods: {
            // watch监听
            inputValueFn(_v){
                // this.input_v = _v;
            } ,
            // 清除搜索内容
            clearSearch_vFn(){
                this.input_v = '';
            },
            // 按下enter键搜索
            searchEnterFn(){
                console.log(this.input_v)

                axios.get('http://localhost:3344/search',{
                    params:{search_key:this.input_v}
                })
                .then(_d => {
                    if(_d.data.msg){
                        this.$toast({
                        message: _d.data.msg,
                        position: 'top',
                        });
                    }else{
                     console.log(_d.data)
                    }
                })
            },
            goBackFn(){
                this.$router.go(-1)
            }
        }
    }
</script>

<style scoped>
    .titleDiv{
        padding: .21333rem .4rem;
    }
     .cancelBtn {
        width: .98667rem;
        height: .53333rem;
        line-height: .53333rem;
        text-align: center;
        color: #dd1a21;
        border: 1px solid #dd1a21;
        border-radius: .10667rem;
        margin-left: .21333rem;
        font-size: .32rem;
        background: #fff;
        margin-top: .1rem;
     }
     .searchDiv{
        padding-top: 0;
        padding-left: .26667rem;
        padding-bottom: 0;
        border: 0;
        background-color: #f4f4f4;
        height: .74667rem;
        line-height: .74667rem;
        border-radius: 4px;
        font-size: .37333rem;
     }
     .searchIconLeft{
         font-size: .5rem;
         margin-right: .1rem;
     }
    .titleDiv /deep/ .van-icon-close::before {
        content: '\F034';
        margin-top: 15px;
    }
</style>