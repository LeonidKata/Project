module.exports = {
  syntax: 'postcss-scss', // Поддержка SCSS
  plugins: {
    'postcss-import': {}, // Для импорта файлов
    'tailwindcss/nesting': 'postcss-nested', // Вложенные правила
    // 'tailwindcss': {}, // Tailwind
    'autoprefixer': {}, // Автопрефиксы
  }
}