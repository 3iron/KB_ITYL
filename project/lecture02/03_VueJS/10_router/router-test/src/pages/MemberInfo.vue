<template>
  <div class="card card-body">
    <h2>Member Info</h2>
    <div>
      경로 패턴 : /members/:id <br />
      요청 경로 : {{ currentRoute.fullPath }} <br />
      id 값 : {{ currentRoute.params.id }} <br />
    </div>

    <div className="mt-5">
      <!-- <img src="https://placehold.co/120x120" class="img" /> -->
      <img :src="member.photo" class="img" />
      <h4 class="mt-2">{{ member.name }}({{ member.role }})</h4>
      <p>{{ member.desc }}</p>
      <!-- <a class="fa fa-instagram m-1"></a> -->
      <a
        v-if="member.insta && member.insta !== ''"
        class="fa fa-instagram m-1"
        :href="member.insta"
      ></a>
      <a
        v-if="member.facebook && member.facebook !== ''"
        class="fa fa-facebook m-1"
        :href="member.facebook"
      ></a>
      <a
        v-if="member.youtube && member.youtube !== ''"
        class="fa fa-youtube m-1"
        :href="member.youtube"
      ></a>
      <br /><br />
      <router-link :to="{ name: 'members' }">멤버 목록으로</router-link>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import members from '@/members.json';
// 동적 파라미터 id를 얻어 해당 멤버의 정보 찾기
const currentRoute = useRoute();

// 10진법 문자로 파싱
const id = parseInt(currentRoute.params.id, 10);
console.log(id);

// 멤버 정보 조회
// 배열.find((요소) => 조건 ) : 조건이 true 라면 해당 요소 반환 및 종료
//                              없다면 undefined 반환
const member = members.find((mem) => mem.id === id);
console.log(members);
</script>
