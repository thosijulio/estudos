# --- EXEMPLO 4 --- CONSTRUÇÃO EM MÚLTIPLOS ESTÁGIOS

# PRIMEIRO ESTÁGIO
# 1: nginx:1.21.3-alpine de base (FROM)
# 2: indicando o caminho que será utilizado por padrão na imagem (WORKDIR)
# 3: Copiando arquivos da maquina local p/ a imagem (COPY)
# 4: RUN: roda comando durante o processo de build, na order em que foram escritos no Dockerfile
# 5: Comando utilizado na criação do container (ENTRYPOINT)

FROM nginx:1.21.3-alpine AS primeiro-estagio

WORKDIR /site

COPY config.toml config.toml
COPY index.html /site/layouts/index.html
COPY _index.md /site/content/_index.md

RUN apk add hugo
RUN hugo --minify --gc

# SEGUNDO ESTÁGIO (cada FROM representa um estágio. A imagem será construida com base no último FROM, os outros serão descartados)
# 1: utilizando uma imagem do nginx como base (limpa, dessa forma a imagem não tera o conteudo do hugo instalado sem necessidade)
# 2: copiando do primeiro estágio (--from p/ definir qual estágio será copiado [pode ter mais de um]) os arquivos criados pelo hugo
# 3: adicionando um comando para rodar quando o container for iniciado

FROM nginx:1.21.3-alpine AS segundo-estagio

COPY --from=primeiro-estagio /site/public /usr/share/nginx/html

ENTRYPOINT ["nginx", "-g", "daemon off;"]