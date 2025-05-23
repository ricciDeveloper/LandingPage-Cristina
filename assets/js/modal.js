document.addEventListener("DOMContentLoaded", function () {
    // Seleciona os elementos do modal
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const modalText = document.getElementById("modal-text");
    const thumbnailsContainer = document.querySelector(".thumbnails");

    // Lista de produtos com imagens e descrições
    const produtos = [
        { gallery: ["../../assets/images/produtos/cropped1.jpeg","../../assets/images/produtos/cropped1a.jpeg"], desc: "Cropped Crochê Barbante Fio 4\nGarante caimento perfeito, sem transparência (forro e bojo opcionais).\nConforto e um visual artesanal e encantador.\nCombina facilmente com diferentes estilos – desde looks mais casuais até produções mais informais!\nSob encomenda Tam P, M e G\nConsulte cores e tamanhos disponíveis.\nValor R$69,90\nEntre em contato e faça sua encomenda! 🥰" },
        { gallery: ["../../assets/images/produtos/cropped2.jpeg", "../../assets/images/produtos/cropped2a.jpeg"], desc: "Cropped Crochê Barbante Fio 4\nGarante caimento perfeito, sem transparência (forro e bojo opcionais).\nConforto e um visual artesanal e encantador.\nCombina facilmente com diferentes estilos – desde looks mais casuais até produções mais informais!\nSob encomenda Tam P, M e G\nConsulte cores e tamanhos disponíveis.\nValor R$69,90\nEntre em contato e faça sua encomenda! 🧶✨" },
        { gallery: ["../../assets/images/produtos/cropped4.jpeg"], desc: "Cropped Crochê Barbante Fio 4\nGarante caimento perfeito, sem transparência (forro e bojo opcionais).\nConforto e um visual artesanal e encantador.\nCombina facilmente com diferentes estilos – desde looks mais casuais até produções mais informais!\nSob encomenda Tam P, M e G\nConsulte cores e tamanhos disponíveis.\nValor R$69,90\nEntre em contato e faça sua encomenda! 🥰" },
        { gallery: ["../../assets/images/produtos/cropped5.jpeg","../../assets/images/produtos/cropped5a.jpeg"], desc: "Cropped Crochê Barbante Fio 4\nGarante caimento perfeito, sem transparência (forro e bojo opcionais).\nConforto e um visual artesanal e encantador.\nCombina facilmente com diferentes estilos – desde looks mais casuais até produções mais informais!\nSob encomenda Tam P, M e G\nConsulte cores e tamanhos disponíveis.\nValor R$69,90\nEntre em contato e faça sua encomenda! 🧶✨"},
        { gallery: ["../../assets/images/produtos/cropped6.jpeg","../../assets/images/produtos/cropped6a.jpeg"], desc: "Cropped Crochê Barbante Fio 4\nGarante caimento perfeito, sem transparência (forro e bojo opcionais).\nConforto e um visual artesanal e encantador.\nCombina facilmente com diferentes estilos – desde looks mais casuais até produções mais informais!\nSob encomenda Tam P, M e G\nConsulte cores e tamanhos disponíveis.\nValor R$79,90\nEntre em contato e faça sua encomenda! 🥰" },
        { gallery: ["../../assets/images/produtos/cropped8.jpeg","../../assets/images/produtos/cropped8a.jpeg"], desc: "Cropped Crochê Barbante Fio 4\nGarante caimento perfeito, sem transparência (forro e bojo opcionais).\nConforto e um visual artesanal e encantador.\nCombina facilmente com diferentes estilos – desde looks mais casuais até produções mais informais!\nSob encomenda Tam P, M e G\nConsulte cores e tamanhos disponíveis.\nValor R$79,90\nEntre em contato e faça sua encomenda! 🥰" },
        { gallery: ["../../assets/images/produtos/cropped9.jpeg", "../../assets/images/produtos/cropped9a.jpeg"], desc: "Cropped Crochê Barbante Fio 4\nGarante caimento perfeito, sem transparência (forro e bojo opcionais).\nConforto e um visual artesanal e encantador.\nCombina facilmente com diferentes estilos – desde looks mais casuais até produções mais informais!\nSob encomenda Tam P, M e G\nConsulte cores e tamanhos disponíveis.\nValor R$79,90\nEntre em contato e faça sua encomenda! 🥰" },
        { gallery: ["../../assets/images/produtos/top10.jpeg", "../../assets/images/produtos/top10a.jpeg"], desc: "Top Crochê Barbante Fio 4\nGarante caimento perfeito, sem transparência (forro e bojo opcionais).\nConforto e um visual artesanal e encantador.\nCombina facilmente com diferentes estilos – desde looks mais casuais até produções mais informais!\nSob encomenda Tam P, M e G\nConsulte cores e tamanhos disponíveis.\nValor R$69,90\nEntre em contato e faça sua encomenda! 🥰" },
        { gallery: ["../../assets/images/produtos/bolsa11.jpeg", "../../assets/images/produtos/bolsa11a.jpeg", "../../assets/images/produtos/bolsa11b.jpeg", "../../assets/images/produtos/bolsa11c.jpeg", "../../assets/images/produtos/bolsa11d.jpeg"], desc: "Bolsa Baú fio Náutico na cor grafite e marrom \nFundo grande, espaçosa, resistente e moderna.\nIdeal para quem não deixa nada para trás!\nMedidas: 26cm x 33cm x 23cm. \n Entre e contato e faça sua encomenda." },
        { gallery: ["../../assets/images/produtos/bolsa12.jpeg", "../../assets/images/produtos/bolsa12b.jpeg", "../../assets/images/produtos/bolsa12c.jpeg", "../../assets/images/produtos/bolsa12d.jpeg"], desc: "Bolsa clutch artesanal marrom fio náutico (exclusiva).\nBásica para o dia a dia, com espaço interno para quem leva o necessário, sem abrir mão da vaidade!\nMedidas: 20cm comprimento x 18cm altura x 3cm largura\nDe R$140,00 por R$119,99\n Entre e contato e faça sua encomenda." },
        { gallery: ["../../assets/images/produtos/bolsa13.jpeg", "../../assets/images/produtos/bolsa13a.jpeg", "../../assets/images/produtos/bolsa13b.jpeg"], desc: "Bolsa Juta básica (exclusiva)\nExcelente para aquele momento onde você precisa do suficiente!\nMedidas: 10cm x 13cm. Alça 1,05 m\nDe R$140 por R$119,99\n Entre e contato e faça sua encomenda." },
        { gallery: ["../../assets/images/produtos/cropped14.jpeg", "../../assets/images/produtos/cropped14b.jpeg","../../assets/images/produtos/cropped14c.jpeg", "../../assets/images/produtos/cropped14d.jpeg"], desc: "Cropped Crochê com Fio Cléa, Aplicação de Flores e Forro\nDelicadeza, conforto e estilo em uma única peça! Nosso cropped é confeccionado artesanalmente com fio Cléa, proporcionando um toque suave e acabamento impecável. A aplicação de flores em crochê adiciona um charme romântico e exclusivo, enquanto o forro embutido garante segurança e modelagem perfeita.\nIdeal para compor looks leves, femininos e cheios de personalidade — seja para o dia a dia ou ocasiões especiais.\nPeça exclusiva, feita sob encomenda\nValor R$109,99" },
        { gallery: ["../../assets/images/produtos/top15.jpeg", "../../assets/images/produtos/top15a.jpeg","../../assets/images/produtos/top15b.jpeg"], desc: "Top de Crochê com Linha Amigurumi – 100% Algodão\nBeleza e conforto em cada ponto! Nosso top é confeccionado com a linha Amigurumi 100% algodão, garantindo um caimento perfeito, toque macio e alta durabilidade. A peça é feita à mão com acabamento impecável e aplicação de forro opcional e bojo, para maior segurança e versatilidade no uso.\nIdeal para quem busca estilo, autenticidade e um visual artesanal que nunca sai de moda.\nFeito sob medida, com amor e atenção aos detalhes.\nEscolha se deseja com ou sem forro/bojo e tenha um top exclusivo só seu!\nValor R$109,99" },
        { gallery: ["../../assets/images/produtos/bolsa16.jpeg", "../../assets/images/produtos/bolsa16a.jpeg"], desc: "Bolsa em crochê, feito na técnica square.\nMaterial utilizado: barbante colorido fio 4 e 6.\nMedida: 22 cm altura; 20 cm largura, 17 x 17cm fundo\nAlça: 70cm aproximadamente\nCores sortidas.\nA pronta entrega e sob encomenda.\nValor R$69,99" },
        { gallery: ["../../assets/images/produtos/bolsa17.jpeg", "../../assets/images/produtos/bolsa17a.jpeg","../../assets/images/produtos/bolsa17b.jpeg","../../assets/images/produtos/bolsa17c.jpeg"], desc: "Bolsa em crochê, feito na técnica square.\nMaterial utilizado: barbante colorido fio 4 e 6.\nMedida: 22 cm altura; 20 cm largura, 17 x 17cm fundo\nAlça: 70cm aproximadamente\nCores sortidas.\nA pronta entrega e sob encomenda.\nValor R$69,99"},
    ];

    // Função para abrir o modal com a galeria
    function openModal(index) {
        const product = produtos[index];

        // Exibe o modal
        modal.style.display = "flex";
        setTimeout(() => modal.classList.add("show"), 10);

        // Define a imagem principal como a primeira da galeria
        modalImg.src = product.gallery[0];
        modalText.innerHTML = product.desc.replace(/\n/g, '<br>');
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