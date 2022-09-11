function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}


function Question(text, choices, answer,image) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
    this.image = image;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}


function displayQuestion() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        
        let questionElement = document.getElementById("question");
        questionElement.innerHTML = quiz.getQuestionIndex().image;
        questionElement.innerHTML += quiz.getQuestionIndex().text;
        

        
        let choices = quiz.getQuestionIndex().choices;
        for(let i = 0; i < choices.length; i++) {
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        displayQuestion();
    }
};


function showProgress() {
    let currentQuestionNumber = quiz.questionIndex + 1;
    let ProgressElement = document.getElementById("progress");
    ProgressElement.innerHTML = 
    `${currentQuestionNumber}/${quiz.questions.length}`;
};

function showImage (){

}

function showScores() {
    let quizEndHTML = 
    `
    <h2>Testi tamamladın <i style="color:green;" class="fa-solid fa-circle-check"></i></h2>
    <img src="images/flag.png"/>
    <h2 id='score'> %${quiz.score*5} liberteryensin</h2>
    <div class="quiz-repeat">
        <a href="index.html"><i class="fa-solid fa-rotate-right"></i></a>
    </div>
    `;
    let quizElement = document.getElementById("quiz");
    quizElement.innerHTML = quizEndHTML;
};


let questions = [
    new Question(
        "Bireysel silahlanma", 
        ["katılıyorum","katılmıyorum"], "katılıyorum",'<img src="images/bireysel.jpg"/>'
    ),
    new Question(
        "Hesaplı konut sağlamak hükümetin işi değildir", 
        ["katılıyorum","katılmıyorum"], "katılıyorum",'<img src="images/Toki.png"/>'
    ),
    new Question(
        "Ehliyeti ve arabası olan herkes, istediği buysa başkalarına taksi hizmeti sunabilmelidir.", 
        ["katılıyorum","katılmıyorum"], "katılıyorum",'<img src="images/taxi.jpg"/>'
        ),
    new Question(
        "Sadece bireyler haklara sahip olabilir. Toplu haklar, azınlık hakları veya ırk, cinsiyet, din veya cinsel yönelim temelli haklar diye bir şey olmamalıdır.", 
        ["katılıyorum","katılmıyorum"], "katılıyorum",'<img src="images/Toplum.jpg"/>'
        ),
    new Question(
        "Sağlık hizmetleri, devletin vatandaşlarına borçlu olduğu bir hak veya hizmet değildir", 
        ["katılıyorum","katılmıyorum"], "katılıyorum",'<img src="images/hastane.jpg"/>'
        ),
    new Question(
        "İnsanlar kemiklerini ve dişlerini istedikleri için tehdit altında olan kaplan, gergedan ve fil gibi nesli tükenmekte olan türlerin, çiftlik hayvanları gibi ticarileştirilmesine ve yetiştirilmesine izin verilmelidir.",
        ["katılıyorum","katılmıyorum"], "katılıyorum",'<img src="images/mamut.jpg"/>'
    ),
    new Question(
        "Bir asgari ücret dikte etmek hükümetin görevi değildir.",
        ["katılıyorum","katılmıyorum"], "katılıyorum",'<img src="images/asgari.jpg"/>'

    ),
    new Question(
        "Özel bir firma sahibi, o firmada çalışmak için yalnızca belirli bir cinsiyet, ırk veya dinden insanları işe almak istiyorsa, bu onun seçimi olmalıdır.",
        ["katılıyorum","katılmıyorum"], "katılıyorum",'<img src="images/ise-alım.jpg"/>'
    ),
    new Question(
        "Organ nakli için insan organlarının (kalp, karaciğer, böbrek, vb.) ticareti, rıza gösteren yetişkinleri içerdiği sürece yasal olmalıdır.",
        ["katılıyorum","katılmıyorum"], "katılıyorum",'<img src="images/organ-nakli.jpg"/>'
    ),
    new Question(
        "Tüm enerji sübvansiyonları kaldırılsın - hem kömür/petrol hem de rüzgar/güneş.",
        ["katılıyorum","katılmıyorum"], "katılıyorum",'<img src="images/ruzgar-enerjisi.jpg"/>'
    ),
    new Question(
        "İnsanlar emniyet kemeri takmadan araba kullanmak istiyorlarsa, bu onların kararı olmalıdır.",
        ["katılıyorum","katılmıyorum"], "katılıyorum",'<img src="images/kemer.jpg"/>'
    ),
    new Question(
        "Belirli kişilerin adı geçmediği veya tehdit edilmedikleri sürece, ırksal, cinsel veya siyasi azınlıklara yönelik nefret söylemi yasal olmalıdır.",
        ["katılıyorum","katılmıyorum"], "katılıyorum",'<img src="images/mancinik.jpg"/>'

    ),
    new Question(
        "Kumar yasal olmalı ve herhangi bir özel işletme, kumar veya bahis oynatma hizmeti açabilmelidir.",
        ["katılıyorum","katılmıyorum"], "katılıyorum",'<img src="images/kumar.jpg"/>'

    ),
    new Question(
        "İlaç şirketlerinin, etiketinde açıkça belirtildiği sürece tüketicilere deneysel ve onaylanmamış ilaçlar satmasına izin verilmelidir.",
        ["katılıyorum","katılmıyorum"], "katılıyorum",'<img src="images/ilac.jpg"/>'
    ),
    new Question(
        '"Başarısız olamayacak kadar büyük" olduğu düşünülen işletmeler ve bankaların, ihtiyaç duydukları parayı özel yatırımcılardan toplayamazlarsa başarısız olmalarına izin verilmelidir - kesinlikle devlet yardımı almamalıdırlar.',
        ["katılıyorum","katılmıyorum"], "katılıyorum",'<img src="images/sirket.jpg"/>'
    ),
    new Question(
        "Hükümet polis, mahkemeler ve ordu dışındaki her şeyden kurtulsaydı, aklımdaki ideal topluma daha yakın olurduk.",
        ["katılıyorum","katılmıyorum"], "katılıyorum",'<img src="images/hukumet.gif"/>'

    ),
    new Question(
        "Devlet, heteroseksüel evliliklere eşcinsel evliliklerden daha fazla özel ayrıcalıklar tanımamalıdır.",
        ["katılıyorum","katılmıyorum"], "katılıyorum",'<img src="images/lgbt.jpg"/>'

    ),
    new Question(
        "Devletin bazı dinlere diğerlerinden daha fazla ayrıcalık tanımasına izin verilmemelidir. Aslında devlet din ile hiç ilgilenmemelidir.",
        ["katılıyorum","katılmıyorum"], "katılıyorum",'<img src="images/dinler.png"/>'
    ),
    new Question(
        "Tüm monarşi ve aristokrasi biçimleri ortadan kaldırılmalı veya en azından tüm özel ayrıcalıklardan yoksun bırakılmalıdır.",
        ["katılıyorum","katılmıyorum"], "katılıyorum",'<img src="images/kralice.jpg"/>'   
    )
    ,
    new Question(
        "Tüm Uyuşturucular yasal olmamalıdır.",
        ["katılıyorum","katılmıyorum"], "katılmıyorum",'<img src="images/onedollar.png"/>' 
    )
];

let quiz = new Quiz(questions);


displayQuestion();


