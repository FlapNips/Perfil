<template>
  <b-container col id="main-layout" fluid class="m-0 p-0 h-100"
    @mouseenter="collapsed = true">
      <div>
      
      </div>
      <b-sidebar :visible="collapsed" no-header-close
        no-close-on-esc width="200px">
        <div @mouseleave="collapsed = false" no-header-close="true" class="h-100">
          <!-------- HEADER -------->
              <Header/>
          <!-------- MENU -------->
              <Menu/>
          <!-------- FOOTER -------->
        </div>
      </b-sidebar>
  </b-container>
</template>
<script>
import Menu from './Menu.vue'
import Header from './Header.vue'

  export default {
    name: "SideBarMenu",
    components: {
      Menu,
      Header
    },
    data() {
      return {
        show: true,
        collapsed: true,
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
    },
      computed: {
        showSidebar() {
          return console.log('foi' + this.isHovering)
        }
      }
  };
</script>

<style scoped>

#side {
  width: 5%;
}
#fix-menu {
  background-color: gray;
  min-width: max-content;
  z-index: 0;
}
#collapseOne {

}
.icon-fix-menu {
  min-width: max-content!important;
  min-height: max-content!important;
}
</style>