let questions = [
  //1 РП И НОНРП
  [
    {
      question: 'Вы сидите с вашим коллегой в ООС канале дискорда. Он едет по трассе один и его останавливают, чтобы ограбить. Он просит вас приехать. Поедете ли вы ему помогать?',
      variants: ['Да, коллегам надо помогать.', 'Да, если нападающих меньше.', 'Да, если я понимаю, что успею.', 'Нет.'],
      trueAnswer: ['3']
    },
    {
      question: 'Вы патрулируете на трассе. Ваш начальник пишет в /fb рацию "СТРОЙ НА ЗП, КОГО НЕ БУДЕТ -- RR". Что вы будете делать?',
      variants: ['Поеду в LSSD и встану в строй.', 'Напишу в /fb "Не обязан".', 'Напишу в рацию, что не могу приехать.', 'Продолжу патрулировать.'],
      trueAnswer: ['2', '4']
    },
    {
      question: 'Заместителя шерифа похитили. В личные сообщения в дискорде он отправил вам место, где он находится, и потребовал организовать спасательную операцию. Что вы будете делать?',
      variants: ['Тактично откажусь.', 'Соберу всех на ЗП и мы вместе поедем.', 'Дождусь момента, когда запросят переговорщика, и вместе с коллегами поеду пушить.', 'Дождусь требований от бандитов и дальше буду решать, пушить или нет.'],
      trueAnswer: ['1', '4']
    }
  ],
  //2 ПОЛУЧЕНИЕ ИНФОРМАЦИИ С ПОМОЩЬЮ ОТЫГРОВОК
  [
    {
      question: 'Напротив вас стоит сотрудник FIB  в форме с id 750. Вам нужно узнать номер его нашивки. Как вы это сделаете?',
      variants: ['Попрошу показать нашивку.', '/do Что написано на нашивке @750?', '/do Какой номер написан на нашивке @750?', '/me внимательно присмотрелся к нашивке @750'],
      trueAnswer: ['1', '2', '3']
    },
    {
      question: 'Вы стоите в парке. К вам подходит гражданин, показывает вам свой рисунок и просит сказать, что вы на нем видите. Как вы можете узнать, что изображено на рисунке?',
      variants: ['Признаюсь, что не понимаю, что на нем нарисовано и попрошу гражданина самому рассказать.', '/me взял рисунок и начал пристально на него смотреть', '/do Что изображено на рисунке?', '/do На рисунке изображен хомяк?'],
      trueAnswer: ['1', '3']
    },
    {
      question: 'Перед вами отыгровки. С помощью какой отыгровки вы можете получить информацию, которую сможете использовать в IC?',
      variants: ['/do Что лежит в кармане у Мари?', '/todo Когда вы родились? *улыбнувшись', '/do Сколько родинок на лице у человека напротив?', '/try поднял ящик с материалами'],
      trueAnswer: ['2', '3', '4']
    }
  ],
  //3
  [
    {
      question: 'Вы едете по трассе, за вами гонится 3 машины с грабителями. Пытаясь вас остановить, они прострелили вам колесо и заднее стекло. Что вы будете делать?',
      variants: ['Продолжу уезжать, моя машина быстрее их.', 'Остановлюсь на обочине и буду ждать их дальнейшие действия.', 'Осталось всего 5 километров до ШД, я смогу спастись там.', 'Съеду с трассы и попробую оторваться по горам.'],
      trueAnswer: ['2']
    },
    {
      question: 'Вы поехали в одиночный патруль и остановились на обочине, чтобы поесть. К вам подъехала машина с двумя грабителями. Они хотят вас ограбить. Что вы будете делать?',
      variants: ['Перестану есть и буду ждать их дальнейшие действия.', 'Быстро заведу машину и уеду.', 'Достану оружие и постараюсь отбиться.', 'Быстро запрошу помощь в рацию.'],
      trueAnswer: ['1', '3', '4']
    },
    {
      question: 'Вас сдуло ветром из штата. Вы прилетели обратно и оказались на трассе без формы. К вам подъехали двое граждан без масок и оружия на такси и попросили поднять руки за голову, чтобы они могли вас ограбить. Что вы сделаете?',
      variants: ['Подниму руки за голову.', 'Достану оружие и попытаюсь их затулить.', 'Помолюсь богам, чтобы они спасли меня.', 'Убегу от них в безопасное место.'],
      trueAnswer: ['3', '4']
    }
  ],
  //4 Адекватность
  [
    {
      question: 'В холле ШД стоит гражданин с розовыми волосами. Вам не нравится цвет его волос. Что вы будете делать?',
      variants: ['Задержу его, ходить с такими волосами это хулиганство.', 'Подойду и уточню, почему он тут стоит и нужна ли ему помощь.', 'Агрессивно начну расспрашивать, что он тут забыл. В случае взаимной грубости задержу и посажу в КПЗ.', 'Убежусь что никого нет рядом и нокну его. Он в любом случае не вспомнит, кто это сделал.'],
      trueAnswer: ['2']
    },
    {
      question: 'Вы шли по улице в сторону своего дома. Вдруг вам навстречу вышли 2 подозрительных человека и один из них выстрелил вам в голову. Вы очнулись в больнице. Что будете делать дальше?',
      variants: ['Сильно удивлюсь, вылечусь и поеду домой на такси.', 'Расстроюсь, ведь я хотел побыстрее попасть домой и поужинать. Позвоню другу, попрошу его меня забрать и отвезти домой.', 'Позвоню друзьям, опишу подонков и мы вместе поедем с ними разбираться.', 'Напишу в рацию, попрошу коллег меня забрать и мы поедем задерживать нарушителей.'],
      trueAnswer: ['1', '2']
    },
    {
      question: 'К вам подходит человек в джинсах и футболке. Он представляется сотрудником PD и приказывает вам отойти. Что вы сделаете?',
      variants: ['Попрошу показать нашивку.', 'Попрошу уточнить, на каком основании.', 'Спокойно отойду.', 'Буду молча стоять и наблюдать.'],
      trueAnswer: ['1', '2', '4']
    }
  ],
  //5 Отыгровка /me
  [
    {
      question: 'К вам подошел гражданин и попросил показать удостоверение. Что вы сделаете?',
      variants: ['Скажу, что не обязан.', 'Скажу, что сейчас достану удостоверение и покажу человеку напротив не передавая.', '/me достал удостоверение и показал гражданину @n', '/do Удостоверение забыто дома.'],
      trueAnswer: ['2', '3']
    },
    {
      question: 'Начальница вызвала вас в свой кабинет. Она выдала вам премию и попросила расписаться в документе о том, что вы ее получили. Как вы это сделаете?',
      variants: ['Скажу, что сейчас возьму ручку и подпишу документ.', '/me взял ручку со стола и подписал документ', 'Откажусь подписывать и попрошу выплатить премию повторно.', '/me внимательно прочитал документ и подписал его'],
      trueAnswer: ['1', '2', '4']
    },
    {
      question: 'На вас лежит ответсвенная работа. Помыть полы в туалете. Как вы будете это делать?',
      variants: ['Я не буду это делать.', '/me взял швабру и начал мыть пол', '/do полы и так чистые', '/me взял швабру и начал тщательно мыть пол [1/3]'],
      trueAnswer: ['2', '4']
    }
  ],
  //6 Отыгровка /todo
  [
    {
      question: 'Где отыгровка команды /todo неправильная?',
      variants: ['/todo Что-то я походу забыл *почесав затылок', '/todo Ты чё, это синий *посмотрел на свои джинсы', '/todo Какая сегодня хорошая погода *достав из кармана пачку сигарет.', '/todo девушка, вы отлично выглядите*послав воздушный поцелуй'],
      trueAnswer: ['2', '3']
    },
    {
      question: 'Где отыгровка команды /todo правильная?',
      variants: ['/todo Что-то я походу забыл *почесав затылок', '/todo Ты чё, это синий *посмотрел на свои джинсы', '/todo Какая сегодня хорошая погода *достав из кармана пачку сигарет.', '/todo девушка, вы отлично выглядите*послав воздушный поцелуй'],
      trueAnswer: ['1']
    },
    {
      question: 'В чат вывелась строчка:"Какая сегодня хорошая погода",- сказал(а) Ray Hamster[1], посмотрев на небо. Какая отыгровка использовалась, чтобы получился такой результат? ',
      variants: ['Какая сегодня хорошая погода /me сказал(а) Ray Hamster[1], посмотрев на небо.', '/do "Какая сегодня хорошая погода"посмотрев на небо', '/do Какая сегодня хорошая погода *посмотрев на небо.', '/todo Какая сегодня хорошая погода *посмотрев на небо'],
      trueAnswer: ['4']
    }
  ],
  //7 Отыгровка /do
  [
    {
      question: 'В каком случае команда /do использовалась правильно?',
      variants: ['/do Как себя чувствует Таллупа?', '/do В кармане Таллупы лежит конфета.', '/do снял с себя сумку и плавно поставил её на пол', 'Все варианты верны'],
      trueAnswer: ['1', '2']
    },
    {
      question: 'Кто из предложенных игроков использовал "/do Джон без сознания." или "/do У Джона ранена правая нога"?',
      variants: ['Jonathan Price', 'Oliver Cooper', 'John Baker', 'Evan Reed'],
      trueAnswer: ['3']
    },
    {
      question: 'В каком случае команда /do использовалась неправильно?',
      variants: ['/do Как себя чувствует Джон?', '/do В кармане Джона лежит батарейка.', '/do снял с себя сумку и плавно поставил её на пол', '/do Джон улыбается.'],
      trueAnswer: ['3']
    }
  ],
  //8
  [
    {
      question: 'Что такое вареник? ((IC))',
      variants: ['Вид наказания. Когда админы увольняют из фракции.', 'Блюдо в виде отварных изделий из пресного теста с начинкой.', 'Термин в гинекологии.', 'Все ответы верны.'],
      trueAnswer: ['2']
    },
    {
      question: 'Что такое Ручной Пулемет? ((IC))',
      variants: ['Так может расшифровываться аббревиатура РП.', 'Вид оружия.', 'Так называлась песня какой-то группы.', 'Все варианты верны.'],
      trueAnswer: ['4']
    },
    {
      question: 'Кто такой Дядя Миша? ((IC))',
      variants: ['Известный на всем сервере человек.', 'Один очень важный для меня человек.', 'Неизвестная мне личность, которую все почему-то знают.', 'Все варианты верны.'],
      trueAnswer: ['2', '3']
    }
  ],
  //9
  [
    {
      question: 'Что из этого является IC информацией?',
      variants: ['Время на часах в холле LSSD.', 'Количество людей в патрульной машине.', 'Имя в паспорте вашего персонажа.', 'Возраст вашего друга, с которым вы играете.'],
      trueAnswer: ['1', '2', '3']
    },
    {
      question: 'Что такое IC?',
      variants: ['Все что не касается реального мира.', 'Все что касается игры.', 'Все что касается жизни персонажей в игре.', 'Все ответы верны.'],
      trueAnswer: ['3']
    },
    {
      question: 'Что считается нонРП поведением?',
      variants: ['Могу купить оружие и пойти растрелять целую банду.', 'Подойти к человеку и спросить, не является ли он богом.', 'Гулять по Чиллиаду и упасть с него.', 'Написать в WN: "Продаю кар за 300к."'],
      trueAnswer: ['1']
    }
  ],
  //10
  [
    {
      question: 'Можно ли оскорблять людей?',
      variants: ['Нет, это неправильно.', 'Да, если они мне не нравятся.', 'У меня характер такой, хочу и оскорбляю.', 'Если человек начинает оскорбять первым — я не буду молчать.'],
      trueAnswer: ['1']
    },
    {
      question: 'Кто такие BLOODS? ((IC))',
      variants: ['Какая-то компания. Кажется, они делали чешки.', 'Всем известная банда.', 'Это когда много крови.', 'Затрудняюсь ответить.'],
      trueAnswer: ['1', '3', '4']
    },
    {
      question: 'Вы потерялись в городе когда гуляли. Вам нужно вернуться домой. Что вы будете делать? ((IC))',
      variants: ['Вызову такси.', 'Открою карту в телефоне и по ней вернусь домой.', 'Релогнусь и заспавнюсь дома.', 'Очень расстроюсь и грустно пойду в неизвестном направлении.'],
      trueAnswer: ['1', '2', '4']
    }
  ]
]

