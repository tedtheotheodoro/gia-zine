import React from 'react';
import ZinePage from '../components/ZinePage';
import AudioPlayer from '../components/AudioPlayer';
import giaImage from '../assets/images/gia-collage-3.jpg';
import ZineNavigation from '../components/ZineNavigation';

const heroesAudio = "/assets/audio/heroes.mp3";

const Silenciamento = ({ language }) => {
  const title = language === 'pt'
    ? "Bloco 3: Sexo, Poder & Silenciamento"
    : "Block 3: Sex, Power & Erasure";

  const textPT = `
<strong>Uma lésbica fora do script</strong><br><br>
Gia Carangi era assumidamente atraída por mulheres, ainda que nunca tenha se declarado “lésbica” no sentido político. Para a indústria da moda, isso já bastava para classificá-la como ameaça.<br><br>

Ela se apaixonava, era intensa, dramática, possessiva — mas sempre com mulheres. Isso não cabia nas revistas. Sua sexualidade real era <em>editada como ruído de fundo</em>.<br><br>

<blockquote>“Gia não era bissexual. Ela era só Gia demais pra ser hétero.”</blockquote>
<small>— Born This Way (Baumann)</small><br><br>

<strong>Desejo como desvio</strong><br><br>
Gia não fazia poses para seduzir, ela olhava como quem já dominava. Isso era desconfortável. O mercado aceitava sua beleza, mas não sua agência.<br><br>

Ela encarnava o que o feminismo radical chamaria de <em>“erotismo não maleável”</em>. Seu corpo não era para o outro — era dela, e isso incomodava.<br><br>

<strong>Nos bastidores, regras diferentes</strong><br><br>
Enquanto fotógrafos homens assediavam modelos e viravam “excêntricos”, Gia era rotulada de instável por amar demais, por se drogar, por fugir do controle.<br><br>

<em>Ela não podia ter o mesmo excesso dos homens. O dela era lido como falha, não como gênio.</em><br><br>

<strong>O apagamento</strong><br><br>
Gia foi uma das figuras mais queer da moda antes dos anos 90 — mas raramente aparece como ícone LGBTQIA+ em eventos, desfiles ou resgates oficiais. Por quê?<br><br>

Porque era caótica demais para ser domesticada. Porque morreu sem ter sido redimida. Porque não teve tempo de se tornar símbolo, apenas estatística.<br><br>

<blockquote>“Eles queriam o perigo no olhar dela, não nas escolhas.”</blockquote>
<small>— adaptação livre de Thing of Beauty</small>
`;

  const textEN = `
<strong>A lesbian off-script</strong><br><br>
Gia Carangi was openly attracted to women, even though she never identified as a “lesbian” in a political sense. For the fashion industry, that alone was enough to mark her as a threat.<br><br>

She fell in love, was intense, dramatic, possessive — but always with women. That didn’t fit into magazines. Her real sexuality was <em>edited out like background noise</em>.<br><br>

<blockquote>“Gia wasn’t bisexual. She was just too Gia to be straight.”</blockquote>
<small>— Born This Way (Baumann)</small><br><br>

<strong>Desire as deviation</strong><br><br>
Gia didn’t pose to seduce — she looked like someone who already owned the room. That made people uneasy. The market accepted her beauty, but not her agency.<br><br>

She embodied what radical feminism might call <em>“non-maleable eroticism.”</em> Her body wasn’t for someone else — it was hers. And that was unacceptable.<br><br>

<strong>Backstage: different rules</strong><br><br>
While male photographers harassed models and were seen as “eccentrics,” Gia was labeled unstable — for loving too much, using drugs, resisting control.<br><br>

<em>She couldn’t have the same excess as men. Hers was seen as failure, not genius.</em><br><br>

<strong>The erasure</strong><br><br>
Gia was one of fashion’s queerest icons before the 1990s — yet she rarely appears as an LGBTQIA+ figure in events, tributes or archival projects. Why?<br><br>

Because she was too chaotic to be domesticated. Because she died before redemption. Because she didn’t become a symbol — only a statistic.<br><br>

<blockquote>“They wanted danger in her look, not in her choices.”</blockquote>
<small>— adapted from Thing of Beauty</small>
`;

  const text = language === 'pt' ? textPT : textEN;

  const referencesPT = [
    "Fried, Stephen. Thing of Beauty: A Tragédia da Supermodelo Gia. Pocket Books, 1993.",
    "Baumann, Sacha Lanvin. Born This Way: Friends, Colleagues, and Coworkers Recall Gia Carangi. 2016.",
    "Butler, Judith. Problemas de Gênero: Feminismo e Subversão da Identidade. Civilização Brasileira, 2003.",
    "Halberstam, Jack. Female Masculinity. Duke University Press, 1998."
  ];

  const referencesEN = [
    "Fried, Stephen. Thing of Beauty: The Tragedy of Supermodel Gia. Pocket Books, 1993.",
    "Baumann, Sacha Lanvin. Born This Way: Friends, Colleagues, and Coworkers Recall Gia Carangi. 2016.",
    "Butler, Judith. Gender Trouble: Feminism and the Subversion of Identity. Routledge, 1990.",
    "Halberstam, Jack. Female Masculinity. Duke University Press, 1998."
  ];

  return (
    <>
      <AudioPlayer src={heroesAudio} />
      <ZinePage
        title={title}
        text={text}
        image={giaImage}
        references={language === 'pt' ? referencesPT : referencesEN}
      />
    </>
  );
};

export default Silenciamento;
