import React, { useState, useEffect } from "react";


const allQuestions = [
  {
    id: 1,
    text: "Какой огнетушитель подходит для тушения электрического оборудования?",
    options: [
      "Порошковый",
      "Водяной",
      "Пенный",
      "Углекислотный"
    ],
    correct: 3
  },
  {
    id: 2,
    text: "Что делать при обнаружении пострадавшего без сознания?",
    options: [
      "Позвонить в скорую помощь",
      "Начать сердечно-легочную реанимацию",
      "Оставить его и позвать помощь",
      "Попробовать разбудить его водой"
    ],
    correct: 1
  },
  {
    id: 3,
    text: "Какие СИЗ нужно использовать при работе с химическими веществами?",
    options: [
      "Перчатки и маска",
      "Только очки",
      "Респиратор и комбинезон",
      "Шлем и ботинки"
    ],
    correct: 2
  },
  {
    id: 4,
    text: "Где должен находиться аварийный выход в здании?",
    options: [
      "В любом месте",
      "В центре здания",
      "Возле лестницы и на видном месте",
      "Спрятан от посторонних"
    ],
    correct: 2
  },
  {
    id: 5,
    text: "Как правильно транспортировать пострадавшего с травмой позвоночника?",
    options: [
      "Самостоятельно, держа его за руки",
      "Переносить вдвоем за ноги и руки",
      "Зафиксировать на жесткой поверхности и не двигать лишний раз",
      "Посадить его и поддерживать спину"
    ],
    correct: 2
  },
  {
    id: 6,
    text: "Какой знак указывает на обязательное ношение каски?",
    options: [
      "Круглый с белым фоном и синим шлемом",
      "Желтый треугольный знак",
      "Красный квадрат с изображением каски",
      "Синий квадрат с белым шлемом"
    ],
    correct: 0
  },
  {
    id: 7,
    text: "Как часто должны проводиться тренировки по эвакуации?",
    options: [
      "Раз в год",
      "Раз в два года",
      "Каждый месяц",
      "Раз в полгода"
    ],
    correct: 0
  },
  {
    id: 8,
    text: "Что запрещено делать при пожаре?",
    options: [
      "Пользоваться лифтом",
      "Выходить через аварийный выход",
      "Сообщать о пожаре другим",
      "Звонить в пожарную службу"
    ],
    correct: 0
  },
  {
    id: 9,
    text: "Какие действия предпринять при утечке газа?",
    options: [
      "Закрыть окна и двери",
      "Включить вентилятор",
      "Открыть окна, перекрыть газ и покинуть помещение",
      "Зажечь свечу для проверки утечки"
    ],
    correct: 2
  },
  {
    id: 10,
    text: "Какой документ регламентирует охрану труда в организации?",
    options: [
      "Трудовой кодекс РФ",
      "Гражданский кодекс РФ",
      "Уголовный кодекс РФ",
      "Конституция РФ"
    ],
    correct: 0
  },
{
  id: 11,
  text: "Какой документ регламентирует охрану труда в организации?",
  options: [
    "Трудовой кодекс Республики Беларусь",
    "Гражданский кодекс Республики Беларусь",
    "Уголовный кодекс Республики Беларусь",
    "Конституция Республики Беларусь"
  ],
  correct: 0
},
  {
    id: 12,
    text: "Какой документ определяет основные принципы охраны труда в Республике Беларусь?",
    options: [
      "Конституция Республики Беларусь",
      "Трудовой кодекс Республики Беларусь",
      "Закон Республики Беларусь 'Об охране труда'",
      "Гражданский кодекс Республики Беларусь"
    ],
    correct: 2
  },
  {
    id: 13,
    text: "Как часто работник должен проходить инструктаж по охране труда на рабочем месте?",
    options: [
      "Раз в год",
      "Раз в полгода",
      "При приеме на работу и периодически",
      "Только при трудоустройстве"
    ],
    correct: 2
  },
  {
    id: 14,
    text: "Кто несет ответственность за обеспечение безопасных условий труда?",
    options: [
      "Только работник",
      "Только работодатель",
      "Работодатель и работник совместно",
      "Инспекция по охране труда"
    ],
    correct: 2
  },
  {
    id: 15,
    text: "Что необходимо сделать в случае производственного травматизма?",
    options: [
      "Сообщить руководителю и обратиться за медицинской помощью",
      "Записать в журнал происшествий",
      "Оставить без внимания, если травма незначительная",
      "Только сообщить коллегам"
    ],
    correct: 0
  },
  {
    id: 16,
    text: "Какой вид инструктажа проводится перед началом выполнения опасных работ?",
    options: [
      "Вводный инструктаж",
      "Первичный инструктаж",
      "Целевой инструктаж",
      "Периодический инструктаж"
    ],
    correct: 2
  },
  {
    id: 17,
    text: "Какие средства индивидуальной защиты применяются при сварочных работах?",
    options: [
      "Респиратор и защитные очки",
      "Каска и защитные перчатки",
      "Сварочный щиток, спецодежда и перчатки",
      "Любая удобная одежда"
    ],
    correct: 2
  },
  {
    id: 18,
    text: "Как обозначаются зоны повышенной опасности на предприятии?",
    options: [
      "Зелеными указателями",
      "Красными или желтыми знаками безопасности",
      "Белыми линиями разметки",
      "Отсутствуют специальные обозначения"
    ],
    correct: 1
  },
  {
    id: 19,
    text: "Как часто проводится проверка знаний по охране труда?",
    options: [
      "Раз в год",
      "Раз в три года",
      "Раз в пять лет",
      "При приеме на работу"
    ],
    correct: 1
  },
  {
    id: 20,
    text: "Какие основные причины несчастных случаев на производстве?",
    options: [
      "Нарушение трудовой дисциплины и отсутствие СИЗ",
      "Погодные условия",
      "Случайное стечение обстоятельств",
      "Низкий уровень образования работников"
    ],
    correct: 0
  },
  {
    id: 21,
    text: "Какие работы считаются работами с повышенной опасностью?",
    options: [
      "Работа за компьютером",
      "Работы на высоте, с электричеством и опасными веществами",
      "Любая физическая работа",
      "Работа в офисе"
    ],
    correct: 1
  },
  {
    id: 22,
    text: "Кто имеет право приостановить работы в случае угрозы жизни работников?",
    options: [
      "Только руководитель предприятия",
      "Любой работник при наличии угрозы",
      "Только инспектор по охране труда",
      "Руководитель службы безопасности"
    ],
    correct: 1
  },
  {
    id: 23,
    text: "Какой срок хранения журналов регистрации инструктажей по охране труда?",
    options: [
      "3 года",
      "5 лет",
      "10 лет",
      "До закрытия предприятия"
    ],
    correct: 1
  },
  {
    id: 24,
    text: "Что необходимо сделать перед использованием электроинструмента?",
    options: [
      "Проверить его исправность",
      "Сразу приступить к работе",
      "Спросить разрешение у коллег",
      "Ничего, если он новый"
    ],
    correct: 0
  },
  {
    id: 25,
    text: "Как должен поступить работник, если он заметил нарушение требований охраны труда?",
    options: [
      "Проигнорировать, если нарушение незначительное",
      "Сообщить непосредственному руководителю",
      "Обратиться в инспекцию труда",
      "Покинуть рабочее место"
    ],
    correct: 1
  },
  {
    id: 26,
    text: "Какая температура воздуха считается допустимой для работы в закрытых помещениях?",
    options: [
      "Не ниже 10°C и не выше 28°C",
      "Не ниже 5°C и не выше 35°C",
      "Не ниже 15°C и не выше 25°C",
      "Не ниже 0°C и не выше 40°C"
    ],
    correct: 0
  },
  {
    id: 27,
    text: "Какие действия запрещены при работе на высоте?",
    options: [
      "Использование страховочных средств",
      "Проведение работ без ограждений и страховки",
      "Применение защитных касок",
      "Проведение инструктажа перед началом работ"
    ],
    correct: 1
  },
  {
    id: 28,
    text: "Какой цвет имеют знаки, обозначающие запреты?",
    options: [
      "Желтый",
      "Красный",
      "Синий",
      "Зеленый"
    ],
    correct: 1
  },
  {
    id: 29,
    text: "Что запрещено делать при работе с грузоподъемными механизмами?",
    options: [
      "Находиться под грузом",
      "Следить за перемещением груза",
      "Использовать защитные каски",
      "Сообщать о неисправностях"
    ],
    correct: 0
  },
  {
    id: 30,
    text: "Как часто должны проверяться огнетушители на предприятии?",
    options: [
      "Раз в год",
      "Раз в два года",
      "Каждые три года",
      "Раз в пять лет"
    ],
    correct: 0
  },
  {
    id: 31,
    text: "Какой вид освещения рекомендуется для безопасной работы в ночное время?",
    options: [
      "Слабое рассеянное освещение",
      "Яркое направленное освещение",
      "Минимальное освещение для экономии",
      "Освещение не имеет значения"
    ],
    correct: 1
  },
  {
    id: 32,
    text: "Какая первая помощь должна быть оказана при термическом ожоге?",
    options: [
      "Охладить пораженное место холодной водой",
      "Смазать маслом или жиром",
      "Нанести спирт или йод",
      "Приложить лед"
    ],
    correct: 0
  },
  {
    id: 33,
    text: "Какой документ оформляется при несчастном случае на производстве?",
    options: [
      "Акт о несчастном случае (форма Н-1)",
      "Письменное уведомление в инспекцию труда",
      "Докладная записка на имя руководителя",
      "Отчет медицинского учреждения"
    ],
    correct: 0
  },
  {
    id: 34,
    text: "Как часто проводится повторный инструктаж по охране труда?",
    options: [
      "Раз в год",
      "Раз в шесть месяцев",
      "Раз в три месяца",
      "Раз в два года"
    ],
    correct: 1
  },
  {
    id: 35,
    text: "Какие виды инструктажей по охране труда существуют?",
    options: [
      "Вводный, первичный, повторный, внеплановый, целевой",
      "Только вводный и первичный",
      "Только вводный и повторный",
      "Нет установленных видов инструктажей"
    ],
    correct: 0
  },
  {
    id: 36,
    text: "Какие действия запрещены при работе с электрооборудованием?",
    options: [
      "Работать мокрыми руками",
      "Использовать диэлектрические перчатки",
      "Проверять исправность оборудования перед началом работы",
      "Соблюдать инструкции производителя"
    ],
    correct: 0
  },
  {
    id: 37,
    text: "Какой класс чистоты воздуха требуется в медицинских учреждениях?",
    options: [
      "Высокий класс чистоты",
      "Средний класс чистоты",
      "Обычный уровень вентиляции",
      "Не имеет значения"
    ],
    correct: 0
  },
  {
    id: 38,
    text: "Какой знак обозначает опасность поражения электрическим током?",
    options: [
      "Желтый треугольник с молнией",
      "Красный круг с белым крестом",
      "Синий квадрат с белой стрелкой",
      "Зеленый прямоугольник с белым знаком"
    ],
    correct: 0
  },
  {
    id: 39,
    text: "Кто проводит первичный инструктаж на рабочем месте?",
    options: [
      "Руководитель подразделения или ответственный за охрану труда",
      "Любой работник с опытом",
      "Инспектор по охране труда",
      "Сам работник изучает инструкцию"
    ],
    correct: 0
  },
  {
    id: 40,
    text: "Что делать при разливе химически опасного вещества?",
    options: [
      "Эвакуировать людей, сообщить ответственному и применить средства нейтрализации",
      "Протереть вещество тряпкой",
      "Игнорировать, если запах не чувствуется",
      "Промыть водой и продолжить работу"
    ],
    correct: 0
  },
  {
    id: 41,
    text: "Какие меры предосторожности необходимо соблюдать при работе в условиях повышенного шума?",
    options: [
      "Использовать наушники или беруши",
      "Не обращать внимания, если шум не мешает",
      "Громче разговаривать с коллегами",
      "Ограничить использование защитных средств"
    ],
    correct: 0
  },
  {
    id: 42,
    text: "Кто должен проводить расследование несчастного случая на производстве?",
    options: [
      "Специально созданная комиссия",
      "Только работодатель",
      "Только инспектор по охране труда",
      "Рабочий коллектив"
    ],
    correct: 0
  },
  {
    id: 43,
    text: "Какой минимальный запас воды должен быть в пожарном резервуаре предприятия?",
    options: [
      "На 10 минут тушения пожара",
      "На 30 минут тушения пожара",
      "На 1 час тушения пожара",
      "На 3 часа тушения пожара"
    ],
    correct: 2
  },
  {
    id: 44,
    text: "Какие знаки обозначают эвакуационные выходы?",
    options: [
      "Зеленые с белыми стрелками и фигурой бегущего человека",
      "Красные с белым крестом",
      "Желтые с черными надписями",
      "Синие с белыми символами"
    ],
    correct: 0
  },
  {
    id: 45,
    text: "Какова максимальная высота, с которой можно работать без страховки?",
    options: [
      "1,3 метра",
      "1,8 метра",
      "2 метра",
      "Страховка обязательна на любой высоте"
    ],
    correct: 2
  },
  {
    id: 46,
    text: "Какие средства защиты необходимо использовать при работах в замкнутых пространствах?",
    options: [
      "Средства защиты органов дыхания, страховочные пояса, газоанализаторы",
      "Только защитную одежду",
      "Никакие, если помещение небольшое",
      "Только перчатки"
    ],
    correct: 0
  },
  {
    id: 47,
    text: "Что запрещено делать при использовании газового оборудования?",
    options: [
      "Проверять утечку газа открытым пламенем",
      "Проводить профилактические осмотры",
      "Использовать оборудование по инструкции",
      "Сообщать о неисправностях"
    ],
    correct: 0
  },
  {
    id: 48,
    text: "Какой знак используется для обозначения средств пожаротушения?",
    options: [
      "Красный квадрат с белым изображением огнетушителя",
      "Зеленый прямоугольник с белым огнетушителем",
      "Синий круг с белым знаком огня",
      "Желтый треугольник с пламенем"
    ],
    correct: 0
  },
  {
    id: 49,
    text: "Как часто должны проводиться медицинские осмотры работников вредных производств?",
    options: [
      "Раз в год",
      "Раз в три года",
      "Раз в пять лет",
      "Они не обязательны"
    ],
    correct: 0
  },
  {
    id: 50,
    text: "Какие действия следует предпринять при обнаружении неисправного оборудования?",
    options: [
      "Сообщить руководству и прекратить использование",
      "Попытаться починить самостоятельно",
      "Продолжить работу, если неисправность незначительная",
      "Проигнорировать, если оборудование еще работает"
    ],
    correct: 0
  },

];

