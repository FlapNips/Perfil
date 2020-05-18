<template>
    <!--/.Navbar-->
    <mdb-side-nav-2
      :value="true"
      :data="navigation"
      push
      v-show="teste"
      slim
      :slim-collapsed="collapsed"
      @toggleSlim="collapsed = $event"
      sidenav-class="unique-color-dark"
      color="white"
    >
      <div slot="header" class="row p-0 m-0">
          <mdb-avatar :class="collapsed ? 'justify-content-center' : 'justify-content-start'" class="align-items-center p-0 m-1">
            <img
              src="https://mdbootstrap.com/img/Photos/Avatars/avatar-7.jpg"
              class="img-fluid rounded-circle z-depth-1 m-1"
            /> 
          </mdb-avatar>
          <p class="m-0 my-auto col-3 p-0" style="flex: 0 2 auto" v-show="!collapsed">
            <strong>
              <div class="col-6">
               @Usuário
              <mdb-icon color="success" icon="circle" class="ml-2" size="sm"/>
              </div>
            </strong>
          </p>
      </div>
        <hr class="col-7 mx-auto"/>
      <div>
        <b-nav vertical class="">
          <b-nav-item hamburger>Active</b-nav-item>
          <b-nav-item>Link</b-nav-item>
          <b-nav-item>Another Link</b-nav-item>
          <b-nav-item disabled>Disabled</b-nav-item>
        </b-nav>
      </div>

        <div slot="navigation"></div>
        <div slot="navigation" class=""></div>
        <mdb-btn
          tag="a"
          class="mx-0"
          size="sm"
          floating
          :icon="collapsed ? 'chevron-right' : 'chevron-left'"
          icon-class="white-text"
          @click="collapsed = !collapsed"
        ></mdb-btn>

    </mdb-side-nav-2>
</template>

<script>
  import {
    mdbSideNav2,
    mdbAvatar,
    mdbBtn,
    mdbIcon
  } from "mdbvue";

  export default {
    name: "DoubleNavigationPagev1",
    components: {
      mdbSideNav2,
      mdbAvatar,
      mdbBtn,
      mdbIcon
    },
    data() {
      return {
        show: true,
        collapsed: false,
        teste: true,
        navigation: [
          {
            name: "Double navigation",
            icon: "bars",
            children: [
              {
                name: "Version 1",
                to: "/navigation/pro/double-navigation-v1"
              },
              {
                name: "Version 2",
                to: "/navigation/pro/double-navigation-v2"
              },
              {
                name: "Version 3",
                to: "/navigation/pro/double-navigation-v3"
              },
              {
                name: "Version 4",
                to: "/navigation/pro/double-navigation-v4"
              },
              {
                name: "Version 5",
                to: "/navigation/pro/double-navigation-v5"
              },
              {
                name: "Version 6",
                to: "/navigation/pro/double-navigation-v6"
              }
            ]
          },
          {
            name: "Getting started",
            icon: "mdb",
            fab: true,
            children: [
              {
                name: "Quick start",
                href:
                  "https://mdbootstrap.com/docs/vue/getting-started/quick-start/"
              },
              {
                name: "Technical Support",
                href: "https://mdbootstrap.com/support/"
              }
            ]
          },
          {
            name: "Documentation",
            icon: "graduation-cap",
            href: "https://mdbootstrap.com/docs/vue/"
          }
        ]
      };
    }
  };
</script>

<style>
#img {
  position: relative;
}
.banner {
  left: 0;
  top: 0;
  position: absolute;
}
.view {
background: url("https://mdbootstrap.com/img/Photos/Others/img (55).jpg")
    no-repeat center center;
background-size: cover;
height: 100%;
}

.navbar i {
cursor: pointer;
color: white;
}
</style>