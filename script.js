document.addEventListener("DOMContentLoaded", function () {
    // Função de Paginação para a galeria
    function paginateGallery(galleryId, paginationId, itemsPerPage = 12) {
        const gallery = document.getElementById(galleryId);
        const pagination = document.getElementById(paginationId);
        const items = Array.from(gallery.getElementsByClassName("gallery-item"));
        
        // Verificação para garantir que a galeria e itens existam
        if (!gallery || !pagination || items.length === 0) {
            console.log("Galeria ou itens não encontrados.");
            return;
        }

        // Variáveis de Controle
        const totalItems = items.length;
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        let currentPage = 1;

        // Função para exibir uma página específica
        function showPage(page) {
            items.forEach(item => item.style.display = "none"); // Esconde todos os itens

            // Calcula o índice de início e fim para a página atual
            const start = (page - 1) * itemsPerPage;
            const end = start + itemsPerPage;

            // Exibe apenas os itens da página atual
            items.slice(start, end).forEach(item => item.style.display = "block");

            // Atualiza o estado do botão de paginação
            updatePagination(page);
        }

        // Função para criar os botões de paginação
        function createPaginationButtons() {
            pagination.innerHTML = ""; // Limpa qualquer conteúdo existente
            for (let i = 1; i <= totalPages; i++) {
                const button = document.createElement("button");
                button.textContent = i;
                button.addEventListener("click", function () {
                    currentPage = i;
                    showPage(currentPage);
                });
                pagination.appendChild(button);
            }
        }

        // Função para atualizar o estado dos botões de paginação
        function updatePagination(page) {
            const buttons = pagination.getElementsByTagName("button");
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].classList.remove("active");
            }
            if (buttons[page - 1]) {
                buttons[page - 1].classList.add("active");
            }
        }

        // Inicializa a galeria na primeira página e cria os botões
        showPage(currentPage);
        createPaginationButtons();
    }

    // Inicializa a paginação para a galeria "Logos Gamer"
    paginateGallery("gallery-gamer", "pagination-gamer", 12);
});
