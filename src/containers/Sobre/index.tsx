import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa itaque
      accusamus id voluptates eum fugiat, rem architecto repudiandae molestias
      aspernatur saepe voluptatibus dicta sit reprehenderit eos laudantium omnis
      commodi laborum.
    </Paragrafo>
    <GithubSecao>
      <img
        src="https://github-readme-stats.vercel.app/api?username=iagovalverde&show_icons=true&theme=github_dark_dimmed"
        alt="iagovalverde's stats"
      />
      <img
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=iagovalverde&layout=compact&theme=github_dark_dimmed"
        alt="iagovalverde's most languages"
      />
    </GithubSecao>
  </section>
)

export default Sobre
