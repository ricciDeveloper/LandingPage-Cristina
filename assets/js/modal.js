document.addEventListener("DOMContentLoaded", function () {
    // Seleciona os elementos do modal
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const modalText = document.getElementById("modal-text");
    const thumbnailsContainer = document.querySelector(".thumbnails");

    // Lista de produtos com imagens e descrições
    const produtos = [
        { gallery: ["/assets/images/produtos/1.jpeg"], desc: "Croped de crochê artesanal com detalhes únicos. \n Entre e contato e faça sua encomenda." },
        { gallery: ["/assets/images/produtos/2.jpeg"], desc: "Croped de crochê artesanal com detalhes únicos. \n Entre e contato e faça sua encomenda." },
        { gallery: ["/assets/images/produtos/4.jpeg"], desc: "Croped de crochê artesanal com detalhes únicos. \n Entre e contato e faça sua encomenda." },
        { gallery: ["/assets/images/produtos/5.jpeg"], desc: "Croped de crochê artesanal com detalhes únicos. \n Entre e contato e faça sua encomenda." },
        { gallery: ["/assets/images/produtos/6.jpeg"], desc: "Croped de crochê artesanal com detalhes únicos. \n Entre e contato e faça sua encomenda." },
        { gallery: ["/assets/images/produtos/8.jpeg"], desc: "Croped de crochê artesanal com detalhes únicos. \n Entre e contato e faça sua encomenda." },
        { gallery: ["/assets/images/produtos/9.jpeg"], desc: "Croped de crochê artesanal com detalhes únicos. \n Entre e contato e faça sua encomenda." },
        { gallery: ["/assets/images/produtos/10.jpeg"], desc: "Croped de crochê artesanal com detalhes únicos. \n Entre e contato e faça sua encomenda." },
        { gallery: ["/assets/images/produtos/11.jpeg", "/assets/images/produtos/11a.jpeg", "/assets/images/produtos/11b.jpeg", "/assets/images/produtos/11c.jpeg"], desc: "Bolsa Baú fio Náutico na cor grafite e marrom \nFundo grande, espaçosa, resistente e moderna.\nIdeal para quem não deixa nada para trás!\nMedidas: 26cm x 33cm x 23cm. \n Entre e contato e faça sua encomenda." },
        { gallery: ["/assets/images/produtos/12.jpeg", "/assets/images/produtos/12b.jpeg"], desc: "Bolsa clutch artesanal marrom fio náutico (exclusiva).\nBásica para o dia a dia, com espaço interno para quem leva o necessário, sem abrir mão da vaidade!\nMedidas: 20cm comprimento x 18cm altura x 3cm largura\nDe R$140,00 por R$119,99\n Entre e contato e faça sua encomenda." },
        { gallery: ["/assets/images/produtos/13.jpeg", "/assets/images/produtos/13b.jpeg"], desc: "Bolsa Juta básica (exclusiva)\nExcelente para aquele momento onde você precisa do suficiente!\nMedidas: 10cm x 13cm. Alça 1,05 m\nDe R$140 por R$119,99\n Entre e contato e faça sua encomenda." },
        { gallery: ["/assets/images/produtos/14.jpeg", "/assets/images/produtos/14b.jpeg"], desc: "Top crochê Primavera\nFio Anne, com forro, com aplicações em costura manual.\nSob encomenda Tam P, M e G\nValor R$119,90\n Entre e contato e faça sua encomenda." },
    ];

    // Função para abrir o modal com a galeria
    function openModal(index) {
        const product = produtos[index];

        // Exibe o modal
        modal.style.display = "flex";
        setTimeout(() => modal.classList.add("show"), 10);

        // Define a imagem principal como a primeira da galeria
        modalImg.src = product.gallery[0];
        modalText.textContent = product.desc;

        // Limpa os thumbnails existentes
        thumbnailsContainer.innerHTML = "";

        // Adiciona os thumbnails dinamicamente apenas se houver mais de uma imagem
        if (product.gallery.length > 1) {
            product.gallery.forEach((imgSrc, thumbIndex) => {
                const thumb = document.createElement("img");
                thumb.src = imgSrc;
                thumb.alt = `Thumbnail ${thumbIndex + 1}`;
                // Adiciona a classe "active" apenas ao primeiro thumbnail
                if (thumbIndex === 0) {
                    thumb.classList.add("active");
                }
                thumb.addEventListener("click", function () {
                    modalImg.src = imgSrc; // Troca a imagem principal
                    document.querySelectorAll(".thumbnails img").forEach(t => t.classList.remove("active"));
                    thumb.classList.add("active"); // Destaca o thumbnail clicado
                });
                thumbnailsContainer.appendChild(thumb);

                // Adiciona um evento para verificar se a imagem carrega corretamente
                thumb.onerror = () => {
                    console.error(`Erro ao carregar a imagem: ${imgSrc}`);
                    thumb.style.display = "none"; // Esconde o thumbnail se a imagem não carregar
                };
            });
        }

        // Log para depuração
        console.log(`Abrindo modal para o produto ${index}. Imagens:`, product.gallery);
    }

    // Adiciona o evento de clique nas imagens dos produtos
    document.querySelectorAll(".produto-item img").forEach((img, index) => {
        img.addEventListener("click", function () {
            openModal(index);
        });
    });

    // Fecha o modal ao clicar fora do conteúdo
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.classList.remove("show");
            setTimeout(() => (modal.style.display = "none"), 1000);
        }
    });
});