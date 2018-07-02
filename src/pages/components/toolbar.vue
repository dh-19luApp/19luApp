<template>
    <f7-toolbar strong tabbar labels class="toolbar-bottom-md">
        <a v-for="(item,key) in items" :href="item.url" data-ignore-cache="true" :class="['col-auto link',{'disabled':isActive(item.name)}]">
            <i class="icon f7-icons">{{item.icon}}<span class="badge bg-red" v-show="item.count > 0">{{item.count}}</span></i>
            <span class="">{{item.text}}</span>
        </a>
    </f7-toolbar>
</template>
<script>
    import { mapGetters, mapActions } from 'vuex'
    var data = {
        active_class:'',
    };
    export default {
        props: ['active'],
        data(){
            return data;
        },
        methods:{
            ...mapActions({
              'refresh':'getAllItems',
            }),
            isActive (name) {
                return this.current.name == name;
            }
        },
        computed: {
            ...mapGetters({
                items: 'allItems',
                current: 'currentItem',
            }),
        },
        created () {
            this.refresh();
            this.$store.commit('setCurrentItem',{path: this.$f7route.url});
            if (this.current)
            this.$store.commit('clearCount',{name:this.current.name});
        }
    }
</script>
<style>

</style>