
<template>
    <f7-page>
        <f7-navbar title="赛事">
            <f7-nav-right>
                <f7-link href="">
                    <f7-icon f7="search"></f7-icon>
                </f7-link>
            </f7-nav-right>
        </f7-navbar>
        <div></div>
    </f7-page>
</template>

<script>
    export default {
        data(){
            return{

            }
        },

        beforeMount(){
            this.$store.dispatch('user/getAllData');
        },
        computed:{
            data:function () {
                return this.$store.state.user.all;

            },

        },
    }
</script>
