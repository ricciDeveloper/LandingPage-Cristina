document.addEventListener("DOMContentLoaded", function () {
    // Seleciona os elementos do modal
    const modal = document.getElementById("modal");
    const modalContent = document.querySelector(".modal-content");
    const modalImg = document.getElementById("modal-img");
    const modalText = document.getElementById("modal-text");
    const closeModal = document.querySelector(".close");

    // Lista de produtos com imagens e descrições
    const produtos = [
        { src: "/assets/images/produtos/1.jpeg", desc: "Toalha de crochê artesanal com detalhes únicos." },
        { src: "/assets/images/produtos/2.jpeg", desc: "Centro de mesa delicado, feito à mão." },
        { src: "/assets/images/produtos/4.jpeg", desc: "Conjunto de sousplat para deixar sua mesa elegante." },
        { src: "/assets/images/produtos/5.jpeg", desc: "Caminho de mesa sofisticado em crochê fino." },
        { src: "/assets/images/produtos/6.jpeg", desc: "Tapete de crochê ideal para decoração aconchegante." },
        { src: "/assets/images/produtos/8.jpeg", desc: "Porta-pano de prato charmoso com detalhes florais." },
        { src: "/assets/images/produtos/9.jpeg", desc: "Jogo americano exclusivo para ocasiões especiais." },
        { src: "/assets/images/produtos/10.jpeg", desc: "Almofada decorativa em crochê com cores vibrantes." },
    ];

    // Seleciona todas as imagens dos produtos e adiciona o evento de clique
    document.querySelectorAll(".produto-item img").forEach((img, index) => {
        img.addEventListener("click", function () {
            // Exibe o modal (inicialmente invisível)
            modal.style.display = "flex";

            // Adiciona uma pequena pausa para ativar a animação
            setTimeout(() => modal.classList.add("show"), 10);

            // Define a imagem e descrição do modal com base no índice do produto clicado
            modalImg.src = produtos[index].src;
            modalText.textContent = produtos[index].desc;
        });
    });

    // Evento para fechar o modal ao clicar no botão "X"
    closeModal.addEventListener("click", function () {
        // Remove a classe que ativa a animação de zoom
        modal.classList.remove("show");

        // Aguarda o tempo da animação antes de esconder o modal completamente
        setTimeout(() => (modal.style.display = "none"), 1000);
    });

    // Fecha o modal ao clicar fora da imagem/modal-content
    modal.addEventListener("click", function (event) {
        // Verifica se o clique foi fora do conteúdo do modal
        if (event.target === modal) {
            modal.classList.remove("show");
            setTimeout(() => (modal.style.display = "none"), 1000);
        }
    });
});
