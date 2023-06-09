import {Container, TeamContainer, TextContainer} from './style'
import { Footer } from "../../global/components/Footer";


export function About() {
    const team = [
        {
            name: "Luan Cailleaux",
            image: 'https://images-ext-1.discordapp.net/external/jh6vF5LReG_q84RwcjWZmrtLktWYUYh_CDvbAvHT0hE/%3Fstp%3Ddst-jpg_s150x150%26_nc_ht%3Dinstagram.fsdu10-1.fna.fbcdn.net%26_nc_cat%3D103%26_nc_ohc%3DLxWBzO5rfKgAX8Fpl-S%26edm%3DACWDqb8BAAAA%26ccb%3D7-5%26oh%3D00_AfAmjANjbkV21haSsI0hM9Dzo3bHD5qWxCNo_8wV7hFwVg%26oe%3D6487AA65%26_nc_sid%3D640168/https/instagram.fsdu10-1.fna.fbcdn.net/v/t51.2885-19/286357428_2600756676721623_3461017636283228355_n.jpg'
        },
        {
            name: "Joice Pitzer",
            image: 'https://avatars.githubusercontent.com/u/130865890?v=4'
        },
        {
            name: "Juliana Cardozo",
            image: 'https://media.licdn.com/dms/image/D4D03AQHQRZCPQqYlXg/profile-displayphoto-shrink_800_800/0/1680130430561?e=1691625600&v=beta&t=zstt9AERr_emd5_xrvrF5u2SGnvNSCKN-JIwyvXTzsU'
        },
        {
            name: "João Piccoli",
            image: 'https://media.licdn.com/dms/image/D4D03AQFN7VOB2vpziA/profile-displayphoto-shrink_800_800/0/1682990868249?e=1691625600&v=beta&t=s6GN6-xGrVzl-IQiOQHqvy8ysducVKEvvgQEn7dRrRU'
        },
        {
            name: "Gabriel Santiago",
            image: 'https://media.licdn.com/dms/image/D4D03AQGitYicznXTKA/profile-displayphoto-shrink_800_800/0/1682101353429?e=1691625600&v=beta&t=RftIzBdJZF6wXXYWddQM2GPAqOWbnfexRMXi2PngF9o'
        },
        {
            name: "Jullian Carlo",
            image: 'https://media.licdn.com/dms/image/C4E03AQHT2R3YFEU-Ew/profile-displayphoto-shrink_800_800/0/1637322664285?e=1691625600&v=beta&t=c0emsz_XP4nxPuYiF0ju_-W-jZgx8yPu15UfMVr44Cw'
        }
    ]




    return(
        <>
            <Container>
            <TextContainer>
                <h4>Sobre a Eldritch Cards:</h4>
                <h2> Na Eldritch Cards, somos apaixonados por card games e estamos entusiasmados em compartilhar essa paixão com você. 
                    Somos uma loja de card games recém-lançada, dedicada a trazer aos jogadores de todas as idades uma ampla variedade 
                    de jogos de cartas de qualidade. </h2>

                <h2>Nossa história começou com um grupo de amigos aficionados por card games, que passavam horas explorando mundos fantásticos e estratégias inteligentes. 
                    A cada partida, mergulhávamos em duelos épicos e compartilhávamos risadas e emoções. 
                    Foi assim que nasceu o sonho de criar um espaço onde outros entusiastas de card games pudessem se reunir, compartilhar experiências e descobrir novos 
                    jogos incríveis.</h2>

                <h2>Na Eldritch Cards, acreditamos que os card games vão além do entretenimento. Eles são uma forma de arte que desafia a mente, estimula a criatividade e 
                    une pessoas em torno de uma mesa. Nossa missão é fornecer a você uma seleção cuidadosamente escolhida de card games, desde os clássicos até os mais recentes 
                    lançamentos, para que você possa vivenciar a magia dessas experiências de jogo únicas.</h2>

                <h2>Nosso compromisso com a qualidade é inabalável. Trabalhamos apenas com os melhores fornecedores e fabricantes para garantir que cada jogo em nosso catálogo 
                    atenda aos mais altos padrões. Nossa equipe está sempre pesquisando e atualizando nosso estoque com as últimas novidades do mundo dos card games, 
                    para que você possa encontrar tudo o que precisa em um único lugar.</h2>
                <h2>Além de oferecer uma ampla seleção de jogos, também valorizamos o atendimento ao cliente excepcional. Nossa equipe está pronta para ajudá-lo a encontrar o jogo 
                    perfeito para você, esclarecer dúvidas e fornecer recomendações personalizadas. Queremos que você se sinta parte da comunidade Eldritch Cards e estamos comprometidos 
                    em construir relacionamentos duradouros com nossos clientes.</h2>
                <h2>Estamos animados em embarcar nesta jornada com você e trazer a magia dos card games para a sua vida. Explore nossa loja online, descubra novos jogos emocionantes e faça 
                parte de uma comunidade apaixonada por card games. Seja você um jogador experiente ou um iniciante curioso, a Eldritch Cards está aqui para ajudá-lo a transformar seus 
                momentos de jogo em experiências memoráveis.
                </h2>
            </TextContainer>
            <TeamContainer>
                {
                    team.map(person => {
                        return(
                            <div>
                                <img src={person.image} alt="Pessoa" />
                                <h2>{person.name}</h2>
                            </div>
                        )
                    })
                }
            </TeamContainer>
            </Container>
            <Footer></Footer>
        </>
    )
}