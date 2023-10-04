import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import eu from 'assets/eu.jpg'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>

                <p className={styles.paragrafo}>
                    Sejam muito bem-vindos ao meu portfólio!
                </p>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                    alt=""
                />

                <img
                    className={styles.minhaFoto}
                    src={eu}
                    alt="Foto do autor"
                />
            </div>
        </div>
    )
}