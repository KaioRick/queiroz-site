function mostrarPopupCarrinho() {
    const popup = document.getElementById("cart-popup");
    popup.style.display = "block";
    setTimeout(() => {
      popup.style.display = "none";
    }, 3000);
  }
  
  function scrollToCart() {
    document.querySelector(".cart-box").scrollIntoView({ behavior: "smooth" });
  }
  
  const produtos = [
    {
      nome: "Roda Impressa",
      descricao: "Escolha o tamanho ideal.",
      imagens: [
        "Fotos/render3.png",
        "Fotos/render1.png",
        "Fotos/render2.png"
      ],
      opcoes: [
        { nome: "75mm", preco: 200 },
        { nome: "100mm", preco: 300 }
      ]
    },
    {
      nome: "Suporte Gamer",
      descricao: "Para controle PS5.",
      imagens: [
        "Fotos/Suporte Controle.jpg",
        "Fotos/Suporte Controle.jpg",
        "Fotos/Suporte Controle.jpg"
      ],
      opcoes: [
        { nome: "Simples", preco: 40 },
        { nome: "Preto e Branco", preco: 40 }
      ]
    },
    {
      nome: "Suporte Gamer",
      descricao: "Para controle PS5.",
      imagens: [
        "Fotos/Suporte Controle.jpg",
        "Fotos/Suporte Controle.jpg",
        "Fotos/Suporte Controle.jpg"
      ],
      opcoes: [
        { nome: "Simples", preco: 40 },
        { nome: "Preto e Branco", preco: 40 }
      ]
    },
    {
      nome: "Suporte Gamer",
      descricao: "Para controle PS5.",
      imagens: [
        "Fotos/Suporte Controle.jpg",
        "Fotos/Suporte Controle.jpg",
        "Fotos/Suporte Controle.jpg"
      ],
      opcoes: [
        { nome: "Simples", preco: 40 },
        { nome: "Preto e Branco", preco: 40 }
      ]
    },
    {
      nome: "Rack de teto",
      descricao: "Rack de teto para mini fiat toro roma",
      imagens: [
        "Fotos/Suporte Controle.jpg",
        "Fotos/Suporte Controle.jpg",
        "Fotos/Suporte Controle.jpg"
      ],
      opcoes: [
        { nome: "1 unidade", preco: 40 },
        { nome: "2 unidades", preco: 60 }
      ]
    }
  ];
  
  const carrinho = [];
  
  function renderProdutos() {
    const container = document.getElementById("product-list");
    produtos.forEach((produto, index) => {
      const opcoesHTML = produto.opcoes.map((op, i) =>
        `<option value="${i}">${op.nome} - R$ ${op.preco.toFixed(2)}</option>`
      ).join("");
  
      const imagensHTML = produto.imagens.map(img => `<img src="${img}" alt="${produto.nome}" style="flex: 0 0 100%;">`).join("");
  
      container.innerHTML += `
        <div class="product">
          <div class="carousel-container">
            <div class="carousel-images" id="carousel-${index}" style="width: ${produto.imagens.length * 33.4}%;">
              ${imagensHTML}
            </div>
            <button class="carousel-btn prev" onclick="mudarImagem(${index}, -1)">‹</button>
            <button class="carousel-btn next" onclick="mudarImagem(${index}, 1)">›</button>
          </div>
          <h2>${produto.nome}</h2>
          <div class="description">${produto.descricao}</div>
          <select id="select-${index}">${opcoesHTML}</select>
          <button class="btn-add" onclick="addToCart(${index})">Adicionar ao Carrinho</button>
        </div>
      `;
    });
  }
  
  function addToCart(index) {
    const select = document.getElementById(`select-${index}`);
    const opcaoIndex = select.value;
    const produto = produtos[index];
    const variacao = produto.opcoes[opcaoIndex];
    const nomeFinal = `${produto.nome} (${variacao.nome})`;
  
    const existente = carrinho.find(item => item.nome === nomeFinal);
    if (existente) {
      existente.qtd++;
    } else {
      carrinho.push({ nome: nomeFinal, preco: variacao.preco, qtd: 1 });
    }
  
    renderCarrinho();
    mostrarPopupCarrinho();
  }
  function mostrarPopupCarrinho() {
    const popup = document.getElementById("cart-popup");
    popup.style.display = "block";
  
    // Reinicia a animação se for chamado rapidamente
    popup.classList.remove("fade");
    void popup.offsetWidth; // Trigger reflow
    popup.classList.add("fade");
  
    setTimeout(() => {
      popup.style.display = "none";
    }, 3000);
  }
  
  
  function renderCarrinho() {
    const container = document.getElementById("cart-items");
    container.innerHTML = "";
    let total = 0;
    const totalProdutos = carrinho.length;
    const badge = document.getElementById("cart-count");
    badge.innerText = totalProdutos;
    badge.style.display = totalProdutos > 0 ? "inline-block" : "none";
    
  
    carrinho.forEach((item, index) => {
      const subtotal = item.qtd * item.preco;
      total += subtotal;
  
      container.innerHTML += `
        <div class="cart-item">
          <span>${item.nome}<br><small>${item.qtd}x R$ ${item.preco.toFixed(2)}</small></span>
          <div class="controls">
            <button class="btn-qty" onclick="alterarQtd(${index}, -1)">-</button>
            <span>${item.qtd}</span>
            <button class="btn-qty" onclick="alterarQtd(${index}, 1)">+</button>
          </div>
        </div>
      `;
    });
  
    document.getElementById("cart-total").innerText = `Total: R$ ${total.toFixed(2)}`;
  }
  
  function alterarQtd(index, delta) {
    carrinho[index].qtd += delta;
    if (carrinho[index].qtd <= 0) {
      carrinho.splice(index, 1);
    }
    renderCarrinho();
  }
  function enviarWhatsApp() {
    if (carrinho.length === 0) {
      mostrarAlerta("Seu carrinho está vazio.");
      return;
    }
    
    // Aqui segue o restante do seu envio pro WhatsApp...
  
  
  function mostrarAlerta(mensagem) {
    const alerta = document.getElementById("alerta-personalizado");
    const texto = document.getElementById("alerta-texto");
    
    texto.innerText = mensagem;
    alerta.style.display = "block";
  
    // Some automaticamente depois de 3 segundos
    setTimeout(() => {
      alerta.style.display = "none";
    }, 2000);
  }
  
    let mensagem = "Olá! Quero fazer um pedido:\n\n";
    let total = 0;
  
    carrinho.forEach(item => {
      const sub = item.qtd * item.preco;
      mensagem += `• ${item.nome} - ${item.qtd}x R$ ${item.preco.toFixed(2)} = R$ ${sub.toFixed(2)}\n`;
      total += sub;
    });
  
    mensagem += `\nTotal: R$ ${total.toFixed(2)}`;
    const telefone = "5511963853664";
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  }
  
  const posicoesCarrossel = [];
  
  function mudarImagem(index, direcao) {
    const container = document.getElementById(`carousel-${index}`);
    const total = container.children.length;
    if (posicoesCarrossel[index] === undefined) posicoesCarrossel[index] = 0;
  
    posicoesCarrossel[index] += direcao;
    if (posicoesCarrossel[index] < 0) posicoesCarrossel[index] = total - 1;
    if (posicoesCarrossel[index] >= total) posicoesCarrossel[index] = 0;
  
    container.style.transform = `translateX(-${posicoesCarrossel[index] * 100}%)`;
  }
  
  window.addEventListener("DOMContentLoaded", () => {
    renderProdutos();
  });
  function toggleCart() {
    const cart = document.getElementById("cart-box");
    cart.classList.toggle("ativo");
  }
  function toggleCarrinho() {
    const painel = document.getElementById("carrinho");
    painel.classList.toggle("aberto");
  }
  const menuIcon = document.getElementById('menu-icon');
  const sideMenu = document.getElementById('side-menu');
  const closeBtn = document.getElementById('close-btn');
  const overlay = document.getElementById('overlay');
  const menuLinks = sideMenu.querySelectorAll('a[data-section]');
  const menuContent = document.getElementById('menu-content');
  
  let activeSection = null; // para controlar qual seção está ativa
  
  menuIcon.addEventListener('click', () => {
    sideMenu.style.width = '300px';
    overlay.style.display = 'block';
  });
  
  closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);
  
  function closeMenu() {
    sideMenu.style.width = '0';
    overlay.style.display = 'none';
    hideContent();
    activeSection = null;
  }
  
  // Conteúdos
  const sections = {
    contato: `
      <h3>Fale Conosco</h3>
      <p>Você pode entrar em contato conosco pelo WhatsApp ou e-mail.<br>
      WhatsApp: (11) 96385-3664<br>
      E-mail: contato@seusite.com</p>
    `,
    sobre: `
      <h3>Sobre Nós</h3>
      <p>Somos apaixonados por miniaturas 3D e criamos modelos únicos com muita dedicação.
      Nosso estúdio é focado em entregar qualidade e detalhes incríveis em cada peça.</p>
    `
  };
  
  // Função para esconder com animação
  function hideContent() {
    menuContent.classList.remove('show');
    setTimeout(() => {
      menuContent.innerHTML = '';
    }, 300); // espera o fade-out antes de limpar
  }
  
  // Atualiza o conteúdo ao clicar nos links
  menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const section = link.getAttribute('data-section');
  
      if (activeSection === section) {
        hideContent();
        activeSection = null;
      } else {
        menuContent.classList.remove('show'); // esconde antes
        setTimeout(() => {
          menuContent.innerHTML = sections[section] || '';
          menuContent.classList.add('show'); // mostra com fade
        }, 300); // pequena espera para o fade-out
        activeSection = section;
      }
    });
  });
  
  


  