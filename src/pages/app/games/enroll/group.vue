<template>
    <f7-page>
        <f7-navbar title="选择组别" back-link="Back"></f7-navbar>
        <!--<f7-card>-->
            <!--<f7-card-header>少年组</f7-card-header>-->
            <!--<f7-card-header>幼儿组</f7-card-header>-->
            <!--<f7-card-header>公开组</f7-card-header>-->
        <!--</f7-card>-->
      <f7-list>
        <f7-list-item
          title="少年组"
          link
          v-for="n in 5"
          :key="n"
        >
        </f7-list-item>
      </f7-list>
        <f7-row tag="p">

            <f7-button class="col" raised fill>确定</f7-button>
        </f7-row>
    </f7-page>
</template>

<script>
    export default {}
</script>
