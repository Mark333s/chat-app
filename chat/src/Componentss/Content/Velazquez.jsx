import React from "react";
import s from './Velazquez.module.css';


const Velazquez =() => {
    return (
        <>
        <div className={s.main}>
        <div className={s.user}>
            <img src='data:image/jpeg;base64,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' alt='boy' ></img> 
            <h5>Velazquez</h5>
        </div>

        <div className={s.text}>
            Hi!
        </div>


<div className={s.yourMessage}>
<input placeholder="Type yoour message" className={s.input}></input>
    <button><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOMAAADeCAMAAAD4tEcNAAAAMFBMVEXR3ev////2+fvS3uzY4u77/P3t8vfd5vD09/rj6vPV4O3o7vXy9fnh6PLu8/j5+/wrV+S4AAAG20lEQVR4nO2d63qDIAyGPSAKtvX+73aesEY0orYLSX1/b3v8BvkCGGKSBlJUun6Wyto8oSW3VpXPWldF6KMnIT/UaKOIla2hjM4+ozGrY9TnUHV1WaOOWeCA0lc0Zob6+QMx6JxFNLJR2IGp3NRY1NQGeozcbPrslkZtqR/6MHYrLtc1NiX1A5+ibMI1vvgN4sD6UK5p5OQ1S0yQxiL+jIixMl89jRnXeeqwXhZZaqx4ZYw18uXqLhEn0ReZyJPoiQQaMxkSlyLnGgvudvPGFhsaeScNiFrXyDn1+5g1jZr6qT6M9jU2UvzGYRtPI8+dBka51ChtpnZoqFFQ2njjEkgi0VMd9VxjRv003yHPZhqf1E/zJcxbo9BhbMkmjTKjscM4jQX1k3yRYtRYUz/IF9GjRkn7jSVq0FhRP8dXqXqNkqdqvw5IZE/VfrImgpPjQNZqlLjjmKNbjVLXcQ7TapQdjl1AJpIXOQNFIjs7dlSJdMtpTSeRvQLoqBPptpq0CuWdOS4pE+mpo00eicRDR4hNpL0C8JGv8Dc03tzc3NzEgjL68ahNKTf7PKfiwuJhRC4H80cKqOTJ9Ion29F8CdujPTyJvcxa0GCulWwPPKQMpsXu5GUyIrNGJHZTluHtF4/9K4fspyw6Vd9TlvXSoNxX2NFwdtlAjSmL66EbAI0avyhbMQ3MeaF2qhNVox7EM5fkwHO66ag0ZkMslz9gJTcWE5TonH2xC0xoOq7UTtXYYLILTDBm7wJmi17uZhaYwHVAWUi5viMZ/xusAhNeiAXBZlH/YRSYcDm3KCjI0SnLJzDhDtKr8EWnLJvOCtB2/PU32kKj4dFdYdt2HDmaS1gsZRHbmTDYwoDBGRdqOxNoYFbRV5Ts2I5jJzD/84lPsGc7Ds6BCZetaEUa38AMsR0HHpjxZkxoO4+dn0YDs4g2MANtx8EzMDc2WZvgS9k4T2UP2M70K+wC84jtONQLURlho7Cw1Y73W7wC86DtOHgFJrCd5sBhxs4eM6YpCzdZh9LcTsaM6PDnjO04bL3eD24gnsA8ttpZkqNL2Wh2X9B2jttFieWSWI5FoO2ceCYGueSC7Thy9OVXDOeVV2xnAn0rRP8iIb9kOxP4Io96yl61HQcemMTLn8XZzln2FnnZk9Bloe002XkqvPqHcsrudc/+IGR7zDy4r/11yMJyuxby49BdLt7vaP8xyEJS7T/bp/iFyUo1jv9oOmSt8P4xeVBd9v/HaCTr9ft/rkrWsRkazoWlXAuqkG5dDs90rjRyxdfklPsraDhf2lvRnkZCw3md/jPYHpn6iA7uHs+edWDn5uTv06HhnDuzwsKwoP/2FDScM03O0FrJKF59XDUcdJLG8QoLGs5H3wWQn8U5rhgO+k6nIT9TdVwwHPTdXAxn4yPnDQfPFZFM0p6zhhN5rpgDi1dCVzjokq2JIVfMgaYY5hFoGMaRK+acMBzs9VQ0uWLGYcPZWbLFkivmHDQctCaQ9HXNNseq5ZiF4ciRqkcsG8YYhiMHysj4heFAsOGg2TDui0mBhsMzDAf2LyN1cMuGkADDQbMhgxYJ+4aDh2EshXAIu4aDniNGHoYjO5VVT9ZhOIAajsVq3+I5wNgDiICGg/Z8oD7sPsC24TA4Rwwj37jwgPZAiOwAYw84jO7R0UnKJwxHgGmOhoM5aUzniIGA3NjfX8V7y0R1jhgISBwmUTU2hMzC0FECCWixA7swdAT37OIXhhOBpThMlmzrhPTQYxqGb7C1TE8Ur36vsROQnJZs2/De3oexOZAV/0k6sd6BlbWT+vgiJQ3hiIH7K+6pYp2pJKN4GJECB1RpnqVgfTc3Nzc3N6LJf+BrbPkPfBsx/4lvXIo4mkApf+Kbs9G2IfwY9U98A/oXvuX9C99kp2sp8E+oNEmlG6tpNUo3Hd1qPHOdjxNZq1F4QKq00yh7FVD3GmVnyKrXKHqydq/2O42SnVWPGiUvdYpRI12vr6/TF/f1GuWmyGzSKHYghxrNQaPQgcyzmUahAzmW2o4ayRphfRNXEpa4qgzqB/oC7oqG00jXme5rTHVEk8YjTeJZYBtPo7jZ+r5M9NYozFtn1xdmGkXtP+alxHONghIIqCSea6TrM/hpclDLDzTSdRr8LFDiQqMMkQuJS40SRC4lehrTjLu7Kq8W3NOYFrxXdaV/N8PXyHsxsNaXeU1jqrkmSrt6n31VY9rwnK/ler+6dY1p+uI3lHarN8iWxhg//YaCtFna1Bh745cF2IVvRCMjlWgbZVwjj9YTaI+eAI3dYEZ9QwW/Dx2qsaXRUV5UUUbj7cyPaOwoKl2bUllLbbe5tao09asK/gzDHyJbNykGyG5JAAAAAElFTkSuQmCC' className={s.plane}></img></button>
</div>


        </div>
        </>
    )
}



export default Velazquez;