import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import eu from "assets/eu.jpg";
import fotoCapa from "assets/sobre_mim_capa.png";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Prazer,sou o victor gabriel!
            </h3>

            <img
                src={eu}
                alt="Foto do autor"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Sou um cara que gosta muito de tecnologia        
                a paixão começou desde cedo,fuçando e revirando pc's,desvendando místerios que pra mim na época era maneiro(e ainda é)
                eu nem sabia que um da iria estudar sobre programação,desenvolvimento web etc...
                mas cá estou cada dia mais obtendo conhecimento para ser um próximo Dev de sucesso!
                gosto muito de animias e de aprender a aprender. 
                Meu hobby é ter tempo pra me conectar com Deus,pois ELE é a base de tudo.
            </p>
            
        </PostModelo>
    )
}