const shuffleOptions = (options) => {
  const shuffled = [...options];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const QuizApp = () => {
  const [questions, setQuestions] = useState([]);
  const [userInfo, setUserInfo] = useState({ name: "", position: "" });
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 минут (600 секунд)
  const [timerRunning, setTimerRunning] = useState(false);

  // Уменьшаем таймер каждую секунду, если он запущен
  useEffect(() => {
    let timer;
    if (timerRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    }
    return () => clearInterval(timer); // Очищаем таймер при размонтировании
  }, [timerRunning, timeLeft]);

  const startQuiz = () => {
    if (!userInfo.name || !userInfo.position) {
      alert("Введите Ф.И.О. и должность перед началом теста.");
      return;
    }
    const shuffledQuestions = allQuestions
      .sort(() => 0.5 - Math.random()) // Сортируем вопросы случайным образом
      .map((question) => {
        const shuffledOptions = shuffleOptions(question.options); // Перемешиваем варианты для каждого вопроса
        const correctIndex = shuffledOptions.indexOf(question.options[question.correct]); // Находим индекс правильного ответа в новом порядке
        return {
          ...question,
          options: shuffledOptions,
          correct: correctIndex // Обновляем индекс правильного ответа в новом порядке
        };
      });
    setQuestions(shuffledQuestions.slice(0, 10));
    setAnswers({});
    setSubmitted(false);
    setTimeLeft(600); // Сброс таймера
    setTimerRunning(true); // Запуск таймера
  };

  const handleAnswer = (questionId, optionIndex) => {
    setAnswers({ ...answers, [questionId]: optionIndex });
  };

  const submitQuiz = () => {
    setSubmitted(true);
  };

  const restartQuiz = () => {
    setQuestions([]);
    setUserInfo({ name: "", position: "" });
    setAnswers({}); // Сбрасываем ответы
    setSubmitted(false);
    setTimeLeft(600);
    setTimerRunning(false); // Останавливаем таймер
  };

  const repeatQuiz = () => {
    const shuffledQuestions = allQuestions
      .sort(() => 0.5 - Math.random()) // Сортируем вопросы случайным образом
      .map((question) => {
        const shuffledOptions = shuffleOptions(question.options); // Перемешиваем варианты для каждого вопроса
        const correctIndex = shuffledOptions.indexOf(question.options[question.correct]); // Находим индекс правильного ответа в новом порядке
        return {
          ...question,
          options: shuffledOptions,
          correct: correctIndex // Обновляем индекс правильного ответа в новом порядке
        };
      });
    setQuestions(shuffledQuestions.slice(0, 10));
    setAnswers({}); // Сбрасываем ответы
    setSubmitted(false);
    setTimeLeft(600);
    setTimerRunning(true); // Запуск таймера
  };

  const correctAnswersCount = Object.keys(answers).filter(
    (id) => answers[id] === questions.find((q) => q.id === Number(id))?.correct
  ).length;
  const passed = correctAnswersCount >= 8;

  return (
    <div>
      <h1>Тест по охране труда</h1>
      {!submitted && questions.length === 0 && (
        <div>
          <input
            type="text"
            placeholder="Ф.И.О."
            value={userInfo.name}
            onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Должность"
            value={userInfo.position}
            onChange={(e) => setUserInfo({ ...userInfo, position: e.target.value })}
          />
          <button onClick={startQuiz}>Начать тест</button>
        </div>
      )}
      
      {/* Таймер отображается только при наличии вопросов */}
      {questions.length > 0 && !submitted && (
        <div>
          <p>Оставшееся время: {Math.floor(timeLeft / 60)}:{timeLeft % 60}</p>
        </div>
      )}

      {questions.map((q) => (
        <div key={q.id}>
          <p>{q.text}</p>
          <ul>
            {q.options.map((opt, index) => {
              let style = {};
              if (submitted) {
                if (index === q.correct) {
                  style = { color: "green" };
                } else if (answers[q.id] === index) {
                  style = { color: "red" };
                }
              }
              return (
                <li key={index} style={style}>
                  <label>
                    <input
                      type="radio"
                      name={`question-${q.id}`}
                      value={index}
                      onChange={() => handleAnswer(q.id, index)}
                      checked={answers[q.id] === index} // Устанавливаем, если выбран ответ
                      disabled={submitted} // Блокируем выбор после отправки
                    />
                    {opt}
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      
      {questions.length > 0 && !submitted && <button onClick={submitQuiz}>Завершить тест</button>}
      
      {submitted && (
        <div>
          <p>{passed ? "Тест сдан" : "Тест не сдан"}</p>
          <button onClick={repeatQuiz}>Пройти тест заново</button>
          <button onClick={restartQuiz}>Завершить тест</button>
        </div>
      )}
    </div>
  );
};

export default QuizApp;
