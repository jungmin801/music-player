# Music Web Player
![메인화면](https://github.com/jungmin801/music-player/assets/130200440/e3f3d119-664b-40b7-9225-e973966e8764)

## 1. 프로젝트 소개
- 가지고 있는 mp3 파일을 웹에서 재생할 수 있는 음악 웹 플레이어입니다.
- 서버와 데이터베이스는 따로 구축하지 않았으며, 오로지 기능 구현을 목적으로 했습니다.

## 2. 실행 방법
- 저작권으로 인해 이미지와 mp3 파일은 업로드하지 않았습니다.
- 음원에 대한 정보는 수기로 입력하여 json파일로 생성했습니다. 가지고 있는 mp3파일의 파일명을 아래와 같이 변경하시거나, json 파일을 직접 수정하여 재생해야 합니다.

  ![스크린샷 2023-10-12 161555](https://github.com/jungmin801/music-player/assets/130200440/c9863f78-b4f8-4342-814e-4328071c4308)
  
- 이미지와 mp3 파일을 경로를 다음과 같이 설정합니다.

  **이미지 파일 경로**
  ```
  public/img/이미지.jpg
  ```

  **mp3 파일 경로**
  ```
  public/assets/음원.mp3
  ```

## 3. 주요 기능
- 음악 재생, 일시정지, 이전 곡(다음 곡)으로 이동, 재생목록 셔플, 다시 재생, 볼륨 조절 기능
  ![basicfuction](https://github.com/jungmin801/music-player/assets/130200440/70fabbd2-0189-42f4-8315-11568bff989d)

- 타임라인 및 남은 재생 시간을 화면에 표시
- 재생목록 접기/펼치기
- 반응형 
  ![반응형2](https://github.com/jungmin801/music-player/assets/130200440/d16a8a1c-a102-4f26-9b87-fc8e280c0ab3)
  ![반응형1](https://github.com/jungmin801/music-player/assets/130200440/929ffe05-5665-46e4-b425-cab56b3c83d3)
