import { createWebHistory, createRouter } from "vue-router";
import List from './components/ListComp.vue';
import Home from './components/HomeComp.vue';
import Detail from './components/DetailComp.vue';
import Author from './components/AuthorComp.vue';
import Comment from './components/CommentComp.vue';

const routes = [
  {
    path: "/detail/:id",
    component: Detail,
    children: [
      {
        path: "author",
        component: Author,
      },
      {
        path: "comment",
        component: Comment,
      },
    ]
  },
  {
    path: "/list",
    component: List,
  },
  {
    path: "/",
    component: Home,
  },
  {
    path: "/:anything(.*)",
    component: Home,
  },  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 