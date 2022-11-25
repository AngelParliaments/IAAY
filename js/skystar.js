// poem
var words=[
    '曾经沧海难为水',
    '除却巫山不是云',
    '愿得一心人',
    '白头不相离',
    '玲珑骰子安红豆',
    '入骨相思知不知',
    '只愿君心似我心',
    '定不负相思意',
    '平生不会相思',
    '才会相思',
    '便害相思',
    '十年生死两茫茫',
    '不思量 自难忘',
    '两情若是久长时',
    '又岂在朝朝暮暮',
    '入我相思门',
    '知我相思苦',
    '问世间情为何物',
    '直教生死相许',
    '执子之手 与子偕老',
    '直道相思了无益',
    '未妨惆怅是清狂',
    '天长地久有时尽',
    '此恨绵绵无绝期',
    '酒入愁肠化作相思泪',
    '一种相思两处闲愁',
    '秋风清秋月明',
    '落叶聚还散',
    '寒鸦栖复惊',
    '长相思兮长相忆',
    '短相思兮无穷极',
    '取次花丛懒回顾',
    '半缘修道半缘君',
    '愿得一人心',
    '白头不相离',
    '死生契阔 ',
    '与子成说',
    '执子之手 与子偕老',
    '日出东方落于西',
    '始于你也终于你',
    '龙应该藏在云里',
    '你应该藏在心里',
    '玫瑰到了花期 ',
    '我很想你',
    '春风十里扬州路',
    '卷上珠帘总不如',
    '愿我如星君如月','夜夜流光相皎洁',
    '假装看不见','余光千百遍'



];
function randomNum(min,max){
    var num = (Math.random()*(max-min+1)+min).toFixed(2);
    return num;
}
function init(){
    let container = document.querySelector('.container');
    let f = document.createDocumentFragment();
    words.forEach(w=>{
    let word_box = document.createElement('div');
    let word = document.createElement('div');
        word.innerText = w;
        word.classList.add('word');
        word.style.color = '#BAABDA';
        word.style.fontFamily = '楷体';
        word.style.fontSize = '20px'
        word_box.classList.add('word-box');
        word_box.style.setProperty("--margin-top",randomNum(-40,20)+'vh');
        word_box.style.setProperty("--margin-left",randomNum(6,35)+'vw');
        word_box.style.setProperty("--animation-duration",randomNum(8,20)+'s');
        word_box.style.setProperty("--animation-delay",randomNum(-20,0)+'s');
        
        word_box.appendChild(word);
        f.appendChild(word_box);


    })
    container.appendChild(f);
}
window.addEventListener('load',init);
let textone = document.querySelector('.textone').querySelector('h1');
      let texttwo = document.querySelector('.texttwo').querySelector('h1');
      let textthree = document.querySelector('.textthree').querySelector('h1');
     

      setTimeout(function(){
        textone.innerHTML = '今晚，整片星空将为你一人闪烁';
          textone.style.color = '#E8F9FD';
          textone.style.fontFamily = '楷体'
          texttwo.style.color = '#E8F9FD';
          texttwo.style.fontFamily = '楷体'
          textthree.style.color = '#E8F9FD';
          textthree.style.fontFamily = '楷体'
          texttwo.innerHTML = '';
      },28000)
      setTimeout(function(){
        textone.innerHTML = '你下午四点钟来';
        texttwo.innerHTML = '，那么从三点钟起，';
        textthree.innerHTML = '我就开始感到幸福';
        
      },112500)


 
