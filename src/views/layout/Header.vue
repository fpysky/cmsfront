<template>
  <div>
    <!-- 小广告 -->
    <!-- <div class="home-settlement" style="background-color: rgb(255,255,255);">
      <div class="mzcontainer">
        <img src="//openfile.meizu.com/group1/M00/06/36/Cgbj0VuAOi-AFTz1AAMhcBof8Sk659.jpg" alt=" " class="home-settlement-img" style="max-width: 1920px; margin-left: -960px;">
        <a href="javascript:;" class="home-settlement-point close" title="关闭">
            <i class="home-font close"></i>
        </a>
            <a href="https://detail.meizu.com/item/meizu16thplus.html?click=store_index_dt_1" class="home-settlement-point" style="width: 1920px; height: 120px; left: 0px; top: 0px;" target="_blank" title="魅族 16th" data-mtype="store_index_dt_1" data-mdesc="顶通1"></a>
        </div>
    </div> -->
    <div class="layout-header clearfix" id="layoutHeader">
      <div class="mzcontainer">
          <div class="layout-header-logo"> 
              <a href="/">
                  <img style="width:176px;height:33px;vertical-align: middle;margin:16% auto;" :src="baseSetting.logo" alt="">
              </a>
          </div>
          <ul class="layout-header-service clearfix">
              <li class="layout-header-service-item layout-header-service-search mz-autocomlete" id="layoutHeaderSearch">
                <input @blur="searchBlur" v-model="searchKeyword" @click="search" @keyup="search" class="mz-autocomlete-input" placeholder="搜索点什么吧">
                <img class="layout-img-search" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAcCAYAAAAEN20fAAAAAXNSR0IArs4c6QAAA4VJREFUSA21Vz1oU1EU7ntNGweldZWiiyB0KaHVgD+LS0HrJtZBpCC0aZMsaju42Mkh1ilpTDrVn8XiIupQIVsdktihS0EQQaiVLkKxQ9KGxO97vvO4L76bJnnpg+Sec+453/neub/P6GryicfjwUqlcqFarQ7UarVTDDMMY9s0za1AIFBIJpPlJqE83QxPq2KMRCJjSD6BpKMgcFzpckT07aFvFaSWM5nMB6ejBUFLBAT49s+AdbkFPLquoUL30+l0sZU4TyJTU1MRgCTxlgEVDG++CX0D9m3aoXOIhqAPUpcH9grkeDabzYjtsPY/IiDxFMAPJRCgZegpvGUGb/lN7Go7MzNzFvMnAt8YfIPSB30BZGZFb9S6iLASAHquBOR7enrGFxcXfyg2rRiNRs8cHBy8gUNYnEBmupnKOEQ4J0DiM37WcADgbW9v751WVwNX1/7+/mvg3CQZ4FTwu4RJXBByXq0pRk5MIQFbvh0SxCJxxhKDOjHtSU9V+1gVsZfoe3qBfRnz4Vyzw6FD5jBh3nwFEWvOYGnfaLS0rYpwnxBABKb8kiAWMYgluGoOsamtyTFFFUbFyNUhst9WxWIO5tJhmty2wdzaMeG8qVuiOoBGdmIRkz7MwVw6fxMlG1A6NxS5U6KDWZfLhW+CqXWA0QrZ2jFdHj4VFVPNVQ/rLN/6jqPQMUw1Ha6JTqcKkJ3q6AJatddh/tLFY3mbW0rnkCJ3SnQw63K58E0ssQJY79GKMRzkAeby8KEQi5iEYA7m0sGZ3JLhvCoOPEVF9tuqWMzR6NyyJitKtixJwTzG7Vn0dltiEEviIb8Q2au1iNhnwBodwDzIo7zRLugFpNoYSwxiKfbZycnJ04ruEp3li6o8AGverPiEeZS3Q4YxjCWGhWT/gdQViBu484yrdpGd+wgNR3ExAoF3eMnraANOUsN42dfXF0skEn/E1i0C2/X19S8jIyM8dy7adn46TA8PD/eHw+HvxWLxt213NVwdoVDoEXxfocOZX6jwwtLS0j3Ef4J8FX0n7cChUql0C/Y8cv6kzVUR28mqDOSOXp7n5uZO7O7upkD2ruThVID+GGSfeBKho5/PCc433dUQuLdx+PFe3C+E0I5piYiTfXubAPuOfWBx9QCP91pOYD6HE/nn19U1Pz9/bGdn5zyPcgBYZxLA2v7kXFlZ6c7lcteAVcXQfPwLwMHO9PXwzvQAAAAASUVORK5CYII=">
              </li>
              <li class="layout-header-service-item" id="layoutHeaderUser" @mouseover="layoutHeaderUserOver('over')" @mouseout="layoutHeaderUserOver('out')">
                  <a class="layout-header-service-link" href="/" @click.prevent="goUserCenter" data-mtype="wmz_public_yt_mycenter">
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAABNdJREFUaAXtWjlLNEsUvfPcxQXENXEXXHALFMFExC1VBDVR0MjAwMC/YWKgiYKJigiGLohoYKLgikvgnrjvouL2vXcKqqjnN+1Uj9UzODMXerqm+i7n9K2uvlUztj//CXmR/ONFXBlVH2FPz7gvw74Me9gd8Loh7e+KBH58fNDq6io7jo6O6O7ujoWNjIykpKQkKigoYIefn5/lcGxWFx4gOjY2RhcXF9+SiYmJofr6ekb8W8UfXrSMMAq48fFxmpqaMgWxurqaamtryWazmbJTVbZsSH8lGxwcTFVVVZSfn0/IJgRZX1tbo+npaXp5eWF9/AbV1dWx77o/LMkwhnFvb6/AmpmZSS0tLRQVFSX65Mb19TUNDg7Szs6O6G5vb7dkeGufpTFB4ZnlArKdnZ2GZKGHGwEd6HKBD/jSLdoJI7t8gsIwRmZVBbqwgcAHfOkWSwhzkHhmjYYx15HP0IUNl19BGO9ZLpigzIpsI/sy68dIX3uGeVGBgHw2Ngpur1+2kX3Z03WmTzthZ0C40kY74YiICIHfmQzJNrIv4fSHDe2E4+PjBaS9vT3RVm3INrIvVXtHetoJy+/SjY0NR/H/ui7byL7+UnSyQzvh3NxcUQfjtSIPUUcYoctfRail4Uu3aCccGxtLWVlZDCcqpYmJCWXM0OXVFXzAl27RThgAKysrBc75+XlSeZ9CB7pcZB+8T8fZEsLZ2dlsVQSAn5+f1NfXRw8PD4Z4cQ060IWg+IAPK8QSwgDa0NBAISEhDDNWQ93d3YTzV/l6DTawtUosWR5ysNvb29TT0yOey9DQUMICPy8vj6msr6+zDYKnpyf2HVs8HR0dYg7gfnSeLSUMoEtLS2yt+/b29i3ugIAAtrIqKir6Vu+nFy0nDIAHBwc0MDBA5+fndvFiNm5tbaWUlBS713V2uoQwAGOPa3FxkVZWVujk5IRxSEhIoMLCQiouLhbvbp3k7PlyGWF7wd3RZ9ks7Q4yKjF9hFXu0m/W8boMa92Iv7y8JBQbOLDriJIRx/v7u9Kg8Pf3p/DwcHZgqwcLCBzR0dFK9ipKWmZprGEnJydpd3dXJaZpnfT0dKqpqdGyXPwR4bOzM1ZQHB4emibhjEFycjIrUOLi4pwxZzZOE15YWKCRkRF6fX0VwVEe5uTksGGYmppK+Dk0LCyMVH8GxVr48fGRbRrs7++zR2Nzc5PksjQwMJAaGxuptLRUxDXTcIrw3NwcDQ8PizggWlFRQeXl5aR74+3+/p5mZ2dpZmbmf8SbmpqorKxMYFBtmCaM8hB1Mf8/W2JiIrW1tZEVG24yidPTU+rv76fj42PWjS0g1N8oS82IqdcS9pyGhoYE2YyMDOrq6rKcLAjhhiIWYkJww4HFzJ4Z7EwRHh0dpefnZ9gxAFi74plylSAWYvLRBCzAZEaUCd/e3tLy8jLzjeHU3NxMQUFBZmJp0UVMxOb/EAAmYFMVZcJ4dvmeE2bitLQ01Rja9RAbGCDABGyqokx4a2tL+CwpKRFtdzVkDDI2R3iUCV9dXQlf+KuRu0XGIGNzhEuZ8M3NjfBl5kduYaS5IWOQsTkKo0xYrnZQ5LtbZAwyNke4lAk7cvRbrnsdYdOl5W/JpBFOr8uwj7DRUPCUfl+GPSWTRjx8GTa6M57S/y9uIe/cMMw11wAAAABJRU5ErkJggg==" alt=" " class="layout-header-service-avatar">
                  </a>
              </li>
              <!-- <li class="layout-header-service-item layout-header-service-cart" id="layoutHeaderCart">
                  <el-badge :value="cartNum" class="item">
                      <a @click.prevent="goCart" class="layout-header-service-link service-cart" href="" data-mtype="wmz_public_yt_cart">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAABAxJREFUaAXtWbtLNDEQn1NPQcG3lS9UxAcWiiAIlnaCYCFW/hn+FXbCIdhfeQiKoPZiIaeg4At8gKjgs7BQFPX7fqsJ2d3snbsbd7PeTrOTSTKZX2aSTLKJz/9EBURFBYTVgBoD/usejz0ce/iPzUAc0n/MoTY4BefhEusUrK+v0/LyMr2+vlqreHl8fJzGxsZ4OUqMzcMrKys5wQLczs5OlDCabLUB7u3tNTWQFS4uLuj+/l5Wpb0sYb084C5xfn4u9fL8/Dw9Pz8boCYnJ2l0dFR7gFYDbWs4kUhQW1ubtZ1R7uvro62tLYNHWEcRsC2kpUi/hQMDA7z69PSUnp6eeDkqjM3DuQyHh5PJJL29vdHHxwdtbGyQOAm5+gZVhwitqqqisrIy6ZC2NSxtJQhTqRTt7u4KEv1YgO7v76epqSmqqakxGegqpNFTN4+a0HwXsPFij5mbm7Ntvq4BI6yjQldXV5TNZk3mulrD6FlZWUmNjY10eXlpKBoZGSFkXroQvLuwsEAnJyeGScgZhoeHuXmuAaMnkhMGGGc2Ngmd6OHhgZtTXV3NeTCuQxqdenp68DEIwHU6nnBcPj4+MvOoq6uL82A8Ae7s7KSSkq/gQAgdHByYlIZZENdsfX09tba2mszxBLi0tJQ6Ojq4ov39fc6HzYiABwcHbeZ4AgwtYlgfHh7aFIchsIazUsDirQpr5vr6OgyMpjFF78rCGY09e7ilpYUqKir4gDqsYxGwzLu+ACN96+7u1gbwT8LZF2B0Ftfx8fExvb+/8wkImhG96xTOsMlzSKOzuI5fXl7o7OwM4lBIBOwUzjDMF+C6ujpqaGjgAMM6nn4azr4BQ4EY1mFtXKJ3c4WzEsBiWCOvZm9eUB4UiYBzhTPs8RXSUIBctajoSw1eQY6OjiAOjNyEM4zyDbi8vNyUrwa9jkXv5gtnJYChRFzHe3t7hAtFEIRjUAScL5xhk28PQ4k4EO6ii4uLvw4ak5rJZExXwaGhIZiTkzw9AFg1NjU1GV5mu/Ta2hptb29Tc3MzISNTTdgr8JJxd3fHVePRDnbkI9evlk4K8etldnbWNONObVXLa2traWZmhvDNR8oAY6CbmxtKp9MU5HUR+8f09DQhCfoJKQXMBsRRgTTz9vb2V/Lr4uJiI8Nrb293/C3EbLF+fwWwdRCdykp2aZ0A5bMlBpxvhqJer+QcFicB2c/S0hJtbm4aYrz6488ENhoV5Fe/csAAu7q6yrExfmJigsv8MH71K1/DzLMiKJlMrHfDy3TJZE46lQN2GkgXuXLA4p86BlImY3VuvzJdMpmTXuVrmP06ZWEGY5jMyQg3cqbLq/4403Iz21Fsq3wN6z4JMWDdPeTXvtjDfmdQ9/4F5+F/nGyFQiUTZpsAAAAASUVORK5CYII=" alt=" " class="layout-font-cart">
                    </a>
                  </el-badge>
              </li> -->
          </ul>
          <ul class="layout-header-nav clearfix" id="layoutHeaderNav">
            <li class="layout-header-nav-item">
                <a href="/" class="layout-header-nav-link" data-mtype="wmz_public_yt_store">首页</a>
            </li>
            <li class="layout-header-nav-item">
                <a href="/" class="layout-header-nav-link" data-mtype="wmz_public_yt_custom_1">关于极奇</a>
            </li>
            <li class="layout-header-nav-item">
                <a href="/" class="layout-header-nav-link" data-mtype="wmz_public_yt_custom_2">人才招聘</a>
            </li>
            <li class="layout-header-nav-item">
                <a href="/" class="layout-header-nav-link" data-mtype="wmz_public_yt_custom_3">联系我们</a>
            </li>
            <li class="layout-header-nav-item">
                <a href="/" class="layout-header-nav-link" data-mtype="wmz_public_yt_custom_4">问题反馈</a>
            </li>
            <!-- <li class="layout-header-nav-item">
                <a href="/" class="layout-header-nav-link" target="_blank" data-mtype="wmz_public_yt_flyme">导航</a>
            </li> -->
            <!-- <li class="layout-header-nav-item">
                <a href="/" class="layout-header-nav-link" target="_blank" data-mtype="wmz_public_yt_service">导航</a>
            </li>
            <li class="layout-header-nav-item">
                <a href="/" class="layout-header-nav-link" target="_blank" data-mtype="wmz_public_yt_offstore">导航</a>
            </li>
            <li class="layout-header-nav-item">
                <a href="/" class="layout-header-nav-link" target="_blank" data-mtype="wmz_public_yt_bbs">导航</a>
            </li>
            <li class="layout-header-nav-item app-down">
                <a href="/" class="layout-header-nav-link" target="_blank" data-mtype="wmz_public_yt_app">导航</a>
            </li> -->
          </ul> 
      </div>
    </div>
    <div class="layout-user-downmenu animated fast" @mouseover="layoutHeaderUserOver('over')" @mouseout="layoutHeaderUserOver('out')" ref="layoutUserDownmenu" style="top: 80px; left: 1500.5px;">
      <ul v-if="name == ''" class="layout-user-downmenu-list">
        <li class="layout-user-downmenu-item">
          <a href="/login" class="layout-user-downmenu-link" data-mtype="wmz_public_grzx_login">立即登录</a>
        </li>
        <li class="layout-user-downmenu-item">
          <a href="/register" class="layout-user-downmenu-link" data-mtype="wmz_public_grzx_register">注册</a>
        </li>
      </ul>
      <ul v-else class="layout-user-downmenu-list">
        <li class="layout-user-downmenu-item">
          <a href="/userCenter" class="layout-user-downmenu-link" data-mtype="wmz_public_grzx_login">个人中心</a>
        </li>
        <li class="layout-user-downmenu-item">
          <a href="/userCenter" class="layout-user-downmenu-link" data-mtype="wmz_public_grzx_register">{{name}}</a>
        </li>
        <li class="layout-user-downmenu-item">
          <a href="/orders" class="layout-user-downmenu-link" data-mtype="wmz_public_grzx_myorder">我的订单</a>
        </li>
        <li class="layout-user-downmenu-item">
          <a href="/" @click.prevent="logout" class="layout-user-downmenu-link" data-mtype="wmz_public_grzx_mformy">退出</a>
        </li>
      </ul>
    </div>
    <div @mouseout="searchContentOut" @mouseover="searchContentOver" ref="layoutHeaderSearchBox" class="layoutHeaderSearchBox animated fast">
        <div v-if="searchResults.length != 0" class="category">
            <div class="name">商品</div>
            <a v-for="(item,index) in searchResults" :key="index" class="result" :href="'/product?id='+item.id">
                <div class="content">
                    <img style="width:50px;height:50px;" :src="item.image" alt="">
                    <div style="font-size:12px;display:inline-block;height:50px;line-height:50px;margin-left:10px;">{{ item.title}}</div>
                </div>
            </a>
        </div>
        <div v-else class="description">没有内容</div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { getToken } from '@/utils/auth'
