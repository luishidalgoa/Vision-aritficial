# Usa una imagen base ligera de Debian
FROM debian:12-slim

# Establece el directorio de trabajo
WORKDIR /workspace

# Instala dependencias necesarias
RUN apt-get update && apt-get install -y curl gnupg git openssh-server

# Añade el repositorio oficial de NodeSource para Node.js 20
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash -

# Instala Node.js 20 y npm
RUN apt-get install -y nodejs

# Clona tu repositorio
RUN git clone https://github.com/luishidalgoa/Vision-aritficial.git

# Instala dependencias del proyecto
WORKDIR /workspace/Vision-aritficial
RUN npm install @tensorflow/tfjs-node @tensorflow-models/mobilenet

# Configuración de SSH
RUN mkdir /var/run/sshd && \
    echo 'root:1234' | chpasswd && \
    sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config

# Expone el puerto de SSH
EXPOSE 22

# Comando por defecto
CMD ["sh", "-c", "service ssh start && tail -f /dev/null"]


