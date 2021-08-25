//캐시 제목, 캐시할 파일 선언
const sCacheName = 'hello-pwa'; //캐시 제목
const aFilesToCache = [ // 캐시할 파일
    './', './index.html', './manifest.json', './icons/a.png', './favicon.ico'
];

//서비스 워커 설치하고 캐시 파일 저장
self.addEventListener('install', pEvent=>{ //PWA 설치
    console.log("Installed Service-Worker");
    pEvent.waitUntil(caches.open(sCacheName) //설치 될때까지 기다림
    .then(pCache => { //설치되면 캐시 저장
        console.log("Saved Files in Cache");
        return pCache.addAll("aFilesToCache");ㅁ
    }))
})

// 고유 번호를 할당받은 서비스 워커 작동
self.addEventListener('activate', pEvent=>{ //activate : 서비스 워커의 두번째 생애주기; 고유한 ID를 발급받아 브라우저에 성공적으로 등록되면 동작
    console.log("Service-Worker Executed");// 앱 업데이트 시 activate 호출
})
// 데이터 요청을 받으면 네트워크 또는 캐시에서 찾아 반환
self.addEventListener('fetch', pEvent=>{
    pEvent.respondWith(
        caches.match(pEvent.request)
        .then(response=>{
            if(!response){
                console.log("Request Data From Network", pEvent.request);
                return fetch(pEvent.request);
            }
            console.log("Request Data From Cache", pEvent.request);
            return response;
        }).catch(err => console.log(err))
    );
});