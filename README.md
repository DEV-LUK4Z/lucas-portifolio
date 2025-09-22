# Portfólio Pessoal

Um site portfólio moderno e responsivo construído seguindo os princípios do Clean Code, com animações 3D interativas usando Three.js.

## 🚀 Características

- **Arquitetura Modular**: Código organizado em módulos separados para fácil manutenção
- **Responsivo**: Design adaptável para todos os dispositivos
- **Acessível**: Implementação seguindo diretrizes WCAG
- **Performance**: Otimizado para carregamento rápido
- **Animações 3D**: Background interativo com Three.js
- **Clean Code**: Código limpo, legível e bem documentado

## 📁 Estrutura do Projeto

```
meu-site/
├── css/
│   └── styles.css          # Estilos principais organizados
├── js/
│   ├── navigation.js       # Gerenciamento de navegação
│   ├── three-scene.js      # Cena 3D com Three.js
│   └── animations.js       # Sistema de animações
├── index.html              # Página principal
├── foto-perfil.jpeg        # Imagem de perfil
└── README.md              # Documentação
```

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos modernos com variáveis CSS e Grid/Flexbox
- **JavaScript ES6+**: Programação orientada a objetos
- **Three.js**: Gráficos 3D interativos
- **Web APIs**: Intersection Observer, ResizeObserver

## 📱 Responsividade

O site é totalmente responsivo com breakpoints para:
- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Mobile pequeno**: < 480px

## ♿ Acessibilidade

- Navegação por teclado
- Leitores de tela compatíveis
- Alto contraste
- Redução de movimento
- Semântica HTML adequada
- ARIA labels e roles

## 🎨 Personalização

### Cores
As cores podem ser facilmente alteradas no arquivo `css/styles.css` através das variáveis CSS:

```css
:root {
    --primary-color: #22d3ee;
    --primary-hover: #0891b2;
    --bg-primary: #111827;
    /* ... outras variáveis */
}
```

### Conteúdo
1. Substitua `[Seu Nome]` pelo seu nome real
2. Atualize o email em `seuemail@exemplo.com`
3. Adicione seus links de redes sociais
4. Personalize os projetos na seção correspondente

## 🚀 Como Usar

1. Clone ou baixe os arquivos
2. Personalize o conteúdo conforme necessário
3. Abra `index.html` em um navegador
4. Para desenvolvimento local, use um servidor HTTP simples

### Servidor Local (opcional)
```bash
# Python 3
python -m http.server 8000

# Node.js (com live-server)
npx live-server
```

## 📊 Performance

- **Lazy Loading**: Animações carregadas sob demanda
- **Otimização de imagens**: Formatos modernos recomendados
- **Minificação**: CSS e JS podem ser minificados para produção
- **CDN**: Three.js carregado via CDN para cache otimizado

## 🔧 Manutenção

### Adicionando Novos Projetos
1. Abra `index.html`
2. Localize a seção `projects-grid`
3. Adicione um novo `article` com a classe `project-card`

### Modificando Animações
- **Navegação**: Edite `js/navigation.js`
- **3D Scene**: Modifique `js/three-scene.js`
- **Scroll/Loading**: Ajuste `js/animations.js`

## 🌐 Compatibilidade

- **Navegadores Modernos**: Chrome, Firefox, Safari, Edge
- **Mobile**: iOS Safari, Chrome Mobile
- **Fallbacks**: Graceful degradation para navegadores antigos

## 📝 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar e modificar.

## 🤝 Contribuições

Sugestões e melhorias são bem-vindas! Abra uma issue ou envie um pull request.

---

**Desenvolvido com ❤️ seguindo os princípios do Clean Code**