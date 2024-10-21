import styles from "./Inicio.module.css";

export default function Home() {
    return (
        <div className={styles.content}>
        <h1>A Cartografia e Geografia da Unesp Ourinhos é uma instituição comprometida com a formação de profissionais altamente qualificados nas áreas de geografia e cartografia. Localizada em Ourinhos, São Paulo, a unidade integra o sistema da Universidade Estadual Paulista (UNESP), uma das mais renomadas instituições de ensino e pesquisa do Brasil.</h1>

        <h1>Nossa missão é promover o desenvolvimento científico e acadêmico, com foco em estudos geoespaciais, planejamento territorial, análise ambiental e desenvolvimento sustentável. A formação oferecida busca capacitar os alunos com conhecimento teórico e prático, preparando-os para enfrentar os desafios contemporâneos nas esferas pública e privada.</h1>

        <h1>Com uma equipe de professores experientes e laboratórios bem equipados, nossos cursos abordam desde a análise e produção de mapas até a compreensão das dinâmicas ambientais e sociais que moldam o espaço geográfico. Atuamos também em projetos de extensão e pesquisa, colaborando com governos, empresas e organizações não governamentais para promover o desenvolvimento sustentável e a gestão eficiente dos territórios.</h1>

        <h1>Acreditamos que o conhecimento geográfico é essencial para a compreensão e transformação do mundo, e, por isso, nossos programas de ensino e pesquisa são orientados para formar cidadãos críticos e capacitados a atuarem de forma ética e inovadora em suas áreas de expertise.</h1>

        <img src="imagem-principal.jpeg" alt="Mapa antigo com bússola."/>
    </div>
    )
}