let dText = [
  'Тест №1', 'Всего в тесте 10 вопросов. На его прохождение вам дается 10 минут. В конце не забудьте заскринить итог и отправить фотокарточку в соответствующий канал.', 'Важно: покидать страницу нельзя до того момента, как вы заскрините результат. Иначе тест придется проходить заново.'
]

let container = document.getElementsByClassName('main')[0]

let seconds = 0
let minutes = 10
let score = 0
let name = ''
let key = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let testAnswers = []

document.addEventListener('DOMContentLoaded', () => {
  if (window.screen.width <= 800){
    openedOnPhone()
  } else {
    firstScreen()
  }
})

function firstScreen() {
  info = document.createElement('div');
  info.classList.add('information');
  container.appendChild(info);

  header = document.createElement('p')
  header.classList.add('h1');
  header.textContent = dText[0];
  info.appendChild(header);

  header = document.createElement('p')
  header.classList.add('h1des');
  header.textContent = 'ТЕСТ НА ПОНИМАНИЕ РП';
  info.appendChild(header);

  frame = document.createElement('div')
  frame.classList.add('frame')
  container.appendChild(frame)

  text = document.createElement('div')
  text.classList.add('text')
  frame.appendChild(text)

  description = document.createElement('p')
  description.textContent = dText[1];
  text.appendChild(description);

  description = document.createElement('p')
  description.textContent = dText[2];
  text.appendChild(description);

  but = document.createElement('button')
  but.classList.add('button')
  but.classList.add('start')
  but.textContent = 'Начать';
  frame.appendChild(but);

  butStart = document.getElementsByClassName('start')[0]
  butStart.onclick = function() {
    if ((window.screen.width - window.outerWidth) < 10) {
        clean();
        createTest();
    } else {
      alertWindowSize()
    }
  }
}

