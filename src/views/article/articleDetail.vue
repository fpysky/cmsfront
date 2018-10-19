<template>
    <div>
        <Header></Header>
        <div class="container clearfix">
            <div class="page_bt">
                <p class="pbt" v-text="article.title">重阳节习俗知多少？快来挑战一下吧！</p>
                <p class="pwz">发布时间：{{article.created_at}}  来源： {{article.source}}
                </p>
            </div>
            <!-- <h2 v-text="article.title"></h2> -->
            <div v-html="article.content">
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Header from '@/views/layout/Header'
import Footer from '@/views/layout/Footer'
import { getArticle } from '@/api/article'
export default {
    name:'articleDetail',
    components: {
        Header,
        Footer
    },
    data(){
        return {
            article:{},
        }
    },
    created(){
        this.getArticle()
    },
    methods:{
        getArticle(){
            getArticle({id:this.$route.query.id}).then(res => {
                this.article = res.data.list
            }).catch(error => {
                this.$notify.warning(error.response.data.message)
            })
        },
    }
}
</script>
<style scoped>
.container{
    width: 1000px;
    margin-right: auto;
    margin-left: auto;
}
.page_bt {
    width: 90%;
    margin: 15px auto;
    border-bottom: #CCC 1px dotted;
    font-size: 16px;
    text-align: center;
    margin-bottom: 20px;
} 
.pbt {
    line-height: 40px;
    font-size: 28px;
    color: #000;
    line-height: 80px;
    font-family: "微软雅黑";
}
</style>
