// 시작 진입점(Entry Point) : 프로그램이 처음 시작되는 시작 파일
import { createApp } from 'vue'; // Vue에서 앱을 만들 수 있는 함수 가져오기
// import App from './App.vue'; // 기본 컴포넌트 사용
// import App from './App2.vue'; // 객체를 이용한 props 전달
// import App from './App3.vue'; // props 유효성 검사
// import App from './App4.vue'; // 사용자 정의 이벤트를 이용한 정보 전달
import App from './App4-2.vue'; // 이벤트 유효성 검증

// 전역 컴포넌트 등록
// import CheckboxItem from './Components/CheckboxItem.vue';

createApp(App).mount('#app');
// createApp(App).component('CheckboxItem', CheckboxItem).mount('#app');
// App.vue를 기반으로 Vue 앱을 만들어서
// index.html에 있는 #app인 요소에 붙이기(mount)