function clean() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function randomTest() {
  for (let i = 0; i < key.length; i++) {
    let n = Math.floor(Math.random() * 10)
    let a = key[i]
    key[i] = key[n]
    key[n] = a
  }
}

function createTest() {
  randomTest();

  info = document.createElement('div');
  info.classList.add('information');
  info.classList.add('testInfo');
  container.appendChild(info);

  header = document.createElement('p')
  header.classList.add('h1');
  header.textContent = dText[0];
  info.appendChild(header);

  time = document.createElement('p')
  time.classList.add('time')
  time.textContent = minutes + ':0' + seconds;
  container.appendChild(time);

  test = document.createElement('div')
  test.classList.add('test')
  container.appendChild(test)

  qContainer = document.createElement('div');
  qContainer.classList.add('user-info_container');
  qContainer.classList.add('question_container');
  test.appendChild(qContainer);

  q = document.createElement('p')
  q.textContent = 'Ваши имя и фамилия.';
  qContainer.appendChild(q);

  answer = document.createElement('input');
  answer.classList.add('input')
  answer.classList.add('user-name')
  qContainer.appendChild(answer);

  for (let i = 0; i < key.length; i++){
    qContainer = document.createElement('div');
    qContainer.classList.add('question_container');
    test.appendChild(qContainer);

    let n = Math.floor(Math.random() * 3)

    q = document.createElement('p')
    q.textContent = 'Вопрос ' + (i+1) + '. ' + questions[key[i]][n].question;
    qContainer.appendChild(q);

      for (let l = 0; l < 4; l++) {
        v = document.createElement('p')
        v.textContent = (l + 1) + '. ' + questions[key[i]][n].variants[l];
        qContainer.appendChild(v);
      }
    testAnswers.push(questions[key[i]][n].trueAnswer)


    answerDescription = document.createElement('p')
    answerDescription.textContent = 'Впишите номер правильного ответа. Если их несколько, напишите их в порядке возрастания без пробелов и запятых.';
    qContainer.appendChild(answerDescription);

    answer = document.createElement('input');
    answer.classList.add('input')
    answer.classList.add('userAnswer' + i)
    answer.value = 'Ваш ответ...'
    qContainer.appendChild(answer);
  }

  window.onblur = function() {
    console.log('Кто-то вышел');
    clearInterval(timerId);
    windowClosed()
  }

  but = document.createElement('button')
  but.classList.add('button')
  but.classList.add('finishTest')
  but.textContent = 'Завершить';
  test.appendChild(but);

  butEnd = document.getElementsByClassName('finishTest')[0]
  butEnd.onclick = function() {
    name = document.getElementsByClassName('user-name')[0].value
    resultFinishTest();
  }

  timerId = setInterval(timer, 1000);
}