import { getCartNum } from '@/api/cart'
import { search } from '@/api/index'
import { websiteInformation } from '@/api/websiteInformation'
import animate from 'animate.css'
export default {
  name: 'Header',
  data () {
    return { 
        cartNum:0,
        searchKeyword:'',
        searchResults:'',
        isSearchBlur:true,
        baseSetting:{},
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'name',
      'avatar'
    ])
  },
  created(){
      if(getToken()){
          this.getCartNum()
      }
      this.websiteInformation()
  },
  methods:{
    websiteInformation(){
        websiteInformation().then(res => {
            this.baseSetting = res.data.list
            this.baseSetting.logo = process.env.BASE_API +  this.baseSetting.logo 
        }).catch(error => {
            this.$message.warning(error.response.data.message)
        })
    },
    searchContentOver(){
        this.isSearchBlur = false
    },
    searchContentOut(){
        this.isSearchBlur = true
    },
    searchBlur(){
        if(this.isSearchBlur){
            this.$refs.layoutHeaderSearchBox.classList.remove('show')
        }
    },
    search(){
        if(this.searchKeyword != ''){
            search({searchKeyword:this.searchKeyword}).then(res => {
                this.searchResults = res.data.list
                this.searchResults.forEach(element => {
                    element.image = process.env.BASE_API + element.image
                })
                this.$refs.layoutHeaderSearchBox.classList.add('show')
                this.$refs.layoutHeaderSearchBox.classList.add('zoomIn')
            }).catch(error => {

            })
        }
    },
    getCartNum(){
        getCartNum().then(res => {
            this.cartNum = res.data.num
        }).catch(error => {
            this.$notify.warning(error.response.data.message)
        })
    },
    goCart(){
        if(getToken()){
            this.$router.push({name:'/cart'})
        }else{
            this.$router.push({name:'/login'})
        }
    },
    layoutHeaderUserOver(eventName){
      if(eventName == 'over'){
        this.$refs.layoutUserDownmenu.classList.add("layout-user-downmenu-show")
        this.$refs.layoutUserDownmenu.classList.add("bounceInDown")
      }else if(eventName == 'out'){
        this.$refs.layoutUserDownmenu.classList.remove("layout-user-downmenu-show")
        this.$refs.layoutUserDownmenu.classList.remove("bounceInDown")
      }
    },
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload()
      })
    },
    goUserCenter(){
        if(getToken()){
            this.$router.push({name:'/userCenter'})
        }else{
            this.$router.push({name:'/register'})
        }
    },
  }
}
</script>
<style scoped>
body {
    margin: 0;
    position: relative;
    font-family: "PingFang SC","\5FAE\8F6F\96C5\9ED1","Microsoft Yahei",Arial,Helvetica,sans-serif,"\5B8B\4F53";
    font-size: 14px;
    min-width: 1240px;
    min-height: 100%;
    padding-bottom: 246px;
}
dd, dl, dt, h1, h2, h3, h4, h5, h6, ol, p, ul {
    margin: 0;
    padding: 0;
    list-style: none;
    font-weight: 400;
}
body{
  margin:0;
  padding:0;
}
a{
  text-decoration: none !important;
}
.home-settlement {
    overflow: hidden;
    transition: height 1s ease-in-out,top 1.5s ease-in-out,opacity 1.5s linear;
}
.mzcontainer {
    width: 1240px;
    margin: 0 auto;
}
.home-settlement .mzcontainer {
    position: relative;
}
.home-settlement .home-settlement-img {
    position: relative;
    left: 50%;
}
img {
    border-style: none;
    vertical-align: top;
}
.layout-header {
    position: relative;
    width: 100%;
    z-index: 998;
    height: 80px;
    background-color: #fff;
    border-bottom: 1px solid #efefef;
    background-color:#24252A;
}
.clearfix {
    zoom: 1;
}
.layout-header .layout-header-logo {
    float: left;
    height: 80px;
    overflow: hidden;

}
.layout-header .layout-header-service {
    float: right;
    height: 80px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.layout-header .layout-header-nav {
    float: left;
    margin:0 0 0 20px;
}
.layout-header .layout-header-nav-downmenu {
    position: absolute;
    height: 0;
    width: 100%;
    left: 0;
    top: 80px;
    opacity: 0;
    background-color: #fff;
    transition: height .2s ease-in-out;
}
.layout-header .layout-header-app-down {
    position: absolute;
    height: 0;
    width: 100%;
    left: 0;
    top: 80px;
    background: #fff;
    opacity: 0;
    overflow: hidden;
    transition: all .2s ease-in-out;
}
.layout-header .layout-header-nav .layout-header-nav-item {
    float: left;
    margin: 0 20px 0 15px;
}
li {
    display: list-item;
    text-align: -webkit-match-parent;
}
.layout-header .layout-header-nav .layout-header-nav-link {
    display: block;
    color: #fff;
    height: 80px;
    line-height: 80px;
    transition: color .2s linear;
}
a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
    text-decoration: none;
    outline: 0;
}
a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: underline;
}
.layout-header .layout-header-service .layout-header-service-item.layout-header-service-search {
    position: relative;
    height: 30px;
    border-radius: 20px;
    padding: 0;
    margin: 24px 0 0 18px;
    width: 168px;
    text-align: right;
    word-break: keep-all;
    white-space: nowrap;
    border: 1px solid rgba(0,0,0,.15);
    line-height: 28px;
}
.layout-header .layout-header-service .layout-header-service-item {
    position: relative;
    float: left;
    right: 3px;
    padding: 26px 8px 0 12px;
}
.layout-header .layout-header-service .layout-header-service-item.layout-header-service-search .mz-autocomlete-input {
    vertical-align: middle;
    border: none;
    outline: 0;
    width: 125px;
    height: 20px;
    margin-left: 15px;
    transition: width .5s;
    font-size: 12px;
    line-height: 20px;
    color: #999;
}
.mz-autocomlete .mz-autocomlete-input {
    outline: 0;
}
button, input, optgroup, select, textarea {
    font: inherit;
    margin: 0;
}
button, hr, input {
    overflow: visible;
}
.layout-header .layout-header-service .layout-header-service-item.layout-header-service-search .layout-img-search {
    width: 17px;
    margin-top: 7px;
    margin-right: 6px;
    margin-left: 3px;
    cursor: pointer;
}
img {
    border-style: none;
    vertical-align: top;
}
.layout-header .layout-header-service .layout-header-service-link {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    width: 30px;
    height: 30px;
    line-height: 30px;
    overflow: hidden;
    color: #666;
}
a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
    text-decoration: none;
    outline: 0;
}
a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: underline;
}
.layout-header .layout-header-service .layout-header-service-avatar {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 100%;
}
.layout-header .layout-header-service .layout-header-service-cart {
    padding-left: 0!important;
    padding-right: 0!important;
}
.layout-header .layout-header-service .service-cart {
    width: 34px;
    height: 34px;
    overflow: unset;
}
.layout-header .layout-header-service .layout-header-service-link {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    width: 30px;
    height: 30px;
    line-height: 30px;
    overflow: hidden;
    color: #666;
}
.layout-header .layout-header-service .layout-font-cart {
    display: block;
    width: 30px;
    height: 30px;
}
.layout-header .layout-header-service .layout-header-service-link {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    width: 30px;
    height: 30px;
    line-height: 30px;
    overflow: hidden;
    color: #666;
}
.layout-header .layout-header-service .layout-header-service-cart-num {
    z-index: 9999;
    position: absolute;
    top: 0;
    right: -2px;
    height: 16px;
    min-width: 8px;
    border-radius: 50%;
    background: #F10000;
    color: #fff;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    display: inline-block;
    padding: 0 4px;
    text-indent: 0;
    font-weight: 300;
}
.layout-user-downmenu {
    display: none;
    z-index: 999;
    font-size: 12px;
    padding-top: 4px;
    overflow: hidden;
}
.layout-user-downmenu-show{
  display:block;
}
.layout-user-downmenu, .mz-loading {
    position: absolute;
    text-align: center;
}
.layout-user-downmenu .layout-user-downmenu-list {
    position: relative;
    background-color: #fff;
    border-radius: 3px;
    padding: 6px 0;
    width: 96px;
    border: 1px solid #efefef;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.layout-user-downmenu .layout-user-downmenu-link {
    position: relative;
    display: block;
    color: #666;
    padding: 7px 0;
    background-color: transparent;
    transition: all .3s;
}
#layoutHeaderUser{
  height:70%;
}
#layoutHeaderCart{
    width:50px;
}
.layoutHeaderSearchBox{
    display: none;
    z-index: 999;
    font-size: 12px;
    overflow: hidden;
    position: absolute;
    top: 186px;
    left: 1300.5px;
    width:400px;
    border-radius: 5px;
    box-shadow: 0px 2px 4px 0px rgba(34, 36, 38, 0.12), 0px 2px 10px 0px rgba(34, 36, 38, 0.15);
    background-color:#fff;
    animation-duration: .6s;
    min-height:50px;
}
.layoutHeaderSearchBox .description {
    margin-top: 0.25rem;
    font-size: 1.3em;
    color: rgba(0, 0, 0, 0.87);
    margin:10px;
    text-align: center;
    animation-duration: 0s;
}
.layoutHeaderSearchBox .category {
    background: #F3F4F5;
    -webkit-box-shadow: none;
    box-shadow: none;
    border-bottom: 1px solid rgba(34, 36, 38, 0.1);
    -webkit-transition: background 0.1s ease, border-color 0.1s ease;
    transition: background 0.1s ease, border-color 0.1s ease;
}
.layoutHeaderSearchBox .category .name {
    width: 100px;
    background: transparent;
    font-family: 'Lato', 'Helvetica Neue', Arial, Helvetica, sans-serif;
    font-size: 1em;
    float: 1em;
    float: left;
    padding: 0.4em 1em;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.4);
}
.layoutHeaderSearchBox .category .result {
    background: #FFFFFF;
    margin-left: 132px;
    border-left: 1px solid rgba(34, 36, 38, 0.15);
    border-bottom: 1px solid rgba(34, 36, 38, 0.1);
    -webkit-transition: background 0.1s ease, border-color 0.1s ease;
    transition: background 0.1s ease, border-color 0.1s ease;
    padding: 0.85714286em 1.14285714em;
    cursor: pointer;
    display: block;
    overflow: hidden;
    font-size: 1em;
    color: rgba(0, 0, 0, 0.87);
    line-height: 1.33;
    border-bottom: 1px solid rgba(34, 36, 38, 0.1);
}
.layoutHeaderSearchBox .category .result .content{
    text-align: left;
}
.show{
    display:block;
}
.layout-header-service-search{
    background-color:#fff;
}
</style>