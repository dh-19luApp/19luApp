<template>
  <f7-page style="background-color: #f5f5f5">
    <f7-navbar title="选择团体" back-link="Back"></f7-navbar>
    <!--<f7-card>-->
    <!--<f7-card-header>小牛队</f7-card-header>-->
    <!--<f7-card-header>小牛队</f7-card-header>-->
    <!--<f7-card-header>小牛队</f7-card-header>-->
    <!--<f7-card-header>小牛队</f7-card-header>-->
    <!--</f7-card>-->
    <f7-list form style="background-color: white;border-bottom: 1px solid #e5e5e5;border-top: 1px solid #e5e5e5;margin-top: 10px;">
      <f7-list-item

        name="my-checkbox"
        title="小牛队"
        v-for="n in 4"
        :key="n"
        :value="n"
      ></f7-list-item>
      <f7-list-item
              link="/game/enroll/create/"
      >
        <f7-icon f7="add_round"></f7-icon><p style="margin:0px;padding-right: 68%;">创建团体</p>
      </f7-list-item>
    </f7-list>
    <f7-row tag="p" style=";margin: 20px;">

      <f7-button class="col" raised fill style="border-radius: 8px;font-size: 18px;">确定</f7-button>
    </f7-row>
  </f7-page>
</template>

<script>
  export default {}
</script>
