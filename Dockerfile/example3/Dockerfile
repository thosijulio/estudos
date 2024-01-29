# --- EXEMPLO 3 --- WORKDIR/RUN/ENTRYPOINT

# Criando a imagem usando:
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
RUN mv /site/public/* /usr/share/nginx/html

ENTRYPOINT ["nginx", "-g", "daemon off;"]