//<1. 정규표현식>
pattern = /a/;

//    1. 기본 문법
//추출
console.log(pattern.exec('abcde'));

//테스트
console.log(pattern.test('abcde'));

//    2.문자열의 정규표현식
var str = 'abced';
console.log(str.match(pattern));

//문자열 치환
console.log(str.replace(pattern,'A'));


//    3. 옵션
var str = 'abcdeaA';
var patternX = /a/;
console.log(str.match(patternX));

//소문자,대문자 match
var patternI = /a/i;
console.log(str.match(patternI))

//여러개 match
var patternG = /a/g;
console.log(str.match(patternG))


//    4. 캡쳐
pattern = /(\w+)\s(\w+)/;
str = "coding everyday";
var result = str.replace(pattern,'$2,$1');
console.log(result);


//    5. 치환 
//url->html tag 예제
var urlPattern = /\b(?:https?):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*/gim;
var content = '제 블로그 주소는 http://esthevely.tistory.com 입니다. 네이버 : http://naver.com 입니다. ';
var result = content.replace(urlPattern, function(url){
    return '<a href="'+url+'">'+url+'</a>';
});
console.log(result);
