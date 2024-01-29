# --- EXEMPLO 5 --- RUN vs CMD vs ENTRYPOINT
# RUN: DEVE executar apenas durante a construção da imagem.
# ENTRYPOINT: DEVE ser executado ao iniciar imagem criada com o Dockerfile como um container.
# CMD: PODE ser executado ao iniciar imagem criada com o Dockerfile como um container.
# Neste exemplo, é possível verificar no terminal que:
# 1: O RUN só foi executado ao criar a imagem
# 2: O conteúdo do ENTRYPOINT sempre é executado ao iniciar a imagem como container
# 3: O conteúdo do CMD é executado quando inicia a imagem como container, mas pode ser substituido ao executar (docker run image <comando> <args>)

FROM alpine:3.14

RUN echo "Execucao do RUN"

ENTRYPOINT ["echo", "Execução do ENTRYPOINT"]

CMD ["execução do CMD"]