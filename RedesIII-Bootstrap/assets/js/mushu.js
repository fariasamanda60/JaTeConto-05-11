
(() => {
  "use strict";

  const SVG_NS = "http://www.w3.org/2000/svg";

  // ==========================================
  // CRIAÇÃO DO SVG
  // ==========================================

  function createSVG() {
    const svg = document.createElementNS(SVG_NS, "svg");

    svg.setAttribute("viewBox", "0 0 400 450");
    svg.setAttribute("role", "img");
    svg.setAttribute("aria-label", "Mushu, mascote leitor");
    svg.setAttribute("class", "mushu-svg");

    svg.innerHTML = `
      <defs>
        <linearGradient id="mushu-body-gradient"
          x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#e1fbe4"/>
          <stop offset="100%" stop-color="#c8f0d1"/>
        </linearGradient>

        <linearGradient id="mushu-book-gradient"
          x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#218b80"/>
          <stop offset="100%" stop-color="#287c75"/>
        </linearGradient>
      </defs>

      <!-- CORPO -->
      <g class="mushu-line">
        <path class="mushu-body"
          fill="url(#mushu-body-gradient)"
          d="
            M 83 389
            C 51 388 38 359 43 322
            C 47 286 62 254 70 205
            C 77 153 90 116 131 103
            C 158 94 242 94 269 103
            C 310 116 323 153 330 205
            C 338 254 353 286 357 322
            C 362 359 349 388 317 389
            C 289 404 111 404 83 389 Z
          "
        />

        <!-- BRILHO CREME DA CABEÇA -->
        <path fill="#fff0cf" stroke="none"
          d="
            M 159 108
            C 181 99 214 101 244 111
            C 265 118 287 121 309 134
            C 318 140 321 157 318 177
            C 315 194 307 194 304 177
            C 301 153 285 137 260 130
            C 232 121 204 128 181 125
            C 161 123 145 116 159 108 Z
          "
        />

        <!-- PÉS -->
        <path fill="#d3f5d9"
          d="M 87 365 C 64 374 70 414 98 424
             C 119 432 142 418 143 399
             C 144 381 120 361 87 365 Z"/>

        <path fill="#d3f5d9"
          d="M 313 365 C 336 374 330 414 302 424
             C 281 432 258 418 257 399
             C 256 381 280 361 313 365 Z"/>
      </g>

      <!-- BROTO -->
      <g class="mushu-line mushu-sprout" fill="#82c765">
        <path d="
          M 198 98
          C 174 92 157 74 151 49
          C 174 41 198 54 200 87
          C 205 54 231 37 252 43
          C 248 73 229 93 202 98
          L 202 111 L 198 111 Z
        "/>
      </g>

      <!-- FAIXA NO TOPO -->
      <g class="mushu-line">
        <path fill="#278c80"
          d="M 270 99
             L 306 103
             Q 315 104 311 118
             L 303 159
             L 285 145
             L 264 155
             L 265 116
             Q 265 104 270 99 Z"/>
      </g>

      <!-- CORAÇÃO -->
      <path fill="#278c80"
        d="
          M 314 305
          C 307 293 288 300 290 313
          C 292 326 313 340 314 340
          C 315 340 336 326 338 313
          C 340 300 321 293 314 305 Z
        "
      />

      <!-- SOBRANCELHAS -->
      <g class="mushu-line mushu-eyebrows" fill="none">
        <path class="mushu-eyebrow-left"
            d="M 124 177 Q 136 163 151 169"/>

        <path class="mushu-eyebrow-right"
            d="M 249 169 Q 264 163 276 177"/>
      </g>

      <!-- OLHO ESQUERDO -->
      <g class="mushu-eye-left">
        <ellipse cx="139" cy="215" rx="24" ry="27"
            fill="#35190f"/>

        <circle cx="146" cy="207" r="7" fill="#ffffff"/>
      </g>

      <!-- OLHO DIREITO -->
      <g class="mushu-eye-right">
        <ellipse cx="261" cy="215" rx="24" ry="27"
            fill="#35190f"/>

        <circle cx="268" cy="207" r="7" fill="#ffffff"/>
      </g>

        <!-- BRILHOS -->
        <circle cx="146" cy="207" r="7" fill="#ffffff"/>
        <circle cx="268" cy="207" r="7" fill="#ffffff"/>
      </g>

      
      <!-- SORRISO -->
      <g class="mushu-mouth">
        <path class="mushu-mouth-shape"
          fill="#35190f"
          d="
            M 173 237
            Q 200 248 227 237
            Q 230 260 200 264
            Q 170 260 173 237 Z
          "
        />

        <path class="mushu-tongue"
          fill="#ff7775"
          d="
            M 182 251
            Q 200 245 218 251
            Q 200 267 182 251 Z
          "
        />
      </g>


      <!-- BOCHECHAS -->
      <!-- Agora ficam ANTES dos braços -->
      <g class="mushu-blush">
        <ellipse
          cx="91"
          cy="232"
          rx="20"
          ry="12"
          fill="#ffa6b1"
          opacity=".95"
        />

        <ellipse
          cx="309"
          cy="232"
          rx="20"
          ry="12"
          fill="#ffa6b1"
          opacity=".95"
        />
      </g>

      <!-- LIVRO ABERTO -->
      <g class="mushu-line">

        <path class="mushu-page"
          d="
            M 105 283
            Q 144 269 193 301
            Q 200 306 207 301
            Q 256 269 295 283
            L 292 300
            Q 247 292 203 317
            Q 200 319 197 317
            Q 153 292 108 300 Z
          "
        />

        <path fill="url(#mushu-book-gradient)"
          d="
            M 99 299
            Q 148 292 198 317
            L 198 405
            Q 151 412 110 395 Z
          "
        />

        <path fill="url(#mushu-book-gradient)"
          d="
            M 202 317
            Q 252 292 301 299
            L 290 395
            Q 249 412 202 405 Z
          "
        />

        <path fill="#278c80"
          d="M 194 317 Q 200 314 206 317 L 206 405
             Q 200 408 194 405 Z"/>

        <path fill="none" d="M 198 318 L 198 405"/>
        <path fill="none" d="M 206 318 L 206 405"/>
      </g>

      <!-- =====================================
           ESTADO NORMAL: SEGURANDO O LIVRO
           ===================================== -->

      <g class="mushu-open-arms">

        <!-- BRAÇO ESQUERDO -->
        <path class="mushu-arm"
          d="
            M 105 301
            C 91 296, 88 306, 97 317
            C 107 326, 119 337, 122 348
            C 126 361, 119 371, 107 375
            C 94 380, 80 373, 75 360
            C 72 379, 86 391, 104 391
            C 127 390, 140 376, 140 357
            C 140 337, 121 318, 105 301
            Z
          "
        />

        <!-- BRAÇO DIREITO -->
        <path class="mushu-arm"
          d="
            M 295 301
            C 309 296, 312 306, 303 317
            C 293 326, 281 337, 278 348
            C 274 361, 281 371, 293 375
            C 306 380, 320 373, 325 360
            C 328 379, 314 391, 296 391
            C 273 390, 260 376, 260 357
            C 260 337, 279 318, 295 301
            Z
          "
        />
      </g>

      <!-- =====================================
           SENHA VISÍVEL: UMA PATINHA NOS OLHOS
           ===================================== -->

      <g class="mushu-visible-arms">

        <!-- PATINHA ESQUERDA -->
        <path class="mushu-arm mushu-one-cover"
          d="
            M 81 238
            C 73 222 81 207 94 194
            C 112 176 137 161 153 169
            C 169 177 166 195 150 211
            L 119 241
            C 108 253 91 252 81 238 Z
          "
        />

        <!-- MÃO DIREITA SEGURANDO O LIVRO -->
        <path class="mushu-arm mushu-free-arm"
          d="
            M 295 301
            C 309 296, 312 306, 303 317
            C 293 326, 281 337, 278 348
            C 274 361, 281 371, 293 375
            C 306 380, 320 373, 325 360
            C 328 379, 314 391, 296 391
            C 273 390, 260 376, 260 357
            C 260 337, 279 318, 295 301
            Z
          "
        />
      </g>

      <!-- =====================================
           SENHA OCULTA: DUAS PATINHAS NOS OLHOS
           ===================================== -->

      <g class="mushu-covered-arms">

        <g class="mushu-cover">

          <!-- PATINHA ESQUERDA -->
          <path class="mushu-arm"
            d="
              M 81 238
              C 73 222 81 207 94 194
              C 112 176 137 161 153 169
              C 169 177 166 195 150 211
              L 119 241
              C 108 253 91 252 81 238 Z
            "
          />

          <!-- PATINHA DIREITA -->
          <path class="mushu-arm"
            d="
              M 319 238
              C 327 222 319 207 306 194
              C 288 176 263 161 247 169
              C 231 177 234 195 250 211
              L 281 241
              C 292 253 309 252 319 238 Z
            "
          />

        </g>
      </g>

      <!-- CONTORNO DOS PÉS À FRENTE -->
      <g class="mushu-line" fill="#d3f5d9">
        <ellipse cx="111" cy="405" rx="32" ry="29"/>
        <ellipse cx="289" cy="405" rx="32" ry="29"/>
      </g>
    `;

    return svg;
  }


  // ==========================================
  // CONTROLE DOS ESTADOS
  // ==========================================

  function initMushu() {

    const containers = document.querySelectorAll(
      "[data-mushu], .mushu-palco"
    );

    containers.forEach((container) => {

      if (container.dataset.mushuReady === "true") return;

      container.dataset.mushuReady = "true";
      container.classList.add("mushu-widget");

      const svg = createSVG();

      container.replaceChildren(svg);

      // Estado inicial
      svg.dataset.estado = "normal";

      // Altera o estado do Mushu
      function setState(state) {

        const estadosValidos = [
          "normal",
          "oculta",
          "visivel"
        ];

        if (!estadosValidos.includes(state)) return;

        svg.dataset.estado = state;
      }

      // API para outros scripts
      container.mushu = {

        setState,

        coverEyes() {
          setState("oculta");
        },

        showEyes() {
          setState("normal");
        },

        showOneEye() {
          setState("visivel");
        },

        toggleEyes() {
          setState(
            svg.dataset.estado === "oculta"
              ? "normal"
              : "oculta"
          );
        },

        element: svg
      };
    });


    // ==========================================
    // SINCRONIZAÇÃO COM O CAMPO DE SENHA
    // ==========================================

    const senha = document.querySelector("#senha");

    if (!senha) return;

    function atualizarMushu() {

      const temSenha = senha.value.length > 0;
      const senhaVisivel = senha.type === "text";

      document.querySelectorAll("[data-mushu], .mushu-palco")
        .forEach((container) => {

          if (!container.mushu) return;

          // Campo vazio: Mushu volta ao livro
          if (!temSenha) {
            container.mushu.setState("normal");
          }

          // Senha preenchida e visível
          else if (senhaVisivel) {
            container.mushu.setState("visivel");
          }

          // Senha preenchida e oculta
          else {
            container.mushu.setState("oculta");
          }

        });
    }

    // Digitação e exclusão
    senha.addEventListener("input", atualizarMushu);

    // Alterações no campo
    senha.addEventListener("change", atualizarMushu);

    // Detecta a troca entre password e text
    const observador = new MutationObserver(atualizarMushu);

    observador.observe(senha, {
      attributes: true,
      attributeFilter: ["type"]
    });

    // Inicialização
    atualizarMushu();

  }


  // ==========================================
  // INICIALIZAÇÃO
  // ==========================================

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initMushu);
  } else {
    initMushu();
  }

})();
