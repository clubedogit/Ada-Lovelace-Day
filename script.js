let text = document.querySelectorAll('.message div p');
let button = document.querySelectorAll('.container button');
let sentences = ['Por favor, não se cobre tanto. Faça as coisas no seu tempo e não se compare com os outros. Você é maravilhosa, acredite nisso!', 'Seja forte! Não desista!', 'Não desista. Seus sonhos e objetivos só dependem de você. Não é fácil, mas dará tudo certo.', 'Seja sua própria heroína.', 'Você é a única representante dos seus sonhos na face da Terra.', 'Parece muito difícil, mas vai dar tudo certo!', 'Respira, calma. Tudo tem seu tempo!', 'Continue rebelde.', 'Independente da sua idade, nunca desista dos seus sonhos.', 'Você vai ter quedas, vitórias, pode não conseguir o que quer! Mas lembre-se sempre que nunca é tarde para começar de novo.', 'Continue sonhando, mas não apenas sonhe, faça acontecer. Você está seguindo o caminho certo, mas nem sempre deixe o seu coração lhe guiar. A razão é importante e o seu coração pode se enganar, a sua mente não. Pessoas vão tentar te atrapalhar, mas você continuará seguindo em frente.', 'Independente de quem você é, em primeiro lugar, lembre-se que você é uma pessoa. Um ser humano como qualquer outro. Esqueça rótulos ou paradigmas, pois o que te define são as suas ações e com elas você conseguirá chegar nos seus sonhos!', 'Tenha calma, paciência e nunca deixe de sonhar. Não será fácil mas pensa que lá na frente vai haver uma recompensa por todo esse esforço! Confia e arrasa!', 'Tá tudo bem se o caminho da tecnologia não for o primeiro a aparecer na sua vida. Deixe que o tempo faz as coisas se encaixarem.', 'Se eu soubesse antes o quanto a tecnologia tem o poder de mudar a vida das pessoas, não teria feito outra escolha.', 'A felicidade de criar coisas onde antes não existia nada é o que me faz querer aprender cada vez mais.', 'Seja menos curiosa sobre as pessoas e mais curiosa sobre as ideias.',
'Ser mulher em tecnologia é praticamente um grito de guerra: "Estamos juntas, e juntas somos mais fortes!"', 'Eu faço muitas perguntas. Quero saber o porquê de tudo. É isso que me mantém em tecnologia. Quanto mais eu aprendo, mais eu vejo que não sei nada.','Independente da sua idade, nunca é tarde pra começar.', 'Não existe idade certa pra começar a mudar o mundo.', 'Eu acredito no poder da tecnologia assim como acredito no poder das mulheres. Se a gente colocar os dois juntos, todo mundo sai ganhando.', 'Sempre te disseram que matemática, engenharia e tecnologia era coisa de menino. Pois bem, a história tá aí pra provar eles errados.', 'Conheça Marie, e Malala, e Dorothy, e Ada, e Hopper, e Achutti e todas as outras mulheres que mudam o mundo por meio da tecnologia. Acredite, você não está sozinha.', 'O momento em que eu me abri pra ciência e tecnologia foi o momento que eu percebi que o medo de "exatas" era uma construção social e não a minha condição.', 'Você escreve sua própria história. Quando falarem de você, que palavras você quer que usem?', 'Somos responsáveis pelo nosso caminho. A vida é uma sucessão de escolhas, e eu escolhi ser feliz.', 'Muitas vezes aquilo que você acha que é difícil é só questão de medo. O medo de nos abrir pro diferente paralisa as nossas ações.', 'Levante a cabeça e vá a luta. Enfrente o desconhecido com o pensamento: Eu quero portanto eu faço!', 'O mundo precisa de mais Dorothys e Malalas e Hoppers e Michelles. Por que não você?', 'Eu encaro os bugs do código como encaro os bugs da vida: uma passagem necessária para o aprendizado e a evolução.', 'Quando perdi o medo de errar, me abri para ser feliz. Pra mim, tá aí a grande sacada da vida.'];

function sortNumber(){
    return Math.floor(Math.random() * sentences.length);
}

function sentenceGenerator(){
    let sortedNumber = sortNumber();
    while(sentences[sortedNumber]===text[0].innerHTML){
        sortNumber = sortNumber();
    }
    let sortedSentence = sentences[sortedNumber];
    text[0].innerHTML = `"${sortedSentence}"`;
    text[1].innerHTML = `"${sortedSentence}"`;
}
button[0].onclick = sentenceGenerator;
button[1].onclick = sentenceGenerator;