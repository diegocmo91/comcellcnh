# Comcell CNH — Site novo

Site institucional reestruturado com a nova copy, seguindo a identidade visual da marca (azul-marinho `#0D0D34`, vermelho `#F5301F`).

## Estrutura
- `index.html` — página única com todas as seções
- `css/styles.css` — estilos (tokens de cor/tipografia no topo do arquivo)
- `js/main.js` — accordion do FAQ e menu mobile

## Imagens pendentes
Esta versão usa placeholders (`📷 ...`) nos locais onde entram fotos reais do site atual:
- Hero: foto do Marcelo Siqueira
- Seção "Quem somos": foto da equipe analisando documentos

Para trocar: adicione os arquivos em uma pasta `images/` e substitua o bloco `.hero-visual` / `.about-visual` em `index.html` por uma tag `<img>`.

## Como visualizar
Abra `index.html` direto no navegador, ou rode um servidor local:
```
python3 -m http.server 8080
```
