# --- EXEMPLO 2 --- COPY/EXPOSE/CMD

# Criação de uma imagem:
# 1: Base na httpd:2.4.54 (FROM)
# 2: Copia o arquivo index.html da máquina do usuário e envia para a imagem, no caminho especificado
# 3: Expõe a porta 80 da imagem (o container que executar essa imagem pode receber conexões nessa porta)
# 4: Quando iniciar a imagem como um container, o programa httpd-foreground será executado

FROM httpd:2.4.54
COPY index.html /usr/local/apache2/htdocs/
EXPOSE 80
CMD ["httpd-foreground"]