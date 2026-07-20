# Usar imagen oficial de Node.js
FROM node:18-alpine

# Crear directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias de producción
RUN npm install --only=production

# Copiar el resto del código
COPY . .

# Exponer el puerto de la app
EXPOSE 3000

# Comando para iniciar
CMD ["npm", "start"]