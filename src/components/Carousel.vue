<template>
    <div class="carousel">
        <div class="slide-text" v-if="showText">
            {{textSlice}}
        </div>
        <div class="slide">    
            <img id="img-slide" :src="source + image">
        </div> 
    </div>
</template>
<script>
export default {
    name: 'Carousel',
    props:['lstImages', 'autoplay', 'source', 'infos', 'showText'],
    data(){
        return{
            image:undefined,
            textSlice:undefined,
            indexImage:0,
        }
    },
    created(){    
        this.image = this.lstImages[this.indexImage];
        this.textSlice = this.infos[this.indexImage];
    },
    methods:{

    },
    mounted(){
        setInterval(() => {
            if(this.indexImage < this.lstImages.length -1){   
                this.indexImage++;
            }else{    
                this.indexImage = 0;
            }

            this.image = this.lstImages[this.indexImage];  
            this.textSlice = this.infos[this.indexImage];
        }, 10*1000);
    }
}
</script>
<style lang="scss" scoped>
    @import '../../public/css/carousel';
</style>