function timer(){

  if ((minutes >= 0) && (seconds > 0)){
    --seconds;
  } else if ((seconds == 0) && (minutes > 0)){
    --minutes;
    seconds = 59;
  } else {
    resultTimerEnd();
    return;
  }

  timer = document.getElementsByClassName('time')[0]

  if (seconds < 10) {
    timer.textContent = minutes + ':0' + seconds;
  } else {
    timer.textContent = minutes + ':' + seconds;
  }

}

function checkAnswers() {
  name = document.getElementsByClassName('user-name')[0].value
  for (let i = 0; i < key.length; i++) {
    let answer = document.getElementsByClassName('userAnswer' + i)[0]
    let n = answer.value

    if (n.length >  testAnswers[i].length) {
      n = '0'
    }

    for (let l = 0; l < n.length; l++) {
      for (let k = 0; k < testAnswers[i].length; k++) {
        if (testAnswers[i][k] == n[l]){
          testAnswers[i][k] = 'checked'
          score = score + (1 / testAnswers[i].length)
        }
      }
    }
  }
}

function resultTimerEnd() {
  clearInterval(timerId)
  alertTimerEnd()
}

function alertTimerEnd() {
  alertBg = document.createElement('div')
  alertBg.classList.add('alertBg')
  container.appendChild(alertBg)

  customAlert = document.createElement('div')
  customAlert.classList.add('customAlertContainer')
  container.appendChild(customAlert)

  text = document.createElement('p')
  text.classList.add('alert-header');
  text.style.marginBottom = '24px';
  text.textContent = 'Время закончилось';
  customAlert.appendChild(text);

  but = document.createElement('button')
  but.classList.add('alert-button')
  but.textContent = 'Ок';
  customAlert.appendChild(but);

  butOk = document.getElementsByClassName('alert-button')[0]
  butOk.onclick = function() {
    resultFinishTest();
  }
}

