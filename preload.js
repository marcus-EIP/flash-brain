// 로드되기 전에 페이지 변수를 설정합니다.
webFrame.executeJavaScript('window.foo = "foo";')
  
// 로드된 페이지에서는 이것에 접근할 수 없습니다, 이 컨텍스트에서만
// 접근이 가능합니다.
window.bar = 'bar'

document.addEventListener('DOMContentLoaded', () => {
  // window.foo는 메인 콘텍스트에서만 접근할 수 있기 때문에 'undefined' 가
  // 출력됩니다.
  console.log(window.foo)

  // window.bar는 이 콘텍스트에서 사용할 수 있기 때문에 'bar'가 출력됩니다.
  console.log(window.bar)
})