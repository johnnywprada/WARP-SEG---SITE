# D'GA DW - Plataforma Web Corporativa

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/johnnywprada-6045s-projects/v0-D'GA DW-security-website)
[![Next.js](https://img.shields.io/badge/Next.js-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

Repositório oficial da plataforma web corporativa da **D'GA DW - Multiserviços em Eletrônica e Inteligência Artificial**. 

Este projeto foi arquitetado para posicionar a empresa no mercado de alta tecnologia, com foco em conversão de leads para serviços de **Portaria Virtual**, **Controle de Acesso Avançado** e **Monitoramento 24 horas** para condomínios e empresas.

---

## 🚀 Arquitetura e Desenvolvimento (White Label)

Este projeto utiliza uma base estrutural **White Label** escalável, projetada e desenvolvida inteiramente pela **WARP Sistemas Inteligentes**. 

A arquitetura foi pensada para entregar máxima performance (SEO e Core Web Vitals), componentização reutilizável e um design system rigoroso, permitindo rápida adaptação visual e funcional de acordo com o manual de identidade de diferentes marcas — neste caso, aplicado com excelência para a D'GA DW.

**Agência Desenvolvedora:** [WARP Sistemas Inteligentes]

---

## 🛠️ Stack Tecnológica

O projeto foi construído utilizando as melhores práticas do ecossistema moderno de desenvolvimento front-end:

*   **Framework:** [Next.js](https://nextjs.org/) (App Router)
*   **Linguagem:** TypeScript
*   **Estilização:** [Tailwind CSS](https://tailwindcss.com/) (com configuração de temas dinâmicos)
*   **Componentes de UI:** Radix UI / shadcn/ui (customizados)
*   **Ícones:** Lucide React
*   **Hospedagem & CI/CD:** Vercel

---

## ⚡ Funcionalidades Principais

*   **Identidade Visual Fiel:** Mapeamento preciso do *Design System* da marca (Laranja D'GA, Laranja Intenso, Preto Principal) utilizando variáveis CSS complexas e Tailwind.
*   **Componentes Interativos:** Cards com efeitos de elevação (*hover:scale*), animações em CSS puro (*pulse-orange*, luzes de rede) e tipografia responsiva.
*   **Otimização de Assets:** Gestão nativa de imagens do Next.js e ícones de alta resolução (PNGs transparentes) para favicons e manifestos web.
*   **Foco em Conversão:** Estruturação de seções desenhadas para atacar as dores de síndicos e gestores, atreladas a pontos de conversão rápidos (Botão flutuante do WhatsApp e CTAs ancorados).

---

## 💻 Como rodar o projeto localmente

Siga as instruções abaixo para configurar o ambiente de desenvolvimento em sua máquina.

### 1. Clone o repositório
```bash
git clone https://github.com/johnnywprada/WARP-SEG---SITE.git
cd WARP-SEG---SITE
```

### 2. Instale as dependências
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

### 3. Inicie o servidor de desenvolvimento
```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado. As páginas são atualizadas automaticamente conforme você edita os arquivos.

---

## 🧹 Comandos Úteis

Caso encontre problemas de cache durante o desenvolvimento de assets (como favicons ou novas imagens), limpe o build do Next.js:

**Windows (PowerShell):**
```powershell
Remove-Item -Recurse -Force .next
npm run dev
```

**Linux/Mac/WSL:**
```bash
rm -rf .next
npm run dev
```

---

<div align="center">
  <sub>Desenvolvido por <b>WARP Sistemas Inteligentes</b></sub>
</div>