function resultFinishTest() {
  checkAnswers()

  clean();
  clearInterval(timerId);

  container.style.backgroundImage = "url('./images/result-bg.png')"
  container.style.backgroundPosition = "center center";
  container.style.backgroundSize = "cover";

  info = document.createElement('div');
  info.classList.add('information');
  container.appendChild(info);

  header = document.createElement('p')
  header.classList.add('h1');
  header.textContent = 'Тест пройден!';
  info.appendChild(header);

  header = document.createElement('p')
  header.classList.add('h1des');
  header.textContent = new Date().toLocaleDateString()
  info.appendChild(header);

  frame = document.createElement('div')
  frame.classList.add('frame')
  container.appendChild(frame)

  text = document.createElement('div')
  text.classList.add('text')
  frame.appendChild(text)

  description = document.createElement('p')
  description.textContent = 'Поздравляем, ' + name + '.';
  description.style.fontSize = '48px'
  text.appendChild(description);

  description = document.createElement('p')
  description.textContent = 'Не забудьте заскринить результат и отправить его в соостветствующий канал.';
  text.appendChild(description);

  var img = document.createElement("img");
  img.src = showResult();
  img.style.opacity = "0.3";
  frame.appendChild(img);
}

function showResult() {
  if (score >= 10) {
    return('./images/resultA+.svg')
  } else if ((score < 10) && (score >= 8)) {
    return('./images/resultA.svg')
  } else if ((score < 8) && (score >= 7)) {
    return('./images/resultB.svg')
  } else if ((score < 7) && (score >= 5)) {
    return('./images/resultC.svg')
  } else if ((score < 5) && (score >= 3)) {
    return('./images/resultD.svg')
  } else {
    return('./images/resultF.svg')
  }
}

function windowClosed() {
  clean()

  info = document.createElement('div');
  info.classList.add('information');
  container.appendChild(info);

  header = document.createElement('p')
  header.classList.add('h1');
  header.textContent = 'Упс, кажется вы свернули тест...';
  header.style.width = '864px';
  info.appendChild(header);

  frame = document.createElement('div')
  frame.classList.add('frame')
  container.appendChild(frame)

  text = document.createElement('div')
  text.classList.add('text')
  frame.appendChild(text)

  description = document.createElement('p')
  description.textContent = 'Теперь его придется проходить заново.';
  description.style.color = '#D0471D';
  description.style.textDecoration = 'underline';
  text.appendChild(description);

  text.onclick = function() {
    location.reload();
  }
}

function openedOnPhone() {
  img = document.createElement("img");
  img.src = './images/sad-face.svg';
  img.classList.add('sad-face');
  container.appendChild(img);

  description = document.createElement('p')
  description.classList.add('phoneDescription');
  description.textContent = 'К сожалению, этот тест нельзя проходить с мобильного устройства.';
  container.appendChild(description);
}

function alertWindowSize() {
  alertBg = document.createElement('div')
  alertBg.classList.add('alertBg')
  container.appendChild(alertBg)

  customAlert = document.createElement('div')
  customAlert.classList.add('customAlertContainer')
  container.appendChild(customAlert)
  text = document.createElement('p')
  text.classList.add('alert-header');
  text.textContent = 'Ой, что-то пошло не так';
  customAlert.appendChild(text);

  text = document.createElement('p')
  text.classList.add('alert-text');
  text.textContent = 'Разверните вкладку на весь экран.';
  customAlert.appendChild(text);

  but = document.createElement('button')
  but.classList.add('alert-button')
  but.textContent = 'Ок';
  customAlert.appendChild(but);

  butOk = document.getElementsByClassName('alert-button')[0]
  butOk.onclick = function() {
    location.reload();
  }
}
