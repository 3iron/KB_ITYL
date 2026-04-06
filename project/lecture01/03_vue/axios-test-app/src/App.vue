<template>
  <div>
    <h2>콘솔을 확인합니다.</h2>
  </div>
</template>
<script setup>
// axios로 json-server 접속 후 todos의 crud 작업
import axios from 'axios';

const requestAPI = () => {
  const url = 'http://localhost:3000/todos/1';
  // 비동기 함수 : 동시에 실행되면서 오래 걸림 -> 좋지 못함
  // let result = axios.get(url);
  // console.log(result);
  // then : 제어
  // async, awiat : then 과 같은 역할
  // catch : 에러가 발생했을 때도 알려줌
  // axios.get(url).then(GET한 이후 결과를 처리할 내용).catch(에러가 발생했을 때 처리할 내용);
  axios.get(url).then((response) => {
    console.log(response);
    console.log('===============================');
    console.log(response.data);
    console.log('# 응답객체 : ', response);
  });
};
requestAPI();
</script>
