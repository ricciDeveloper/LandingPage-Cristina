document.addEventListener("DOMContentLoaded", function () {
    // Seleciona os elementos do modal
    const modal = document.getElementById("modal");
    const modalContent = document.querySelector(".modal-content");
    const modalImg = document.getElementById("modal-img");
    const modalText = document.getElementById("modal-text");
    const closeModal = document.querySelector(".close");

    // Lista de produtos com imagens e descrições
    const produtos = [
        { src: "/assets/images/produtos/1.jpeg", desc: "Croped de crochê artesanal com detalhes únicos. \n Entre e contato e faça sua encomenda." },
        { src: "/assets/images/produtos/2.jpeg", desc: "Croped de crochê artesanal com detalhes únicos. \n Entre e contato e faça sua encomenda." },
        { src: "/assets/images/produtos/4.jpeg", desc: "Croped de crochê artesanal com detalhes únicos. \n Entre e contato e faca sua encomenda." },
        { src: "/assets/images/produtos/5.jpeg", desc: "Croped de crochê artesanal com detalhes únicos. \n Entre e contato e faça sua encomenda." },
        { src: "/assets/images/produtos/6.jpeg", desc: "Croped de crochê artesanal com detalhes únicos. \n Entre e contato e faça sua encomenda." },
        { src: "/assets/images/produtos/8.jpeg", desc: "Croped de crochê artesanal com detalhes únicos. \n Entre e contato e faça sua encomenda." },
        { src: "/assets/images/produtos/9.jpeg", desc: "Croped de crochê artesanal com detalhes únicos. \n Entre e contato e faça sua encomenda." },
        { src: "/assets/images/produtos/10.jpeg", desc: "Croped de crochê artesanal com detalhes únicos. \n Entre e contato e faça sua encomenda." },


        { src: "/assets/images/produtos/11.jpeg", desc: "Bolsa Baú fio Náutico na cor grafite e marrom \nFundo grande, espaçosa, resistente e moderna.\nIdeal para quem não deixa nada para trás!\nMedidas: 26cm x 33cm x 23cm. \n Entre e contato e faça sua encomenda." },
        { src: "/assets/images/produtos/12.jpeg", desc: "Bolsa clutch artesanal marrom fio náutico (exclusiva).\nBásica para o dia a dia, com espaço interno para quem leva o necessário, sem abrir mão da vaidade!\nMedidas: 20cm comprimento x 18cm altura x 3cm largura\nDe R$140,00 por R$119,99\n Entre e contato e faça sua encomenda." },
        { src: "/assets/images/produtos/13.jpeg", desc: "Bolsa Juta básica (exclusiva)\nExcelente para aquele momento onde você precisa do suficiente!\nMedidas: 10cm x 13cm. Alça 1,05 m\nDe R$140 por R$119,99\n Entre e contato e faça sua encomenda." },
        { src: "/assets/images/produtos/14.jpeg", desc: "Top crochê Primavera\nFio Anne, com forro, com aplicações em costura manual.\nSob encomenda Tam P, M e G\nValor R$119,90\n Entre e contato e faça sua encomenda." },

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
