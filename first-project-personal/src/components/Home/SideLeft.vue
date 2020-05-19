<template>
    <!--/.Navbar-->
    <div>
      <div slot="header" class="container-fluid m-0 p-2 h-100">
        <div
          class="row m-0 p-0 align-items-center my-2"
          :class="collapsed ? 'col-12' : 'col-12'"
        >
          <div :class="collapsed ? 'col-12' : 'col-6'" class="p-0 m-1">
            <img
              src="https://mdbootstrap.com/img/Photos/Avatars/avatar-7.jpg"
              class="img-fluid rounded-circle z-depth-1"
            />
          </div>
          <p
            class="m-0 col-5 p-0"
            style="flex: 0 2 auto"
            v-show="!collapsed"
          >
            <strong>
              <div class="col-6">
              @Usuário
              <mdb-icon
              color="success"
              icon="circle"
              class="ml-2"
              size="sm"
              />
              </div>
            </strong>
          </p>
        </div>
        <hr class="col-7 mx-auto"/>

        <!-------- MENU -------->
        <b-navbar 
          v-for="menus in navigation" :key="menus.name"
          id="menu" 
          class="row m-0 p-0">
            <b-navbar-brand 
              class="mx-auto m-1 p-0"
              :class="collapsed ? 'container-fluid' : 'col-12'">
              <b-button 
                class="buttons-menu mx-auto container-fluid py-2 m-0 p-0"
                >
                <mdb-icon 
                :icon="menus.icon" 
                :class="collapsed ? 'col-12' : 'col-3'"
                class="m-0 pl-2 text-left"
                />
                <div class="col-9 m-0 p-0" v-show="!collapsed">
                  <b-nav-toggle :target="menus.name">{{menus.name}}</b-nav-toggle>
                </div>
              </b-button>
            </b-navbar-brand>

            <b-navbar-toggle>
            </b-navbar-toggle>

            <b-collapse :id="menus.name" v-for="submenus in menus.children" :key="submenus.name" class="col-12">
              <b-navbar-nav>
                <b-nav-item>{{submenus.name}}</b-nav-item>
              </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <!------- BUTTON SIDE ------->
      </div>
      <div class="mt-5 bottom justify-content-center">
      <b-button @click="collapsed = !collapsed">
        <mdb-icon
          class="mx-0"
          floating
          :icon="collapsed ? 'chevron-right' : 'chevron-left'"
        />
      </b-button>
      </div>
    </div>
</template>

<script>
  import {
    mdbIcon
  } from "mdbvue";

  export default {
    name: "DoubleNavigationPagev1",
    components: {
      mdbIcon
    },
    data() {
      return {
        show: true,
        collapsed: false,
        teste: true,
        navigation: [
          {
            name: "Pessoal",
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
            name: "Faculdade",
            icon: "mdb",
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
            name: "Configurações",
            icon: "graduation-cap",
            href: "https://mdbootstrap.com/docs/vue/"
          }
        ]
      };
    }
  };
</script>

<style>
.buttons-menu {
  height: 3em;
}
#menu {
  background-color: var(--first-color);
  box-shadow: none;
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