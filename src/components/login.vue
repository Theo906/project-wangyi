<template>
    <div>
         <!-- 返回导航 -->
        <div class="navBarClass">
            <van-nav-bar title="网易严选" >
                <template #left>
                    <van-icon name="wap-home-o" size="58" @click="goToHome"/>
                </template>

                <template #right>
                    <van-icon name="shopping-cart-o" size="58" />
                </template>
            </van-nav-bar>
        </div>

        <!-- logo -->
        <div class="logoWrap">
            <img src="//yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt="网易严选">
        </div>

        <!-- 邮箱登录按钮 -->
        <div class="btnWrap">
            <van-button
             color="#E32901 " 
             :icon='login_icon'
             type="primary" 
             @click="loginBtn"
             plain block>
                邮箱账号登录
             </van-button>
        </div>

        <!-- 注册登录按钮 -->
        <div class="btnWrap" >
            <van-button
             color="#fff " 
             :icon='login_icon'
             style=" background-color: #DD1A21;"
             @click="registerBtn"
             type="primary" 
             plain block>
                注册用户名
             </van-button>

             <span class="other" @click="otherLoginBtn">其他登录方式 ></span>
        </div>

        <!-- 邮箱登录 -->
        <div class="loginWrap" v-show="loginWrap_show">
            <input v-model="user_val" type="text" placeholder="邮箱账号">
            <input v-model="password_val" type="password" placeholder="密码" >
            <input @click="loginValFn" type="button" style="border:0;" value="登录">
        </div>

        <!-- 注册 -->
        <div class="loginWrap" v-show="regWrap_show">
            <input v-model="reg_user_val" type="text" placeholder="注册用户名">
            <input v-model="reg_password_val" type="password" placeholder="密码" >
            <input type="button" @click="regUserBtn" style="border:0;" value="注册">
        </div>
    </div>
</template>

<script>
    import login_icon from '../assets/login_icon.png'
    export default {
        name:'login',
        data() {
            return {
                msg:'登录页' ,
                login_icon:login_icon ,
                loginWrap_show:false ,
                regWrap_show:false,
                // 邮箱登录名 密码
                user_val:'',
                password_val:'',

                // 注册信息
                reg_user_val:'',
                reg_password_val:'',

                // 保存用户注册信息
                regValArr : [],
                //保存所有注册用户信息
                allUserArr: null
            }
        },
        mounted() {
            let _getRegobj = localStorage.getItem('regArr')
            // console.log(JSON.parse(_getRegobj)); 
            this.allUserArr = JSON.parse(_getRegobj);
        },
        methods: {
            // 返回主页
            goToHome(){
                this.$router.push('/');
                localStorage.setItem('save_inx',0);
            },
            //邮箱登录
            loginBtn(){
                this.loginWrap_show = true;
                this.regWrap_show =false;
            },
            // 邮箱登录按钮
            loginValFn(){
                // console.log(this.user_val+'----------------'+this.password_val);
                for(let i=0 ;i<this.allUserArr.length;i++){
                    // console.log(this.allUserArr[i])
                    if(this.allUserArr[i].u === this.user_val
                     && this.allUserArr[i].p === this.password_val ){
                        //  console.log('sucess!')
                         this.$router.push('/')
                         break;
                     }else{
                         console.log('请先注册！');
                         break;
                     }
                }
            },
            // 注册
            registerBtn(){
                this.loginWrap_show = false;
                this.regWrap_show =true;
            },
            // 其他登录方式
            otherLoginBtn(){
                this.loginWrap_show = false;
                this.regWrap_show =false;
            },
            //注册信息按钮
            regUserBtn(){
                // console.log(this.reg_user_val+'----------------'+this.reg_password_val);

                let regObj = {
                    u : this.reg_user_val,
                    p : this.reg_password_val
                }

                // 保存本地存储
                this.regValArr.push(regObj);
                localStorage.setItem('regArr',JSON.stringify(this.regValArr));

                // 清除输入框
                this.reg_user_val = '';
                this.reg_password_val = '';
            }

        }
    }
</script>

<style scoped>
    .logoWrap {
        text-align: center;
        padding-top: 2.13333rem;
        padding-bottom: 3.09333rem;
     }
     .logoWrap img {
        width: 3.57333rem;
        height: 1.2rem;
        }
    .btnWrap {
        padding: 0 .53333rem;
        margin-bottom: .4rem;
        font-size: .37333rem;
    }
    .btnWrap .other{
        display: block;
        margin-top: .4rem;
    }
    .loginWrap {
       margin-top:1rem;
    }
    .loginWrap input{
        display: block;
        margin:.3rem auto;
        width: 4rem;
        height: .7rem;
        font-size: .37333rem;
        border:0;
        border-bottom:1px solid #666;
    }
</style>