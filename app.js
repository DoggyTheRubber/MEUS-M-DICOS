// Definição dos itens da Homebar em um array JSON/objeto estruturado
const HOMEBAR_ITEMS = [
    { name: "Início", icon: "fa-solid fa-house", path: "index.html", short: "Início" },
    { name: "Lista", icon: "fa-solid fa-address-book", path: "list.html", short: "Lista" },
    { name: "Clínicas", icon: "fa-solid fa-hospital", path: "clinics.html", short: "Clínicas" },
    { name: "Novo", icon: "fa-solid fa-user-plus", path: "add.html", short: "Novo" },
    { name: "Planejamento", icon: "fa-solid fa-calendar-days", path: "planning.html", short: "Plan." },
    { name: "Relatórios", icon: "fa-solid fa-file-lines", path: "reports.html", short: "Relat." },
    { name: "Aniversários", icon: "fa-solid fa-cake-candles", path: "birthday.html", short: "Aniver." }
];

function renderGlobalHomebar() {
    // Descobre qual é a página atual para destacar o ícone correto
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    
    let navContainer = document.getElementById('global-homebar');
    
    // Se não existir a tag nav com esse ID na página, cria ela dinamicamente antes do fim do body
    if (!navContainer) {
        navContainer = document.createElement('nav');
        navContainer.id = 'global-homebar';
        // CORRIGIDO: Usa app-card para acompanhar dinamicamente o tema claro/escuro
        navContainer.className = "app-card border-t fixed bottom-0 left-0 right-0 z-30 shadow-lg transition-colors duration-200";
        document.body.appendChild(navContainer);
    }

    let linksHtml = '';
    HOMEBAR_ITEMS.forEach(item => {
        const isActive = currentPath === item.path;
        // Se for a página atual, pinta de âmbar, senão fica cinza padrão
        const textColor = isActive ? "text-amber-600 dark:text-amber-400 font-semibold" : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 font-medium";
        
        linksHtml += `
            <a href="${item.path}" class="flex flex-col items-center justify-center flex-1 py-1.5 ${textColor} transition">
                <i class="${item.icon} text-lg mb-0.5"></i>
                <span class="text-[9px]">${item.short}</span>
            </a>
        `;
    });

    navContainer.innerHTML = `
        <div class="max-w-md mx-auto flex justify-around py-1 px-0.5">
            ${linksHtml}
        </div>
    `;
}

// Executa a renderização assim que o DOM estiver carregado
document.addEventListener("DOMContentLoaded", () => {
    renderGlobalHomebar();
});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
    .then(() => console.log('Service Worker registrado!'));
}