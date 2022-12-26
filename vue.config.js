const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false
});

// "lintOnSave: false" foi adicionado, após pesquisas no Google, para que sejam permitidos
// nomes de componentes com somente uma palavra
