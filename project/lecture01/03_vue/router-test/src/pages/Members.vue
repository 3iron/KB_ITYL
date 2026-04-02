<template>
  <div class="card card-body">
    <h2 class="m-4">이날치 그룹 Members</h2>
    <div class="container">
      <div class="row">
        <!-- 한 가로 줄에 컬럼 지정 가능. 최대 크기 6개, 중간 3-4개,
         최소 2개 이상 설정 가능(부트스트랩) -->
        <div
          class="co-6 col-xs-6 col-sm-4 col-md-3 col-lg-2"
          v-for="m in members"
          :key="m.id"
        >
          {{ m.id }} {{ m.name }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import memebers from '@/members.json';

export default {
  name: 'Members',
  setup() {
    return { members };
  },
};
</script>
