- - -
# 정성민의 Clone Codig - kakao
## 1. Clone 사이트 선택이유
---
> 현재 개발자들이 선호하는 우선순위 상위에 위치해 있는 kakao의 홈 페이지를 선정한 이유는 <br><br>
> 제가 생각할때 가장 보기 쉽고 접근성이 좋은 사이트이기 때문에 한번쯤은 Clone Coding을 진행하여 <br><br>
> 앞으로 제작하게 될 많은 사이트의 표준으로 잡고 개발하기에 가장 좋은 사이트 였다고 생각하여 <br><br>
> kakao 홈페이지 Clone Coding에 도전하게 되었습니다.
---
## 1.1. kakao 사이트 선택이유
---
> kakao는 App의 형태로 나오는 수많은 서비스들이 보기 쉽고 편하게 정리 되어있습니다.<br><br>
> 이러한 면모는 Web에서 사용할 때도 장점을 많이 가지고 있습니다.
> - App과 Web의 경계가 유연하게 연결되어 App사용자가 Web으로 넘어와 사용할때 괴리감을 줄여준다
> - 같은 서비스가 아니더라도 통일감있는 구성으로 적응이 쉽도록 도와준다
> - 적은 animation효과로 사용자가 느끼는 최대의 효과를 준다
>
> 이런 효과를 줄수 있습니다. 꼭 사이트의 특이성이 아니라 사용자의 편의를 위해 만들어진 사이트<br>
> 저는 그것이 kakao의 가장 큰 장점이라고 생각합니다.<br>
> 물론 모든 사이트가 그런것은 아니고 또 다른 회사의 사이트에서도 느낄수 있는 장점일수 있겠지만 <br>
> Clone Coding을 하기에 알맞은 게시판 형태의 반응형 사이트 라는 점 그리고 개발업계에서 대표적인 회사 라는 의미에서 kakao 홈페이지를 선택하게 되었습니다.

---
## 2. 개발과정
---
>## 1. CRA(Create React App)을 이용하여 React 환경구축
> -  간단한 Clone Coding 프로젝트 이기 때문에 CRA를 통해 개발환경을 구축하였습니다.
>> CRA는 사용하지 않는 기능들도 들어가기 때문에 최적화에는 용이하지 않은 방법이지만 간단한 Clone 프로젝트 이기 때문에 개발환경을 자동으로 설정해주는 CRA를 사용하였습니다.

>## 2. react-router-dom을 이용하여 Routing진행
> - App.js에 BrowserRouter를 이용하여 라우터 설정을 하고 메인 페이지와 잘못된 접근 404페이지 구현
>>NodeJS와 Express를 이용하여 서버를 구축하여 Routing설정을 호스팅으로 사용사용 할 수도 있지만 이 프로젝트는 Clone Coding으로 정적인 사이트를 업로드 하는 방식 이었기 때문에 최소한으로 Routing기능을 사용하기 위해 react-router-dom을 사용하였습니다.

>## 3. @emotion/styled를 사용하여 페이지 및 Component css 스타일 지정
> - .css 파일을 통한 스타일 지정이 아닌 emotion의 styled 패키지를 이용하여 css-in-js방식의 스타일 코드를 작성
>> - 일반 css파일 처럼 분리되어 가독성이 뛰어난 편은 아니지만 sass형식의 스타일 시트 작성이 가능하다.
>> - className 자동으로 부여되기 때문에 스타일이 겹치는 염려를 줄일수 있다.
>> - css code의 재사용이 편하다.

>## 4. Page와 Component로 구분을 정하고 제작
> - Page와 Component는 분류를 하지 않고 사용하더라도 문제가 없지만 이후 요소의 추가 혹은 유지보수시 구분이 편하도록 분리하여 진행
>> - Component는 다른 화면으로 넘어가더라도 재사용 빈도가 높거나 혹은 정적인 요소들 위주로 분류하였다.
>> - Page는 화면을 구성할때 특정 페이지에서만 로드되는 요소 혹은 동적으로 변경이 되는 경우를 위주로 분류 하였다.

---
## 3. 개발이후 생각한 사이트 개선점 & 배운점
---
## 개선점
> 1. Footer의 subinfo
> - subinfo는 해당 아이템을 클릭하여 열수 있지만 닫는것 또한 해당 아이템을 클릭 또는 같은 기능을 가진 다른 아이템을 누름으로써 닫게 되어있다. 이는 보통 사람들이 외부를 클릭해서 닫는 방식까지는 고려하지 않은 부분이기 때문에 이부분은 익숙하지 않을 경우 당황할 수 있다고 생각합니다. 개선할점은 nav에서 사용한것 처럼 rollup을 이용하면 해결할 수 있습니다.
## 배운점
> 1. grid와 sticky를 이용한 게시판 형태
> - 게시판은 데이터를 기반으로 정적인 페이지를 생성하기 때문에 사이트마다 의외성을 주기 힘들지만 그리드를 이용하여 반응형으로 만들수 있고 sticky를 이용하여 animation이 아닌 부드러운 움직임을 만들어 리소스를 줄이고 자연스러운 형태를 만들수 있다는 것을 배웠다.

> 2. 

---
### ◤ 정성민의 다른 프로젝트 ◢
| Project Name              | Source Code           | Original Site             |
| :--                       | :--:                  | :--                       |
|[포트폴리오](https://minicastle.github.io/portpolio/)|||
|[Colco(Clone)](https://minicastle.github.io/Clone-Colco/)|[git](https://github.com/minicastle/Clone-Colco)|[Colco(origin)](https://colco.app/)|
|[Jolly-Flow(Clone)](https://minicastle.github.io/Clone-JollyFlow/)|[git](https://github.com/minicastle/Clone-JollyFlow)|[Jolly-Flow(origin)](https://jollyflow.webflow.io/)|
|[kakao(Clone)](https://minicastle.github.io/Clone-Kakao/)|[git](https://github.com/minicastle/Clone-kakao)|[kakao(origin)](https://www.kakaocorp.com/page/)|

> [정성민의 GitHub](https://github.com/minicastle)

> ### 이메일 링크: <minicastle@kakao.com>
---
## ※개발에 사용된 언어 및 npm package※
---
|Package Name                 	| version  	    |
| :--                         	| :--:     		|
|@emotion/react 		        |^11.10.5		|
|@emotion/styled 		        |^11.10.5		|
|@testing-library/jest-dom 	    |^5.14.1		|
|@testing-library/react 	    |^13.0.0		|
|@testing-library/user-event    |^13.2.1		|
|gh-pages 		                |^4.0.0		    |
|react 			                |^18.2.0		|
|react-dom 		                |^18.2.0		|
|react-icons 		            |^4.7.1		    |
|react-router-dom 		        |^6.6.1		    |
|react-scripts 		            |5.0.1		    |
|web-vitals 		            |^2.1.0		    |
---