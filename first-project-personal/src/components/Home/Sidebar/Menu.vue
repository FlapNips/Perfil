<template>
  <div>
    <b-navbar
      v-for="menus in navigation" :key="menus.name"
      id="menu"   
      toggleable
      class="row m-0 p-0">
        <b-nav-toggle   
          class="mx-auto m-1 p-0 col-12"
          :target="menus.name">
            <b-button
              data-toggle="tooltip"
              :title="menus.name"
              class="buttons-menu mx-auto container-fluid py-2 m-0 p-0"
              variant="primary">
              <div class="col-10 m-0 p-0">
                {{menus.name}}
              </div>
              <b-icon 
              :icon="menus.icon" 
              class="m-0 col-2justify-content-center p-2"
              />
            </b-button>
        </b-nav-toggle>

        <b-collapse :id="menus.name" is-nav v-for="submenus in menus.children"  :key="submenus.name">
          <b-navbar-nav class="ml-auto" >
            <b-nav-item>{{submenus.name}}</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
    data() {
        return {
            navigation: [
          {
            name: "Pessoal",
            icon: "alarm-fill",
            children: [
              {
                name: "Submenu 1",
                to: "/navigation/pro/double-navigation-v1"
              },
              {
                name: "Submenu 2",
                to: "/navigation/pro/double-navigation-v2"
              },
              {
                name: "Submenu 3",
                to: "/navigation/pro/double-navigation-v3"
              },
              {
                name: "Submenu 4",
                to: "/navigation/pro/double-navigation-v4"
              },
              {
                name: "Submenu 5",
                to: "/navigation/pro/double-navigation-v5"
              },
              {
                name: "Submenu 6",
                to: "/navigation/pro/double-navigation-v6"
              }
            ]
          },
          {
            name: "Curso",
            icon: "book",
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
            name: 'Universidade',
            icon: 'graduation-cap',
            children: [
            {
              name: 'Novidades',
            }
            ]
          },
          {
            name: "Parceiros",
            icon: "",
            children: [
              {
                name: "Parceiros"
              }
            ]
          },
          {
            name: "Configurações",
            icon: "wrench",
            children: [
              {
              name: 'Privacidade'
              }
            ]
          },
          
        ]
      };
        }
  }
</script>

<style>

</style>