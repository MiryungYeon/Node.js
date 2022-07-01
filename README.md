# Node.js
***
## forever란?
Node.js는 오류가 생기면 종료되는 특징이 있어서 서버가 죽을 수도 있는 위험이 있는데, forever 명령어를 사용하면 오류 발생 시에도 자동으로 재실행
***
## forever 설치
```
npm install forever -g
```
***
## forever 실행
```
forever start app.js
```
