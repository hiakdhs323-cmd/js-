console.log("ㅎㅇ")

function App() {
    this.q = '멍청한';
    this.w = '친절한';
    this.e = '귀여운';
    this.r = '사랑스러운';
    this.t = '섹시한';
    this.y = '섹시한';
    this.u = '섹dd시한';
    this.i = '섹시ddddd한';
    this.o = '섹시ddddddddddd한';
    this.p = '섹시dddddddddddddddddddddd한';
    this.asdf = '이상해씨 같은!';
}
ver = new App();
console.log(App)


// Ai가 짜준 코드 (나중에 시간되면 배워볼거임)
// 1. HTML에 있는 root 영역 가져오기
const root = document.getElementById('root');

// 2. 필요한 요소들(입력창, 버튼, 결과창)을 JS로 생성하기
const nameInput = document.createElement('input');
nameInput.type = 'text';
nameInput.placeholder = '설정할 이름을 입력하세요.';

const submitBtn = document.createElement('button');
submitBtn.textContent = '설정하기';

const result = document.createElement('p');

// 3. 생성한 요소들을 root 안에 집어넣기
root.appendChild(nameInput);
root.appendChild(submitBtn);
root.appendChild(result);

// 4. 버튼 클릭 시 동작 설정
submitBtn.addEventListener('click', () => {
  const userName = nameInput.value.trim();

  if (userName === '') {
    alert('이름을 입력해주세요!');
    return;
  }

  // 입력받은 이름으로 원하는 작업 실행
  result.textContent = `반갑습니다, ${userName}님!`;
  
  // 입력창 비우기
  nameInput.value = '';
});

// const name = prompt('이름을 입력해주세요!')
//alert('안녕하세요 ' + name +'님! 만나서 반가워요!')