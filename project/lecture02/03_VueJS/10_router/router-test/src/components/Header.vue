<template>
  <nav class="navbar navbar-expand-md bg-dark navbar-dark mt-2">
    <span class="navbar-brand">이날치(LeeNalChi)</span>
    <button class="navbar-toggler" type="button" @click="changeIsNavShow">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div :class="navClass">
      <!-- :class="navClass" -> navClass 변수에 들어있는 값을 class 속성 값으로 사용 -->
      <ul class="navbar-nav">
        <li class="nav-item">
          <!-- router-link : 라우터 링크 태그 (a태그 역할), to 속성에 이동할 경로 지정 -->
          <!-- <router-link class="nav-link" to="/members">멤버</router-link> -->
          <router-link class="nav-link" :to="{ name: 'members' }"
            >멤버</router-link
          >
          <!-- :to="{ name: 'members' }
           -> 라우터 name을 사용하여 경로 지정하기 
           -> 경로가 바뀌어도 이름은 그대로이기 때문에 코드 수정 안 해도 됨
            -->
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
import { reactive, computed } from 'vue';

export default {
  setup() {
    const state = reactive({ isNavShow: false });

    const navClass = computed(() =>
      state.isNavShow
        ? 'collapse navbar-collapse show'
        : 'collapse navbar-collapse',
    );
    const changeIsNavShow = () => {
      state.isNavShow = !state.isNavShow;
    };

    return { state, changeIsNavShow, navClass };
  },
};
</script>
<style></style>
