//button에 click 이벤트 - 모든 버튼에 이벤트를 걸어야 하기 때문에 for loop이용
const buttons = document.querySelectorAll('button');
for (const button of button) {
  button.addEventListener('click', function () {
    //선택된 button의 dataset.target명의 offsetTop을 구하는 변수를 선언한다.
    const scrollPosition = document.querySelector(this.dataset.target).offsetTop;

    //scroll을 offsetTop으로 이동시킨다.
    window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
  });
}